const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const capturesDir = path.join(__dirname, "captures");
fs.mkdirSync(capturesDir, { recursive: true });

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: {
      dir: capturesDir,
      size: { width: 1920, height: 1080 },
    },
  });

  const page = await context.newPage();

  // Inject CSS to scale canvas to fill viewport and hide UI chrome
  await page.addStyleTag({
    content: `
      #app { width: 100vw !important; height: 100vh !important; max-width: none !important; margin: 0 !important; padding: 0 !important; }
      canvas#world { width: 100vw !important; height: 100vh !important; object-fit: cover !important; }
      #hud, #sidebar, #controls, #locName, #hint { display: none !important; }
      #viewport { width: 100vw !important; height: 100vh !important; }
      body { overflow: hidden !important; margin: 0 !important; }
    `,
  });

  await page.goto("http://localhost:8200/");
  await page.waitForTimeout(2000);

  async function recordClip(name, actions, durationMs = 8000) {
    await page.evaluate(() => {
      document.getElementById("btnStart")?.click();
    });
    await page.waitForTimeout(1000);

    if (actions) await actions(page);

    await page.waitForTimeout(durationMs);
    const videoPath = path.join(capturesDir, `${name}.webm`);
    await page.video().saveAs(videoPath);
    console.log(`Saved: ${videoPath}`);
  }

  try {
    // Clip 1: Start game, show title, then enter
    await recordClip("01-title", async (page) => {
      // Title is showing, wait then click start
      await page.waitForTimeout(3000);
      await page.mouse.click(960, 700); // Click "Enter the District"
    }, 6000);

    // Reset - reload page
    await page.reload();
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
      document.getElementById("btnStart")?.click();
    });
    await page.waitForTimeout(1000);

    // Clip 2: Walk around Forgotten Square
    await recordClip("02-square", async (page) => {
      // Walk to statue and interact
      await page.mouse.click(500, 400);
      await page.waitForTimeout(1000);
      await page.keyboard.press("e");
      await page.waitForTimeout(1000);
      // Walk to fountain
      await page.mouse.click(1200, 650);
      await page.waitForTimeout(1500);
      await page.keyboard.press("e");
      await page.waitForTimeout(1000);
    }, 10000);

    // Reload for next clip
    await page.reload();
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
      document.getElementById("btnStart")?.click();
    });
    await page.waitForTimeout(1000);

    // Clip 3: Go to market, open loan
    await recordClip("03-market-loan", async (page) => {
      // Walk to market exit (left side)
      await page.mouse.click(200, 850);
      await page.waitForTimeout(1500);
      // Now in market, walk to lender
      await page.mouse.click(1100, 450);
      await page.waitForTimeout(1500);
      await page.keyboard.press("e");
      await page.waitForTimeout(2000);
    }, 10000);

    await browser.close();
    console.log("All captures complete");
  } catch (err) {
    console.error("Capture error:", err);
    await browser.close();
  }
})();
