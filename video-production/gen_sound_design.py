#!/usr/bin/env python3
"""
Generate ambient music and sound design for LACUNA cinematic demo.
All procedural - no copyrighted material.
"""

import numpy as np
import wave
import os
import subprocess

SAMPLE_RATE = 44100
OUTPUT_DIR = "/Users/ikhaisoshuare/Downloads/ZOUD GAMEPLAY/video-production"
os.makedirs(OUTPUT_DIR, exist_ok=True)

TOTAL_DURATION = 114  # seconds

def save_wav(filename, samples, sample_rate=SAMPLE_RATE):
    samples = np.clip(samples, -1.0, 1.0)
    samples_int = (samples * 32767).astype(np.int16)
    with wave.open(filename, "wb") as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(sample_rate)
        wf.writeframes(samples_int.tobytes())
    print(f"Created: {filename} ({len(samples)/sample_rate:.1f}s)")

def drone(freq, duration, volume=0.1):
    """Low ambient drone."""
    t = np.arange(int(duration * SAMPLE_RATE)) / SAMPLE_RATE
    mod1 = np.sin(2 * np.pi * 0.15 * t) * 0.1
    mod2 = np.sin(2 * np.pi * 0.08 * t) * 0.05
    carrier = np.sin(2 * np.pi * freq * t + mod1 + mod2)
    attack = int(0.5 * SAMPLE_RATE)
    release = int(0.5 * SAMPLE_RATE)
    env = np.ones_like(t)
    env[:attack] = np.linspace(0, 1, attack)
    env[-release:] = np.linspace(1, 0, release)
    return volume * carrier * env

def pad(freq, duration, volume=0.12):
    """Soft pad tone."""
    t = np.arange(int(duration * SAMPLE_RATE)) / SAMPLE_RATE
    s = (np.sin(2 * np.pi * freq * t) +
         0.3 * np.sin(2 * np.pi * freq * 1.5 * t) +
         0.2 * np.sin(2 * np.pi * freq * 2.0 * t) +
         0.1 * np.sin(2 * np.pi * freq * 2.5 * t))
    attack = int(2 * SAMPLE_RATE)
    sustain = max(0, int((duration - 4) * SAMPLE_RATE))
    release = int(2 * SAMPLE_RATE)
    env = np.concatenate([np.linspace(0, 1, attack), np.ones(sustain), np.linspace(1, 0, release)])
    return volume * s * env

def bell_tone(freq, duration, volume=0.35):
    """Bell-like resonance."""
    t = np.arange(int(duration * SAMPLE_RATE)) / SAMPLE_RATE
    s = (np.sin(2 * np.pi * freq * t) +
         0.7 * np.sin(2 * np.pi * freq * 2.0 * t) +
         0.5 * np.sin(2 * np.pi * freq * 3.0 * t) +
         0.35 * np.sin(2 * np.pi * freq * 4.0 * t) +
         0.25 * np.sin(2 * np.pi * freq * 5.0 * t))
    env = np.exp(-3 * t)
    return volume * s * env

def memory_resonance(freq, duration, volume=0.2):
    """Shimmering memory resonance."""
    t = np.arange(int(duration * SAMPLE_RATE)) / SAMPLE_RATE
    s = np.sin(2 * np.pi * freq * t)
    am = np.sin(2 * np.pi * 3 * t) * 0.5 + 0.5
    noise = np.random.RandomState(42 + int(freq)).randn(len(t)) * 0.03
    return volume * s * am + noise

def tension_pulse(duration, volume=0.1):
    """Low-frequency tension pulse."""
    t = np.arange(int(duration * SAMPLE_RATE)) / SAMPLE_RATE
    mod = 0.5 + 0.5 * np.sin(2 * np.pi * 0.2 * t)
    carrier = np.sin(2 * np.pi * 40 * t)
    return volume * mod * carrier * 0.5

def pink_noise(duration, volume=0.05):
    """Pink noise for ambience."""
    t = np.arange(int(duration * SAMPLE_RATE)) / SAMPLE_RATE
    white = np.random.RandomState(42).randn(len(t))
    # Simple pink noise approximation via filtering
    pink = np.cumsum(white) / np.arange(1, len(t) + 1)
    pink = pink / np.max(np.abs(pink)) * volume
    return pink

# ============================================
# Build the full soundscape
# ============================================
print(f"Generating {TOTAL_DURATION}s soundscape...")

mix = np.zeros(int(TOTAL_DURATION * SAMPLE_RATE))

