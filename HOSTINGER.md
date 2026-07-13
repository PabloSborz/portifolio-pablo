# Deploy na Hostinger

Use este passo a passo quando quiser publicar o portfolio na Hostinger.

## 1. Gerar o build

```bash
npm run build:hostinger
```

O site pronto vai ficar em:

```text
dist/portifolio-pablo/browser
```

## 2. Enviar para a Hostinger

No Gerenciador de Arquivos da Hostinger, abra a pasta:

```text
public_html
```

Envie o conteudo da pasta `dist/portifolio-pablo/browser` para dentro de `public_html`.

Importante: envie os arquivos de dentro de `browser`, nao a pasta `browser` inteira.

## 3. Arquivos que precisam subir

Confira se estes arquivos estao em `public_html`:

```text
index.html
.htaccess
main-*.js
styles-*.css
favicon.svg
perfil-hero.png
perfil.webp
Curriculo-Pablo-Sborz.pdf
```

O `.htaccess` faz o refresh da pagina funcionar e evita erro 404 nas rotas do Angular.

## 4. Se publicar em subpasta

Se o site nao ficar direto no dominio principal e for publicado em uma subpasta, ajuste o `baseHref` da configuracao `hostinger` em `angular.json`.

Exemplo para `seudominio.com/portfolio/`:

```json
"hostinger": {
  "baseHref": "/portfolio/"
}
```
