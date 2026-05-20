import sharp from 'sharp';
import { resolve, join } from 'path';
import { stat } from 'fs/promises';

const PUBLIC_DIR = resolve('public');

const conversions = [
  // Portfolio images – quality 80, plus mobile variants at 640px
  { input: 'construir-portugal.png',        output: 'construir-portugal.webp',        quality: 80 },
  { input: 'construir-portugal.png',        output: 'construir-portugal-mobile.webp',  quality: 80, width: 640 },
  { input: 'portugal-gourmet.png',          output: 'portugal-gourmet.webp',           quality: 80 },
  { input: 'portugal-gourmet.png',          output: 'portugal-gourmet-mobile.webp',    quality: 80, width: 640 },
  // Logo images – quality 85, lossless-ish for sharp edges
  { input: 'ArtNetwork Logo B no-bg.png',   output: 'ArtNetwork Logo B no-bg.webp',    quality: 85 },
  { input: 'ArtNetwork Logo BW.png',        output: 'ArtNetwork Logo BW.webp',         quality: 85 },
  { input: 'ArtNetwork Logo circle.png',    output: 'ArtNetwork Logo circle.webp',     quality: 85 },
];

async function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function convert({ input, output, quality, width }) {
  const inputPath  = join(PUBLIC_DIR, input);
  const outputPath = join(PUBLIC_DIR, output);

  const srcStat = await stat(inputPath);
  const srcSize = srcStat.size;

  let pipeline = sharp(inputPath);

  if (width) {
    pipeline = pipeline.resize({ width, withoutEnlargement: true });
  }

  await pipeline.webp({ quality }).toFile(outputPath);

  const dstStat = await stat(outputPath);
  const dstSize = dstStat.size;
  const savings = ((1 - dstSize / srcSize) * 100).toFixed(1);

  return {
    input,
    output,
    srcSize,
    dstSize,
    savings,
    width: width ?? 'original',
  };
}

console.log('🖼️  Starting image optimisation…\n');

const results = [];
for (const job of conversions) {
  try {
    const r = await convert(job);
    results.push(r);
    console.log(`✅ ${r.output}  ${await formatSize(r.srcSize)} → ${await formatSize(r.dstSize)}  (−${r.savings}%)  [${r.width}px]`);
  } catch (err) {
    console.error(`❌ ${job.output}: ${err.message}`);
  }
}

console.log('\n📊  Summary');
console.log('─'.repeat(90));
console.log(`${'Source'.padEnd(35)} ${'Output'.padEnd(40)} ${'Before'.padStart(10)} ${'After'.padStart(10)} ${'Saved'.padStart(8)}`);
console.log('─'.repeat(90));
for (const r of results) {
  console.log(
    `${r.input.padEnd(35)} ${r.output.padEnd(40)} ${(await formatSize(r.srcSize)).padStart(10)} ${(await formatSize(r.dstSize)).padStart(10)} ${(r.savings + '%').padStart(8)}`
  );
}
console.log('─'.repeat(90));
console.log('Done ✨');
