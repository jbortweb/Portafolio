# Portafolio Landing Page

Landing page moderna y animada para portafolio personal, construida con Nuxt 3, Tailwind CSS y GSAP.

## ✨ Tecnologías principales

- **Nuxt 3** (Vue 3 Framework)
- **GSAP** (GreenSock Animation Platform, incluye ScrollTrigger y SplitText)
- **Tailwind CSS** (v4, utility-first CSS)

## 📁 Estructura de carpetas

```
portafolio/
├── assets/           # CSS y fuentes personalizadas
├── pages/            # Páginas principales (index.vue)
├── public/           # Imágenes, audio, favicon, etc.
├── layouts/          # Layouts de Nuxt (si los usas)
├── server/           # API/server (si los usas)
├── nuxt.config.ts    # Configuración principal Nuxt
├── tailwind.config.js# Configuración Tailwind
├── package.json      # Dependencias y scripts
```

## 🚀 Instalación y desarrollo local

1. **Clona el repositorio y entra en la carpeta:**
   ```bash
   git clone [https://github.com/jbortweb/Portafolio.git](https://github.com/jbortweb/Portafolio.git)
   cd portafolio
   ```
2. **Instala las dependencias:**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```
3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🌍 Deploy en Netlify

1. **Sube tu proyecto a un repositorio en GitHub, GitLab o Bitbucket.**
2. **Entra en [Netlify](https://app.netlify.com/) y pulsa "Add new site > Import an existing project".**
3. **Selecciona tu repositorio y configura:**
   - **Build command:** `npm run build`
   - **Publish directory:** `.output/public`
   - (Netlify detecta Nuxt 3 automáticamente)
4. **Pulsa "Deploy site".**
5. **¡Listo! Tu landing estará online en pocos minutos.**

> **Nota:** Si usas rutas personalizadas, revisa que tu `nuxt.config.ts` esté bien configurado para SSR/static según tu caso.

## 🖼️ Recursos y personalización

- Imágenes y audio en `/public/img` y `/public/audio`.
- Fuentes personalizadas en `/assets/fonts` y configuradas en `tailwind.config.js`.
- Colores y estilos principales en `/assets/css/main.css`.

## 👤 Créditos y contacto

Desarrollado por **Jordi Bort**

- [Web personal](https://jbortweb.com)
- [LinkedIn](https://www.linkedin.com/in/jbortweb)
- [GitHub](https://github.com/jbortweb)

---

_Proyecto optimizado para animaciones fluidas, interacción visual y código abierto._
