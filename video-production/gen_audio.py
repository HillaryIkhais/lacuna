#!/usr/bin/env python3
"""
Generate atmospheric audio for LACUNA demo video.
Procedural soundscape - no copyrighted material.
"""

import numpy as np
import wave
import os

SAMPLE_RATE = 44100
OUTPUT_DIR = "/Users/ikhaisoshuare/Downloads/ZOUD GAMEPLAY/video-production/audio"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def save_wav(filename, samples, sample_rate=SAMPLE_RATE):
    """Save numpy array as WAV file."""
    samples = np.clip(samples, -1.0, 1.0)
    samples_int = (samples * 32767).astype(np.int16)
    with wave.open(filename, 'wb') as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(sample_rate)
        wf.writeframes(samples_int.tobytes())
    print(f"Created: {filename} ({len(samples)/sample_rate:.1f}s)")

def tone(freq, duration, volume=0.3, sample_rate=SAMPLE_RATE):
    """Generate a sine tone."""
    t = np.arange(int(duration * sample_rate)) / sample_rate
    return volume * np.sin(2 * np.pi * freq * t)

def drone(freq, duration, volume=0.15, sample_rate=SAMPLE_RATE):
    """Generate a low drone with subtle modulation."""
    t = np.arange(int(duration * sample_rate)) / sample_rate
    # Subtle vibrato
    mod = np.sin(2 * np.pi * 0.3 * t)
    carrier = np.sin(2 * np.pi * freq * t + 0.1 * mod)
    # Soft attack/release
    attack = int(0.5 * sample_rate)
    release = int(0.5 * sample_rate)
    env = np.ones_like(t)
    env[:attack] = np.linspace(0, 1, attack)
    env[-release:] = np.linspace(1, 0, release)
    return volume * carrier * env

def chime(freq, duration, volume=0.4, sample_rate=SAMPLE_RATE):
    """Generate a soft chime."""
    t = np.arange(int(duration * sample_rate)) / sample_rate
    # Multiple harmonics for bell-like sound
    s = (np.sin(2 * np.pi * freq * t) +
         0.5 * np.sin(2 * np.pi * freq * 1.5 * t) +
         0.25 * np.sin(2 * np.pi * freq * 2.0 * t))
    # Exponential decay
    env = np.exp(-3 * t)
    return volume * s * env

def pulse(duration, volume=0.1, sample_rate=SAMPLE_RATE):
    """Generate a subtle pulse for debt pressure."""
    t = np.arange(int(duration * sample_rate)) / sample_rate
    # Slow amplitude modulation
    mod = 0.5 + 0.5 * np.sin(2 * np.pi * 1.0 * t)
    noise = np.random.RandomState(42).randn(len(t)) * 0.05
    return volume * mod * (0.3 + noise)

# Total video duration: 113 seconds
TOTAL_DURATION = 113

# 1. Ambient drone - low mysterious tone throughout
ambient = drone(55.0, TOTAL_DURATION, volume=0.08)

# 2. Subtle pulse for debt pressure (louder in middle scenes)
pulse_track = np.zeros(int(TOTAL_DURATION * SAMPLE_RATE))
pulse_start = int(57 * SAMPLE_RATE)   # Scene 5 starts
pulse_end = int(72 * SAMPLE_RATE)     # Scene 5 ends
pulse_segment = pulse(15, volume=0.12)
pulse_track[pulse_start:pulse_end] += pulse_segment[:len(pulse_segment)]

# 3. Memory chimes at key moments
chime_track = np.zeros(int(TOTAL_DURATION * SAMPLE_RATE))
# Chime at t=3 (memory choice moment)
chime_pos = int(3.0 * SAMPLE_RATE)
chime_seg = chime(440.0, 2.0, volume=0.3)
chime_track[chime_pos:chime_pos+len(chime_seg)] += chime_seg
# Chime at t=38 (pledge consequence)
chime_pos = int(38.0 * SAMPLE_RATE)
chime_seg = chime(330.0, 2.0, volume=0.25)
chime_track[chime_pos:chime_pos+len(chime_seg)] += chime_seg
# Chime at t=74 (repayment)
chime_pos = int(74.0 * SAMPLE_RATE)
chime_seg = chime(523.25, 2.0, volume=0.35)
chime_track[chime_pos:chime_pos+len(chime_seg)] += chime_seg
# Chime at t=101 (final question)
chime_pos = int(101.0 * SAMPLE_RATE)
chime_seg = chime(392.0, 2.5, volume=0.3)
chime_track[chime_pos:chime_pos+len(chime_seg)] += chime_seg

# Mix all tracks
mix = ambient + pulse_track + chime_track
mix = np.clip(mix, -1.0, 1.0)

save_wav(os.path.join(OUTPUT_DIR, "LACUNA_DEMO_audio.wav"), mix)

# Also convert to AAC for the video
print("\nAudio generation complete.")
