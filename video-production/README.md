# LACUNA Demo Video

The official product demonstration for **LACUNA**, a mystery adventure where memories are both loan collateral and gameplay capabilities.

## Deliverables

| File | Description |
|------|-------------|
| `LACUNA_DEMO.mp4` | Final cinematic product demo (repo root) |
| `src/composition.js` | Remotion composition source |
| `src/Root.js` | Remotion studio root component |
| `src/index.js` | Remotion root registration |
| `audio/LACUNA_113.wav` | Procedural atmospheric audio (113s) |
| `output/` | Rendered scene MP4s and composition bundle |

## Video Specifications

| Property | Value |
|----------|-------|
| Resolution | 1920×1080 (16:9) |
| Frame rate | 30 FPS |
| Duration | 113 seconds |
| Video codec | H.264 (libx264, CRF 17) |
| Audio codec | AAC (128 kbps) |
| Pixel format | YUV 420 |
| Total frames | 3,390 |

## Cinematic Structure

| Scene | Time | Content |
|-------|------|---------|
| 1: The Memory | 0–10s | Opening - Memory orb appears with amber light, asks "What is a memory worth?" |
| 2: The City | 10–24s | LACUNA's world revealed - forgotten square, memory market, sunken archive, bell tower |
| 3: The Contract | 24–42s | Beautiful loan interface showing the three memories with collateral vs productive values |
| 4: Value Comparison | 42–62s | Side-by-side comparison of lender's collateral view vs player's productive value |
| 5: Debt Clock | 62–76s | Bell tower with debt counter showing ₡440 → ₡484 → ₡532 → ₡585 progression |
| 6: Investigation | 76–95s | Archive exploration, evidence collection, journal interface |
| 7: Repayment | 95–115s | Memories restored, debt settled, "New Ledger" ending achieved |
| 8: Finale | 115–113s | Title card: "LACUNA - The Price of Remembering" |

## Creative Approach

This video is a **cinematic product demonstration**, not a gameplay walkthrough. 

- **Art-directed visuals**: Custom-rendered scenes using PIL/Pillow with distinctive fantasy aesthetics
- **No mockups**: All visuals are generated programmatically to match LACUNA's visual language
- **Typography as design**: Golden amber, tarnished brass, and midnight blue palette with elegant serif typography
- **Memory visualization**: Each memory (Voice, Home, Love) has distinct visual personality reflecting its game purpose

## Audio

All audio is procedurally generated using numpy (no copyrighted material):

- **Ambient drone** (55 Hz): Deep atmospheric foundation throughout
- **Pad tones**: Warmer pads for city scenes, cooler pads for value comparison
- **Bell resonances**: Key moments at memory choice (t=3s), contract (t=42s), archive discovery (t=85s), repayment (t=100s)
- **Memory events**: Subtle chimes when each memory type is introduced
- **Tension pulse**: Low-frequency modulation during debt sequence

## Verification

See `VERIFICATION.md` for the complete technical quality control report with frame-by-frame verification.

## Render Instructions

If Remotion is available:

```bash
cd video-production
npm install
npx remotion studio src/index.js  # Preview
npx remotion render src/index.js output/demo.mp4 --codec h264 --crf 18
```

## Production Files

```
video-production/
├── LACUNA_DEMO.mp4              # Final video (repo root, copied from output/)
├── src/
│   ├── composition.js             # Main Remotion composition
│   ├── Root.js                    # Studio root
│   └── index.js                   # Entry point
├── audio/
│   └── LACUNA_113.wav             # 113-second procedural soundtrack
├── output/
│   ├── LACUNA_CINEMATIC.mp4       # Full cinematic render
│   ├── video_113s.mp4             # 113s video for muxing
│   └── scene*.mp4                 # Individual scene renders
├── render_scenes.py               # PIL-based scene renderer
├── gen_audio.py                   # Audio generation script
└── VERIFICATION.md                # Technical verification report
```