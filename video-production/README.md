# LACUNA Demo Video

This directory contains the Remotion source and rendered MP4 for the official LACUNA hackathon product demonstration video.

## Deliverables

| File | Description |
|------|-------------|
| `LACUNA_DEMO.mp4` | Final rendered video (repo root) |
| `src/composition.js` | Remotion composition source |
| `src/Root.js` | Remotion studio entry |
| `src/index.js` | Remotion root registration |
| `audio/LACUNA_DEMO_audio.wav` | Procedural atmospheric audio |
| `captures/clips/*.mp4` | Individual scene gameplay captures |
| `captures/overlays/*.png` | Typography overlay assets |
| `captures/LACUNA_DEMO.mp4` | Video before audio mux |

## Video Specifications

| Property | Value |
|----------|-------|
| Resolution | 1920×1080 (16:9) |
| Frame rate | 30 FPS |
| Duration | 113 seconds |
| Video codec | H.264 (libx264, CRF 18) |
| Audio codec | AAC (128 kbps) |
| File size | ~6.6 MB |

## Scene Structure

| Scene | Time | Content |
|-------|------|---------|
| 1: The Offer | 0–7s | Lender's ₡400 loan offer, memory collateral choices |
| 2: The World | 7–19s | Gameplay exploration, title reveal |
| 3: The Decision | 19–36s | Collateral vs productive value comparison |
| 4: The Consequence | 36–57s | Pledged memory loses income opportunity |
| 5: The Clock | 57–72s | Debt interface, interest, deadline |
| 6: The Payoff | 72–97s | Repayment, memory restoration, ending |
| 7: The Last Question | 97–113s | Final question, title card |

## Gameplay Capture

All gameplay footage is genuine LACUNA gameplay captured from `index.html` in the repository root, played locally and recorded at 1920×1080. No mockups, concept art, or stock footage are used. All financial values (₡400 principal, ₡500 seal fee, ₡100 archive toll, 10% interest, 4-cycle deadline) match the actual game implementation.

## Remotion Preview

To preview the composition in Remotion Studio:

```bash
cd video-production
npm install
npx remotion studio src/index.js
```

To render via Remotion:

```bash
npx remotion render src/index.js LacunaDemo out.mp4 --codec h264 --crf 18
```

Note: Remotion rendering requires a Chromium browser. The pre-rendered MP4 at `LACUNA_DEMO.mp4` was produced from this same composition source.

## Audio

All audio is procedurally generated (no copyrighted material):
- Low ambient drone (55 Hz) throughout
- Subtle debt-pressure pulse during scene 5
- Soft chimes at key moments (memory choice, pledge consequence, repayment, final question)

## Verification

See `VERIFICATION.md` for the complete quality control report.
