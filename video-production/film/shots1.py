"""LACUNA film - shot renderers 01-04. t = local seconds within the shot."""
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from art import (W, H, MIDNIGHT, INDIGO, TEAL, AMBER, GOLD, IVORY, ROSE, BLACK,
                 F, FONT_DIR, font, clamp, ease, lerp, lerp_color, fade_in,
                 vgrad, vignette, glow_ellipse, memory_orb, lantern, text_alpha,
                 stars, camera)

M = 200
BW, BH = W + 2 * M, H + 2 * M          # oversized canvas for camera moves
CX, CY = BW // 2, BH // 2

_F_INSC = font(FONT_DIR + "Baskerville.ttc", 80)
_BG = {}


# ---------------------------------------------------------------- helpers
def canvas(top, bottom):
    return vgrad((BW, BH), top, bottom).convert("RGBA")


def dip(t, a, b, fin=0.25, fout=0.25):
    """Black alpha for fades at shot/phase edges."""
    k = 1.0
    if t < a + fin:
        k = min(k, clamp((t - a) / max(fin, 1e-6)))
    if t > b - fout:
        k = min(k, clamp((b - t) / max(fout, 1e-6)))
    return 1.0 - k


def black(img, a):
    if a > 0.01:
        img.alpha_composite(Image.new("RGBA", img.size,
                                      (0, 0, 0, int(255 * clamp(a)))))


def star_layer(img, n=120, seed=5, ymax=780):
    d = ImageDraw.Draw(img)
    rng = np.random.RandomState(seed)
    for _ in range(n):
        x, y = rng.randint(0, BW), rng.randint(0, ymax)
        s, b = rng.randint(1, 3), rng.randint(110, 235)
        d.rectangle([x, y, x + s, y + s], fill=(b, b, min(255, b + 15), 255))


def _tw(text, f):
    d = ImageDraw.Draw(Image.new("RGBA", (8, 8)))
    return [d.textlength(c, font=f) for c in text]


def tracked(img, xy, text, f, color, alpha, tracking=8, anchor="mm", shadow=True):
    """Letterspaced text with alpha."""
    if alpha <= 0.02 or not text:
        return
    a = int(255 * clamp(alpha))
    ws = _tw(text, f)
    total = sum(ws) + tracking * (len(text) - 1)
    x = xy[0] - total if anchor[0] == "r" else (
        xy[0] - total / 2 if anchor[0] == "m" else xy[0])
    yv = "m" if "m" in anchor[1:] else ("t" if "t" in anchor[1:] else "b")
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    for c, w in zip(text, ws):
        if shadow:
            d.text((x + 2, xy[1] + 3), c, font=f, fill=(0, 0, 0, int(a * 0.5)),
                   anchor="l" + yv)
        d.text((x, xy[1]), c, font=f, fill=color + (a,), anchor="l" + yv)
        x += w + tracking
    img.alpha_composite(layer)


def mist(img, cy, h, alpha, color=(196, 208, 220), x0=0, x1=W):
    """Soft horizontal mist band (screen space)."""
    if alpha <= 0.01:
        return
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    steps = 16
    for i in range(steps):
        u = i / (steps - 1)
        aa = alpha * (1 - abs(2 * u - 1))
        y0 = cy - h / 2 + h * i / steps
        d.rectangle([x0, y0, x1, y0 + h / steps + 1],
                    fill=color + (int(255 * aa),))
    img.alpha_composite(layer)


def panel(img, box, alpha, border=AMBER, fill=(14, 17, 24), radius=18, width=2):
    if alpha <= 0.02:
        return
    a = int(225 * clamp(alpha))
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    ImageDraw.Draw(layer).rounded_rectangle(
        box, radius=radius, fill=fill + (a,),
        outline=border + (int(255 * clamp(alpha)),), width=width)
    img.alpha_composite(layer)


def chip(img, xy, label, value, alpha, color=AMBER, w=430, h=112):
    """HUD-style glass chip: small label + big value."""
    if alpha <= 0.02:
        return
    x, y = xy
    panel(img, [x, y, x + w, y + h], alpha, border=color, radius=14)
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    a = int(255 * clamp(alpha))
    d.text((x + 22, y + 20), label, font=F["tiny"],
           fill=(232, 225, 209, int(190 * clamp(alpha))), anchor="lt")
    d.text((x + w - 22, y + h - 18), value, font=F["num_sm"],
           fill=color + (a,), anchor="rb")
    img.alpha_composite(layer)


def carved(img, xy, text, f, alpha, tracking=10, char_a=None,
           stone=(56, 62, 72), recess=(25, 29, 37), hi=(104, 112, 126)):
    """Engraved letters cut into stone. char_a: per-char 1=carved, 0=erased."""
    if alpha <= 0.02:
        return
    ws = _tw(text, f)
    total = sum(ws) + tracking * (len(text) - 1)
    x = xy[0] - total / 2
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    for i, (c, w) in enumerate(zip(text, ws)):
        ca = alpha * (char_a[i] if char_a else 1.0)
        if ca > 0.03:
            body = lerp_color(stone, recess, ca)
            edge = lerp_color(stone, hi, ca)
            d.text((x + 1, xy[1] + 3), c, font=f, fill=edge + (255,), anchor="lt")
            d.text((x, xy[1]), c, font=f, fill=body + (255,), anchor="lt")
        x += w + tracking
    img.alpha_composite(layer)


