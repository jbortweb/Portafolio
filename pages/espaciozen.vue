<script setup>
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { onMounted } from "vue";

gsap.registerPlugin(SplitText);

onMounted(() => {
  const splitText = new SplitText("#texto-proyecto", {
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
          href="https://espaciozensjm.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/proyectos/espaciozen.webp"
            alt="espaciozen.webp"
            class="w-full h-auto object-cover rounded-lg"
            style="view-transition-name: espaciozen-img"
          />
        </a>
      </div>

      <div
        class="col-span-2 row-span-2 col-start-1 row-start-4 p-6 rounded-xl backdrop-blur teleborde hover:scale-125 z-60"
      >
        <a
          href="https://espaciozensjm.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/proyectos/login.webp"
            alt="espaciozen.webp"
            class="w-full h-auto rounded-lg object-cover"
            style="view-transition-name: espaciozen-img"
          />
        </a>
      </div>

      <div
        class="col-span-2 row-span-5 col-start-3 row-start-1 p-6 rounded-xl backdrop-blur"
      >
        <div
          id="texto-proyecto"
          class="flex flex-col h-full items-center justify-center px-4"
        >
          <p class="text-lg text-white font-custom">
            <span class="text-rosa text-xl">Espacio Zen</span> es una web
            desarrollada con Nuxt.js y Vuetify en el frontend, y PHP en el panel
            de administración. Permite gestionar el blog de forma completa:
            crear, editar y eliminar artículos de manera ágil y segura.
          </p>
          <p class="text-lg text-white font-custom">
            La página se integra con dos APIs externas: <br /><span
              class="text-rosa text-xl"
              >Instagram</span
            >: muestra automáticamente las publicaciones subidas a la cuenta
            oficial, manteniendo el contenido visual del sitio siempre
            actualizado.<br />
            <span class="text-rosa text-xl">ChatGPT</span>: ofrece un chat
            basado en IA, que permite a los usuarios realizar preguntas sobre
            los servicios y recibir respuestas instantáneas y relevantes.
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
          href="https://espaciozensjm.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/proyectos/adminzen.webp"
            alt="espaciozen.webp"
            class="w-full h-auto rounded-lg object-cover"
            style="view-transition-name: espaciozen-img"
          />
        </a>
      </div>

      <div
        class="col-span-2 row-span-2 col-start-5 row-start-4 p-6 backdrop-blur teleborde hover:scale-125 z-60"
      >
        <a
          href="https://espaciozensjm.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/proyectos/chat.webp"
            alt="espaciozen.webp"
            class="w-full h-auto rounded-lg object-cover"
            style="view-transition-name: espaciozen-img"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>