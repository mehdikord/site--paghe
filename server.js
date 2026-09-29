// Minimal static file server for the Next.js static export (output: "export").
// This lets the project run on any generic Node.js hosting panel via `npm start`,
// without needing `next start` (which does not support static export builds).

const http = require("http");
const fs = require("fs");
const path = require("path");
const serveHandler = require("serve-handler");

const PUBLIC_DIR = path.join(__dirname, "out");
const PORT = process.env.PORT || 3000;

if (!fs.existsSync(PUBLIC_DIR)) {
  console.error(
    'خطا: پوشه "out" پیدا نشد. لطفاً ابتدا دستور "npm run build" را اجرا کنید.'
  );
  process.exit(1);
}

function fileExists(p) {
  try {
    return fs.statSync(p).isFile();
  } catch {
    return false;
  }
}

function routeExists(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]).replace(/\/+$/, "") || "/";
  const candidates = [
    path.join(PUBLIC_DIR, clean),
    path.join(PUBLIC_DIR, `${clean}.html`),
    path.join(PUBLIC_DIR, clean, "index.html"),
  ];
  return candidates.some(fileExists);
}

const server = http.createServer(async (req, res) => {
  try {
    const isBuiltAsset =
      req.url.startsWith("/_next/") || req.url.startsWith("/images/");

    if (!isBuiltAsset && req.url !== "/" && !routeExists(req.url)) {
      res.statusCode = 404;
      req.url = "/404";
    }

    await serveHandler(req, res, {
      public: PUBLIC_DIR,
      cleanUrls: true,
      trailingSlash: false,
    });
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`✓ کرکره برقی ترکمن صحرا در حال اجراست: http://0.0.0.0:${PORT}`);
});
