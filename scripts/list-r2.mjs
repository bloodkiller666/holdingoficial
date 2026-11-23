import 'dotenv/config';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
const c = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: process.env.R2_ACCESS_KEY_ID, secretAccessKey: process.env.R2_SECRET_ACCESS_KEY },
});
let token, n = 0;
do {
  const r = await c.send(new ListObjectsV2Command({ Bucket: process.env.R2_BUCKET_NAME, ContinuationToken: token }));
  for (const o of r.Contents ?? []) { console.log(`${o.Key}\t${o.Size}`); n++; }
  token = r.NextContinuationToken;
} while (token);
console.log(`TOTAL ${n}`);
