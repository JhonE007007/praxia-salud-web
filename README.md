# Praxia Salud · Sitio web

Sitio oficial de **Praxia Salud**, centro de experiencias y capacitaciones médicas con simulación de alta fidelidad. *Del conocimiento a la práctica.*

Stack: **React 18 + Vite + TypeScript + Tailwind CSS** (compatible con Lovable).

## Cómo actualizar el contenido

Todo el contenido editable está en **`src/data/site.ts`**:

- **Cursos** (`cursos`): el primer curso con `activo: true` es el banner principal. Agrega cursos a la lista para que aparezcan en el carrusel y en la sección "Próximos cursos". Pon `activo: false` cuando un curso termine.
- **Contacto** (`contacto`): WhatsApp, correo, dirección, enlace de Google Maps, horario y redes sociales (las redes vacías no se muestran).
- **Textos** de áreas de simulación, nosotros y galería.

Imágenes y video en `public/img` y `public/video`.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # genera /dist para publicar
```

## Publicación

- **Netlify / Cloudflare Pages:** build command `npm run build`, publish directory `dist`.
- **Dominio:** al conectar el dominio final, reemplaza `https://praxiasalud.netlify.app` en `index.html` (canonical y etiquetas `og:`).

## Pendiente de confirmar con Praxia
Dirección física, horario, redes sociales, temario del curso de Flebotomía y permiso para mostrar los logos de aliados.
