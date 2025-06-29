<script setup>
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { onMounted } from "vue";

gsap.registerPlugin(SplitText);

onMounted(() => {
  const splitText = new SplitText("#texto-proyecto-cafe", {
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
  <div class="py-10 min-h-screen flex items-center justify-center">
    <div
      class="w-[95%] md:w-full max-w-screen-xl flex flex-col gap-6 pt-8 md:grid md:grid-cols-6 md:grid-rows-5 md:gap-6 md:pt-0"
    >
      <!-- Imágenes superiores -->
      <div class="flex gap-4 md:contents">
        <div
          class="flex-1 p-4 teleborde hover:scale-105 transition-transform rounded-xl md:col-span-2 md:row-span-2 md:p-6 md:block"
        >
          <a
            href="https://cafe-jbortweb.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/proyectos/editcafe.webp"
              alt="Imagen de la web de cafereact"
              class="w-full h-auto object-cover rounded-lg"
              style="view-transition-name: cafe-img"
            />
          </a>
        </div>
        <div
          class="flex-1 p-4 teleborde hover:scale-105 transition-transform rounded-xl md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-4 md:p-6 md:block"
        >
          <a
            href="https://cafe-jbortweb.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/proyectos/pedidoscafe.webp"
              alt="Imagen de la web de cafereact"
              class="w-full h-auto rounded-lg object-cover"
              style="view-transition-name: cafe-img"
            />
          </a>
        </div>
      </div>
      <!-- Texto central -->
      <div
        class="p-4 rounded-xl backdrop-blur flex flex-col items-center justify-center md:col-span-2 md:row-span-5 md:col-start-3 md:row-start-1 md:p-6"
      >
        <div
          id="texto-proyecto-cafe"
          class="flex flex-col h-full items-center justify-center px-4"
        >
          <p class="text-lg text-white font-custom">
            <span class="text-rosa text-xl">Café Jbortweb</span> es una web
            desarrollada con React.js y Tailwind en el frontend, y Laravel en el
            panel de administración. Permite gestionar los pedidos de los
            clientes, así como crear, editar y eliminar productos de forma ágil
            y segura desde el panel de control.
          </p>
          <p class="text-lg text-white font-custom">
            La página consta de dos vistas:<br />
            <span class="text-rosa text-xl">Cliente</span>: puede acceder a
            todos los productos y sus categorías, realizar compras, visualizar
            sus pedidos, editarlos y eliminarlos de forma sencilla.<br />
            <span class="text-rosa text-xl">Administrador</span>: vista
            autenticada desde la que el administrador puede acceder de forma
            segura, gestionar pedidos y administrar los productos (crear, editar
            y eliminar).
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
            href="https://cafe-jbortweb.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/proyectos/cafereact.webp"
              alt="Imagen de la web de cafereact"
              class="w-full h-auto rounded-lg object-cover"
              style="view-transition-name: cafe-img"
            />
          </a>
        </div>
        <div
          class="flex-1 p-4 teleborde hover:scale-105 transition-transform rounded-xl md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-4 md:p-6 md:block"
        >
          <a
            href="https://cafe-jbortweb.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/proyectos/pedidoscliente.webp"
              alt="Imagen de la web de cafereact"
              class="w-full h-auto rounded-lg object-cover"
              style="view-transition-name: cafe-img"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>