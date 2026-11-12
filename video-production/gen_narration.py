#!/usr/bin/env python3
"""
Generate narration audio with deliberate pauses between sections
for the LACUNA cinematic demo.
"""

import subprocess
import os
import numpy as np
import wave

SAMPLE_RATE = 44100
OUTPUT_DIR = "/Users/ikhaisoshuare/Downloads/ZOUD GAMEPLAY/video-production"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Narration sections with pauses between them (pause in seconds)
sections = [
    ("Every city has a history. But what happens when its people can no longer remember it?", 3.0),
    ("Here, even the past has a price.", 3.0),
    ("Somewhere in this city, someone is borrowing against its future. And the truth is buried in the memories people have already surrendered.", 4.0),
    ("Your memories can buy you time. But the lender only sees what they can be sold for.", 4.0),
    ("But a memory is more than collateral. Your mother's voice can reveal a hidden truth. Your childhood home can uncover something the city has buried. The face you remember can open doors that money alone cannot.", 5.0),
    ("Some things are worth more while you still have them.", 5.0),
    ("And time is not on your side. Every cycle adds to what you owe.", 4.0),
    ("Still, the city has not forgotten everything. Every clue brings you closer to the truth. Every memory you keep may reveal something the others cannot.", 4.0),
    ("You can settle the debt. You can reclaim what you pledged. But the choices you made have already shaped the journey.", 4.0),
    ("Because the question was never just what your memories were worth.", 3.0),
    ("It was what you were willing to lose to discover the truth.", 4.0),
    ("LACUNA. The price of remembering.", 3.0),
]

print(f"Generating {len(sections)} narration sections...")

audio_segments = []

for i, (text, pause_after) in enumerate(sections):
    text_file = f"/tmp/narration_section_{i}.txt"
    with open(text_file, "w") as f:
        f.write(text)
    
    aiff_file = f"/tmp/narration_section_{i}.aiff"
    
    # Use Daniel voice (mature British narrator)
    result = subprocess.run(
        ["say", "-v", "Daniel", "-f", text_file, "-o", aiff_file],
        capture_output=True, text=True
    )
    
    if result.returncode != 0:
        print(f"  ERROR generating section {i}: {result.stderr}")
        continue
    
    # Convert to wav
    wav_file = f"/tmp/narration_section_{i}.wav"
    subprocess.run(
        ["ffmpeg", "-y", "-i", aiff_file, "-acodec", "pcm_s16le", "-ar", str(SAMPLE_RATE), "-ac", "1", wav_file],
        capture_output=True
    )
    
    # Read the wav
    with wave.open(wav_file, "rb") as wf:
        n_frames = wf.getnframes()
        audio = np.frombuffer(wf.readframes(n_frames), dtype=np.int16).astype(np.float32) / 32768.0
    
    audio_segments.append(audio)
    
    # Add silence after each section
    silence_samples = int(pause_after * SAMPLE_RATE)
    silence = np.zeros(silence_samples)
    audio_segments.append(silence)
    
    duration = len(audio) / SAMPLE_RATE
    print(f"  Section {i}: {duration:.1f}s + {pause_after:.1f}s pause")

# Combine all segments
final_audio = np.concatenate(audio_segments)

# Normalize
max_val = np.max(np.abs(final_audio))
if max_val > 0:
    final_audio = final_audio / max_val * 0.8

# Save
output_wav = os.path.join(OUTPUT_DIR, "narration.wav")
with wave.open(output_wav, "wb") as wf:
    wf.setnchannels(1)
    wf.setsampwidth(2)
    wf.setframerate(SAMPLE_RATE)
    wf.writeframes((final_audio * 32767).astype(np.int16).tobytes())

total_duration = len(final_audio) / SAMPLE_RATE
print(f"\nTotal narration duration: {total_duration:.1f}s")
print(f"Saved to: {output_wav}")

# Also convert to MP4-compatible AAC
output_aac = os.path.join(OUTPUT_DIR, "narration.m4a")
subprocess.run(
    ["ffmpeg", "-y", "-i", output_wav, "-c:a", "aac", "-b:a", "128k", output_aac],
    capture_output=True
)
print(f"Saved AAC version: {output_aac}")