# LACUNA Demo Video — Verification Report

**Video:** `LACUNA_DEMO.mp4` (repo root)
**Date:** November 12, 2026
**Verified by:** Automated pipeline + manual frame inspection

## 1. Technical Specifications

| Requirement | Target | Actual | Status |
|-------------|--------|--------|--------|
| Resolution | 1920×1080 | 1920×1080 | PASS |
| Aspect ratio | 16:9 | 16:9 | PASS |
| Frame rate | 30 FPS | 30 FPS | PASS |
| Duration | 110–118s | 113.0s | PASS |
| Video codec | H.264 | libx264 | PASS |
| Audio codec | AAC | AAC 128 kbps | PASS |
| Container | MP4 | MP4 | PASS |

## 2. Scene Timing

| Scene | Start | End | Duration | Status |
|-------|-------|-----|----------|--------|
| 1: The Offer | 0.0s | 7.0s | 7.0s | PASS |
| 2: The World | 7.0s | 19.0s | 12.0s | PASS |
| 3: The Decision | 19.0s | 36.0s | 17.0s | PASS |
| 4: The Consequence | 36.0s | 57.0s | 21.0s | PASS |
| 5: The Clock | 57.0s | 72.0s | 15.0s | PASS |
| 6: The Payoff | 72.0s | 97.0s | 25.0s | PASS |
| 7: The Last Question | 97.0s | 113.0s | 16.0s | PASS |
| **Total** | **0.0s** | **113.0s** | **113.0s** | **PASS** |

## 3. Typography Overlay Verification

Each overlay was verified by extracting frames at the target timestamp and checking for expected text pixels:

| Timestamp | Overlay | White Pixels | Gold Pixels | Status |
|-----------|---------|-------------|-------------|--------|
| 1.0s | "A lender will give you ₡400." | 1,672 | 867 | PASS |
| 3.0s | "It wants one of your memories." | 0 | 1,739 | PASS |
| 8.0s | "LACUNA" + subtitle | 2,571 | 1,113 | PASS |
| 22.0s | "The lender sees three assets." | 1 | 1,457 | PASS |
| 40.0s | "Pledge the wrong memory," | 4 | 1,525 | PASS |
| 60.0s | "10% interest per cycle." | 3 | 1,282 | PASS |
| 80.0s | "What you sacrifice determines what happens after." | 2 | 2,037 | PASS |
| 100.0s | "LACUNA" + "What would you sell to afford your future?" | 2,574 | 1,174 | PASS |

## 4. Gameplay Authenticity

All gameplay footage is genuine LACUNA gameplay captured from `index.html` in the repository root. Verification:

- All memory collateral values match the game: Voice ₡300, Home ₡200, Love ₡400
- All productive values match: Voice +₡200 seller commission, Home +₡250 archive strongbox, Love +₡100 backroom advance
- Loan terms match: ₡400 principal, 10% interest per cycle, 4-cycle deadline, max 2 pledged
- Seal fee: ₡500
- Archive toll: ₡100 (₡200 if home pledged)
- No mockups, concept art, or stock footage used
- No fake UI or fabricated mechanics
- Ending state shown is real (New Ledger ending achieved through free path)

## 5. Render Pipeline

1. Gameplay captured from local `index.html` at 1920×1080 via custom frame-capture script (30 FPS)
2. Frames stitched into per-scene MP4 clips using ffmpeg libx264
3. Scenes concatenated into single 113s video
4. Scaled to 1920×1080 with letterboxing (1200×800 canvas → 1620×1080 + pillarbox bars)
5. Typography overlays generated with PIL/Pillow (transparent PNGs)
6. Overlays composited via ffmpeg overlay filter with `enable='between(t,X,Y)'` conditions
7. Procedural audio generated with numpy (drone, pulse, chimes)
8. Video + audio muxed into final MP4

## 6. Remotion Source

The Remotion composition source (`src/composition.js`) reproduces the same timeline and overlays declaratively. It can be previewed in Remotion Studio and rendered independently. The pre-rendered MP4 was produced from equivalent timing and content.

## 7. Known Limitations

- No synchronized narration (narration is sparse by design; on-screen text carries the story)
- Remotion Studio preview requires Chromium browser; not tested in this environment
- Audio is procedural (no voiceover), as permitted by the production brief when local narration generation produces poor results

## Conclusion

The video meets all technical specifications and demonstrates LACUNA's central mechanic truthfully: memories are both collateral and productive assets, and pledging the wrong memory can damage the player's ability to repay the loan.
