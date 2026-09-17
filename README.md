# Portafolio — Samuel Correa

One-page trilingüe (ES / PT / EN) construido con React + Vite + TypeScript + Tailwind v4 + Framer Motion + Lenis.

## Comandos

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # genera dist/
npm run preview   # sirve dist/
```

Para publicar: subir la carpeta `dist/` a cualquier hosting estático (Netlify, Vercel, Cloudflare Pages, Hostinger…). No hay backend.

## Sistema visual

| Token | Valor | Uso |
|---|---|---|
| `--color-ink` | `#111111` | Texto, titulares, fondos invertidos |
| `--color-paper` | `#FAFAF8` | Fondo (hueso, no blanco puro) |
| `--color-accent` | `#D55000` | Único acento: números, precios, reglas, CTA |
| `--color-muted` | `#8A8A85` | Texto secundario |
| `--color-rule` | `#E2E2DE` | Líneas divisorias de 1px |

- **Bebas Neue** (`font-display`) → titulares, números, precios, botones y labels. Siempre en mayúsculas.
- **Montserrat** (`font-body`) → cuerpo de texto.
- Radio de esquina **0px en todo el sitio** (regla global en `styles.css`); solo los chips de herramientas son `rounded-full`.
- Sin sombras. La jerarquía se construye con escala tipográfica y reglas de 1px.

Todo está en `src/styles.css`, bloque `@theme`. Cambiar un token ahí lo propaga a todo el sitio.

## Estructura

```
src/
  components/
    motion-primitives.tsx   RevealLines, FadeUp, Counter, EASE_EXPO
    Preloader.tsx           Contador 00→100, una vez por sesión
    Cursor.tsx              Cursor propio (solo puntero fino)
    SmoothScroll.tsx        Lenis + anclas del menú
    Header.tsx              Nav, selector de idioma, menú móvil
    sections/               Una sección por archivo
  data/
    types.ts                Tipos de servicios, paquetes y proyectos
    catalog.ts              Catálogo, paquetes, add-ons, proceso, contacto
  i18n/
    translations.ts         ES / PT / EN completos — único origen del copy
    LanguageContext.tsx     Contexto, persistencia y <html lang> dinámico
```

**Ningún componente lleva texto escrito directamente.** Para cambiar copy se edita `translations.ts`; para cambiar precios o servicios, `catalog.ts`.

## Animación

Framer Motion con easing expo-out `[0.16, 1, 0.3, 1]`, animando solo `transform` y `opacity`.

Preloader · reveal de titulares por línea · scroll suave (Lenis) · cursor propio con `mix-blend-difference` · marquee infinito · contadores · parallax del retrato · acordeón de servicios · línea de proceso ligada al scroll · menú móvil con clip-path.

Todo respeta `prefers-reduced-motion: reduce`: se desactivan preloader, Lenis, cursor, marquee y parallax, y los reveals pasan a fades cortos.

> Nota de implementación: el disparador de los reveals va en el contenedor, nunca en la línea. La línea arranca desplazada fuera de su máscara `overflow:hidden`, y un IntersectionObserver sobre ella nunca llegaría a verla — se quedaría bloqueada para siempre.

## Assets

| Archivo | Origen | Estado |
|---|---|---|
| `public/samuel-portrait.png` | Recortado de `Presentacion samuiel.jpg`, fondo transparente, B/N | Definitivo |
| `public/catalogo-samuel-correa.pdf` | Catálogo de servicios 2026 | Definitivo |
| `public/work/*.jpg` | Composiciones editoriales generadas | **Provisional** |

### Pendiente

1. **Reemplazar las 6 piezas de `public/work/`** por trabajos reales de Samuel, manteniendo los nombres de archivo (o actualizando las rutas en `data/catalog.ts`). Los nombres y categorías de cada proyecto se editan en `translations.ts` → `work.items`.
2. Confirmar si van testimonios de clientes (el catálogo no los incluye).
3. Confirmar dominio y hosting.
