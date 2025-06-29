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
    <div
      class="w-[95%] md:w-full max-w-screen-xl flex flex-col gap-6 pt-8 md:grid md:grid-cols-6 md:grid-rows-5 md:gap-6 md:pt-0"
    >
      <!-- Imágenes superiores -->
      <div class="flex gap-4 md:contents">
        <div
          class="flex-1 p-4 teleborde hover:scale-105 transition-transform rounded-xl md:col-span-2 md:row-span-2 md:p-6 md:block"
        >
          <a
            href="https://lenceriamaduixa.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/proyectos/tabla.webp"
              alt="Imagen de la web de maduixa"
              class="w-full h-auto object-cover rounded-lg"
              style="view-transition-name: maduixa-img"
            />
          </a>
        </div>
        <div
          class="flex-1 p-4 teleborde hover:scale-105 transition-transform rounded-xl md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-4 md:p-6 md:block"
        >
          <a
            href="https://lenceriamaduixa.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/proyectos/maduixa.webp"
              alt="Imagen de la web de maduixa"
              class="w-full h-auto rounded-lg object-cover"
              style="view-transition-name: maduixa-img"
            />
          </a>
        </div>
      </div>
      <!-- Texto central -->
      <div
        class="p-4 rounded-xl backdrop-blur flex flex-col items-center justify-center md:col-span-2 md:row-span-5 md:col-start-3 md:row-start-1 md:p-6"
      >
        <div
          id="texto-proyecto-maduixa"
          class="flex flex-col h-full items-center justify-center px-4"
        >
          <p class="text-lg text-white font-custom">
            <span class="text-rosa text-xl">Lencería Maduixa</span> es una web
            desarrollada con Nuxt y Tailwind en el frontend, y Laravel y Clerk
            en el backend. Permite la gestión de productos y autenticación
            segura para el administrador, con un catálogo visual y fácil de usar
            para los clientes.
          </p>
          <p class="text-lg text-white font-custom">
            La página cuenta con dos vistas:<br />
            <span class="text-rosa text-xl">Cliente</span>: puede consultar el
            catálogo de productos, ver imágenes, descripciones y precios.<br />
            <span class="text-rosa text-xl">Administrador</span>: permite crear,
            editar y eliminar productos, así como gestionar la autenticación
            mediante Clerk.
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
      <!-- Imágenes inferiores -->
      <div class="flex gap-4 md:contents">
        <div
          class="flex-1 p-4 teleborde hover:scale-105 transition-transform rounded-xl md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-1 md:p-6 md:block"
        >
          <a
            href="https://lenceriamaduixa.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/proyectos/carousel.webp"
              alt="Imagen de la web de maduixa"
              class="w-full h-auto rounded-lg object-cover"
              style="view-transition-name: maduixa-img"
            />
          </a>
        </div>
        <div
          class="flex-1 p-4 teleborde hover:scale-105 transition-transform rounded-xl md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-4 md:p-6 md:block"
        >
          <a
            href="https://lenceriamaduixa.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/proyectos/muestra.webp"
              alt="Imagen de la web de maduixa"
              class="w-full h-auto rounded-lg object-cover"
              style="view-transition-name: maduixa-img"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>