#!/usr/bin/env python3
"""
Build ffmpeg overlay filter chain for LACUNA demo video typography.
"""

BASE_VIDEO = "/Users/ikhaisoshuare/Downloads/ZOUD GAMEPLAY/video-production/captures/letterboxed.mp4"
OVERLAY_DIR = "/Users/ikhaisoshuare/Downloads/ZOUD GAMEPLAY/video-production/captures/overlays"
OUTPUT = "/Users/ikhaisoshuare/Downloads/ZOUD GAMEPLAY/video-production/captures/LACUNA_DEMO.mp4"

# Each overlay: (overlay_file, start_time, end_time)
overlays = [
    ("s1_line1.png", 0.5, 2.5),      # "A lender will give you €400."
    ("s1_line2.png", 3.0, 6.0),      # "It wants one of your memories."
    ("s2_title.png", 7.0, 19.0),     # "LACUNA"
    ("s2_sub.png", 7.0, 19.0),       # "The price of remembering."
    ("s2_line.png", 9.0, 11.5),      # "In this city, even your past has a price."
    ("s3_line1.png", 20.5, 23.5),    # "The lender sees three assets."
    ("s3_line2.png", 24.5, 27.5),    # "The player sees three ways to survive."
    ("s4_line1.png", 38.0, 41.0),    # "Pledge the wrong memory,"
    ("s4_line2.png", 42.0, 47.0),    # "and you lose an opportunity that could have paid you."
    ("s5_line1.png", 59.0, 62.0),    # "10% interest per cycle."
    ("s5_line2.png", 63.0, 66.0),    # "Four cycles to settle."
    ("s6_line1.png", 74.0, 77.0),    # "Borrowing gets you through the door."
    ("s6_line2.png", 78.0, 83.0),    # "What you sacrifice determines what happens after."
    ("s7_title.png", 97.0, 113.0),   # "LACUNA"
    ("s7_sub.png", 97.0, 113.0),     # "The price of remembering."
    ("s7_line.png", 101.0, 107.0),   # "What would you sell to afford your future?"
]

# Build ffmpeg command
inputs = [f"-i {BASE_VIDEO}"]
for ov, _, _ in overlays:
    inputs.append(f"-i {OVERLAY_DIR}/{ov}")

# Build filter_complex
# Chain: [0:v][1:v]overlay[ v1]; [v1][2:v]overlay[v2]; ...
filter_parts = []
current = "[0:v]"
for i, (ov, start, end) in enumerate(overlays):
    next_label = f"[v{i}]" if i < len(overlays) - 1 else "[final_v]"
    enable = f"between(t,{start},{end})"
    filter_parts.append(f"{current}[{i+1}:v]overlay=0:0:enable='{enable}'{next_label}")
    current = next_label

filter_complex = "; ".join(filter_parts)

cmd = [
    "ffmpeg", "-y",
] + inputs + [
    "-filter_complex", filter_complex,
    "-map", "[final_v]",
    "-c:v", "libx264",
    "-crf", "18",
    "-pix_fmt", "yuv420p",
    "-movflags", "+faststart",
    OUTPUT,
]

print("FFmpeg command:")
print(" ".join(cmd))
print()

# Write to a shell script for execution
script = "#!/bin/bash\n" + " ".join(cmd) + "\n"
script_path = "/Users/ikhaisoshuare/Downloads/ZOUD GAMEPLAY/video-production/render_final.sh"
with open(script_path, "w") as f:
    f.write(script)
os.chmod(script_path, 0o755)
print(f"Script written to: {script_path}")
