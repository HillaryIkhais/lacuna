"""LACUNA film - shot renderers 05-08. t = local seconds within the shot."""
import numpy as np
from PIL import Image, ImageDraw
from art import (W, H, MIDNIGHT, INDIGO, TEAL, AMBER, GOLD, IVORY, ROSE, BLACK,
                 F, FONT_DIR, font, clamp, ease, lerp, lerp_color, fade_in,
                 vgrad, vignette, glow_ellipse, memory_orb, lantern, text_alpha,
                 stars, camera)

M = 200
BW, BH = W + 2 * M, H + 2 * M
CX, CY = BW // 2, BH // 2
_BG = {}


# ---------------------------------------------------------------- helpers
def canvas(top, bottom):
    return vgrad((BW, BH), top, bottom).convert("RGBA")


def dip(t, a, b, fin=0.25, fout=0.25):
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


def mist(img, cy, h, alpha, color=(196, 208, 220), x0=0, x1=W):
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



# ---------------------------------------------------------------- shot 05
def _tower():
    if "tower" not in _BG:
        img = canvas((13, 16, 26), (7, 8, 12))
        d = ImageDraw.Draw(img)
        star_layer(img, 60, 9, 700)
        # cliff base
        d.polygon([(0, BH), (460, 1220), (1860, 1220), (BW, BH)],
                  fill=(40, 44, 56, 255))
        d.polygon([(0, 1220), (460, 1260), (1860, 1260), (BW, 1220)],
                  fill=(30, 34, 46, 255))
        skyline(d, 1120, (12, 15, 22), 30, amp=260, win=0.02)
        # tower block
        d.rectangle([800, 120, 1120, 1220], fill=(16, 20, 30, 255))
        d.rectangle([792, 1120, 1128, 1220], fill=(10, 12, 20, 255))
        # enormous gears
        for gy, gsz in ((400, 240), (640, 200), (880, 260)):
            ggx, ggy = 960, gy
            d.ellipse([ggx - gsz, ggy - gsz, ggx + gsz, ggy + gsz],
                      fill=(8, 10, 15, 255),
                      outline=(150, 122, 80, 255), width=10)
            d.ellipse([ggx - gsz + 28, ggy - gsz + 28,
                       ggx + gsz - 28, ggy + gsz - 28],
                      outline=(70, 56, 36, 255), width=4)
            for kk in range(8):
                ang = kk * np.pi / 4 + ggx * 0.01
                d.line([ggx, ggy, ggx + gsz * 0.86 * np.cos(ang),
                        ggy + gsz * 0.86 * np.sin(ang)],
                       fill=(150, 122, 80, 160), width=6)
            d.ellipse([ggx - 26, ggy - 26, ggx + 26, ggy + 26],
                      fill=(185, 151, 98, 255))
        # bell chamber (top)
        d.rectangle([760, 20, 1160, 170], fill=(14, 17, 26, 255))
        d.polygon([(740, 170), (1180, 170), (1180, 110), (740, 110)],
                  fill=(10, 12, 19, 255))
        # giant bell
        d.polygon([(960, 300), (1120, 420), (1120, 620),
                   (1120, 780), (960, 900), (800, 780), (800, 620), (800, 420)],
                  fill=(100, 84, 68, 255),
                      outline=(150, 122, 80, 255), width=4)
        d.ellipse([890, 316, 1030, 426], fill=(140, 116, 94, 255))
        d.line([960, 316, 960, 426], fill=(150, 122, 80, 255), width=3)
        d.rectangle([930, 426, 990, 780], fill=(96, 80, 64, 255))
        glow_ellipse(img, 960, 570, 300, 420, AMBER, 0.14)
        mist(img, 980, 260, 0.12)
        _BG["tower"] = vignette(img, 0.52)
    return _BG["tower"].copy()