def player(img, x, gy, s=1.0, lights=(1, 1, 1), t=0.0, dim=1.0, face=1,
           bob=0.0):
    """Cloaked traveller carrying the memory lantern."""
    h = 300 * s
    lay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(lay)
    top = gy - h + bob
    d.ellipse([x - h * 0.30, gy - h * 0.05, x + h * 0.30, gy + h * 0.06],
              fill=(0, 0, 0, 110))
    sway = np.sin(t * 2.0) * 6 * s
    sh_y = top + h * 0.30
    d.polygon([x - h * 0.13, sh_y, x + h * 0.13, sh_y,
               x + h * 0.30 + sway, gy, x - h * 0.30 + sway, gy],
              fill=(9, 11, 16, 255))
    hr = h * 0.115
    hx, hy = x, top + hr * 1.4
    d.ellipse([hx - hr, hy - hr * 1.1, hx + hr, hy + hr * 1.1],
              fill=(9, 11, 16, 255))
    d.polygon([hx - hr * 1.1, hy, hx + hr * 1.1, hy,
               hx + face * hr * 0.2, hy - hr * 1.9], fill=(9, 11, 16, 255))
    lx = x + face * h * 0.36
    lt = gy - h * 0.50
    d.line([x, sh_y + 12, lx, lt + h * 0.10], fill=(9, 11, 16, 255),
           width=max(4, int(11 * s)))
    img.alpha_composite(lay)
    lantern(img, lx, lt, h * 0.26, lights, t, dim)


def skyline(d, base_y, color, seed, amp=280, win=0.0, win_col=(120, 96, 60),
            x0=0, x1=BW):
    rng = np.random.RandomState(seed)
    x = x0 - 50
    while x < x1:
        bw = rng.randint(70, 200)
        bh = rng.randint(50, amp)
        top = base_y - bh
        d.rectangle([x, top, x + bw, base_y + 60], fill=color + (255,))
        if rng.rand() < 0.3:
            tw = rng.randint(16, 34)
            tx = x + rng.randint(0, max(1, bw - tw))
            d.rectangle([tx, top - rng.randint(20, 60), tx + tw, top],
                        fill=color + (255,))
        if win > 0:
            for wy in range(int(top) + 16, base_y - 12, 30):
                for wx in range(x + 10, x + bw - 12, 24):
                    if rng.rand() < win:
                        d.rectangle([wx, wy, wx + 7, wy + 12],
                                    fill=win_col + (255,))
        x += bw + rng.randint(8, 30)


# ------------------------------------------------------------------ shot 01
INSC1 = "ALL THAT IS REMEMBERED HERE"
INSC2 = "STANDS AS SECURITY"
_VANISH = np.random.RandomState(9).permutation(len(INSC1) + len(INSC2))


def _stone():
    if "stone" not in _BG:
        rng = np.random.RandomState(11)
        noise = rng.randint(0, 26, (BH, BW)).astype(np.float32)
        base = np.zeros((BH, BW, 3), np.float32)
        base[:, :, 0], base[:, :, 1], base[:, :, 2] = 52, 58, 68
        base += noise[:, :, None]
        img = Image.fromarray(np.clip(base, 0, 255).astype(np.uint8)).convert("RGBA")
        d = ImageDraw.Draw(img)
        y, row = 0, 0
        while y < BH:
            d.rectangle([0, y, BW, y + 3], fill=(34, 38, 46, 255))
            x = 0 if row % 2 == 0 else 140
            while x < BW:
                d.rectangle([x, y, x + 3, y + 150], fill=(36, 40, 48, 255))
                x += 280
            y += 150
            row += 1
        glow_ellipse(img, 420, 240, 950, 720, (255, 220, 170), 0.10)
        _BG["stone"] = vignette(img, 0.5)
    return _BG["stone"].copy()


def _shot01_a(t):
    img = _stone()
    p = clamp(t / 4.6)
    img = camera(img, CX + lerp(-34, 30, p), CY + lerp(24, -34, p),
                 lerp(1.03, 1.11, ease(p)))
    glow_ellipse(img, lerp(320, 1680, p), 300, 640, 470, (255, 214, 168), 0.13)
    # drifting dust
    d = ImageDraw.Draw(img)
    rng = np.random.RandomState(21)
    for _ in range(16):
        dx, dy, sp = rng.randint(0, W), rng.randint(0, H), 6 + rng.rand() * 14
        yy = (dy - t * sp) % H
        d.rectangle([dx, yy, dx + 3, yy + 3], fill=(226, 218, 200, 90))
    # per-letter erosion
    n1, n2 = len(INSC1), len(INSC2)
    ca = []
    for i in range(n1 + n2):
        rank = int(np.where(_VANISH == i)[0][0])
        v = 2.1 + rank / max(1, n1 + n2 - 1) * 2.0
        ca.append(1.0 - clamp((t - v) / 0.6))
    env = ease((t - 0.35) / 0.8)
    carved(img, (CX, CY - 70), INSC1, _F_INSC, env, 10, ca[:n1])
    carved(img, (CX, CY + 70), INSC2, _F_INSC, env, 10, ca[n1:])
    return img


