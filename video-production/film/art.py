"""Shared art helpers for the LACUNA film renderer."""
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1920, 1080
FPS = 30

# Palette from the brief
MIDNIGHT = (16, 28, 44)
INDIGO = (32, 43, 70)
TEAL = (49, 84, 90)
AMBER = (214, 166, 91)
GOLD = (185, 151, 98)
IVORY = (232, 225, 209)
ROSE = (152, 119, 123)
BLACK = (17, 19, 24)

FONT_DIR = "/System/Library/Fonts/Supplemental/"
TIMES = "/System/Library/Fonts/Times.ttc"


def font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except Exception:
        return ImageFont.load_default()


F = {
    "display": font(FONT_DIR + "Baskerville.ttc", 110),
    "title": font(FONT_DIR + "Baskerville.ttc", 64),
    "h2": font(FONT_DIR + "Baskerville.ttc", 42),
    "lender": font(FONT_DIR + "Baskerville.ttc", 34),
    "body": font(TIMES, 30),
    "small": font(TIMES, 22),
    "tiny": font(TIMES, 16),
    # Palatino carries the ₡ glyph; Baskerville/Times do not.
    "num": font(FONT_DIR + "Palatino.ttc", 92),
    "num_sm": font(FONT_DIR + "Palatino.ttc", 54),
}


def clamp(v, lo=0.0, hi=1.0):
    return max(lo, min(hi, v))


def ease(t):
    """Smoothstep ease."""
    t = clamp(t)
    return t * t * (3 - 2 * t)


def lerp(a, b, t):
    return a + (b - a) * clamp(t)


def lerp_color(c1, c2, t):
    t = clamp(t)
    return tuple(int(lerp(c1[i], c2[i], t)) for i in range(3))


def fade_in(t, dur, fade=0.8):
    """Envelope 0..1..0 over duration with fade seconds."""
    if t < 0 or t > dur:
        return 0.0
    if t < fade:
        return t / fade
    if t > dur - fade:
        return max(0.0, (dur - t) / fade)
    return 1.0


def vgrad(size, top, bottom):
    """Vertical gradient image."""
    w, h = size
    arr = np.zeros((h, w, 3), dtype=np.uint8)
    for i in range(3):
        arr[:, :, i] = np.linspace(top[i], bottom[i], h).reshape(-1, 1)
    return Image.fromarray(arr, "RGB")


def vignette(img, strength=0.55):
    """Darken edges."""
    w, h = img.size
    y, x = np.ogrid[:h, :w]
    d = np.sqrt(((x - w / 2) / (w / 2)) ** 2 + ((y - h / 2) / (h / 2)) ** 2)
    mask = 1 - strength * np.clip(d - 0.45, 0, 1) * 1.8
    mask = np.clip(mask, 0.25, 1)
    arr = np.asarray(img).astype(np.float32)
    arr *= mask[:, :, None]
    return Image.fromarray(arr.astype(np.uint8), img.mode)


def letterbox(img, bars=(64, 64)):
    """Add cinematic letterbox bars (top, bottom)."""
    out = img.copy()
    d = ImageDraw.Draw(out)
    d.rectangle([0, 0, W, bars[0]], fill=BLACK)
    d.rectangle([0, H - bars[1], W, H], fill=BLACK)
    return out


_GLOW_CACHE = {}
_GLOW_SIZED = {}

# Fast alpha scaling tables (bytes lookup -> C-level Image.point)
_ALPHA_LUT = {}


