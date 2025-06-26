<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#tele-zen",
        start: "top 80%",
      },
    })
    .to("#container-proyectos", {
      backgroundColor: "#fff",
      duration: 0.5,
      ease: "power2.out",
    })
    .to("#titulo-zen", {
      color: "#1E40AF",
      duration: 0.2,
    })
    .to("#titulo-zen", {
      color: "#E6006B",
      duration: 0.4,
    })
    .from("#tele-zen", {
      opacity: 0,
      x: -1000,
      duration: 0.5,
      ease: "power2.out",
    })
    .from(".strong-zen", {
      opacity: 0,
      y: 50,
      duration: 0.7,
      stagger: 0.5,
      ease: "power2.out",
    })
    .from("#tele-maduixa", {
      opacity: 0,
      x: 1000,
      duration: 0.5,
      ease: "power2.out",
    })
    .from(".strong-maduixa", {
      opacity: 0,
      y: 50,
      duration: 0.7,
      stagger: 0.5,
      ease: "power2.out",
    })
    .from(
      "#tele-planterra",
      {
        opacity: 0,
        x: -1000,
        duration: 0.5,
        ease: "power2.out",
      },
      "+=1"
    )
    .from(".strong-planterra", {
      opacity: 0,
      y: 50,
      duration: 0.7,
      stagger: 0.5,
      ease: "power2.out",
    })
    .from(
      "#tele-cafe",
      {
        opacity: 0,
        x: 1000,
        duration: 1,
        ease: "power2.out",
      },
      "+=1"
    )
    .from(".strong-cafe", {
      opacity: 0,
      y: 50,
      duration: 0.7,
      stagger: 0.5,
      ease: "power2.out",
    });
});
</script>