def _street():
    if "street" not in _BG:
        img = canvas((12, 18, 30), (6, 8, 12))
        d = ImageDraw.Draw(img)
        star_layer(img, 90, 5, 620)
        skyline(d, 700, (13, 17, 26), 5, amp=300, win=0.03,
                win_col=(110, 88, 56), x0=900, x1=1500)
        # walls receding to vanishing point (1160, 700)
        d.polygon([(0, 250), (1060, 640), (1060, 700), (0, BH)],
                  fill=(26, 30, 40, 255))
        d.polygon([(BW, 250), (1260, 640), (1260, 700), (BW, BH)],
                  fill=(22, 26, 35, 255))
        # street floor
        d.polygon([(0, BH), (1060, 700), (1260, 700), (BW, BH)],
                  fill=(31, 35, 45, 255))
        for gx in range(-400, 2800, 240):
            d.line([1160, 700, gx, BH], fill=(37, 42, 53, 255), width=3)
        # windows along walls
        rng = np.random.RandomState(6)
        for row in range(4):
            for x in range(70, 1030, 165):
                f = x / 1060.0
                wy = lerp(430 + row * 250, 648 + row * 42, f)
                ws = lerp(48, 12, f)
                lit = rng.rand() < 0.5
                col = (96, 76, 48) if lit else (12, 14, 20)
                d.rectangle([x, wy, x + ws, wy + ws * 1.5], fill=col + (255,))
            for x in range(1300, 2280, 165):
                f = (2320 - x) / 1060.0
                wy = lerp(430 + row * 250, 648 + row * 42, f)
                ws = lerp(48, 12, f)
                lit = rng.rand() < 0.5
                col = (96, 76, 48) if lit else (11, 13, 18)
                d.rectangle([x, wy, x + ws, wy + ws * 1.5], fill=col + (255,))
        # archway left
        d.rounded_rectangle([240, 760, 470, BH], radius=110,
                            fill=(10, 12, 18, 255))
        # distant market glow at VP
        glow_ellipse(img, 1160, 664, 300, 190, AMBER, 0.30)
        glow_ellipse(img, 1160, 662, 60, 46, (255, 232, 196), 0.75)
        mist(img, 706, 150, 0.12)
        _BG["street"] = vignette(img, 0.52)
    return _BG["street"].copy()


def _city():
    if "city" not in _BG:
        img = canvas((10, 15, 26), (5, 7, 11))
        d = ImageDraw.Draw(img)
        star_layer(img, 170, 7, 800)
        # moon
        glow_ellipse(img, 1960, 210, 190, 190, (226, 222, 210), 0.35)
        d.ellipse([1914, 164, 2006, 256], fill=(228, 224, 212, 235))
        # sunken archive silhouette (left)
        d.rectangle([180, 640, 560, 900], fill=(12, 15, 24, 255))
        d.polygon([(150, 640), (590, 640), (560, 590), (180, 590)],
                  fill=(12, 15, 24, 255))
        for cx_ in range(220, 540, 80):
            d.rectangle([cx_, 660, cx_ + 34, 900], fill=(16, 20, 31, 255))
        for bx in (300, 430):
            d.polygon([(bx, 640), (bx + 60, 640), (bx + 130, 1180),
                       (bx - 20, 1180)], fill=(226, 222, 210, 16))
        skyline(d, 900, (11, 14, 22), 12, amp=340, win=0.02)
        skyline(d, 980, (16, 20, 32), 13, amp=300, win=0.05)
        skyline(d, 1080, (10, 12, 18), 14, amp=250, win=0.02)
        # bell tower (right)
        d.rectangle([1740, 420, 1836, 1060], fill=(14, 17, 26, 255))
        d.polygon([(1726, 420), (1850, 420), (1788, 320)], fill=(14, 17, 26, 255))
        d.rectangle([1764, 470, 1812, 560], fill=(8, 10, 15, 255))
        d.ellipse([1770, 486, 1806, 534], fill=(150, 118, 66, 255))
        d.rectangle([1752, 560, 1824, 700], fill=(10, 12, 18, 255))
        # memory market glow + stalls (left-centre horizon)
        glow_ellipse(img, 760, 966, 470, 260, AMBER, 0.34)
        glow_ellipse(img, 760, 962, 200, 120, (255, 226, 186), 0.40)
        for sx in range(480, 1080, 90):
            d.polygon([(sx, 1010), (sx + 70, 1010), (sx + 58, 966),
                       (sx + 12, 966)], fill=(9, 11, 17, 255))
            d.rectangle([sx + 6, 1010, sx + 14, 1064], fill=(9, 11, 17, 255))
            d.rectangle([sx + 56, 1010, sx + 64, 1064], fill=(9, 11, 17, 255))
        mist(img, 990, 190, 0.15)
        mist(img, 830, 130, 0.08)
        # foreground rooftops
        d.rectangle([0, 1300, BW, BH], fill=(7, 9, 13, 255))
        rng = np.random.RandomState(31)
        rx = -60
        while rx < BW:
            rw = rng.randint(160, 340)
            rh = rng.randint(60, 150)
            d.rectangle([rx, 1300 - rh, rx + rw, 1310], fill=(7, 9, 13, 255))
            if rng.rand() < 0.5:
                d.rectangle([rx + 40, 1300 - rh - 60, rx + 76, 1300 - rh],
                            fill=(7, 9, 13, 255))
            rx += rw + rng.randint(10, 60)
        _BG["city"] = vignette(img, 0.55)
    return _BG["city"].copy()


def shot01(t):
    if t < 4.6:
        img, b = _shot01_a(t), dip(t, 0, 4.6, 0.7, 0.25)
    elif t < 9.1:
        img = _street()
        p = ease((t - 4.6) / 4.5)
        img = camera(img, CX, lerp(790, 726, p), lerp(1.5, 1.14, p))
        vx, vy = (1160 - CX) * 1 + 0, 0  # placeholder, computed below
        z = lerp(1.5, 1.14, p)
        vy = (662 - lerp(790, 726, p)) * z + H / 2
        fl = 0.55 + 0.25 * np.sin(t * 9.7) + 0.1 * np.sin(t * 23.3)
        glow_ellipse(img, W / 2, vy, 130, 130, AMBER, 0.34 * fl)
        glow_ellipse(img, W / 2, vy, 36, 36, (255, 232, 198), 0.85 * fl)
        p2 = ease((t - 4.9) / 4.0)
        if p2 > 0:
            ox = lerp(250, W / 2 + 10, p2)
            oy = lerp(520, vy - 10, p2) + np.sin(t * 2.2) * 14
            memory_orb(img, ox, oy, lerp(46, 15, p2), AMBER, 1.0, t)
        b = dip(t, 4.6, 9.1, 0.25, 0.2)
    else:
        img = _city()
        p = ease((t - 9.1) / 4.2)
        z, cy = lerp(1.24, 1.0, p), lerp(830, 742, p)
        img = camera(img, CX, cy, z)
        glow_ellipse(img, 760, 966, 470, 260, AMBER, 0.20 + 0.05 * np.sin(t * 1.1))
        p2 = ease((t - 9.3) / 3.8)
        if p2 > 0:
            ox = (lerp(560, 850, p2) - CX) * z + W / 2
            oy = (lerp(1140, 930, p2) - cy) * z + H / 2
            memory_orb(img, ox, oy, lerp(28, 15, p2), AMBER, 0.9, t)
        b = dip(t, 9.1, 13.3, 0.25, 0.35)
    black(img, b)
    return img


