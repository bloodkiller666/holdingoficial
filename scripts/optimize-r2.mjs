/**
 * Optimiza las imágenes de Cloudflare R2 sin tocar los originales.
 *
 *   node scripts/optimize-r2.mjs            auditoría: descarga, comprime en memoria y muestra el ahorro (no escribe nada)
 *   node scripts/optimize-r2.mjs --upload   sube las versiones optimizadas a `opt/<clave>.webp` y genera
 *                                           src/lib/r2Optimized.json (clave original → clave optimizada)
 *
 * Los originales nunca se modifican ni se borran. Para volver atrás basta con vaciar el JSON.
 */
import "dotenv/config";
import fs from "node:fs";
import sharp from "sharp";
import { S3Client, ListObjectsV2Command, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";

const UPLOAD = process.argv.includes("--upload");
const MAX_WIDTH = 2400; // más que suficiente para pantallas grandes (el hero se muestra a 1920 como máximo)
const QUALITY = 84; // WebP: visualmente indistinguible del original
const MIN_BYTES = 150 * 1024; // por debajo de esto no vale la pena
const MIN_SAVING = 0.2; // solo se sube si ahorra al menos el 20 %
const OUT = "src/lib/r2Optimized.json";
const IMAGE = /\.(png|jpe?g|webp)$/i;

const bucket = process.env.R2_BUCKET_NAME;
const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: process.env.R2_ACCESS_KEY_ID, secretAccessKey: process.env.R2_SECRET_ACCESS_KEY },
});

const keys = [];
let token;
do {
  const r = await s3.send(new ListObjectsV2Command({ Bucket: bucket, ContinuationToken: token }));
  for (const o of r.Contents ?? []) keys.push({ key: o.Key, size: o.Size });
  token = r.NextContinuationToken;
} while (token);

const candidates = keys.filter((o) => IMAGE.test(o.key) && !o.key.startsWith("opt/"));
const manifest = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, "utf8")) : {};
const kb = (n) => `${Math.round(n / 1024)} KB`;
let before = 0, after = 0, done = 0, skipped = 0;

console.log(`${keys.length} objetos en el bucket, ${candidates.length} imágenes. Modo: ${UPLOAD ? "SUBIR" : "AUDITORÍA"}\n`);

for (const { key, size } of candidates) {
  try {
    const got = await s3.send(new GetObjectCommand({ Bucket: bucket, Key: key }));
    const input = Buffer.from(await got.Body.transformToByteArray());
    const meta = await sharp(input).metadata();
    if (size < MIN_BYTES && (meta.width ?? 0) <= MAX_WIDTH) { skipped++; continue; }
    const output = await sharp(input)
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 5, smartSubsample: true, alphaQuality: 90 })
      .toBuffer();
    const saving = 1 - output.length / size;
    if (saving < MIN_SAVING) { console.log(`= ${key}  ${kb(size)}  (ya está bien, se omite)`); skipped++; continue; }
    const optKey = `opt/${key.replace(/\.[^.]+$/, "")}.webp`;
    console.log(`✓ ${key}  ${meta.width}px ${kb(size)} → ${kb(output.length)}  (-${Math.round(saving * 100)} %)`);
    before += size; after += output.length; done++;
    if (UPLOAD) {
      await s3.send(new PutObjectCommand({ Bucket: bucket, Key: optKey, Body: output, ContentType: "image/webp", CacheControl: "public, max-age=31536000, immutable" }));
      manifest[key] = optKey;
    }
  } catch (e) {
    console.log(`! ${key}: ${e.message}`);
  }
}

if (UPLOAD) fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2) + "\n");
console.log(`\n${done} optimizadas, ${skipped} omitidas. ${kb(before)} → ${kb(after)} (ahorro ${kb(before - after)}, ${before ? Math.round((1 - after / before) * 100) : 0} %).`);
if (!UPLOAD) console.log("Auditoría: no se escribió nada. Ejecuta con --upload para subir las versiones optimizadas.");
