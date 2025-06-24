<script setup>
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { onMounted } from "vue";

gsap.registerPlugin(SplitText);

onMounted(() => {
  const splitText = new SplitText("#texto-proyecto-maduixa", {
    type: "words",
  });
  gsap.from(splitText.words, {
    duration: 1,
    y: 100,
    stagger: 0.1,
    autoAlpha: 0,
    filter: "blur(10px)",
  });
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="grid grid-cols-6 grid-rows-5 gap-6 max-w-screen-xl w-full">
      <div class="col-span-2 row-span-2 p-6 teleborde hover:scale-125 z-60">
        <a
          href="https://lenceriamaduixa.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/proyectos/carousel.webp"
            alt="Imagen de la web de Maduixa"
            class="w-full h-auto object-cover rounded-lg"
            style="view-transition-name: maduixa-img"
          />
        </a>
      </div>

      <div
        class="col-span-2 row-span-2 col-start-1 row-start-4 p-6 rounded-xl backdrop-blur teleborde hover:scale-125 z-60"
      >
        <a
          href="https://lenceriamaduixa.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/proyectos/maduixa.webp"
            alt="Imagen de la web de Maduixa"
            class="w-full h-auto rounded-lg object-cover"
            style="view-transition-name: maduixa-img"
          />
        </a>
      </div>

      <div
        class="col-span-2 row-span-5 col-start-3 row-start-1 p-6 rounded-xl backdrop-blur"
      >
        <div
          id="texto-proyecto-maduixa"
          class="flex flex-col h-full items-center justify-center px-4"
        >
          <p class="text-lg text-white font-custom">
            <span class="text-rosa text-xl">Lencería Maduixa</span> es una web
            desarrollada con Nuxt y Tailwind en el frontend, y con Laravel y
            Clerk en el backend para la gestión y autenticación. Está diseñada
            para mostrar un catálogo completo de productos y facilitar su
            administración de forma segura.
          </p>
          <p class="text-lg text-white font-custom">
            La página consta de dos vistas:<br />
            <span class="text-rosa text-xl">Cliente</span>: puede explorar todos
            los productos con sus imágenes, descripciones y precios de forma
            clara y visual.<br />
            <span class="text-rosa text-xl">Administrador</span>: vista
            autenticada mediante Clerk, donde el administrador puede acceder de
            forma segura para crear, editar y eliminar productos.
          </p>
          <br />
          <br />
          <NuxtLink
            to="/"
            class="back-button text-rosa font-custom text-lg pt-40"
          >
            ← Volver atras
          </NuxtLink>
        </div>
      </div>

      <div
        class="col-span-2 row-span-2 col-start-5 teleborde hover:scale-125 z-60 row-start-1 p-6"
      >
        <a
          href="https://lenceriamaduixa.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/proyectos/muestra.webp"
            alt="Imagen de la web de Maduixa"
            class="w-full h-auto rounded-lg object-cover"
            style="view-transition-name: maduixa-img"
          />
        </a>
      </div>

      <div
        class="col-span-2 row-span-2 col-start-5 row-start-4 p-6 backdrop-blur teleborde hover:scale-125 z-60"
      >
        <a
          href="https://lenceriamaduixa.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/proyectos/tabla.webp"
            alt="Imagen de la web de Maduixa"
            class="w-full h-auto rounded-lg object-cover"
            style="view-transition-name: maduixa-img"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>