# ------------------------------------------------------------------ shot 02
JARS = [(700, 560, AMBER), (1160, 500, TEAL), (1620, 570, ROSE)]


def _square():
    if "square" not in _BG:
        img = canvas((12, 18, 30), (7, 9, 14))
        d = ImageDraw.Draw(img)
        star_layer(img, 70, 8, 640)
        skyline(d, 790, (13, 17, 26), 15, amp=280, win=0.03,
                win_col=(110, 88, 56))
        d.polygon([(0, BH), (460, 840), (1860, 840), (BW, BH)],
                  fill=(34, 38, 48, 255))
        for gx in range(-300, 2700, 220):
            d.line([1160, 840, gx, BH], fill=(39, 44, 55, 255), width=3)
        # monument with eroding inscription
        d.rectangle([640, 1020, 900, 1190], fill=(42, 46, 57, 255))
        d.rectangle([628, 1000, 912, 1030], fill=(50, 55, 66, 255))
        d.polygon([(702, 1000), (838, 1000), (816, 520), (724, 520)],
                  fill=(37, 42, 53, 255))
        rng = np.random.RandomState(4)
        f26 = font(FONT_DIR + "Baskerville.ttc", 24)
        for line, yy in (("ALL THAT IS", 1060), ("REMEMBERED HERE", 1096)):
            ca = [0.0 if rng.rand() < 0.4 else 1.0 for _ in line]
            carved(img, (770, yy), line, f26, 0.95, 3, ca,
                   stone=(46, 50, 61), recess=(24, 27, 35), hi=(88, 94, 106))
        # arches right + abandoned stalls left
        for ax in (1480, 1900):
            d.rounded_rectangle([ax, 880, ax + 300, 1330], radius=150,
                                fill=(10, 12, 18, 255))
        for px_ in (140, 480):
            d.rectangle([px_, 840, px_ + 18, 1200], fill=(40, 34, 34, 255))
        d.polygon([(100, 850), (540, 830), (520, 760), (130, 780)],
                  fill=(54, 42, 46, 255))
        mist(img, 900, 190, 0.14)
        _BG["square"] = vignette(img, 0.52)
    return _BG["square"].copy()


def _market():
    if "market" not in _BG:
        img = canvas((17, 21, 33), (9, 11, 17))
        d = ImageDraw.Draw(img)
        d.rectangle([0, 0, BW, 1150], fill=(19, 23, 35, 255))
        for fx in range(60, BW, 240):
            d.polygon([(fx, 0), (fx + 120, 0), (fx + 110, 380), (fx + 10, 380)],
                      fill=(28, 32, 46, 255))
        for lx in range(80, BW, 130):
            ly = 330 + int(60 * np.sin(lx / 260))
            d.ellipse([lx - 6, ly - 6, lx + 6, ly + 6], fill=(150, 120, 70, 255))
        for sx in (140, 940, 1740):
            d.polygon([(sx - 40, 880), (sx + 560, 880), (sx + 500, 700),
                       (sx + 40, 700)], fill=(58, 46, 50, 255))
            d.rectangle([sx, 880, sx + 520, 1040], fill=(56, 44, 36, 255))
            d.rectangle([sx, 1040, sx + 520, BH], fill=(30, 26, 24, 255))
            for px_ in (sx + 10, sx + 496):
                d.rectangle([px_, 700, px_ + 16, 880], fill=(44, 36, 32, 255))
        # brass scale + veiled merchant at the middle stall
        sc = 1240
        d.rectangle([sc - 8, 780, sc + 8, 880], fill=(185, 151, 98, 255))
        d.line([sc - 160, 786, sc + 160, 778], fill=(185, 151, 98, 255), width=8)
        d.ellipse([sc - 200, 790, sc - 110, 832], fill=(150, 124, 80, 255))
        d.ellipse([sc + 110, 782, sc + 200, 824], fill=(150, 124, 80, 255))
        d.ellipse([1120, 620, 1290, 810], fill=(14, 16, 22, 255))
        d.polygon([(1076, 880), (1334, 880), (1300, 750), (1110, 750)],
                  fill=(14, 16, 22, 255))
        d.line([1130, 775, 1280, 775], fill=(152, 119, 123, 130), width=4)
        glow_ellipse(img, 1160, 1180, 900, 380, AMBER, 0.16)
        mist(img, 1080, 240, 0.12)
        _BG["market"] = vignette(img, 0.5)
    return _BG["market"].copy()


def _lclose():
    if "lclose" not in _BG:
        img = canvas((14, 17, 26), (8, 9, 14))
        d = ImageDraw.Draw(img)
        d.rounded_rectangle([700, 260, 1620, BH], radius=420,
                            fill=(11, 13, 20, 255))
        for lx in (300, 1900):
            d.rectangle([lx, 400, lx + 120, BH], fill=(13, 16, 25, 255))
        glow_ellipse(img, 1160, 740, 760, 600, AMBER, 0.10)
        mist(img, 940, 320, 0.10)
        _BG["lclose"] = vignette(img, 0.55)
    return _BG["lclose"].copy()