def _alpha_lut(a):
    t = _ALPHA_LUT.get(a)
    if t is None:
        t = bytes([(v * a) // 255 for v in range(256)])
        _ALPHA_LUT[a] = t
    return t


def _glow_sprite(color, size=256):
    """Radial glow sprite (cached, full alpha)."""
    key = (color, size)
    spr = _GLOW_CACHE.get(key)
    if spr is None:
        y, x = np.ogrid[:size, :size]
        c = size / 2.0
        d = np.sqrt((x - c) ** 2 + (y - c) ** 2) / c
        ramp = np.clip(1.0 - d, 0, 1) ** 2
        a = (ramp * 255).astype(np.uint8)
        spr = Image.new("RGBA", (size, size), color + (0,))
        spr.putalpha(Image.fromarray(a, "L"))
        _GLOW_CACHE[key] = spr
    return spr


def glow_ellipse(base, cx, cy, rx, ry, color, alpha, blur=40):
    """Additive glow layer using cached sized sprites (fast)."""
    if alpha <= 0.01:
        return
    rx, ry = max(2, int(rx)), max(2, int(ry))
    key = (color, rx, ry)
    spr = _GLOW_SIZED.get(key)
    if spr is None:
        spr = _glow_sprite(color).resize((rx * 2, ry * 2), Image.BILINEAR)
        _GLOW_SIZED[key] = spr
    a = int(255 * clamp(alpha))
    if a < 255:
        spr = spr.copy()
        spr.putalpha(spr.getchannel("A").point(_alpha_lut(a)))
    x0, y0 = int(cx - rx), int(cy - ry)
    bw, bh = base.size
    sx0, sy0 = max(0, -x0), max(0, -y0)
    dx0, dy0 = max(0, x0), max(0, y0)
    dx1, dy1 = min(bw, x0 + rx * 2), min(bh, y0 + ry * 2)
    if dx1 <= dx0 or dy1 <= dy0:
        return
    part = spr.crop((sx0, sy0, sx0 + (dx1 - dx0), sy0 + (dy1 - dy0)))
    base.alpha_composite(part, dest=(dx0, dy0))


def camera(bg, cx, cy, zoom=1.0, out_size=(W, H)):
    """Crop an oversized background around (cx, cy) with zoom, resize to out_size.

    bg should be rendered larger than the frame to allow pan/zoom.
    """
    bw, bh = bg.size
    ow, oh = out_size
    cw, ch = int(ow / max(0.05, zoom)), int(oh / max(0.05, zoom))
    cw, ch = min(cw, bw), min(ch, bh)
    x0 = int(clamp(cx - cw / 2, 0, bw - cw))
    y0 = int(clamp(cy - ch / 2, 0, bh - ch))
    crop = bg.crop((x0, y0, x0 + cw, y0 + ch))
    if (cw, ch) != (ow, oh):
        crop = crop.resize((ow, oh), Image.BILINEAR)
    return crop


def memory_orb(img, cx, cy, r, color, glow=1.0, t=0.0, frag=True):
    """A precious memory: glass sphere with core, shimmer, fragments."""
    cx, cy, r = int(cx), int(cy), int(max(2, r))
    if glow > 0.02:
        pulse = 0.85 + 0.15 * np.sin(t * 2.4)
        glow_ellipse(img, cx, cy, int(r * 2.4), int(r * 2.4), color,
                     0.5 * glow * pulse, blur=max(8, r // 2))
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    # glass body
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=color + (200,),
              outline=tuple(min(255, c + 55) for c in color) + (230,), width=max(2, r // 18))
    # inner core
    cr = int(r * 0.45)
    d.ellipse([cx - cr, cy - cr, cx + cr, cy + cr],
              fill=tuple(min(255, c + 60) for c in color) + (235,))
    # suspended fragments
    if frag:
        rng = np.random.RandomState(7)
        for _ in range(7):
            a = rng.rand() * 2 * np.pi + t * 0.3
            dist = r * (0.25 + 0.55 * rng.rand())
            fx, fy = cx + dist * np.cos(a), cy + dist * np.sin(a)
            s = max(2, int(r * 0.09))
            d.ellipse([fx - s, fy - s, fx + s, fy + s],
                      fill=tuple(min(255, c + 90) for c in color) + (215,))
    # specular highlight
    hr = int(r * 0.3)
    d.ellipse([cx - r * 0.5 - hr, cy - r * 0.55 - hr, cx - r * 0.5 + hr, cy - r * 0.55 + hr],
              fill=(255, 255, 255, 95))
    img.alpha_composite(layer)


def lantern(img, cx, top, height, lights, t=0.0, dim=1.0):
    """Player's lantern: frame + N memory lights (each 0..1)."""
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    w = int(height * 0.34)
    body = [cx - w // 2, top, cx + w // 2, top + height]
    d.rounded_rectangle(body, radius=int(w * 0.22), fill=(24, 26, 34, 235),
                        outline=GOLD + (235,), width=3)
    # cap
    d.polygon([(cx - w * 0.7, top), (cx + w * 0.7, top),
               (cx + w * 0.45, top - int(height * 0.14)),
               (cx - w * 0.45, top - int(height * 0.14))], fill=GOLD + (240,))
    d.ellipse([cx - 6, top - int(height * 0.22), cx + 6, top - int(height * 0.14)],
              fill=GOLD + (240,))
    # lights stacked inside
    n = max(1, len(lights))
    seg_h = (height - int(height * 0.16)) / n
    colors = [AMBER, TEAL, ROSE]
    for i, lv in enumerate(lights):
        cy = top + int(height * 0.10) + seg_h * (i + 0.5)
        col = colors[i % 3]
        a = clamp(lv) * dim
        if a > 0.03:
            r = int(w * 0.30 * (0.6 + 0.4 * a))
            d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=col + (int(235 * a),))
    img.alpha_composite(layer)
    # halo
    total = sum(clamp(v) for v in lights) * dim
    if total > 0.05:
        pulse = 0.85 + 0.15 * np.sin(t * 2.0)
        glow_ellipse(img, cx, top + height // 2, int(height * 0.75), int(height * 0.75),
                     AMBER, 0.45 * clamp(total / max(1, len(lights))) * pulse, blur=70)


def text_alpha(img, xy, text, f, color, alpha, anchor="mm", shadow=True,
               tracking=0):
    """Text with alpha fade + soft shadow + optional letterspacing."""
    if alpha <= 0.02:
        return
    a = int(255 * clamp(alpha))
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    if tracking > 0:
        x = xy[0]
        tw = sum(d.textlength(c, font=f) for c in text) + tracking * max(0, len(text) - 1)
        if anchor[0] == "m":
            x = xy[0] - tw / 2
        elif anchor[0] == "r":
            x = xy[0] - tw
        yv = anchor[1] if len(anchor) > 1 else "m"
        for c in text:
            w = d.textlength(c, font=f)
            if shadow:
                d.text((x + 2, xy[1] + 3), c, font=f,
                       fill=(0, 0, 0, int(a * 0.5)), anchor="l" + yv)
            d.text((x, xy[1]), c, font=f, fill=color + (a,), anchor="l" + yv)
            x += w + tracking
    else:
        if shadow:
            d.text((xy[0] + 3, xy[1] + 3), text, font=f,
                   fill=(0, 0, 0, int(a * 0.55)), anchor=anchor)
        d.text(xy, text, font=f, fill=color + (a,), anchor=anchor)
    img.alpha_composite(layer)


def price_text(img, xy, amount, alpha, color=AMBER, f=None, prefix="₡"):
    """Animated price that counts up."""
    f = f or F["num"]
    text_alpha(img, xy, f"{prefix}{int(round(amount))}", f, color, alpha)


def stars(arr, n=90, seed=3, twinkle=0.0):
    """Draw stars into an HxWx3 float array (0..255)."""
    rng = np.random.RandomState(seed)
    xs = rng.randint(0, W, n)
    ys = rng.randint(0, int(H * 0.7), n)
    br = rng.randint(110, 255, n).astype(np.float32)
    if twinkle > 0:
        br = br * (0.75 + 0.25 * np.sin(twinkle + np.arange(n) * 1.7))
    for x, y, b in zip(xs, ys, br):
        arr[y:y + 2, x:x + 2] = np.maximum(arr[y:y + 2, x:x + 2], b)
    return arr
