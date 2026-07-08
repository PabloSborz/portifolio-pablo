import { mkdirSync, copyFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist', 'portifolio-pablo');
const browserDir = path.join(distDir, 'browser');

if (existsSync(browserDir)) {
  const entries = readdirSync(browserDir);
  for (const entry of entries) {
    const src = path.join(browserDir, entry);
    const dest = path.join(distDir, entry);
    if (statSync(src).isDirectory()) {
      mkdirSync(dest, { recursive: true });
      continue;
    }
    copyFileSync(src, dest);
  }
}

copyFileSync(path.join(rootDir, 'public', '404.html'), path.join(distDir, '404.html'));
