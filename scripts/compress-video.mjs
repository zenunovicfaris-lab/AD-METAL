import { execFileSync, spawnSync } from "child_process";
import { existsSync, statSync, renameSync } from "fs";
import { resolve } from "path";

// Try multiple ffmpeg locations
const ffmpegPaths = [
  resolve("node_modules/ffmpeg-static/ffmpeg.exe"),
  "ffmpeg",
  "C:/ffmpeg/bin/ffmpeg.exe",
];

let ffmpegBin = null;
for (const p of ffmpegPaths) {
  try {
    const result = spawnSync(p, ["-version"], { encoding: "utf8", timeout: 5000 });
    if (result.status === 0) {
      ffmpegBin = p;
      break;
    }
  } catch {}
}

if (!ffmpegBin) {
  console.error("❌ ffmpeg nije pronađen. Pokušaj: winget install Gyan.FFmpeg (pa restartaj terminal)");
  process.exit(1);
}

console.log(`✅ Koristi ffmpeg: ${ffmpegBin}`);

const input = resolve("public/hero-video.mp4");
const output = resolve("public/hero-video-new.mp4");

const beforeMB = (statSync(input).size / 1024 / 1024).toFixed(1);
console.log(`📦 Original: ${beforeMB} MB`);
console.log("⏳ Kompresija u toku (može potrajati 2-5 minuta)...");

const result = spawnSync(
  ffmpegBin,
  [
    "-i", input,
    "-vcodec", "libx264",
    "-crf", "28",
    "-preset", "fast",
    "-vf", "scale='min(1280,iw)':-2",
    "-an",                    // strip audio (hero video nema/ne treba zvuk)
    "-movflags", "+faststart", // streaming-friendly
    "-y",
    output,
  ],
  { encoding: "utf8", timeout: 600000, stdio: "pipe" }
);

if (result.status !== 0) {
  console.error("❌ ffmpeg greška:");
  console.error(result.stderr?.slice(-500));
  process.exit(1);
}

const afterMB = (statSync(output).size / 1024 / 1024).toFixed(1);
const saving = Math.round((1 - afterMB / beforeMB) * 100);
console.log(`✅ Kompresovano: ${beforeMB} MB → ${afterMB} MB (${saving}% manje)`);

// Replace original
renameSync(input, input.replace(".mp4", "-original-backup.mp4"));
renameSync(output, input);
console.log("✅ hero-video.mp4 zamijenjen kompresovanom verzijom.");
console.log("   Backup: public/hero-video-original-backup.mp4");