def shot02(t):
    if t < 3.4:
        img = _square()
        p = ease(t / 3.4)
        img = camera(img, lerp(1010, 1330, p), 900, 1.12)
        bob = abs(np.sin(t * 5.5)) * 5
        player(img, lerp(430, 1580, p), 1025, 1.15, (1, 1, 1), t, 1.0, 1, bob)
        memory_orb(img, lerp(1740, 1520, p),
                   lerp(700, 630, p) + np.sin(t * 1.5) * 10, 26, AMBER, 0.8, t)
        b = dip(t, 0, 3.4, 0.3, 0.16)
    elif t < 6.4:
        img = _market()
        p = ease((t - 3.4) / 3.0)
        z, cy = 1.2, 800
        cx = lerp(1000, 1300, p)
        img = camera(img, cx, cy, z)
        d = ImageDraw.Draw(img)
        for i, (jx, jy, col) in enumerate(JARS):
            dx = np.sin(t * 1.4 + i * 2.1) * 12
            sx = (jx + dx - cx) * z + W / 2
            sy = (jy - cy) * z + H / 2
            d.line([sx, sy - 230 * z, sx, sy - 46 * z],
                   fill=(140, 120, 90, 220), width=3)
            memory_orb(img, sx, sy, 44 * z, col, 1.0, t + i)
        glow_ellipse(img, 960, 700, 700, 420, AMBER,
                     0.10 + 0.03 * np.sin(t * 1.7))
        b = dip(t, 3.4, 6.4, 0.16, 0.16)
    elif t < 8.8:
        img = _city()
        p = ease((t - 6.4) / 2.4)
        img = camera(img, lerp(760, 1560, p), 770, 1.18)
        mist(img, 1010, 220, 0.10 + 0.04 * np.sin(t))
        b = dip(t, 6.4, 8.8, 0.16, 0.16)
    else:
        img = _lclose()
        p = ease((t - 8.8) / 2.6)
        img = camera(img, CX, 700, lerp(1.0, 1.12, p))
        lay = Image.new("RGBA", img.size, (0, 0, 0, 0))
        dl = ImageDraw.Draw(lay)
        dl.polygon([(1180, 1080), (1250, 780), (1470, 640), (1920, 690),
                    (1920, 1080)], fill=(8, 10, 14, 255))
        dl.ellipse([1340, 520, 1610, 790], fill=(8, 10, 14, 255))
        dl.line([(1180, 1080), (1250, 780), (1470, 640)],
                fill=(214, 166, 91, 85), width=5)
        img.alpha_composite(lay)
        lantern(img, 830, 350, 560, (1, 1, 1), t, 0.94 + 0.06 * np.sin(t * 2.4))
        b = dip(t, 8.8, 11.4, 0.16, 0.3)
    black(img, b)
    return img


# ------------------------------------------------------------------ shot 03
def _ein(t, a, f=0.45):
    return ease((t - a) / f)


def _lender():
    if "lender" not in _BG:
        img = canvas((16, 19, 30), (9, 11, 17))
        d = ImageDraw.Draw(img)
        d.rectangle([0, 0, BW, 1120], fill=(18, 21, 33, 255))
        rng = np.random.RandomState(23)
        for ry in (330, 640, 950):
            d.rectangle([120, ry, 2200, ry + 26], fill=(44, 36, 30, 255))
            for jx in range(170, 2180, 120):
                col = [AMBER, TEAL, ROSE][rng.randint(3)]
                d.rounded_rectangle([jx, ry - 92, jx + 66, ry], radius=14,
                                    fill=(200, 214, 226, 46),
                                    outline=(180, 190, 200, 90), width=2)
                glow_ellipse(img, jx + 33, ry - 46, 34, 34, col, 0.45)
        d.rectangle([60, 180, 300, 700], fill=(10, 14, 24, 255))
        glow_ellipse(img, 180, 300, 160, 220, (120, 150, 190), 0.18)
        d.rectangle([0, 1180, BW, BH], fill=(52, 41, 33, 255))
        d.rectangle([0, 1146, BW, 1190], fill=(66, 53, 42, 255))
        d.rectangle([2040, 1076, 2072, 1150], fill=(210, 200, 180, 255))
        glow_ellipse(img, 2056, 1056, 90, 130, (255, 200, 130), 0.5)
        _BG["lender"] = vignette(img, 0.5)
    return _BG["lender"].copy()


