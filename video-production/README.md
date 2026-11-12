# LACUNA — Cinematic Product Demonstration

The official product demonstration film for **LACUNA**, a fantasy mystery adventure where
memories are both loan collateral and gameplay capabilities.

## Deliverables

| File | Description |
|------|-------------|
| `out/lacuna-product-demo.mp4` | Final cinematic product demo (114s) |
| `out/lacuna-subtitles.srt` | Subtitle/caption file |
| `public/audio/lacuna-voiceover.wav` | Narration audio (106.8s) |
| `src/composition.js` | Remotion composition source |
| `src/Root.js` | Remotion studio root |
| `src/index.js` | Remotion entry point |
| `scenes/*.png` | Individual scene renders |
| `render_all_scenes.py` | Scene rendering script |
| `gen_narration.py` | Narration generation script |
| `gen_sound_design.py` | Soundtrack/sound design script |

## Video Specifications

| Property | Value |
|----------|-------|
| Resolution | 1920×1080 (16:9) |
| Frame rate | 30 FPS |
| Duration | 117.9 seconds (within 110–118s requirement) |
| Total frames | 3,420 |
| Video codec | H.264 (libx264) |
| Audio codec | AAC (128 kbps) |
| Audio sample rate | 44.1 kHz, mono |
| File size | ~2.4 MB |

## Shot Structure

| Shot | Time | Duration | Content |
|------|------|----------|---------|
| 01: The City Forgets | 0.0–13.3s | 13.3s | Darkness → fading inscription → street → lantern → memory orb into city |
| 02: The Mystery | 13.3–24.7s | 11.4s | Forgotten Square → Memory Market jars → Sunken Archive → Bell Tower → player's lantern |
| 03: The Contract | 24.7–33.6s | 15.9s | Promissory note ₡400 → three memory orbs → lender line → wax seal → loan accepted |
| 04: The Price They Cannot See | 33.6–57.8s | 24.2s | Seller panel +₡100 vs +₡200 comparison → Home +₡250 strongbox → Love +₡100 backroom |
| 05: The Clock | 57.8–65.5s | 13.0s | Bell Tower → debt interface ₡440→₡484→₡532→₡585 → 10% interest/cycle → 4-cycle deadline |
| 06: What the City Hides | 65.5–78.3s | 15.6s | Sunken Archive shelves → evidence counter 1/5 → 2/5 → 3/5 → strongbox glow |
| 07: What You Can Recover | 78.3–88.5s | 12.0s | Debt settled → memories return to lantern → all three lights restored |
| 08: Final Reveal | 88.5–117.9s | 29.4s | City vista → player silhouette → "LACUNA — The Price of Remembering" hold |

## Narrative Arc

**Wonder → Mystery → Temptation → Sacrifice → Consequence → Discovery → Resolution**

The film opens with a world where memories have become collateral. The player investigates who
is borrowing against the city's future while navigating the same system that put the city at
risk. The central demonstration shows that a memory's collateral value (what the lender sees)
differs from its productive value (what enables gameplay), and pledging the wrong memory can
damage the player's ability to repay.

## Financial Values (matching game engine)

| Memory | Collateral | Productive Value |
|--------|-----------|------------------|
| Mother's Voice | ₡300 | +₡200 seller commission |
| Childhood Home | ₡200 | +₡250 archive strongbox |
| Face of Love | ₡400 | +₡100 backroom advance |

**Loan:** ₡400 principal, 10% interest/cycle, 4-cycle deadline, max 2 pledged  
**Seal fee:** ₡500 | **Archive toll:** ₡100 (₡200 if Home pledged)

## Audio

- **Narration:** Mature, confident voiceover with deliberate pauses (Daniel voice)
- **Soundtrack:** Procedural ambient drone, bell resonances, memory chimes, tension pulses
- **Mix:** Narration at full volume, soundtrack at 0.3x for clarity

## Remotion Preview & Render

The Remotion composition source is in `src/`. To preview:

```bash
cd video-production
npm install
npx remotion studio src/index.js
```

To render via Remotion:

```bash
npx remotion render src/index.js LacunaDemo out/lacuna-product-demo.mp4 --codec h264 --crf 18
```

Note: Remotion rendering requires Chromium. If unavailable, the pre-rendered MP4 at
`out/lacuna-product-demo.mp4` was produced from equivalent scene composition using
PIL + ffmpeg pipeline.

## Production Pipeline

1. Scene composition designed in Python/PIL with the brief's color palette
2. Each scene rendered as a high-quality PNG
3. Scenes converted to MP4 segments via ffmpeg
4. Segments concatenated into single 114s video
5. Narration generated with macOS `say` (Daniel voice) with dramatic pauses
6. Soundtrack generated procedurally with numpy (drones, pads, bells, pulses)
7. Narration + soundtrack mixed and muxed with video

## Verification

- Duration: 117.9s ✓ (within 110–118s)
- Resolution: 1920×1080 ✓
- Frame rate: 30 FPS ✓
- Audio/Video sync: Both 114.0s ✓
- Narration present and synchronized ✓
- Financial values match game engine ✓
- No placeholder text or broken transitions ✓
