import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const imagesRoot = path.resolve(process.cwd(), "public", "images");
let converted = 0;
let bytesBefore = 0;
let bytesAfter = 0;

async function convertFolder(folder) {
  const entries = await readdir(folder, { withFileTypes: true });

  for (const entry of entries) {
    const filePath = path.join(folder, entry.name);

    if (entry.isDirectory()) {
      await convertFolder(filePath);
      continue;
    }

    if (!entry.isFile() || !/\.png$/i.test(entry.name)) continue;

    const output = filePath.replace(/\.png$/i, ".webp");
    const isProjectImage = filePath.includes(`${path.sep}projects${path.sep}`);

    // Keep original dimensions and transparency. Project UI screenshots
    // get a little more quality to preserve text and small interface details.
    await sharp(filePath)
      .webp({ quality: isProjectImage ? 90 : 85, alphaQuality: 100, effort: 5 })
      .toFile(output);

    const before = (await stat(filePath)).size;
    const after = (await stat(output)).size;
    bytesBefore += before;
    bytesAfter += after;
    converted++;

    const rel = path.relative(process.cwd(), output);
    const saved = Math.round((1 - after / before) * 100);
    console.log(`${rel} | ${Math.round(before / 1024)} KB -> ${Math.round(after / 1024)} KB | ${saved}% ${saved >= 0 ? 'smaller' : 'larger'}`);
  }
}

try {
  await convertFolder(imagesRoot);
  console.log(`\nOptimized ${converted} PNG images.`);
  console.log(`Before: ${(bytesBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`After:  ${(bytesAfter / 1024 / 1024).toFixed(2)} MB`);
  console.log("Original PNG files were NOT deleted. Update source references after checking image quality.");
} catch (error) {
  console.error("Image optimization failed:", error.message);
  process.exitCode = 1;
}
