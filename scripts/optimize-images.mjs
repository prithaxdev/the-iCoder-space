import sharp from "sharp";
import { readdirSync, statSync, rmSync } from "fs";
import { join, extname, basename } from "path";

const ASSETS_DIR = "src/assets";
const QUALITY = 82;

const images = readdirSync(ASSETS_DIR).filter((f) =>
  [".png", ".jpg", ".jpeg"].includes(extname(f).toLowerCase())
);

for (const file of images) {
  const input = join(ASSETS_DIR, file);
  const output = join(ASSETS_DIR, basename(file, extname(file)) + ".webp");
  const before = statSync(input).size;

  await sharp(input).webp({ quality: QUALITY }).toFile(output);

  const after = statSync(output).size;
  const saved = (((before - after) / before) * 100).toFixed(1);
  console.log(`${file} → .webp  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB  (-${saved}%)`);

  rmSync(input);
}

console.log("\nDone. Original files removed.");
