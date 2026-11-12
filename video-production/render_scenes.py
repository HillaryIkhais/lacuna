#!/usr/bin/env python3
"""
Render LACUNA cinematic scenes using PIL and numpy.
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np
import os

OUTPUT_DIR = "/Users/ikhaisoshuare/Downloads/ZOUD GAMEPLAY/video-production/scenes"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Constants
WIDTH, HEIGHT = 1920, 1080
FPS = 30

# Colors
GOLD = (224, 184, 102, 255)
IVORY = (248, 245, 250, 255)
DEEP_BLUE = (5, 4, 10, 255)
DARK_BLUE = (10, 0, 26, 255)
TEAL = (42, 157, 143, 255)
BRASS = (184, 134, 90, 255)
GREEN = (76, 175, 80, 255)
RED = (255, 82, 82, 255)

# Font paths
try:
    BASKERVILLE = ImageFont.truetype("/System/Library/Fonts/Supplemental/Baskerville.ttc", 48)
    BASKERVILLE_BOLD = ImageFont.truetype("/System/Library/Fonts/Supplemental/Baskerville.ttc", 48)
    TIMES = ImageFont.truetype("/System/Library/Fonts/Times.ttc", 24)
    TIMES_BOLD = ImageFont.truetype("/System/Library/Fonts/Times.ttc", 28)
    SMALL = ImageFont.truetype("/System/Library/Fonts/Times.ttc", 14)
    TITLE_FONT = ImageFont.truetype("/System/Library/Fonts/Supplemental/Baskerville.ttc", 96)
except:
    BASKERVILLE = ImageFont.load_default()
    TIMES = ImageFont.load_default()

def create_base_image():
    """Create a dark gradient base."""
    img = Image.new("RGBA", (WIDTH, HEIGHT), DARK_BLUE)
    # Add gradient
    for y in range(HEIGHT):
        t = y / HEIGHT
        r = int(5 * (1 - t) + 10 * t)
        g = int(4 * (1 - t) + 10 * t)
        b = int(10 * (1 - t) + 26 * t)
        for x in range(WIDTH):
            img.putpixel((x, y), (r, g, b, 255))
    return img

def add_stars(img, num_stars=100):
    """Add starfield effect."""
    np.random.seed(42)
    for _ in range(num_stars):
        x = np.random.randint(0, WIDTH)
        y = np.random.randint(0, HEIGHT)
        size = np.random.randint(1, 3)
        brightness = np.random.randint(150, 255)
        for sx in range(-size, size + 1):
            for sy in range(-size, size + 1):
                if 0 <= x + sx < WIDTH and 0 <= y + sy < HEIGHT:
                    img.putpixel((x + sx, y + sy), (brightness, brightness, brightness, 255))
    return img

def render_scene1():
    """Scene 1: The Memory (0-10s)"""
    print("Rendering scene 1: The Memory...")
    
    # Create base
    img = create_base_image()
    
    # Fade in from black
    draw = ImageDraw.Draw(img)
    
    # Memory orb (amber circle)
    center_x, center_y = WIDTH // 2, HEIGHT // 2
    radius = 100
    orb = Image.new("RGBA", (radius * 2, radius * 2), (0, 0, 0, 0))
    orb_draw = ImageDraw.Draw(orb)
    
    # Radial gradient for orb
    for r in range(radius, 0, -1):
        t = (radius - r) / radius
        color = (int(255 * (0.8 + 0.2 * t)), int(213 * (0.7 + 0.3 * t)), int(77 * (1 + t)), 220)
        orb_draw.ellipse([r, r, radius * 2 - r, radius * 2 - r], fill=color, outline=None)
    
    # Add shimmer
    for i in range(5):
        angle = np.random.random() * 2 * np.pi
        length = radius * 0.8
        x1 = center_x + int(np.cos(angle) * length * 0.7)
        y1 = center_y + int(np.sin(angle) * length * 0.7)
        x2 = center_x + int(np.cos(angle) * length * 0.9)
        y2 = center_y + int(np.sin(angle) * length * 0.9)
        orb_draw.line([(x1 - center_x + radius, y1 - center_y + radius), 
                       (x2 - center_x + radius, y2 - center_y + radius)], 
                      fill=(255, 255, 255, 100), width=2)
    
    img.paste(orb, (center_x - radius, center_y - radius), orb)
    
    # Text: "What is a memory worth?"
    draw.text((WIDTH // 2, 900), "What is a memory worth?", 
              font=BASKERVILLE, fill=IVORY, anchor="mt")
    
    # Text: "The price of remembering"
    draw.text((WIDTH // 2, 960), "The price of remembering", 
              font=TIMES, fill=GOLD, anchor="mt")
    
    # Save
    img.save(f"{OUTPUT_DIR}/scene1.png")
    return img

def render_scene2():
    """Scene 2: The City (10-24s)"""
    print("Rendering scene 2: The City...")
    
    img = create_base_image()
    img = add_stars(img, 150)
    draw = ImageDraw.Draw(img)
    
    # Floating buildings (abstract)
    buildings = [
        (100, 100, 700, 300, TEAL, 0.4),
        (1220, 100, 1820, 300, TEAL, 0.4),
        (400, 400, 1520, 700, (42, 157, 143, 100), 0.3),
        (200, 600, 1720, 800, (30, 30, 50, 100), 0.2),
    ]
    
    for x1, y1, x2, y2, color, alpha in buildings:
        # Create building layer
        building = Image.new("RGBA", (x2-x1, y2-y1), color)
        draw_building = ImageDraw.Draw(building)
        
        # Add windows
        for bx in range(20, x2-x1-20, 30):
            for by in range(20, y2-y1-20, 30):
                if np.random.random() > 0.3:
                    draw_building.rectangle([bx, by, bx+10, by+14], fill=(200, 200, 200, 100))
        
        img.paste(building, (x1, y1), building)
    
    # Lantern
    lantern_x, lantern_y = WIDTH // 2, HEIGHT // 2
    lantern = Image.new("RGBA", (40, 600), (0, 0, 0, 0))
    draw_lantern = ImageDraw.Draw(lantern)
    draw_lantern.ellipse([5, 5, 35, 35], fill=(220, 215, 168, 255))
    draw_lantern.rectangle([15, 300, 25, 400], fill=(220, 215, 168, 255))
    img.paste(lantern, (lantern_x - 20, lantern_y - 300), lantern)
    
    # Glow effect
    glow = Image.new("RGBA", (200, 200), (0, 0, 0, 0))
    draw_glow = ImageDraw.Draw(glow)
    draw_glow.ellipse([0, 0, 200, 200], fill=(255, 168, 77, 50))
    img.paste(glow, (lantern_x - 100, lantern_y - 100), glow)
    
    # Title: LACUNA
    draw.text((WIDTH // 2, 200), "LACUNA", font=TITLE_FONT, fill=IVORY, anchor="mt")
    
    # Subtitle
    draw.text((WIDTH // 2, 320), "The price of remembering", font=BASKERVILLE, fill=GOLD, anchor="mt")
    
    # Quote
    draw.text((WIDTH // 2, 850), "In this city, even your past has a price.", 
              font=TIMES, fill=(200, 194, 221, 255), anchor="mt")
    
    img.save(f"{OUTPUT_DIR}/scene2.png")
    return img

def render_scene3():
    """Scene 3: The Contract (24-42s)"""
    print("Rendering scene 3: The Contract...")
    
    img = create_base_image()
    img = add_stars(img, 80)
    draw = ImageDraw.Draw(img)
    
    # Contract overlay
    contract_x, contract_y = WIDTH // 2, HEIGHT // 2
    contract_w, contract_h = 600, 700
    contract = Image.new("RGBA", (contract_w, contract_h), (15, 10, 30, 240))
    draw_contract = ImageDraw.Draw(contract)
    
    # Border
    draw_contract.rectangle([0, 0, contract_w-1, contract_h-1], outline=GOLD, width=2)
    
    # Header
    draw_contract.text((contract_w//2, 60), "LOAN AGREEMENT", font=BASKERVILLE_BOLD, fill=GOLD, anchor="mt")
    draw_contract.text((contract_w//2, 100), "The Lender Will See You Differently", 
                       font=TIMES, fill=(184, 169, 194, 255), anchor="mt")
    
    # Terms
    y_offset = 140
    terms = [
        ("Principal:", "₡400"),
        ("Interest:", "10% per cycle"),
        ("Deadline:", "4 cycles"),
        ("Seal Fee:", "₡500"),
        ("Archive Toll:", "₡100"),
    ]
    
    for label, value in terms:
        draw_contract.text((50, y_offset), label, font=SMALL, fill=(138, 169, 194, 255))
        draw_contract.text((150, y_offset), value, font=SMALL, fill=GOLD if "₡" in value or "10%" in value else IVORY)
        y_offset += 40
    
    # Memory choice prompt
    draw_contract.text((contract_w//2, 520), "Choose one memory to pledge.", 
                       font=TIMES_BOLD, fill=IVORY, anchor="mt")
    
    # Memory orbs
    # Voice (amber) - positioned at y=560 center with radius 30
    draw_contract.ellipse([390, 530, 490, 590], fill=(255, 183, 77, 255), outline=(218, 168, 80, 255))
    draw_contract.text((440, 680), "MOTHER'S VOICE", font=SMALL, fill=IVORY, anchor="mt")
    draw_contract.text((440, 700), "Collateral: ₡300", font=SMALL, fill=(138, 169, 194, 255))
    draw_contract.text((440, 715), "Use: +₡200 seller", font=SMALL, fill=(138, 169, 194, 255))
    
    # Home (green)
    draw_contract.ellipse([1190, 530, 1290, 590], fill=(129, 199, 132, 255), outline=(76, 175, 80, 255))
    draw_contract.text((1240, 680), "CHILDHOOD HOME", font=SMALL, fill=IVORY, anchor="mt")
    draw_contract.text((1240, 700), "Collateral: ₡200", font=SMALL, fill=(138, 169, 194, 255))
    draw_contract.text((1240, 715), "Use: +₡250 archive", font=SMALL, fill=(138, 169, 194, 255))
    
    # Love (purple) - centered at x=800, y=670
    draw_contract.ellipse([710, 600, 890, 740], fill=(186, 104, 200, 255), outline=(156, 140, 200, 255))
    draw_contract.text((WIDTH//2, 800), "FACE OF LOVE", font=SMALL, fill=IVORY, anchor="mt")
    draw_contract.text((WIDTH//2, 815), "Collateral: ₡400", font=SMALL, fill=(138, 169, 194, 255))
    draw_contract.text((WIDTH//2, 830), "Use: +₡100 backroom", font=SMALL, fill=(138, 169, 194, 255))
    
    # Labels
    draw_contract.text((contract_w//2, 920), "The lender sees three assets.", font=TIMES_BOLD, fill=IVORY, anchor="mt")
    draw_contract.text((contract_w//2, 960), "But the player sees three ways to survive.", font=TIMES, fill=GOLD, anchor="mt")
    
    img.paste(contract, (WIDTH//2 - contract_w//2, HEIGHT//2 - contract_h//2), contract)
    
    img.save(f"{OUTPUT_DIR}/scene3.png")
    return img

def render_scene4():
    """Scene 4: Value Comparison (42-62s)"""
    print("Rendering scene 4: Value Comparison...")
    
    img = create_base_image()
    img = add_stars(img, 60)
    draw = ImageDraw.Draw(img)
    
    # Two comparison panels
    panel_w, panel_h = 420, 360
    panel_y = 220
    
    # Lender's view (left)
    lender_panel = Image.new("RGBA", (panel_w, panel_h), (15, 10, 30, 240))
    draw_panel = ImageDraw.Draw(lender_panel)
    draw_panel.rectangle([0, 0, panel_w-1, panel_h-1], outline=(102, 102, 102, 255), width=1)
    draw_panel.text((panel_w//2, 80), "LENDER SEES", font=SMALL, fill=(138, 169, 194, 255), anchor="mt")
    draw_panel.text((panel_w//2, 120), "COLLATERAL VALUE", font=TIMES_BOLD, fill=GOLD, anchor="mt")
    
    # Values
    values = [
        ("₡300", (135, 240), (255, 183, 77)),   # Voice
        ("₡200", (135, 280), (129, 199, 132)),  # Home
        ("₡400", (135, 320), (186, 104, 200)),  # Love
    ]
    labels = ["Voice", "Home", "Love"]
    for i, (val, pos, color) in enumerate(values):
        draw_panel.text((pos[0], pos[1]-30), val, font=ImageFont.truetype("/System/Library/Fonts/Times.ttc", 24), fill=color)
        draw_panel.text((pos[0], pos[1]-10), labels[i], font=ImageFont.truetype("/System/Library/Fonts/Times.ttc", 12), fill=(170, 170, 200, 255))
    
    img.paste(lender_panel, (160, panel_y), lender_panel)
    
    # Player's view (right)
    player_panel = Image.new("RGBA", (panel_w, panel_h), (15, 10, 30, 240))
    draw_panel = ImageDraw.Draw(player_panel)
    draw_panel.rectangle([0, 0, panel_w-1, panel_h-1], outline=(102, 102, 102, 255), width=1)
    draw_panel.text((panel_w//2, 80), "PLAYER HAS", font=SMALL, fill=(138, 169, 194, 255), anchor="mt")
    draw_panel.text((panel_w//2, 120), "PRODUCTIVE VALUE", font=TIMES_BOLD, fill=GOLD, anchor="mt")
    
    # Values (higher)
    prod_values = [
        ("₡500", (135, 260), (255, 183, 77)),   # Voice
        ("₡450", (135, 290), (129, 199, 132)),  # Home
        ("₡100", (135, 320), (186, 104, 200)),  # Love
    ]
    for i, (val, pos, color) in enumerate(prod_values):
        draw_panel.text((pos[0], pos[1]-20), val, font=ImageFont.truetype("/System/Library/Fonts/Times.ttc", 24), fill=color)
        info = ["Voice: +₡200 seller", "Home: +₡250 archive", "Love: +₡100 backroom"][i]
        draw_panel.text((pos[0], pos[1]+5), info, font=ImageFont.truetype("/System/Library/Fonts/Times.ttc", 10), fill=(138, 169, 194, 255))
    
    img.paste(player_panel, (1500, panel_y), player_panel)
    
    # Divider line
    draw.line([WIDTH//2, 400, WIDTH//2, 740], fill=GOLD, width=2)
    
    # Key insight
    draw.text((WIDTH//2, 850), "The lender cannot see what your memories enable.", 
              font=TIMES, fill=IVORY, anchor="mt")
    draw.text((WIDTH//2, 900), "Some memories are worth more while you still have them.", 
              font=BASKERVILLE, fill=GOLD, anchor="mt")
    
    img.save(f"{OUTPUT_DIR}/scene4.png")
    return img

def render_scene5():
    """Scene 5: Debt Clock (62-76s)"""
    print("Rendering scene 5: Debt Clock...")
    
    img = create_base_image()
    img = add_stars(img, 50)
    draw = ImageDraw.Draw(img)
    
    # Bell tower
    tower_x = 460
    tower_width = 140
    
    # Tower body
    draw.rectangle([tower_x, 200, tower_x + tower_width, 650], fill=(20, 20, 40, 200), outline=None)
    
    # Gears
    for i, y in enumerate([300, 380, 460, 540]):
        color_idx = [BRASS, (138, 140, 138), (200, 168, 72), (180, 140, 80)][i]
        draw.ellipse([tower_x + 90, y - 30, tower_x + tower_width - 10, y + 30], fill=color_idx, outline=(170, 140, 80, 255))
    
    # Bell
    bell_y = 240
    draw.rectangle([tower_x + 90, bell_y, tower_x + tower_width - 10, bell_y + 120], fill=BRASS, outline=(170, 140, 80, 255))
    
    # Debt display
    debt_x = 1260
    draw.ellipse([debt_x - 30, 320, debt_x + 30, 380], fill="#ff9800", outline=(204, 122, 0, 255))
    draw.text((debt_x, 350), "DEBT", font=SMALL, fill=(138, 169, 194, 255), anchor="mt")
    draw.text((debt_x, 440), "₡440", font=ImageFont.truetype("/System/Library/Fonts/Times.ttc", 48), fill=RED, anchor="mt")
    draw.text((debt_x, 480), "₡440 → ₡484 → ₡532 → ₡585", font=SMALL, fill=(170, 170, 200, 255), anchor="mt")
    
    # Cycle counter
    draw.rectangle([100, 700, 1620, 820], fill=(20, 20, 40, 150), outline=(138, 169, 194, 100))
    draw.text((860, 730), "Cycle 4 of 4 | Deadline: 4 cycles", font=ImageFont.truetype("/System/Library/Fonts/Times.ttc", 14), fill=(138, 169, 194, 255), anchor="mt")
    
    # Interest info
    draw.text((860, 780), "10% interest per cycle | 4-cycle repayment deadline", font=SMALL, fill=(138, 169, 194, 255), anchor="mt")
    
    # Tension message
    draw.text((WIDTH//2, 880), "Time has a price.", font=BASKERVILLE, fill=RED, anchor="mt")
    
    img.save(f"{OUTPUT_DIR}/scene5.png")
    return img

def render_scene6():
    """Scene 6: Investigation (76-95s)"""
    print("Rendering scene 6: Investigation...")
    
    img = Image.new("RGBA", (WIDTH, HEIGHT), (26, 26, 46, 255))  # Deep purple
    img = add_stars(img, 30)
    draw = ImageDraw.Draw(img)
    
    # Archive shelves
    for row in range(5):
        for col in range(8):
            x = 160 + col * 180 + (col // 4) * 40
            y = 80 + row * 180
            shelf = Image.new("RGBA", (160, 120), (40, 40, 60, 180))
            draw_shelf = ImageDraw.Draw(shelf)
            draw_shelf.rectangle([0, 0, 159, 119], outline=(102, 102, 102, 200), width=1)
            
            # Add glowing items
            if np.random.random() > 0.6:
                glow_color = (np.random.choice([255, 77, 173, 156]), 
                              np.random.choice([100, 166, 127, 204]), 255)
                size = np.random.randint(10, 30)
                draw_shelf.ellipse([75-size//2, 60-size//2, 75+size//2, 60+size//2], 
                                   fill=glow_color + (180,), outline=None)
            
            img.paste(shelf, (int(x), int(y)), shelf)
    
    # Evidence card
    card_w, card_h = 400, 200
    card_x, card_y = 560, 420
    card = Image.new("RGBA", (card_w, card_h), (50, 50, 70, 220))
    draw_card = ImageDraw.Draw(card)
    draw_card.rectangle([0, 0, card_w-1, card_h-1], outline=(224, 184, 102, 200), width=2)
    draw_card.text((card_w//2, 40), "EVIDENCE FOUND", font=BASKERVILLE_BOLD, fill=GOLD, anchor="mt")
    
    evidence = [
        "• Forgotten Ledger",
        "• Torn Correspondence", 
        "• Voice Fragment",
        "• Home Sketch",
        "• Love Letter"
    ]
    for i, e in enumerate(evidence):
        color = GOLD if "Voice" in e else IVORY
        draw_card.text((50, 80 + i*30), e, font=TIMES, fill=color)
    
    img.paste(card, (card_x, card_y), card)
    
    # Journal icon
    draw.rectangle([880, 430, 920, 530], fill=(51, 51, 51, 200), outline=(85, 85, 85, 200))
    draw.text((900, 480), "✎", font=ImageFont.truetype("/System/Library/Fonts/Times.ttc", 24), fill=GOLD, anchor="mt")
    
    # Archive glow
    draw.ellipse([840, 540, 920, 620], fill=(51, 51, 51, 180), outline=(85, 85, 85, 200))
    draw.text((880, 580), "Journal", font=SMALL, fill=IVORY, anchor="mt")
    
    # Status
    draw.text((370, 830), "Evidence: 5 | Memories held: 3", font=SMALL, fill=(138, 169, 194, 255), anchor="mt")
    draw.text((1550, 830), "ENDING: NEW LEDGER", font=ImageFont.truetype("/System/Library/Fonts/Times.ttc", 16), fill=GOLD, anchor="mt")
    
    img.save(f"{OUTPUT_DIR}/scene6.png")
    return img

def render_scene7():
    """Scene 7: Repayment (95-115s)"""
    print("Rendering scene 7: Repayment...")
    
    img = create_base_image()
    img = add_stars(img, 60)
    draw = ImageDraw.Draw(img)
    
    # Restored memories
    center_x, center_y = WIDTH // 2, 340
    
    # Voice orb (amber) - restored
    draw.ellipse([center_x - 100 - 50, center_y - 30, center_x - 50 + 50, center_y + 30], 
                 fill=(255, 183, 77, 255))
    
    # Home orb (green) - restored  
    draw.ellipse([center_x - 50, center_y + 60 - 30, center_x + 50, center_y + 60 + 30],
                 fill=(129, 199, 132, 255))
    
    # Love orb (purple) - restored
    draw.ellipse([center_x - 80, center_y + 150 - 40, center_x + 80, center_y + 150 + 40],
                 fill=(186, 104, 200, 255))
    
    # Success banner
    success_y = 500
    draw.text((WIDTH//2, success_y), "DEBT SETTLED", font=ImageFont.truetype("/System/Library/Fonts/Times.ttc", 28), fill=GREEN, anchor="mt")
    draw.text((WIDTH//2, success_y + 50), "MEMORIES RESTORED", font=ImageFont.truetype("/System/Library/Fonts/Times.ttc", 28), fill=GREEN, anchor="mt")
    
    # Financial state
    draw.text((WIDTH//2, 650), "₡500 remaining | Seal fee paid | Archive toll paid", 
              font=TIMES, fill=GOLD, anchor="mt")
    
    # Ending info
    draw.text((750, 780), "Evidence: 5", font=SMALL, fill=(138, 169, 194, 255), anchor="mt")
    draw.text((900, 780), "Memories held: 3", font=SMALL, fill=(138, 169, 194, 255), anchor="mt")
    draw.text((1180, 780), "Ending: NEW LEDGER", font=ImageFont.truetype("/System/Library/Fonts/Times.ttc", 16), fill=GOLD, anchor="mt")
    
    # Small value indicators
    draw.text((520, 490), "₡100", font=SMALL, fill=GOLD, anchor="mt")
    draw.text((520, 550), "₡250", font=SMALL, fill=GOLD, anchor="mt")
    draw.text((520, 630), "₡100", font=SMALL, fill=GOLD, anchor="mt")
    
    img.save(f"{OUTPUT_DIR}/scene7.png")
    return img

def render_scene8():
    """Scene 8: Finale (115-118s)"""
    print("Rendering scene 8: Finale...")
    
    img = Image.new("RGBA", (WIDTH, HEIGHT), DARK_BLUE)
    img = add_stars(img, 80)
    draw = ImageDraw.Draw(img)
    
    # Title
    draw.text((WIDTH//2, 380), "LACUNA", font=TITLE_FONT, fill=IVORY, anchor="mt")
    
    # Subtitle
    draw.text((WIDTH//2, 580), "THE PRICE OF REMEMBERING", font=BASKERVILLE, fill=GOLD, anchor="mt")
    
    img.save(f"{OUTPUT_DIR}/scene8.png")
    return img

def create_video_from_images():
    """Create video from rendered images using ffmpeg."""
    print("\nCreating video from images...")
    
    # Create a temporary file list
    with open(f"{OUTPUT_DIR}/filelist.txt", "w") as f:
        for scene in range(1, 9):
            f.write(f"file '{OUTPUT_DIR}/scene{scene}.png'\n")
            if scene < 8:
                # Add duration for each scene
                durations = [10, 14, 18, 20, 14, 19, 20, 3]
                f.write(f"duration {durations[scene-1]}\n")
        f.write(f"file '{OUTPUT_DIR}/scene8.png'\n")  # Last frame holds
    
    # Use ffmpeg to create video from images
    import subprocess
    cmd = [
        "ffmpeg", "-y",
        "-f", "concat", "-safe", "0", "-i", f"{OUTPUT_DIR}/filelist.txt",
        "-c:v", "libx264",
        "-crf", "18",
        "-pix_fmt", "yuv420p",
        "-r", "30",
        f"{OUTPUT_DIR}/LACUNA_CINEMATIC.mp4"
    ]
    subprocess.run(cmd, capture_output=True)
    print(f"Created: {OUTPUT_DIR}/LACUNA_CINEMATIC.mp4")

if __name__ == "__main__":
    # Render all scenes
    scenes = [
        render_scene1,
        render_scene2,
        render_scene3,
        render_scene4,
        render_scene5,
        render_scene6,
        render_scene7,
        render_scene8,
    ]
    
    for scene in scenes:
        scene()
    
    print(f"\nRendered scenes saved to: {OUTPUT_DIR}")