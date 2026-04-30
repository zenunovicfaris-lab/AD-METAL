import sharp from "sharp";
import { readdirSync, statSync, mkdirSync } from "fs";
import { join, extname, basename } from "path";

const DIRS = [
  "public/images/ponude bez cijena",
  "public/images/ponude sa cijenama",
];

async function compressImages() {
  for (const dir of DIRS) {
    const files = readdirSync(dir).filter((f) =>
      [".jpg", ".jpeg", ".png", ".webp"].includes(extname(f).toLowerCase())
    );

    for (const file of files) {
      const inputPath = join(dir, file);
      const stats = statSync(inputPath);
      const beforeKB = Math.round(stats.size / 1024);

      const name = basename(file, extname(file));
      const outputPath = join(dir, `${name}.jpg`);

      await sharp(inputPath)
        .jpeg({ quality: 78, mozjpeg: true, progressive: true })
        .resize(1600, 1200, { fit: "inside", withoutEnlargement: true })
        .toFile(outputPath + ".tmp");

      // Replace original with compressed
      const { rename, unlink } = await import("fs/promises");
      if (outputPath + ".tmp" !== inputPath) {
        await unlink(inputPath).catch(() => {});
      }
      await rename(outputPath + ".tmp", outputPath);

      const afterStats = statSync(outputPath);
      const afterKB = Math.round(afterStats.size / 1024);
      console.log(`  ${file}: ${beforeKB}KB → ${afterKB}KB (${Math.round((1 - afterKB / beforeKB) * 100)}% manje)`);
    }
  }
}

console.log("🗜️  Kompresija slika...");
compressImages()
  .then(() => console.log("✅ Gotovo!"))
  .catch((e) => console.error("❌", e.message));
