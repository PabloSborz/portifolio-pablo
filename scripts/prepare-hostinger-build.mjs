import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const browserDir = path.join(rootDir, 'dist', 'portifolio-pablo', 'browser');
const indexFile = path.join(browserDir, 'index.html');
const htaccessFile = path.join(browserDir, '.htaccess');
const markerFile = path.join(browserDir, 'LEIA-ANTES-DE-SUBIR.txt');

if (!existsSync(indexFile)) {
  throw new Error(`Build da Hostinger nao encontrado em: ${indexFile}`);
}

const htaccess = `Options -Indexes -MultiViews

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\\.(js|css)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>

  <FilesMatch "\\.(png|jpg|jpeg|webp|svg|ico|pdf)$">
    Header set Cache-Control "public, max-age=604800"
  </FilesMatch>

  <FilesMatch "^index\\.html$">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
  </FilesMatch>
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css text/javascript application/javascript application/json image/svg+xml
</IfModule>
`;

writeFileSync(htaccessFile, htaccess);
copyFileSync(indexFile, path.join(browserDir, '404.html'));
writeFileSync(
  markerFile,
  [
    'Upload para Hostinger',
    '',
    'Envie o CONTEUDO desta pasta para public_html.',
    'Nao envie a pasta browser inteira, envie os arquivos que estao dentro dela.',
    'Mantenha o arquivo .htaccess junto com index.html, main, styles e assets.',
    '',
  ].join('\n'),
);

console.log(`Build da Hostinger pronto em: ${browserDir}`);