def _debt_panel(img, t, base_y=470):
    """The HUD debt counter: principal → interest compounding."""
    a = _ein(t, 1.0, 0.5) * (1 - _ein(t, 8.0, 0.4))
    if a <= 0.02:
        return
    panel(img, [1240, 220, 1860, 410], a, border=AMBER, width=2)
    text_alpha(img, (1550, 258), "DEBT", F["small"], IVORY, a)
    # interest curve
    cyc = max(0, t)
    debt = round(400 * (1.1 ** (t / 2.0)), 0)
    text_alpha(img, (1550, 322), f"₡{int(debt)}", F["num"],
               AMBER, a)
    text_alpha(img, (1550, 386), "10% per cycle · compounded",
               F["tiny"], (196, 184, 170), a * 0.85)
    text_alpha(img, (1290, 390), "Principal ₡400  ·  Balance now ₡484  ·  Cycle 3 of 4",
               F["tiny"], IVORY, a * 0.9)


def shot05(t):
    if t < 3.4:
        img = _tower()
        p = ease(t / 3.4)
        img = camera(img, CX, lerp(800, 480, p), lerp(1.25, 1.05, p))
        glow_ellipse(img, 960, 470, 300, 420, AMBER,
                     0.14 + 0.06 * np.sin(t * 11))
        bob = abs(np.sin(t * 5)) * 4
        player(img, lerp(540, 1140, p), 1160, 1.2, (1, 1, 1), t, 1.0, 1, bob)
        b = dip(t, 0, 3.4, 0.3, 0.14)
    elif t < 7.0:
        img = _tower()
        p = ease((t - 3.4) / 3.6)
        img = camera(img, CX, lerp(480, 390, p), lerp(1.05, 1.0, p))
        glow_ellipse(img, 960, 470, 300, 420, AMBER,
                     0.14 + 0.05 * np.sin(t * 11 + 1))
        d = ImageDraw.Draw(img)
        # bell strikes
        strike = clamp(np.sin((t - 3.4) * 3.6) * 12)
        d.line([960 + strike, 410, 960 + strike, 300],
               fill=(150, 122, 80, 255), width=16)
        d.line([960 - strike, 410, 960 - strike, 300],
               fill=(150, 122, 80, 255), width=16)
        player(img, 1430, 1160, 1.15, (1, 1, 1), t, 1.0, -1)
        b = dip(t, 3.4, 7.0, 0.14, 0.14)
    else:
        img = _tower()
        p = ease((t - 7.0) / 1.2) if t < 8.2 else 1.0
        z = lerp(1.0, 1.04, p)
        img = camera(img, CX, lerp(390, 360, p), z)
        glow_ellipse(img, 960, 470, 300, 420, AMBER,
                     0.14 + 0.04 * np.sin(t * 11 + 2))
        _debt_panel(img, t)
        b = dip(t, 7.0, 13.0, 0.14, 0.3)
    black(img, b)
    return img


def _ein(t, a, f=0.45):
    return ease((t - a) / f)



# ---------------------------------------------------------------- shot 06
def _archive():
    if "archive" not in _BG:
        img = canvas((10, 12, 20), (6, 8, 14))
        d = ImageDraw.Draw(img)
        d.rectangle([0, 0, BW, BH], fill=(10, 13, 22, 255))
        # flooded floor
        d.rectangle([0, 1000, BW, BH], fill=(6, 9, 14, 255))
        # towering shelves
        rng = np.random.RandomState(33)
        for sx in range(-200, BW, 340):
            sh = rng.randint(300, 700)
            d.rectangle([sx, 1000 - sh, sx + 300, 1000],
                        fill=(22, 26, 38, 255),
                        outline=(34, 40, 54, 255), width=2)
            for jy in range(1000 - sh, 1000, 110):
                d.line([sx, jy, sx + 300, jy], fill=(30, 36, 48, 255), width=1)
        # distant sealed door
        d.rectangle([700, 150, 1220, 1000], fill=(14, 17, 28, 255))
        d.rectangle([820, 220, 1100, 700], fill=(18, 21, 34, 255))
        d.ellipse([960, 280, 964, 284], fill=(214, 166, 91, 255))
        d.rectangle([952, 240, 968, 280], fill=(185, 151, 98, 255))
        # shafts of light
        for sx in (440, 1480):
            d.polygon([(sx, 260), (sx + 200, 420), (sx + 200, 1000), (sx, 1000)],
                      fill=(255, 230, 190, 14))
        # strongbox glow (bottom centre)
        glow_ellipse(img, CX, 1380, 520, 260, AMBER, 0.26)
        glow_ellipse(img, CX, 1360, 110, 70, (255, 230, 190), 0.6)
        mist(img, 1040, 320, 0.14)
        _BG["archive"] = vignette(img, 0.55)
    return _BG["archive"].copy()


