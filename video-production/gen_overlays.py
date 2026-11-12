#!/usr/bin/env python3
"""
Generate typography overlay PNGs for the LACUNA demo video.
Each overlay is a full-frame transparent PNG with text, used with ffmpeg overlay filter.
"""

from PIL import Image, ImageDraw, ImageFont
import os

OUTPUT_DIR = "/Users/ikhaisoshuare/Downloads/ZOUD GAMEPLAY/video-production/captures/overlays"
os.makedirs(OUTPUT_DIR, exist_ok=True)

W, H = 1920, 1080

# Fonts
TITLE_FONT = "/System/Library/Fonts/Supplemental/Baskerville.ttc"
BODY_FONT = "/System/Library/Fonts/Times.ttc"

# Colors
WHITE = (255, 255, 255, 255)
GOLD = (224, 184, 102, 255)
OFFWHITE = (200, 194, 221, 255)

def make_overlay(text, font_path, font_size, font_color, y_ratio=0.5, x_center=True, name="overlay", shadow=True):
    """Create a full-frame transparent PNG with text centered."""
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    try:
        font = ImageFont.truetype(font_path, font_size)
    except:
        font = ImageFont.load_default()
    
    # Get text size
    bbox = draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    
    x = (W - text_w) // 2 if x_center else 120
    y = int(H * y_ratio) - text_h // 2
    
    # Shadow
    if shadow:
        draw.text((x + 2, y + 2), text, font=font, fill=(0, 0, 0, 120))
    
    # Text
    draw.text((x, y), text, font=font, fill=font_color)
    
    path = os.path.join(OUTPUT_DIR, f"{name}.png")
    img.save(path)
    print(f"Created: {path} ({text_w}x{text_h} text at {x},{y})")
    return path

# Scene 1: The Offer (0-7s)
make_overlay("A lender will give you \u20ac400.", BODY_FONT, 36, WHITE, 0.55, True, "s1_line1", shadow=True)
make_overlay("It wants one of your memories.", BODY_FONT, 32, GOLD, 0.62, True, "s1_line2", shadow=True)

# Scene 2: The World (7-19s)
make_overlay("LACUNA", TITLE_FONT, 72, WHITE, 0.33, True, "s2_title", shadow=True)
make_overlay("The price of remembering.", TITLE_FONT, 24, GOLD, 0.42, True, "s2_sub", shadow=True)
make_overlay("In this city, even your past has a price.", BODY_FONT, 24, OFFWHITE, 0.75, True, "s2_line", shadow=True)

# Scene 3: The Decision (19-36s)
make_overlay("The lender sees three assets.", BODY_FONT, 30, GOLD, 0.4, True, "s3_line1", shadow=True)
make_overlay("The player sees three ways to survive.", BODY_FONT, 30, GOLD, 0.48, True, "s3_line2", shadow=True)

# Scene 4: The Consequence (36-57s)
make_overlay("Pledge the wrong memory,", BODY_FONT, 30, GOLD, 0.4, True, "s4_line1", shadow=True)
make_overlay("and you lose an opportunity that could have paid you.", BODY_FONT, 30, GOLD, 0.48, True, "s4_line2", shadow=True)

# Scene 5: The Clock (57-72s)
make_overlay("10% interest per cycle.", BODY_FONT, 30, GOLD, 0.4, True, "s5_line1", shadow=True)
make_overlay("Four cycles to settle.", BODY_FONT, 30, GOLD, 0.48, True, "s5_line2", shadow=True)

# Scene 6: The Payoff (72-97s)
make_overlay("Borrowing gets you through the door.", BODY_FONT, 30, GOLD, 0.4, True, "s6_line1", shadow=True)
make_overlay("What you sacrifice determines what happens after.", BODY_FONT, 30, GOLD, 0.48, True, "s6_line2", shadow=True)

# Scene 7: The Last Question (97-113s)
make_overlay("LACUNA", TITLE_FONT, 72, WHITE, 0.33, True, "s7_title", shadow=True)
make_overlay("The price of remembering.", TITLE_FONT, 24, GOLD, 0.42, True, "s7_sub", shadow=True)
make_overlay("What would you sell to afford your future?", BODY_FONT, 26, OFFWHITE, 0.75, True, "s7_line", shadow=True)

print("\nAll overlays created in:", OUTPUT_DIR)