# 1. Base ambient drone (always present)
base_drone = drone(55.0, TOTAL_DURATION, volume=0.08)
base_drone += drone(110.0, TOTAL_DURATION, volume=0.04)
mix += base_drone

# 2. Pink noise for atmosphere
mix += pink_noise(TOTAL_DURATION, volume=0.03)

# 3. Scene-based pads
# Scene 01-02 (City reveal): warmer pad (0-27s)
city_pad = pad(65.4, 27, volume=0.14)
mix[:len(city_pad)] += city_pad

# Scene 03-04 (Contract/Value): tension pad (27-62s)
tension_pad = np.zeros(int(TOTAL_DURATION * SAMPLE_RATE))
for freq in [82.4, 110.0]:
    segment = pad(freq, 35, volume=0.10)
    start = int(27 * SAMPLE_RATE)
    end = start + len(segment)
    if end <= len(tension_pad):
        tension_pad[start:end] += segment
mix += tension_pad

# Scene 05-06 (Debt/Investigation): colder pad (62-95s)
archive_pad = pad(41.2, 33, volume=0.10)
start = int(62 * SAMPLE_RATE)
end = start + len(archive_pad)
if end <= len(mix):
    mix[start:end] += archive_pad

# Scene 07-08 (Repayment/Finale): resolving pad (95-114s)
resolve_pad = pad(69.3, 19, volume=0.12)
start = int(95 * SAMPLE_RATE)
end = start + len(resolve_pad)
if end <= len(mix):
    mix[start:end] += resolve_pad

# 4. Bell tones at key moments
bell_events = [
    (1.5, 2.0, 660, 0.35),    # Opening bell
    (27.0, 2.0, 659, 0.3),     # Contract
    (62.0, 2.5, 494, 0.3),     # Debt bell
    (95.0, 2.0, 523, 0.35),    # Repayment
]

for t, dur, freq, vol in bell_events:
    if t + dur <= TOTAL_DURATION:
        start_idx = int(t * SAMPLE_RATE)
        bell_samples = int(dur * SAMPLE_RATE)
        bell = bell_tone(freq, dur, vol)
        end_idx = min(start_idx + bell_samples, len(mix))
        if start_idx < len(mix):
            mix[start_idx:end_idx] += bell[:end_idx-start_idx]

# 5. Memory resonance events
mem_events = [
    (35.0, 1.0, 880, 0.2),     # Mother's Voice
    (39.0, 1.0, 659, 0.2),     # Childhood Home
    (43.0, 1.0, 587, 0.2),     # Face of Love
]

for t, dur, freq, vol in mem_events:
    if t + dur <= TOTAL_DURATION:
        start_idx = int(t * SAMPLE_RATE)
        mem_samples = int(dur * SAMPLE_RATE)
        mem = memory_resonance(freq, dur, vol)
        end_idx = min(start_idx + mem_samples, len(mix))
        if start_idx < len(mix):
            mix[start_idx:end_idx] += mem[:end_idx-start_idx]

# 6. Tension pulse during debt scene (62-76s)
tension = tension_pulse(14, volume=0.08)
start = int(62 * SAMPLE_RATE)
end = min(start + len(tension), len(mix))
mix[start:end] += tension[:end-start]

# 7. Memory return during repayment (95-105s)
memory_return = np.zeros(int(10 * SAMPLE_RATE))
mem_times = [0, 3, 6]  # seconds within the 10s window
for i, freq in enumerate([880, 659, 587]):
    start_offset = int(mem_times[i] * SAMPLE_RATE)
    bell_samples = int(1.5 * SAMPLE_RATE)
    bell = bell_tone(freq, 1.5, 0.25)
    end_offset = min(start_offset + bell_samples, len(memory_return))
    memory_return[start_offset:end_offset] += bell[:end_offset-start_offset]

start = int(95 * SAMPLE_RATE)
end = min(start + len(memory_return), len(mix))
mix[start:end] += memory_return[:end-start]

# Normalize
mix = np.clip(mix, -1.0, 1.0)
max_val = np.max(np.abs(mix))
if max_val > 0:
    mix = mix / max_val * 0.7

# Save music/soundtrack
save_wav(os.path.join(OUTPUT_DIR, "soundtrack.wav"), mix)

# Also save as AAC
subprocess_cmd = ["ffmpeg", "-y", "-i", os.path.join(OUTPUT_DIR, "soundtrack.wav"),
                  "-c:a", "aac", "-b:a", "128k", os.path.join(OUTPUT_DIR, "soundtrack.m4a")]
import subprocess
subprocess.run(subprocess_cmd, capture_output=True)

print(f"\nSoundscape complete: {TOTAL_DURATION}s")