def shot06(t):
    if t < 3.2:
        img = _archive()
        p = ease(t / 3.2)
        img = camera(img, CX, lerp(900, 740, p), lerp(1.4, 1.05, p))
        b = dip(t, 0, 3.2, 0.3, 0.14)
    elif t < 6.2:
        img = camera(_archive(), lerp(CX, CX + 180, (t - 3.2) / 3.0), 740, 1.1)
        d = ImageDraw.Draw(img)
        d.line([1000, 700, 1000 + np.sin(t * 4) * 6, 700],
               fill=(214, 166, 91, 180), width=8)
        b = dip(t, 3.2, 6.2, 0.14, 0.14)
    else:
        img = _archive()
        p = ease((t - 6.2) / 3.4)
        z = lerp(1.05, 1.0, p)
        img = camera(img, lerp(CX, CX + 180, p), lerp(740, 860, p), z)
        glow_ellipse(img, CX, 1380, 520, 260, AMBER,
                     0.20 + 0.04 * np.sin(t * 1.3))
        # evidence counter
        a = _ein(t, 6.5, 0.5)
        text_alpha(img, (150, 78), f"EVIDENCE  ·  {int(clamp(t - 6.2) * 3)}/5",
                   F["small"], IVORY, a)
        b = dip(t, 6.2, 15.6, 0.14, 0.35)
    black(img, b)
    return img


# ---------------------------------------------------------------- shot 07
def _repay():
    if "repay" not in _BG:
        img = canvas((14, 17, 26), (8, 10, 14))
        d = ImageDraw.Draw(img)
        star_layer(img, 130, 37, 820)
        d.polygon([(0, BH), (460, 1140), (1860, 1140), (BW, BH)],
                  fill=(38, 42, 54, 255))
        skyline(d, 1040, (12, 15, 24), 34, amp=250, win=0.02)
        skyline(d, 1140, (16, 20, 32), 35, amp=210, win=0.05)
        skyline(d, 1240, (10, 12, 18), 36, amp=160, win=0.02)
        # Bell Tower silhouette right
        d.rectangle([1720, 520, 1816, 1140], fill=(14, 17, 26, 255))
        d.polygon([(1706, 520), (1830, 520), (1768, 420)], fill=(14, 17, 26, 255))
        # contract burning away at bottom
        d.rectangle([0, 1180, BW, BH], fill=(86, 60, 38, 180))
        mist(img, 1080, 280, 0.10)
        _BG["repay"] = vignette(img, 0.55)
    return _BG["repay"].copy()


def shot07(t):
    if t < 2.8:
        img = _repay()
        p = ease(t / 2.8)
        img = camera(img, CX, lerp(1040, 820, p), lerp(1.25, 1.05, p))
        b = dip(t, 0, 2.8, 0.3, 0.14)
    elif t < 6.0:
        img = _repay()
        p = ease((t - 2.8) / 3.2)
        img = camera(img, CX, lerp(820, 640, p), lerp(1.05, 1.0, p))
        b = dip(t, 2.8, 6.0, 0.14, 0.14)
    else:
        p = ease((t - 6.0) / 6.0) if t < 12.0 else 1.0
        img = _repay()
        img = camera(img, CX, lerp(640, 700, p), lerp(1.0, 1.03, p))
        # lantern fully restored - warm halo
        halo = 0.45 + 0.25 * np.sin(t * 1.8) + 0.1 * np.sin(t * 4.2)
        glow_ellipse(img, CX, 700, 460, 460, AMBER, clamp(halo))
        # player with all three lights back
        player(img, CX, 1160, 1.25, (1, 1, 1), t, 0.98 + 0.02 * np.sin(t * 2.0))
        d = ImageDraw.Draw(img)
        # ORBS returning to lantern
        for k, (ox, oy, col) in enumerate(((600, 560, AMBER),
                                           (1720, 620, TEAL),
                                           (CX, 420, ROSE))):
            ap = clamp((t - 6.6 - k * 0.5) / 1.1)
            if ap > 0.02:
                ep = ease(clamp(ap))
                rx = ox + (CX - ox) * ep
                ry = oy + (700 - oy) * ep
                memory_orb(img, rx, ry, lerp(52, 14, ep), col, min(0.95, ap * 1.1), t)
        text_alpha(img, (CX, 240), "DEBT SETTLED", F["title"], AMBER,
                   _ein(t, 6.4, 0.5) * (1 - _ein(t, 11.5, 0.4)))
        text_alpha(img, (CX, 330), "MEMORIES RESTORED", F["small"], IVORY,
                   _ein(t, 6.9, 0.5) * (1 - _ein(t, 11.5, 0.4)))
        b = dip(t, 6.0, 12.0, 0.14, 0.3)
    black(img, b)
    return img


