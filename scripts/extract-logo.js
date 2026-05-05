// Extract the dark-mode "GREAT ESCAPE" logo (white wordmark + colored
// letter dots on a near-black bg). The source uses a hand-drawn / brushy
// font where letter edges are mid-grey, so a simple "drop dark" threshold
// either keeps too much background or eats the letter edges.
//
// Better rule: keep a pixel if it's BRIGHT (max RGB high — the white
// wordmark) OR SATURATED (color channels far apart — the yellow / green /
// blue / red dots). Everything else is background.

const sharp = require("sharp");
const path = require("path");

const SRC = path.join(__dirname, "..", "public", "images", "logo-source-dark.jpg");
const DST = path.join(__dirname, "..", "public", "logo.png");

const BRIGHT_HI = 200; // fully opaque above this
const BRIGHT_LO = 110; // fully transparent below this (if also unsaturated)
const SAT_MIN = 50;    // minimum colour saturation to count as a "logo dot"

(async () => {
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  if (channels !== 4) throw new Error(`Expected 4 channels, got ${channels}`);

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const sat = max - min;

    let alpha;
    if (sat >= SAT_MIN && max >= 80) {
      alpha = 255; // saturated colour (logo dot)
    } else if (max >= BRIGHT_HI) {
      alpha = 255; // fully bright (white wordmark)
    } else if (max <= BRIGHT_LO) {
      alpha = 0; // dark background
    } else {
      // Smooth fade through brushy edges
      alpha = Math.round(((max - BRIGHT_LO) / (BRIGHT_HI - BRIGHT_LO)) * 255);
    }
    data[i + 3] = alpha;
  }

  await sharp(data, { raw: { width, height, channels: 4 } })
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 1 })
    .png({ compressionLevel: 9 })
    .toFile(DST);

  const out = await sharp(DST).metadata();
  console.log(`Wrote ${path.relative(process.cwd(), DST)} — ${out.width}x${out.height}, alpha:${out.hasAlpha}`);
})();