def shot03(t):
    img = _lender()
    p = ease(t / 8.9)
    z = lerp(1.0, 1.08, p)
    img = camera(img, CX, lerp(760, 800, p), z)
    d = ImageDraw.Draw(img)

    # ---- contract parchment
    ca = _ein(t, 0.1, 0.6)
    cr = (1 - ca) * 46
    if ca > 0.02:
        x0, y0, x1, y1 = 1150, 170 + cr, 1780, 900 + cr
        layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
        dl = ImageDraw.Draw(layer)
        a = int(255 * ca)
        dl.rounded_rectangle([x0, y0, x1, y1], radius=10,
                             fill=(198, 184, 154, a),
                             outline=(140, 122, 96, a), width=3)
        dl.rounded_rectangle([x0 + 16, y0 + 16, x1 - 16, y1 - 16], radius=6,
                             outline=(168, 150, 120, int(200 * ca)), width=2)
        img.alpha_composite(layer)
        cxm, ink = (x0 + x1) / 2, (74, 60, 44)
        tracked(img, (cxm, y0 + 66), "PROMISSORY NOTE", F["tiny"], ink,
                ca * _ein(t, 0.5), 10, shadow=False)
        d.line([x0 + 70, y0 + 102, x1 - 70, y0 + 102],
               fill=ink + (int(220 * ca),), width=2)
        e1 = ca * _ein(t, 0.9)
        e2 = ca * _ein(t, 1.3)
        e3 = ca * _ein(t, 1.7)
        tracked(img, (cxm, y0 + 152), "PRINCIPAL", F["tiny"], ink, e1, 8,
                shadow=False)
        tracked(img, (cxm, y0 + 232), "₡400", F["num_sm"], (58, 45, 30), e1,
                2, shadow=False)
        tracked(img, (cxm, y0 + 336), "COLLATERAL REQUIRED", F["tiny"], ink,
                e2, 8, shadow=False)
        tracked(img, (cxm, y0 + 416), "₡500", F["num_sm"], (58, 45, 30), e2,
                2, shadow=False)
        for i, term in enumerate(("RATE  ·  10% PER CYCLE, COMPOUNDED",
                                  "DEADLINE  ·  CYCLE 4, THEN REPOSSESSION",
                                  "MAXIMUM  ·  2 MEMORIES PLEDGED")):
            tracked(img, (x0 + 66, y0 + 512 + i * 44), term, F["tiny"],
                    (96, 82, 62), e3, 3, anchor="lt", shadow=False)

    # ---- three suspended memories
    orbs = [("MOTHER'S VOICE", 300, 430, AMBER, 300),
            ("CHILDHOOD HOME", 640, 430, TEAL, 200),
            ("FACE OF LOVE", 980, 430, ROSE, 400)]
    for i, (name, ox, oy, col, val) in enumerate(orbs):
        app = _ein(t, 1.4 + i * 0.45, 0.5)
        if app <= 0.02:
            continue
        fp = ease((t - (6.2 + i * 0.3)) / 1.1) if i < 2 else 0.0
        fp = clamp(fp)
        px, py = lerp(ox, 1465, fp), lerp(oy, 520, fp)
        pr = lerp(64, 24, fp)
        alpha = app * (1 - clamp((fp - 0.75) / 0.25))
        if i < 2:
            ra = 0.95 * (1 - fp) * _ein(t, 4.6 + i * 0.7, 0.3)
            ra *= 1 - clamp((t - (5.9 + i * 0.35)) / 0.5)
            if ra > 0.04:
                rr = pr + 26 + 6 * np.sin(t * 5)
                d.ellipse([px - rr, py - rr, px + rr, py + rr],
                          outline=AMBER + (int(255 * ra),), width=4)
        memory_orb(img, px, py, pr * (0.62 + 0.38 * app), col, alpha, t)
        if fp < 0.5:
            text_alpha(img, (ox, oy + 122), name, F["tiny"], IVORY, alpha)
            text_alpha(img, (ox, oy + 176), f"₡{val}", F["num_sm"], col, alpha)

    # ---- collateral counter
    sel = 0.0
    if t > 4.7:
        sel = lerp(0, 300, _ein(t, 4.7, 0.45))
    if t > 5.4:
        sel = lerp(300, 500, _ein(t, 5.4, 0.45))
    ca_chip = _ein(t, 1.6, 0.5) * (1 - _ein(t, 8.4, 0.4))
    chip(img, (80, 60), "SELECTED FOR COLLATERAL",
         f"₡{int(round(sel))} / ₡500", ca_chip, AMBER, w=470, h=118)
    met = _ein(t, 5.85, 0.35) * (1 - _ein(t, 8.4, 0.4))
    text_alpha(img, (315, 210), "COLLATERAL MET", F["tiny"], IVORY, met)

    # ---- the lender's line
    la = _ein(t, 3.0, 0.5) * (1 - _ein(t, 6.0, 0.45))
    text_alpha(img, (960, 978), "\u201cThree memories. Three prices.\u201d",
               F["lender"], ROSE, la)
    text_alpha(img, (960, 1038),
               "\u201cWhat are you willing to leave behind?\u201d",
               F["lender"], IVORY, la)

    # ---- player lantern: two lights leave
    lv = 1 - clamp((t - 6.4) / 1.0)
    lh = 1 - clamp((t - 6.7) / 1.0)
    lantern(img, 215, 770, 300, (lv, lh, 1.0), t, 1.0)

    # ---- wax seal
    if t > 7.3:
        sp = clamp((t - 7.3) / 0.35)
        sa = clamp((t - 7.3) / 0.25)
        scx, scy = 1590, 800 + cr
        r = 64 * min(1.0, sp * 1.35)
        if r > 4:
            d.ellipse([scx - r, scy - r, scx + r, scy + r],
                      fill=(122, 74, 78, int(245 * sa)),
                      outline=(88, 50, 54, int(255 * sa)), width=4)
            if r >= 27:
                d.ellipse([scx - r + 13, scy - r + 13, scx + r - 13, scy + r - 13],
                          outline=(168, 110, 114, int(230 * sa)), width=3)
            text_alpha(img, (scx, scy - 2), "L", font(FONT_DIR + "Baskerville.ttc",
                                                      int(r * 0.85)),
                       (232, 218, 208), sa)
            if sp < 1:
                glow_ellipse(img, scx, scy, 170, 170, AMBER, 0.5 * (1 - sp))

    # ---- loan accepted HUD
    chip(img, (1420, 44), "LOAN ACCEPTED", "₡400",
         _ein(t, 7.8, 0.5) * (1 - _ein(t, 8.5, 0.35)), AMBER)

    black(img, dip(t, 0, 8.9, 0.3, 0.35))
    return img


# ------------------------------------------------------------------ shot 04
ROSE_L = (214, 176, 180)
TEAL_L = (132, 190, 198)


