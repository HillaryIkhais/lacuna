#!/usr/bin/env python3
"""
Generate atmospheric audio for LACUNA demo video.
Higher-quality procedural soundscape with ambient textures.
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
    print(f"Created: {filename}")

def drone(freq, duration, volume=0.1, sample_rate=SAMPLE_RATE):
    """Generate a low drone with subtle modulation."""
    t = np.arange(int(duration * sample_rate)) / sample_rate
    # Subtle vibrato and harmonics
    mod1 = np.sin(2 * np.pi * 0.15 * t) * 0.1
    mod2 = np.sin(2 * np.pi * 0.08 * t) * 0.05
    carrier = np.sin(2 * np.pi * freq * t + mod1 + mod2)
    # Soft attack/release
    attack = int(0.5 * sample_rate)
    release = int(0.5 * sample_rate)
    env = np.ones_like(t)
    env[:attack] = np.linspace(0, 1, attack)
    env[-release:] = np.linspace(1, 0, release)
    return volume * carrier * env

def pad_tone(freq, duration, volume=0.15, sample_rate=SAMPLE_RATE):
    """Generate a soft pad-like tone with harmonics."""
    t = np.arange(int(duration * sample_rate)) / sample_rate
    # Multiple harmonics for richness
    s = (np.sin(2 * np.pi * freq * t) +
         0.3 * np.sin(2 * np.pi * freq * 1.5 * t) +
         0.2 * np.sin(2 * np.pi * freq * 2.0 * t) +
         0.1 * np.sin(2 * np.pi * freq * 2.5 * t))
    # Slow envelope
    attack = int(2 * sample_rate)
    sustain = int((duration - 4) * sample_rate)
    release = int(2 * sample_rate)
    env = np.concatenate([
        np.linspace(0, 1, attack),
        np.ones(sustain),
        np.linspace(1, 0, release)
    ])
    return volume * s * env

def bell_tone(freq, duration, volume=0.35, sample_rate=SAMPLE_RATE):
    """Generate a bell-like tone with multiple harmonics."""
    t = np.arange(int(duration * sample_rate)) / sample_rate
    # Bell-like harmonics
    s = (np.sin(2 * np.pi * freq * t) +
         0.7 * np.sin(2 * np.pi * freq * 2.0 * t) +
         0.5 * np.sin(2 * np.pi * freq * 3.0 * t) +
         0.35 * np.sin(2 * np.pi * freq * 4.0 * t) +
         0.25 * np.sin(2 * np.pi * freq * 5.0 * t))
    # Exponential decay for bell
    env = np.exp(-3 * t)
    return volume * s * env

def memory_resonance(freq, duration, volume=0.2, sample_rate=SAMPLE_RATE):
    """Generate a shimmering resonance for memory events."""
    t = np.arange(int(duration * sample_rate)) / sample_rate
    # Carrier with AM
    s = np.sin(2 * np.pi * freq * t)
    am = np.sin(2 * np.pi * 3 * t) * 0.5 + 0.5
    # Add noise for texture
    noise = np.random.RandomState(42 + int(freq)).randn(len(t)) * 0.05
    return volume * s * am + noise

def low_tension_pulse(duration, volume=0.12, sample_rate=SAMPLE_RATE):
    """Generate a subtle low-frequency pulse for tension."""
    t = np.arange(int(duration * sample_rate)) / sample_rate
    # Very slow modulation
    mod = 0.5 + 0.5 * np.sin(2 * np.pi * 0.2 * t)
    carrier = np.sin(2 * np.pi * 40 * t)
    return volume * mod * carrier * 0.5

# Total video duration
TOTAL_DURATION = 118

print(f"Generating {TOTAL_DURATION}s of audio for LACUNA demo...")

# 1. Deep ambient drone - foundation
ambient = np.zeros(int(TOTAL_DURATION * SAMPLE_RATE))
for t in [55.0, 110.0]:  # Two octaves for richness
    ambient += drone(t, TOTAL_DURATION, volume=0.1)
    if t == 55.0:
        ambient += drone(t * 2, TOTAL_DURATION, volume=0.05)  # Sub-octave

# 2. Pad for different scenes
# Scene 2 (City): warmer pad
city_pad = pad_tone(65.4, 14, volume=0.15)  # 112.5 Hz (C3)
# Scene 4 (Value): tension pad
value_pad = np.zeros(int(TOTAL_DURATION * SAMPLE_RATE))
for i, freq in enumerate([82.4, 110.0, 146.8]):  # E2, A2, D3
    segment = pad_tone(freq, TOTAL_DURATION, volume=0.12)
    value_pad += segment
# Scene 7 (Archive): cold pad
archive_pad = pad_tone(41.2, 20, volume=0.12)  # E2

# 3. Bell tones for key moments
# Memory choice (t=3)
bell1 = bell_tone(659.25, 1.8, volume=0.35)  # E5
# Pledge consequence (t=42)
bell2 = bell_tone(493.88, 1.8, volume=0.3)   # B4
# Repayment (t=100)
bell3 = bell_tone(523.25, 2.0, volume=0.35)  # C5 (solfege: do)
# Archive discovery (t=85)
bell4 = bell_tone(783.99, 1.5, volume=0.25)  # G5

# 4. Memory resonance when orbs appear
memory_voice = memory_resonance(880, 0.8, volume=0.2)  # A5
memory_home = memory_resonance(659, 0.8, volume=0.2)    # E5
memory_love = memory_resonance(587, 0.8, volume=0.2)    # D#5/Eb5

# 5. Tension pulse for debt scene
tension_pulse = low_tension_pulse(14, volume=0.08)

# 6. Voice whisper texture (subtle filtered noise for "voice" memory)
np.random.seed(42)
voice_texture = np.random.randn(int(TOTAL_DURATION * SAMPLE_RATE)) * 0.02
# Low-pass filter effect (simple moving average)
for i in range(1, 100):
    voice_texture[i:] += voice_texture[:-i] * 0.01

# Mix everything together
mix = np.zeros(int(TOTAL_DURATION * SAMPLE_RATE))

# Always-on ambient
mix += ambient

# Scene pads
for i, (start, end, pad) in enumerate([
    (10, 24, city_pad),
    (42, 62, value_pad),
]):
    start_idx = int(start * SAMPLE_RATE)
    end_idx = int(end * SAMPLE_RATE)
    if start_idx < len(mix) and end_idx <= len(mix):
        mix[start_idx:end_idx] += pad[:end_idx-start_idx]

# Bell tones with positioning
bell_events = [
    (3.0, bell1),
    (42.0, bell2),
    (85.0, bell4),
    (100.0, bell3),
]

for t, bell in bell_events:
    start_idx = int(t * SAMPLE_RATE)
    bell_len = len(bell)
    end_idx = min(start_idx + bell_len, len(mix))
    mix[start_idx:end_idx] += bell[:end_idx-start_idx]

# Memory resonance
mem_events = [
    (11, memory_voice),   # Voice memory appears
    (20, memory_home),    # Home memory appears  
    (26, memory_love),    # Love memory appears
]

for t, mem in mem_events:
    start_idx = int(t * SAMPLE_RATE)
    mem_len = len(mem)
    end_idx = min(start_idx + mem_len, len(mix))
    if start_idx < len(mix):
        mix[start_idx:end_idx] += mem[:end_idx-start_idx]

# Tension pulse
start_idx = int(62 * SAMPLE_RATE)
end_idx = min(start_idx + len(tension_pulse), len(mix))
mix[start_idx:end_idx] += tension_pulse[:end_idx-start_idx]

# Add voice texture for memory atmosphere
mix += voice_texture * 0.3

# Final clip and normalize
mix = np.clip(mix, -1.0, 1.0)
max_val = np.max(np.abs(mix))
if max_val > 0:
    mix = mix / max_val * 0.8

save_wav(os.path.join(OUTPUT_DIR, "LACUNA_DEMO_audio.wav"), mix)
print(f"\nAudio generation complete. Duration: {TOTAL_DURATION}s")
print(f"Sample rate: {SAMPLE_RATE} Hz")