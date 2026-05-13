# Restaurant Rater PWA

## Instalación rápida en móvil

### Opción A — Servir localmente (para desarrollo)
```bash
cd restaurant-rater
npx serve .
# O con Python:
python -m http.server 8080
```
Luego en el móvil: abrir `http://TU_IP:8080` en Chrome/Safari.

### Opción B — Deploy gratuito en GitHub Pages / Netlify / Vercel
1. Sube los archivos a un repo de GitHub
2. Activa GitHub Pages (Settings > Pages > main branch)
3. Accede desde el móvil y pulsa "Añadir a pantalla de inicio"

### Instalar como PWA
- **Android (Chrome):** Menú ⋮ → "Añadir a pantalla de inicio"
- **iOS (Safari):** Botón compartir → "Añadir a pantalla de inicio"

## Archivos
```
restaurant-rater/
├── index.html      # App completa (50KB)
├── manifest.json   # Metadatos PWA
├── sw.js           # Service Worker offline-first
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

## Arquitectura preparada para v2 (Firebase sync)
- IndexedDB con esquema idéntico al de Firestore
- IDs en UUID v4 (compatible con doc IDs de Firebase)
- Separación clara: DB layer en `const DB = {...}` — solo hay que reemplazar
  los métodos getAll/put/delete por llamadas a Firestore

## Roadmap v2
- [ ] Firebase Realtime Sync
- [ ] Perfiles de usuario con código de grupo
- [ ] Export a CSV/PDF
- [ ] Filtro por fecha en ranking
