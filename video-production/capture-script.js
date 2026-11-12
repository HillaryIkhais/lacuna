// Capture script - runs in browser context via evaluate
// Drives LACUNA gameplay and POSTs frames to upload server

async function captureScene(sceneName, setupFn, durationSeconds, fps = 30) {
  const totalFrames = durationSeconds * fps;
  const frameInterval = 1000 / fps;
  const canvas = document.getElementById("world");
  
  // Run setup
  if (setupFn) await setupFn();
  
  // Wait for game to be ready
  await new Promise(r => setTimeout(r, 500));
  
  for (let i = 0; i < totalFrames; i++) {
    // Capture frame
    const dataUrl = canvas.toDataURL("image/png");
    
    // POST to upload server
    try {
      await fetch("http://localhost:8300/upload", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: dataUrl
      });
    } catch (e) {
      console.error("Upload failed for frame", i, e.message);
    }
    
    // Advance game by one frame interval
    if (window.LACUNA && window.LACUNA.advance) {
      window.LACUNA.advance(frameInterval);
    }
    
    // Small yield to allow fetch to complete
    if (i % 10 === 0) {
      await new Promise(r => setTimeout(r, 0));
    }
  }
  
  console.log(`Scene "${sceneName}" captured: ${totalFrames} frames`);
}

// Export for use in evaluate
window.__captureScene = captureScene;
