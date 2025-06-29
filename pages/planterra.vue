<script setup>
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { onMounted } from "vue";

gsap.registerPlugin(SplitText);

onMounted(() => {
  const splitText = new SplitText("#texto-proyecto-planterra", {
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
            href="https://planterra.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/proyectos/planterra-admin.webp"
              alt="Imagen de la web de Planterra"
              class="w-full h-auto object-cover rounded-lg"
              style="view-transition-name: planterra-img"
            />
          </a>
        </div>
        <div
          class="flex-1 p-4 teleborde hover:scale-105 transition-transform rounded-xl md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-4 md:p-6 md:block"
        >
          <a
            href="https://planterra.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/proyectos/planterra-productos.webp"
              alt="Imagen de la web de Planterra"
              class="w-full h-auto rounded-lg object-cover"
              style="view-transition-name: planterra-img"
            />
          </a>
        </div>
      </div>
      <!-- Texto central -->
      <div
        class="p-4 rounded-xl backdrop-blur flex flex-col items-center justify-center md:col-span-2 md:row-span-5 md:col-start-3 md:row-start-1 md:p-6"
      >
        <div
          id="texto-proyecto-planterra"
          class="flex flex-col h-full items-center justify-center px-4"
        >
          <p class="text-lg text-white font-custom">
            <span class="text-rosa text-xl">Planterra</span> es una web
            desarrollada con Nuxt.js y Tailwind en el frontend, y Firebase como
            backend para el almacenamiento y gestión de datos. Ofrece una
            interfaz clara y adaptada a dispositivos móviles para una
            experiencia fluida tanto para clientes como administradores.
          </p>
          <p class="text-lg text-white font-custom">
            La página consta de dos vistas:<br />
            <span class="text-rosa text-xl">Cliente</span>: puede navegar
            fácilmente por los productos desde cualquier dispositivo gracias a
            un diseño responsivo.<br />
            <span class="text-rosa text-xl">Administrador</span>: vista
            protegida desde la cual se pueden crear, editar y eliminar
            productos, gestionar los pedidos y visualizar un calendario donde
            los pedidos se organizan por día.
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
            href="https://planterra.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/proyectos/planterraformulario.webp"
              alt="Imagen de la web de Planterra"
              class="w-full h-auto rounded-lg object-cover"
              style="view-transition-name: planterra-img"
            />
          </a>
        </div>
        <div
          class="flex-1 p-4 teleborde hover:scale-105 transition-transform rounded-xl md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-4 md:p-6 md:block"
        >
          <a
            href="https://planterra.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/proyectos/planterratienda.webp"
              alt="Imagen de la web de Planterra"
              class="w-full h-auto rounded-lg object-cover"
              style="view-transition-name: planterra-img"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>