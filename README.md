# Santi Beni · Motoviajero — maqueta frontend
Next.js 14 (App Router) + TypeScript + Tailwind 3.
```
npm install
npm run dev     # http://localhost:3000
npm run build
```
- Contenido, fotos y datos de apoyo: `lib/data.ts` (todo es demostrativo).
- Fotos: pegar URL/ruta en `photos`; vacío = fallback topográfico. Archivos locales en `public/images/`.
- Alias/QR: completar `support`; hasta entonces el botón copiar queda deshabilitado.
- Mapa: fallback ilustrativo. Pendiente integrar MapLibre GL JS con un proveedor de tiles y coordenadas reales.
- Paleta azul y blanco en `tailwind.config.ts`. Fotos reales en `public/images`.
- Fuentes: Google Fonts vía `<link>` (Playfair Display, DM Sans).
