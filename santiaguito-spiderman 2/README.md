# Invitación web de Santiaguito – aventura de superhéroes

Proyecto estático en HTML, CSS y JavaScript, listo para publicar gratis en GitHub Pages. No utiliza música.

## Datos configurados
- Cumpleañero: Santiaguito, 5 años
- Fecha: domingo 6 de diciembre de 2026
- Hora: 15:00 (Guatemala, UTC-6)
- Lugar: KM 21.8 Carretera San Pedro Sacatepéquez
- Coordenadas exactas: `14.679538808790243, -90.61906172109217`
- WhatsApp de confirmación: `50238101477`

Los datos se editan al inicio de `js/script.js`, dentro del objeto `EVENT`. El botón de mapa abre directamente las coordenadas indicadas.

## Cambiar la imagen principal del fondo
La ilustración principal está en `assets/images/hero-background.svg`. Puedes sustituirla por una imagen propia JPG, PNG o WEBP:
1. Copia tu imagen en `assets/images/` y nómbrala, por ejemplo, `hero-background.jpg`.
2. Abre `index.html` y busca `class="hero-art"`.
3. Cambia `src="assets/images/hero-background.svg"` por `src="assets/images/hero-background.jpg"`.
4. Guarda y recarga la página.

También puedes reemplazar directamente el archivo SVG manteniendo el mismo nombre. La ilustración incluida es un superhéroe arácnido original de estilo cómic; no es una imagen oficial de Spider-Man.

## Cambiar las fotografías de la galería
Coloca tus fotos en `assets/images/` con estos nombres exactos:
- `foto1.jpg`
- `foto2.jpg`
- `foto3.jpg`

Si deseas utilizar PNG o WEBP, abre `js/script.js` y cambia las extensiones en el arreglo que contiene esos tres nombres.

## Probar en tu Mac con VS Code
1. Descomprime el ZIP.
2. Abre la carpeta `santiaguito-spiderman` en Visual Studio Code.
3. Abre `index.html` con Live Server (recomendado) o directamente en el navegador.
4. Verifica la cuenta regresiva, el enlace de Google Maps, WhatsApp y el botón para agregar al calendario.

## Publicar gratis con GitHub Pages
1. Crea en GitHub un repositorio llamado `santiaguito-spiderman`.
2. Sube el contenido de esta carpeta al repositorio (no el ZIP).
3. Entra a **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**.
5. Selecciona `main` y `/(root)`, y pulsa **Save**.
6. GitHub te mostrará la URL publicada, normalmente `https://TU-USUARIO.github.io/santiaguito-spiderman/`.

Cada `git push` a la rama `main` volverá a publicar los cambios.
