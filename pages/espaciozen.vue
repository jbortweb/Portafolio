<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger, SplitText);

onMounted(() => {
  // Animación inicial del hero
  const tl = gsap.timeline();

  // Logo principal con efecto de máscara
  tl.from("#zen-logo", {
    scale: 0,
    rotation: 360,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
  })

    // Subtítulo
    .from(
      "#zen-subtitle",
      {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    )

    // Botón CTA
    .from(
      "#zen-cta",
      {
        scale: 0,
        rotation: 180,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      },
      "-=0.3"
    );

  // Animaciones con scroll
  gsap.set(".feature-card", { y: 100, opacity: 0 });
  gsap.set(".tech-badge", { scale: 0, rotation: 180 });
  gsap.set(".screenshot", { y: 150, opacity: 0, rotation: 5 });

  // Cards de características
  ScrollTrigger.batch(".feature-card", {
    onEnter: (elements) => {
      gsap.to(elements, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    },
  });

  // Badges de tecnologías
  ScrollTrigger.batch(".tech-badge", {
    onEnter: (elements) => {
      gsap.to(elements, {
        scale: 1,
        rotation: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)",
      });
    },
  });

  // Screenshots
  ScrollTrigger.batch(".screenshot", {
    onEnter: (elements) => {
      gsap.to(elements, {
        y: 0,
        opacity: 1,
        rotation: 0,
        stagger: 0.3,
        duration: 1.2,
        ease: "power3.out",
      });
    },
  });

  // Parallax en imágenes
  gsap.utils.toArray(".parallax-img").forEach((img) => {
    gsap.to(img, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  // Efecto hover en cards
  gsap.utils.toArray(".hover-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -10,
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
        duration: 0.3,
        ease: "power3.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power3.out",
      });
    });
  });
});
</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-800 text-white overflow-x-hidden"
  >
    <!-- Hero Section -->
    <section
      class="min-h-screen flex flex-col items-center justify-center relative px-6 md:px-12"
    >
      <!-- Logo zen -->
      <div id="zen-logo" class="mb-8 relative">
        <div
          class="w-32 h-32 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center shadow-2xl"
        >
          <span class="text-6xl">🧘</span>
        </div>
        <div
          class="absolute -inset-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full blur-lg opacity-30 animate-pulse"
        ></div>
      </div>

      <!-- Título principal -->
      <h1
        id="zen-title"
        class="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-center bg-gradient-to-r from-green-300 via-emerald-300 to-green-500 bg-clip-text text-transparent"
      >
        ESPACIO ZEN
      </h1>

      <!-- Subtítulo -->
      <p
        id="zen-subtitle"
        class="text-xl md:text-2xl text-gray-300 text-center max-w-3xl mb-12 leading-relaxed px-4"
      >
        Una experiencia de bienestar digital creada con
        <span class="text-green-400 font-semibold">Vue.js</span> y
        <span class="text-green-400 font-semibold">Nuxt 3</span>
      </p>

      <!-- CTA Button -->
      <a
        id="zen-cta"
        href="https://espaciozensjm.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-white font-semibold text-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-green-500/30"
      >
        Explorar el Proyecto
      </a>
    </section>

    <!-- Tecnologías Section -->
    <section
      class="py-32 mt-20 px-6 md:px-12 flex flex-col items-center justify-center"
    >
      <div class="max-w-6xl mx-auto text-center">
        <h2
          class="text-4xl md:text-5xl font-bold text-center mb-24 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
        >
          Stack Tecnológico
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div
            class="tech-badge flex flex-col items-center p-8 bg-gray-800/50 rounded-2xl backdrop-blur border border-gray-700/50"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-yellow-400 to-emerald-400 rounded-full flex items-center justify-center mb-6"
            >
              <img src="/img/icons/vue.svg" alt="Vue.js" class="w-12 h-12" />
            </div>
            <h3 class="text-xl font-semibold text-green-400 mb-2">Vue.js</h3>
            <p class="text-gray-400 text-sm text-center">Framework reactivo</p>
          </div>

          <div
            class="tech-badge flex flex-col items-center p-8 bg-gray-800/50 rounded-2xl backdrop-blur border border-gray-700/50"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-ambar-400 to-cyan-500 rounded-full flex items-center justify-center mb-6"
            >
              <img
                src="/img/icons/nuxt-icon.svg"
                alt="Nuxt.js"
                class="w-12 h-12"
              />
            </div>
            <h3 class="text-xl font-semibold text-teal-400 mb-2">Nuxt 3</h3>
            <p class="text-gray-400 text-sm text-center">Framework</p>
          </div>

          <div
            class="tech-badge flex flex-col items-center p-8 bg-gray-800/50 rounded-2xl backdrop-blur border border-gray-700/50"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6"
            >
              <img
                src="/img/icons/tailwind.svg"
                alt="Tailwind CSS"
                class="w-12 h-12"
              />
            </div>
            <h3 class="text-xl font-semibold text-blue-400 mb-2">Tailwind</h3>
            <p class="text-gray-400 text-sm text-center">Diseño moderno</p>
          </div>

          <div
            class="tech-badge flex flex-col items-center p-8 bg-gray-800/50 rounded-2xl backdrop-blur border border-gray-700/50"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-6"
            >
              <img
                src="/img/icons/chatgpt.svg"
                alt="ChatGPT"
                class="w-12 h-12"
              />
            </div>
            <h3 class="text-xl font-semibold text-purple-400 mb-2">ChatGPT</h3>
            <p class="text-gray-400 text-sm text-center">IA</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Características Section -->
    <section
      class="py-32 mt-20 px-6 md:px-12 bg-gray-900/50 flex flex-col items-center justify-center"
    >
      <div class="max-w-6xl mx-auto text-center">
        <h2
          class="text-4xl md:text-5xl font-bold text-center mb-24 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
        >
          Características del Proyecto
        </h2>

        <div class="grid md:grid-cols-2 gap-16">
          <div
            class="feature-card hover-card p-10 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl backdrop-blur border border-gray-700/50"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-8"
            >
              <span class="text-3xl">🧘‍♀️</span>
            </div>
            <h3 class="text-3xl font-bold mb-6 text-green-400">
              Experiencia de Usuario
            </h3>
            <ul class="space-y-4 text-gray-300 text-lg">
              <li class="flex items-center space-x-4">
                <span class="text-green-400 text-xl">✓</span>
                <span>Diseño zen y minimalista</span>
              </li>
              <li class="flex items-center space-x-4">
                <span class="text-green-400 text-xl">✓</span>
                <span>Navegación intuitiva y fluida</span>
              </li>
              <li class="flex items-center space-x-4">
                <span class="text-green-400 text-xl">✓</span>
                <span>Reserva de citas online</span>
              </li>
              <li class="flex items-center space-x-4">
                <span class="text-green-400 text-xl">✓</span>
                <span>Galería de servicios interactiva</span>
              </li>
            </ul>
          </div>

          <div
            class="feature-card hover-card p-10 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl backdrop-blur border border-gray-700/50"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-8"
            >
              <span class="text-3xl">✨</span>
            </div>
            <h3 class="text-3xl font-bold mb-6 text-blue-400">
              Funcionalidades Avanzadas
            </h3>
            <ul class="space-y-4 text-gray-300 text-lg">
              <li class="flex items-center space-x-4">
                <span class="text-green-400 text-xl">✓</span>
                <span>Asistente virtual con ChatGPT</span>
              </li>
              <li class="flex items-center space-x-4">
                <span class="text-green-400 text-xl">✓</span>
                <span>Optimización SEO avanzada</span>
              </li>
              <li class="flex items-center space-x-4">
                <span class="text-green-400 text-xl">✓</span>
                <span>Rendimiento ultra-rápido</span>
              </li>
              <li class="flex items-center space-x-4">
                <span class="text-green-400 text-xl">✓</span>
                <span>Diseño completamente responsive</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Screenshots Section -->
    <section
      class="py-32 mt-20 px-6 md:px-12 bg-gray-900/50 flex flex-col items-center justify-center"
    >
      <div class="max-w-6xl mx-auto text-center">
        <h2
          class="text-4xl md:text-5xl font-bold text-center mb-24 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
        >
          Capturas del Proyecto
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          <div class="screenshot hover-card group">
            <div class="relative overflow-hidden rounded-2xl">
              <img
                src="/img/proyectos/espaciozen.webp"
                alt="Vista principal de Espacio Zen"
                class="parallax-img w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div
                class="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <h4 class="font-semibold">Vista Principal</h4>
                <p class="text-sm text-gray-300">Página de inicio zen</p>
              </div>
            </div>
          </div>

          <div class="screenshot hover-card group">
            <div class="relative overflow-hidden rounded-2xl">
              <img
                src="/img/proyectos/adminzen.webp"
                alt="Panel de administración"
                class="parallax-img w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div
                class="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <h4 class="font-semibold">Panel Admin</h4>
                <p class="text-sm text-gray-300">Gestión de servicios</p>
              </div>
            </div>
          </div>

          <div class="screenshot hover-card group">
            <div class="relative overflow-hidden rounded-2xl">
              <img
                src="/img/proyectos/chat.webp"
                alt="Interfaz de servicios"
                class="parallax-img w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div
                class="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <h4 class="font-semibold">Servicios</h4>
                <p class="text-sm text-gray-300">Catálogo de bienestar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section
      class="py-32 mt-20 mb-20 px-6 md:px-12 bg-gray-900/50 flex flex-col items-center justify-center"
    >
      <div class="max-w-5xl mx-auto text-center">
        <h2
          class="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
        >
          ¿Listo para la Serenidad?
        </h2>
        <p
          class="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Explora la experiencia completa del proyecto y descubre cómo la
          tecnología puede crear espacios digitales de paz y bienestar.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-8 justify-center items-center mt-8"
        >
          <a
            href="https://espaciozensjm.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="px-16 py-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-white font-semibold text-xl hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105 min-w-[280px] text-center"
          >
            Ver Proyecto Live
          </a>

          <NuxtLink
            to="/"
            class="px-16 py-6 border-2 border-gray-600 rounded-full text-gray-300 font-semibold text-xl hover:border-white hover:text-white transition-all duration-300 hover:scale-105 min-w-[280px] text-center"
          >
            ← Volver al Portafolio
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
section:not(:first-child) {
  margin-top: 2.5rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

section:last-child {
  margin-bottom: 5rem;
}

section h2 {
  margin-bottom: 3rem !important;
}

section:last-child h2 {
  margin-bottom: 2rem !important;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.hover-card {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}
</style>