# ---------------------------------------------------------------- shot 08
def _vista():
    if "vista" not in _BG:
        img = canvas((9, 11, 18), (5, 6, 10))
        d = ImageDraw.Draw(img)
        star_layer(img, 200, 41, 860)
        # moon + distant lights
        glow_ellipse(img, 1860, 140, 220, 220, (226, 222, 210), 0.30)
        d.ellipse([1814, 94, 1906, 186], fill=(228, 224, 212, 235))
        # skyline silhouettes
        skyline(d, 1300, (7, 9, 14), 46, amp=420, win=0.02)
        skyline(d, 1380, (11, 13, 20), 47, amp=340, win=0.04)
        skyline(d, 1460, (5, 7, 12), 48, amp=280, win=0.02)
        # Bell Tower silhouette (centre-right)
        d.rectangle([1230, 300, 1326, 1300], fill=(7, 9, 14, 255))
        d.polygon([(1216, 300), (1340, 300), (1278, 200)], fill=(7, 9, 14, 255))
        d.rectangle([1254, 350, 1302, 440], fill=(5, 7, 11, 255))
        d.ellipse([1260, 366, 1296, 414], fill=(100, 84, 68, 255))
        # Memory Market glow (distance left)
        glow_ellipse(img, 660, 1160, 760, 340, AMBER, 0.22)
        glow_ellipse(img, 660, 1154, 280, 140, (255, 230, 190), 0.35)
        for sx in (340, 700, 980):
            d.polygon([(sx - 40, 1180), (sx + 110, 1180), (sx + 98, 1136),
                       (sx - 28, 1136)], fill=(7, 9, 14, 255))
        mist(img, 1240, 300, 0.13)
        _BG["vista"] = vignette(img, 0.58)
    return _BG["vista"].copy()


def shot08(t):
    p = ease(t / 11.5) if t < 11.5 else 1.0
    img = camera(_vista(), lerp(CX, CX - 60, p), lerp(820, 760, p),
                 lerp(1.08, 1.0, p))
    d = ImageDraw.Draw(img)
    # player silhouette looking out
    plx, ply = lerp(1220, CX, p), lerp(940, 960, p)
    d.ellipse([plx - 60, ply - 80, plx + 60, ply + 80], fill=BLACK)
    d.rectangle([plx - 20, ply + 80, plx + 20, ply + 180], fill=BLACK)
    # lantern glow behind silhouette
    glow_ellipse(img, plx, ply + 20, 52, 52, AMBER,
                 0.8 + 0.2 * np.sin(t * 1.3))
    d.ellipse([plx - 22, ply - 2, plx + 22, ply + 42],
              fill=(255, 214, 160, 240))
    # rays
    d.line([plx - 40, ply - 20, plx - 140, ply - 160],
           fill=(150, 122, 80, 60), width=2)
    d.line([plx + 40, ply - 20, plx + 140, ply - 160],
           fill=(150, 122, 80, 60), width=2)
    # LACUNA title
    ta = clamp((t - 2.2) / 1.3)
    text_alpha(img, (CX, 430), "LACUNA", F["display"], IVORY, ta,
               tracking=34)
    ta2 = clamp((t - 3.8) / 1.1)
    text_alpha(img, (CX, 518), "THE PRICE OF REMEMBERING", F["h2"],
               AMBER, ta2, tracking=14)
    b = dip(t, 0, 12.5, 0.3, 0.3)
    black(img, b)
    return img
