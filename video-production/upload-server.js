const http = require("http");
const fs = require("fs");
const path = require("path");

const framesDir = path.join(__dirname, "captures", "frames");
fs.mkdirSync(framesDir, { recursive: true });

let frameCount = 0;

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/upload") {
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
      // body is base64 PNG data URL
      const match = body.match(/^data:image\/png;base64,(.*)$/);
      if (match) {
        const buf = Buffer.from(match[1], "base64");
        const filename = path.join(framesDir, `frame_${String(++frameCount).padStart(5, "0")}.png`);
        fs.writeFileSync(filename, buf);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: true, frame: frameCount, filename }));
      } else {
        res.writeHead(400);
        res.end("Invalid format");
      }
    });
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(8300, () => {
  console.log("Upload server running on port 8300");
  console.log("Frames directory:", framesDir);
});