<template>
  <div id="container-proyectos" class="relative pb-96">
    <h3
      id="titulo-zen"
      class="relative -top-30 text-4xl sm:text-6xl font-custom font-semibold text-white text-center py-12"
    >
      Algunos de mis proyectos
    </h3>
    <section class="flex flex-col justify-between items-start gap-40">
      <article class="flex flex-col md:flex-row w-full h-auto mb-12">
        <div
          id="tele-zen"
          class="flex-1 flex flex-col justify-center items-center"
        >
          <div
            class="imagen-proyecto flex items-center justify-center w-[70%] sm:w-[50%] h-[420px]"
          >
            <a
              href="/espaciozen"
              style="view-transition-name: espaciozen-img"
              class="block transition-link"
            >
              <img
                src="/img/proyectos/espaciozen.webp"
                alt="espaciozen.webp"
                class="w-56 h-40 rounded-lg object-cover relative top-10 right-7.5 transition-img cursor-pointer"
                style="view-transition-name: espaciozen-img"
              />
            </a>
          </div>
          <a
            href="https://espaciozensjm.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-2xl font-bold mt-8 text-rosa text-custom"
            >Espacio Zen
          </a>
        </div>
        <div class="flex-1 flex flex-col justify-end items-center">
          <div class="w-[75%] mx-auto flex flex-col items-start gap-3">
            <p class="texto-zen text-4xl font-custom text-rosa">
              Proyecto:
              <strong class="strong-zen text-black text-2xl"
                >Espacio Zen</strong
              >
            </p>
            <p class="texto-zen text-2xl text-rosa font-custom">
              Tecnologías front-end:
              <strong class="strong-zen text-black text-lg"
                >Nuxt.js + Vuetify</strong
              >
            </p>
            <p class="texto-zen font-custom text-2xl text-rosa">
              Tecnologías back-end:
              <strong class="strong-zen text-black text-lg">PHP</strong>
            </p>
            <br />
            <p
              class="texto-zen block mt-2 mb-1 text-start w-full text-2xl text-rosa font-custom"
            >
              Características principales:
            </p>
            <ul class="w-full flex flex-col items-start gap-2 font-custom">
              <li
                class="strong-zen w-full text-start text-lg text-black list-none"
              >
                - Interfaz de usuario intuitiva y responsiva
              </li>
              <li
                class="strong-zen w-full text-start text-lg text-black list-none"
              >
                - Gestión completa de artículos (alta, edición y baja)
              </li>
              <li
                class="strong-zen w-full text-start text-lg text-black list-none"
              >
                - Integración con API de Instagram
              </li>
              <li
                class="strong-zen w-full text-start text-lg text-black list-none"
              >
                - Consultas a la API de ChatGPT
              </li>
            </ul>
          </div>
        </div>
      </article>

      <!-- articulo maduixa -->
      <article
        class="flex flex-col md:flex-row w-full h-[160dvh] md:h-screen bg-[rgb(17,17,17)]"
      >
        <div class="flex-1 flex flex-col justify-center items-center">
          <div class="w-[75%] mx-auto flex flex-col items-start gap-3">
            <p class="texto-maduixa text-4xl font-custom text-rosa">
              Proyecto:
              <strong class="strong-maduixa text-white text-2xl"
                >Lencería Maduixa</strong
              >
            </p>
            <p class="texto-maduixa text-2xl text-rosa font-custom">
              Tecnologías front-end:
              <strong class="strong-maduixa text-white text-lg"
                >Nuxt + Tailwind</strong
              >
            </p>
            <p class="texto-maduixa font-custom text-2xl text-rosa">
              Tecnologías back-end:
              <strong class="strong-maduixa text-white text-lg"
                >Laravel y Clerk</strong
              >
            </p>
            <br />
            <p
              class="texto-maduixa block mt-2 mb-1 text-start w-full text-2xl text-rosa font-custom"
            >
              Características principales:
            </p>
            <ul class="w-full flex flex-col items-start gap-2 font-custom">
              <li
                class="strong-maduixa w-full text-start text-lg text-white list-none"
              >
                - Interfaz para clientes: catálogo de productos con imágenes,
                descripción y precios.
              </li>
              <li
                class="strong-maduixa w-full text-start text-lg text-white list-none"
              >
                - Integración de Clerk para autentificación del administrador.
              </li>
              <li
                class="strong-maduixa w-full text-start text-lg text-white list-none"
              >
                - Gestión de productos vía administrador: alta, edición y baja
              </li>
            </ul>
          </div>
        </div>
        <div
          id="tele-maduixa"
          class="flex-1 flex flex-col justify-center items-center"
        >
          <div
            class="imagen-proyecto flex items-center justify-center w-[70%] sm:w-[50%] h-[420px]"
          >
            <a
              href="/maduixa"
              style="view-transition-name: maduixa-img"
              class="block transition-link"
            >
              <img
                src="/img/proyectos/maduixa.webp"
                alt="Foto de inicio de maduixa"
                class="w-56 h-40 rounded-lg object-cover relative top-10 right-7.5 transition-img cursor-pointer"
                style="view-transition-name: maduixa-img"
              />
            </a>
          </div>
          <a
            href="https://lenceriamaduixa.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-2xl font-bold mt-8 text-rosa text-custom"
            >Lencería Maduixa
          </a>
        </div>
      </article>

      <!-- articulo planterra -->

      <article class="flex flex-col md:flex-row w-full h-auto mb-12">
        <div
          id="tele-planterra"
          class="flex-1 flex flex-col justify-center items-center"
        >
          <div
            class="imagen-proyecto flex items-center justify-center w-[80%] sm:w-[50%] h-[420px]"
          >
            <a
              href="/planterra"
              style="view-transition-name: planterra-img"
              class="block transition-link"
            >
              <img
                src="/img/proyectos/planterratienda.webp"
                alt="Imagen web planterra"
                class="w-56 h-40 rounded-lg object-cover relative top-10 right-7.5 transition-img cursor-pointer"
                style="view-transition-name: planterra-img"
              />
            </a>
          </div>
          <a
            href="https://planterra.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-2xl font-bold mt-8 text-rosa text-custom"
            >Planterra
          </a>
        </div>
        <div class="flex-1 flex flex-col justify-end items-center">
          <div class="w-[75%] mx-auto flex flex-col items-start gap-3">
            <p class="texto-planterra text-4xl font-custom text-rosa">
              Proyecto:
              <strong class="strong-planterra text-black text-2xl"
                >Planterra</strong
              >
            </p>
            <p class="texto-planterra text-2xl text-rosa font-custom">
              Tecnologías front-end:
              <strong class="strong-planterra text-black text-lg"
                >Nuxt.js + Tailwind
              </strong>
            </p>
            <p class="texto-planterra font-custom text-2xl text-rosa">
              Tecnologías back-end:
              <strong class="strong-planterra text-black text-lg"
                >Firebase</strong
              >
            </p>
            <br />
            <p
              class="texto-planterra block mt-2 mb-1 text-start w-full text-2xl text-rosa font-custom"
            >
              Características principales:
            </p>
            <ul class="w-full flex flex-col items-start gap-2 font-custom">
              <li
                class="strong-planterra w-full text-start text-lg text-black list-none"
              >
                - Interfaz de cliente intuitiva y responsiva
              </li>
              <li
                class="strong-planterra w-full text-start text-lg text-black list-none"
              >
                - Gestión de Productos: Añade, edita y elimina productos.
              </li>
              <li
                class="strong-planterra w-full text-start text-lg text-black list-none"
              >
                - Gestión de Pedidos: Visualiza y administra todos los pedidos
                realizados.
              </li>
              <li
                class="strong-planterra w-full text-start text-lg text-black list-none"
              >
                - Calendario de Pedidos: Visualiza los pedidos organizados por
                día
              </li>
            </ul>
          </div>
        </div>
      </article>

      <!-- articulo cafe -->

      <article
        class="flex flex-col md:flex-row w-full h-[160dvh] md:h-screen bg-[rgb(17,17,17)]"
      >
        <div class="flex-1 flex flex-col justify-center items-center">
          <div class="w-[75%] mx-auto flex flex-col items-start gap-3">
            <p class="texto-cafe text-4xl font-custom text-rosa">
              Proyecto:
              <strong class="strong-cafe text-white text-2xl"
                >Café JBortWeb</strong
              >
            </p>
            <p class="texto-cafe text-2xl text-rosa font-custom">
              Tecnologías front-end:
              <strong class="strong-cafe text-white text-lg"
                >React + Tailwind</strong
              >
            </p>
            <p class="texto-cafe font-custom text-2xl text-rosa">
              Tecnologías back-end:
              <strong class="strong-cafe text-white text-lg">Laravel</strong>
            </p>
            <br />
            <p
              class="texto-cafe block mt-2 mb-1 text-start w-full text-2xl text-rosa font-custom"
            >
              Características principales:
            </p>
            <ul class="w-full flex flex-col items-start gap-2 font-custom">
              <li
                class="strong-cafe w-full text-start text-lg text-white list-none"
              >
                - Interfaz para clientes: catálogo de productos con imágenes,
                descripción y precios.
              </li>
              <li
                class="strong-cafe w-full text-start text-lg text-white list-none"
              >
                - Carrito de compras: selección, edición de cantidades y total
                actualizado.
              </li>
              <li
                class="strong-cafe w-full text-start text-lg text-white list-none"
              >
                - Gestión de productos vía administrador: alta, edición y baja
              </li>
            </ul>
          </div>
        </div>
        <div
          id="tele-cafe"
          class="flex-1 flex flex-col justify-center items-center"
        >
          <div
            class="imagen-proyecto flex items-center justify-center w-[70%] sm:w-[50%] h-[420px]"
          >
            <a
              href="/cafe"
              style="view-transition-name: cafe-img"
              class="block transition-link"
            >
              <img
                src="/img/proyectos/cafereact.webp"
                alt="cafereact.webp"
                class="w-56 h-40 rounded-lg object-cover relative top-10 right-7.5 transition-img cursor-pointer"
                style="view-transition-name: cafe-img"
              />
            </a>
          </div>
          <a
            href="https://cafe-jbortweb.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-2xl font-bold mt-8 text-rosa text-custom"
            >Café JBortWeb
          </a>
        </div>
      </article>

      <!--  -->
    </section>
  </div>
</template>

<style scoped>
.imagen-proyecto {
  background-image: url("/img/proyectos/tele.webp");
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  background-repeat: no-repeat;
  overflow: hidden;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.45))
    drop-shadow(0 0 8px rgba(255, 255, 255, 0.18))
    drop-shadow(0 0 16px rgba(255, 255, 255, 0.12))
    drop-shadow(0 0 24px rgba(255, 255, 255, 0.08))
    drop-shadow(0 0 32px rgba(255, 255, 255, 0.05));
}

/* View Transition para la imagen */
.transition-link {
  display: block;
}
.transition-img {
  transition: box-shadow 0.3s;
}
</style>