def _door():
    if "door" not in _BG:
        img = canvas((14, 18, 28), (8, 10, 15))
        d = ImageDraw.Draw(img)
        for yy in range(0, BH, 170):
            xoff = 0 if (yy // 170) % 2 == 0 else 150
            for xx in range(-160 + xoff, BW, 300):
                d.rectangle([xx + 4, yy + 4, xx + 296, yy + 166],
                            fill=(24, 28, 38, 255), outline=(31, 36, 47, 255))
        dx0, dx1 = 940, 1380
        d.rounded_rectangle([dx0, 420, dx1, 1260], radius=210,
                            fill=(40, 45, 56, 255))
        iw, ih = dx1 - dx0 - 92, 1260 - 470
        inner = vgrad((iw, ih), (240, 228, 202), (214, 178, 120)).convert("RGBA")
        mask = Image.new("L", (iw, ih), 0)
        ImageDraw.Draw(mask).rounded_rectangle([0, 0, iw - 1, ih - 1],
                                               radius=170, fill=255)
        img.paste(inner, (dx0 + 46, 470), mask)
        d2 = ImageDraw.Draw(img)
        d2.rectangle([1046, 566, 1274, 764], fill=(246, 238, 218, 255),
                     outline=(150, 130, 100, 255), width=6)
        d2.line([1160, 566, 1160, 764], fill=(150, 130, 100, 255), width=5)
        d2.line([1046, 665, 1274, 665], fill=(150, 130, 100, 255), width=5)
        d2.rectangle([1032, 950, 1288, 1014], fill=(96, 76, 56, 255))
        for lx in (1046, 1274):
            d2.rectangle([lx, 1014, lx + 16, 1120], fill=(96, 76, 56, 255))
        glow_ellipse(img, 1160, 1340, 470, 250, (255, 226, 180), 0.42)
        mist(img, 1210, 280, 0.10)
        _BG["door"] = vignette(img, 0.55)
    return _BG["door"].copy()


def _face():
    if "face" not in _BG:
        img = canvas((13, 16, 26), (8, 9, 14))
        d = ImageDraw.Draw(img)
        px0, py0, px1, py1 = 980, 300, 1740, 1080
        d.rounded_rectangle([px0, py0, px1, py1], radius=18,
                            fill=(22, 26, 40, 255),
                            outline=(60, 66, 84, 255), width=8)
        glow_ellipse(img, (px0 + px1) // 2, (py0 + py1) // 2, 340, 370,
                     (255, 200, 160), 0.35)
        layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
        dl = ImageDraw.Draw(layer)
        fcx, fcy = 1370, 640
        dl.ellipse([fcx - 150, fcy - 190, fcx + 130, fcy + 130],
                   fill=(236, 206, 180, 130))
        dl.polygon([(fcx - 250, py1 - 40), (fcx - 150, fcy + 150),
                    (fcx + 210, fcy + 170), (fcx + 310, py1 - 40)],
                   fill=(232, 198, 174, 115))
        img.alpha_composite(layer.filter(ImageFilter.GaussianBlur(46)))
        d.line([(px0 + px1) // 2, py0 + 20, (px0 + px1) // 2, py1 - 20],
               fill=(52, 58, 76, 255), width=6)
        d.line([px0 + 20, (py0 + py1) // 2, px1 - 20, (py0 + py1) // 2],
               fill=(52, 58, 76, 255), width=6)
        d.rectangle([180, 340, 700, 1240], fill=(20, 23, 36, 255),
                    outline=(46, 52, 68, 255), width=6)
        d.rectangle([658, 362, 700, 1218], fill=(255, 214, 160, 255))
        glow_ellipse(img, 680, 790, 130, 470, (255, 208, 150), 0.4)
        mist(img, 1180, 300, 0.09)
        _BG["face"] = vignette(img, 0.55)
    return _BG["face"].copy()


def _seller_panel(img, t):
    qa = _ein(t, 2.8, 0.5) * (1 - _ein(t, 5.6, 0.4))
    text_alpha(img, (960, 702),
               "\u201cThe Lender carried the last street out in a jar.\u201d",
               F["body"], IVORY, qa)
    pa = _ein(t, 2.6, 0.5) * (1 - _ein(t, 5.7, 0.4))
    if pa <= 0.02:
        return
    panel(img, [380, 790, 1540, 1015], pa, border=ROSE)
    text_alpha(img, (424, 830), "THE SELLER  ·  FACE OF LOVE RETAINED",
               F["tiny"], (184, 194, 208), pa, anchor="lt")
    text_alpha(img, (444, 930), "+₡100", F["num"], ROSE_L, pa, anchor="lm")
    text_alpha(img, (770, 895), "he trusts you, so he says it plainly",
               F["small"], IVORY, pa, anchor="lm")
    text_alpha(img, (770, 955), "MOTHER'S VOICE WOULD HEAR MORE  +₡200",
               F["small"], AMBER, pa * 0.9, anchor="lm")


def _comparison(img, t):
    a = _ein(t, 6.0, 0.6) * (1 - _ein(t, 11.0, 0.4))
    if a <= 0.02:
        return
    up = (1 - _ein(t, 6.0, 0.6)) * 40
    text_alpha(img, (960, 178), "SELLER COMMISSION", F["small"], IVORY, a)
    sides = (
        (130, AMBER, "MOTHER'S VOICE · KEPT", "+₡200",
         "you hear what he means beneath the lie",
         "the higher commission", AMBER, 0.95, 3),
        (1020, ROSE, "MOTHER'S VOICE · PLEDGED", "+₡100",
         "he trusts you, so he says it plainly",
         "fallback · face of love retained", ROSE_L, 0.5, 2),
    )
    for bx0, col, head, val, sub1, sub2, orb_col, glow, wd in sides:
        by0, by1 = 260 + up, 790 + up
        panel(img, [bx0, by0, bx0 + 770, by1], a, border=col, width=wd)
        cxm = bx0 + 385
        memory_orb(img, cxm, by0 + 112, 58, orb_col, a * glow, t)
        text_alpha(img, (cxm, by0 + 235), head, F["small"],
                   IVORY if wd == 3 else (198, 180, 182), a)
        text_alpha(img, (cxm, by0 + 350), val, F["num"],
                   AMBER if wd == 3 else ROSE_L, a)
        text_alpha(img, (cxm, by0 + 458), sub1, F["small"], IVORY, a * 0.9)
        text_alpha(img, (cxm, by0 + 500), sub2, F["small"], (176, 186, 200),
                   a * 0.9)


def _value_card(img, t, a0, b0, name, val, vcol, sub, orbcol, orbpos):
    a = _ein(t, a0 + 0.3, 0.5) * (1 - _ein(t, b0 - 0.35, 0.35))
    if a <= 0.02:
        return
    up = (1 - _ein(t, a0 + 0.3, 0.5)) * 36
    panel(img, [460, 700 + up, 1460, 1010 + up], a, border=orbcol, width=3)
    text_alpha(img, (960, 762 + up), name, F["small"], IVORY, a)
    text_alpha(img, (960, 874 + up), val, F["num"], vcol, a)
    text_alpha(img, (960, 964 + up), sub, F["small"], (176, 186, 200),
               a * 0.95)
    ox, oy = orbpos
    memory_orb(img, ox + np.sin(t * 1.2) * 14, oy + np.cos(t * 0.9) * 12,
               74, orbcol, a, t)


def shot04(t):
    if t < 2.2:
        img = _market()
        p = ease(t / 2.2)
        img = camera(img, CX, lerp(820, 770, p), lerp(1.5, 1.15, p))
        pp = ease(t / 2.2)
        for k in (3, 2, 1):
            tk = clamp(pp - k * 0.09)
            memory_orb(img, lerp(280, 1290, tk), lerp(950, 500, tk),
                       lerp(90, 52, tk) * 0.8, AMBER, 0.30 * (1 - k * 0.22), t)
        memory_orb(img, lerp(280, 1290, pp), lerp(950, 500, pp),
                   lerp(90, 52, pp), AMBER, 1.0, t)
        b = dip(t, 0, 2.2, 0.2, 0.12)
    elif t < 6.0:
        img = _market()
        p = ease((t - 2.2) / 3.8)
        img = camera(img, CX, lerp(770, 800, p), lerp(1.15, 1.05, p))
        _seller_panel(img, t)
        b = dip(t, 2.2, 6.0, 0.12, 0.12)
    elif t < 11.4:
        img = camera(_market(), CX, 800, 1.05)
        black(img, 0.45)
        _comparison(img, t)
        b = dip(t, 6.0, 11.4, 0.12, 0.12)
    elif t < 14.2:
        p = ease((t - 11.4) / 2.8)
        img = camera(_door(), CX, lerp(720, 760, p), lerp(1.0, 1.08, p))
        _value_card(img, t, 11.4, 14.2, "CHILDHOOD HOME", "+₡250", TEAL_L,
                    "ARCHIVE STRONGBOX  ·  WHILE YOU KEEP IT", TEAL,
                    (300, 480))
        b = dip(t, 11.4, 14.2, 0.12, 0.12)
    elif t < 16.6:
        p = ease((t - 14.2) / 2.4)
        img = camera(_face(), CX, lerp(720, 760, p), lerp(1.0, 1.06, p))
        _value_card(img, t, 14.2, 16.6, "FACE OF LOVE", "+₡100", ROSE_L,
                    "BACKROOM ADVANCE  ·  WHILE YOU KEEP IT", ROSE,
                    (1640, 470))
        b = dip(t, 14.2, 16.6, 0.12, 0.12)
    elif t < 19.6:
        img = camera(_market(), lerp(1160, 1120, (t - 16.6) / 3.0), 800, 1.0)
        black(img, 0.6)
        q1 = _ein(t, 16.6, 0.6) * (1 - _ein(t, 19.3, 0.3))
        q2 = _ein(t, 16.9, 0.6) * (1 - _ein(t, 19.3, 0.3))
        for i, (ox, oy, col) in enumerate(((430, 330, AMBER),
                                           (1490, 350, TEAL_L),
                                           (960, 800, ROSE_L))):
            memory_orb(img, ox + np.sin(t * 0.9 + i * 2) * 20,
                       oy + np.cos(t * 0.7 + i) * 16, 46, col,
                       0.55 * min(q1, q2), t)
        text_alpha(img, (960, 480), "Some things are worth more",
                   F["title"], IVORY, q1)
        text_alpha(img, (960, 576), "while you still have them.",
                   F["title"], AMBER, q2)
        b = dip(t, 16.6, 19.6, 0.12, 0.12)
    else:
        p = ease((t - 19.6) / 4.6)
        img = camera(_market(), CX, lerp(800, 764, p), lerp(1.1, 1.0, p))
        for i, (ox, col, val) in enumerate(((500, AMBER, "+₡200"),
                                            (960, TEAL_L, "+₡250"),
                                            (1420, ROSE_L, "+₡100"))):
            oy = lerp(880, 430, ease(p)) + np.sin(t * 1.1 + i * 2) * 18
            memory_orb(img, ox, oy, 42, col, 0.9, t)
            text_alpha(img, (ox, oy - 100), val, F["num_sm"], col,
                       _ein(t, 20.7 + i * 0.5, 0.6) * (1 - _ein(t, 23.6, 0.4)))
        b = dip(t, 19.6, 24.2, 0.12, 0.4)
    black(img, b)
    return img
