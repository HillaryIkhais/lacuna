"""Render LACUNA film: per-shot frame sequences -> ffmpeg concat -> mux audio."""
import os
import subprocess
import sys

sys.path.insert(0, os.path.dirname(__file__))

import numpy as np  # noqa: E402
from PIL import Image  # noqa: E402
from art import W, H, FPS  # noqa: E402
from shots1 import shot01, shot02, shot03, shot04  # noqa: E402
from shots2 import shot05, shot06, shot07, shot08  # noqa: E402

ROOT = "/Users/ikhaisoshuare/Downloads/ZOUD GAMEPLAY/video-production"
OUT = os.path.join(ROOT, "out")
FRAMES = os.path.join(ROOT, "film/frames")
AUDIO = os.path.join(ROOT, "final_audio.wav")

# Shot definitions: (render_func, duration_seconds)
SHOTS = [
    ("01", shot01, 13.3),
    ("02", shot02, 11.4),
    ("03", shot03, 15.9),
    ("04", shot04, 24.2),
    ("05", shot05, 13.0),
    ("06", shot06, 15.6),
    ("07", shot07, 12.0),
    ("08", shot08, 12.5),
]

# Narration-based cumulative boundaries (from gen_narration section starts):
# 0.0, 7.9, 13.3, 24.7, 33.6, 50.3, 57.8, 65.5, 78.3, 88.5, 94.9, 101.7
# Shot boundaries retimed to narration so VO lands on-sync:
# S01 0-13.3 | S02 13.3-24.7 | S03 24.7-33.6 | S04 33.6-57.8
# S05 57.8-65.5 | S06 65.5-78.3 | S07 78.3-88.5 | S08 88.5-114
NARR_BOUNDS = [0.0, 13.3, 24.7, 33.6, 57.8, 65.5, 78.3, 88.5, 114.0]


def render_shot(shot_id, render_fn, duration, frame_dir):
    """Render one shot's frames. Returns list of (frame_path, seconds)."""
    n_frames = int(round(duration * FPS))
    os.makedirs(frame_dir, exist_ok=True)
    print(f"\n== Shot {shot_id}: {duration}s ({n_frames} frames) ==")
    paths = []
    for fi in range(n_frames):
        t = fi / FPS
        img = render_fn(t)
        img = img.convert("RGB")
        path = os.path.join(frame_dir, f"{shot_id}_{fi:05d}.png")
        img.save(path)
        paths.append((path, t))
        if fi % 30 == 0:
            print(f"  {fi:5d}/{n_frames}  t={t:6.2f}s", end="\r")
    print(f"  {n_frames:5d}/{n_frames}  done")
    return paths


def shot_to_mp4(shot_id, frame_dir, duration):
    """Encode one shot's frames to an MP4 segment."""
    seg_path = os.path.join(frame_dir, f"{shot_id}.mp4")
    if os.path.exists(seg_path):
        os.remove(seg_path)
    # frames are named {shot_id}_{fi:05d}.png -> use image2 numbered pattern
    input_glob = os.path.join(frame_dir, f"{shot_id}_%05d.png")
    cmd = [
        "ffmpeg", "-y",
        "-framerate", str(FPS),
        "-start_number", "0",
        "-i", input_glob,
        "-c:v", "libx264", "-crf", "18", "-pix_fmt", "yuv420p",
        "-t", str(duration),
        seg_path,
    ]
    subprocess.run(cmd, check=True, capture_output=True, text=True)
    return seg_path


def main():
    os.makedirs(OUT, exist_ok=True)
    os.makedirs(FRAMES, exist_ok=True)

    # 1) Render all shot frames (skip shots already encoded)
    segs = []
    cum = 0.0
    for shot_id, render_fn, duration in SHOTS:
        seg_path = os.path.join(FRAMES, shot_id, f"{shot_id}.mp4")
        if os.path.exists(seg_path):
            print(f"\n== Shot {shot_id}: already encoded, skipping ==")
            # estimate duration from existing frames
            n_existing = len([f for f in os.listdir(os.path.join(FRAMES, shot_id)) if f.endswith('.png')])
            cum += n_existing / FPS
            segs.append(seg_path)
            continue
        render_shot(shot_id, render_fn, duration,
                    os.path.join(FRAMES, shot_id))
        segs.append(shot_to_mp4(shot_id, os.path.join(FRAMES, shot_id), duration))
        cum += duration

    print(f"\nTotal video duration: {cum:.2f}s")

    # 2) Concat segments
    list_path = os.path.join(FRAMES, "concat.txt")
    with open(list_path, "w") as f:
        for s in segs:
            f.write(f"file '{s}'\n")

    raw_vid = os.path.join(OUT, "lacuna_raw.mp4")
    subprocess.run(
        ["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", list_path,
         "-c", "copy", raw_vid],
        check=True, capture_output=True, text=True)

    # 3) Mux with final audio (shortest)
    final_vid = os.path.join(OUT, "lacuna-product-demo.mp4")
    subprocess.run(
        ["ffmpeg", "-y", "-i", raw_vid, "-i", AUDIO,
         "-c:v", "copy", "-c:a", "aac", "-b:a", "128k",
         "-shortest", final_vid],
        check=True, capture_output=True, text=True)

    print(f"\nFINAL: {final_vid}")

    # 4) Verify
    dur = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "csv=p=0", final_vid],
        capture_output=True, text=True).stdout.strip()
    print(f"Verified duration: {dur}s")
    print(f"Size: {os.path.getsize(final_vid) / 1e6:.1f} MB")


if __name__ == "__main__":
    main()
