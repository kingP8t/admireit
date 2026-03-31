import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const svgBuffer = readFileSync(join(root, "src/app/icon.svg"));

// Generate apple-touch-icon (180x180 PNG)
await sharp(svgBuffer)
  .resize(180, 180)
  .png()
  .toFile(join(root, "public/apple-touch-icon.png"));
console.log("Created public/apple-touch-icon.png (180x180)");

// Generate favicon-32x32.png
await sharp(svgBuffer)
  .resize(32, 32)
  .png()
  .toFile(join(root, "public/favicon-32x32.png"));
console.log("Created public/favicon-32x32.png");

// Generate favicon-16x16.png
await sharp(svgBuffer)
  .resize(16, 16)
  .png()
  .toFile(join(root, "public/favicon-16x16.png"));
console.log("Created public/favicon-16x16.png");

// Generate favicon.ico (multi-size ICO from 32x32 PNG)
// ICO format: header + directory entries + image data
const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();

function buildIco(pngBuffers, sizes) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * numImages;
  let dataOffset = headerSize + dirSize;

  // ICO header
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);       // reserved
  header.writeUInt16LE(1, 2);       // type: ICO
  header.writeUInt16LE(numImages, 4); // image count

  const dirEntries = [];
  const offsets = [];
  for (let i = 0; i < numImages; i++) {
    offsets.push(dataOffset);
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(sizes[i] === 256 ? 0 : sizes[i], 0); // width
    entry.writeUInt8(sizes[i] === 256 ? 0 : sizes[i], 1); // height
    entry.writeUInt8(0, 2);   // color palette
    entry.writeUInt8(0, 3);   // reserved
    entry.writeUInt16LE(1, 4);  // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(pngBuffers[i].length, 8); // size
    entry.writeUInt32LE(dataOffset, 12);           // offset
    dirEntries.push(entry);
    dataOffset += pngBuffers[i].length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers]);
}

const icoBuffer = buildIco([png32, png16], [32, 16]);
writeFileSync(join(root, "public/favicon.ico"), icoBuffer);
console.log("Created public/favicon.ico (32x32 + 16x16)");

console.log("Done!");
