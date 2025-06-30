<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

onMounted(() => {
  const split = new SplitText("#presentacion", { type: "words" });
  const contacto = new SplitText("#contacto", { type: "words" });
  const proyectos = new SplitText("#texto-proyectos", { type: "words" });

  let endMain = "";

  if (window.innerWidth > 480 && window.innerWidth < 1280) {
    endMain = "+=8500";
  } else {
    endMain = "+=8000";
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      start: "top top",
      end: endMain,
      scrub: 1,
      pin: true,
    },
  });
  tl.to("#picture", {
    duration: 1,
    scale: 1,
  })
    .to(
      "#logo",
      {
        autoAlpha: 0,
      },
      "<"
    )
    .to(
      "#footer",
      {
        autoAlpha: 0,
      },
      "<"
    )
    .to(
      "#logo-mask",
      {
        maskSize: "clamp(20vh, 25%, 30vh)",
        duration: 2,
      },
      0.25
    )
    .to(
      "#picture",
      {
        opacity: 0.1,
        duration: 2,
      },
      2.5
    )
    .to("#article", {
      opacity: 1,
      duration: 0.5,
      scale: 1.5,
    })
    .to("#oficio", {
      color: "#1E40AF",
      duration: 0.2,
    })
    .to("#oficio", {
      color: "#E6006B",
      duration: 0.4,
    })
    .to(
      "#logo-mask",
      {
        autoAlpha: 0,
      },
      "-=0.25"
    )
    .to("#lenguajes", { opacity: 1, duration: 0.1 }, "<")
    .fromTo(
      "#lenguajes .icono-lenguaje",
      { autoAlpha: 0, y: -120 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.18,
        ease: "power2.out",
      },
      "<"
    )
    .to(
      "#fotomia",
      {
        opacity: 1,
        clipPath: "circle(75% at 50% 50%)",
        duration: 1.2,
        ease: "power2.out",
      },
      ">"
    )
    .to(
      "#section2",
      {
        autoAlpha: 0,
        duration: 0.7,
        onStart: () => {
          const s2 = document.getElementById("section2");
          if (s2) s2.classList.remove("opacity-0");
        },
        onComplete: () => {
          const s2 = document.getElementById("section2");
          if (s2) s2.style.pointerEvents = "none";
        },
      },
      "+=1"
    )
    .to(
      "#section3",
      {
        opacity: 1,
        duration: 1.2,
        onStart: () => {
          const s3 = document.getElementById("section3");
          if (s3) s3.classList.remove("opacity-0");
        },
        onComplete: () => {
          const s3 = document.getElementById("section3");
          if (s3) s3.style.pointerEvents = "auto";
        },
      },
      "+=0.01"
    )
    .to(
      ".perfil",
      {
        opacity: 1,
        top: 0,
        duration: 1.2,
        ease: "power2.out",
      },
      ">"
    )
    .to(
      "#nombre",
      {
        right: 0,
        duration: 1.2,
        ease: "power2.out",
      },
      ">"
    )

    .fromTo(
      "#img-habitadetras",
      {
        autoAlpha: 0,
        x: 1200,
      },
      {
        autoAlpha: 1,
        x: 0,
        duration: 0.7,
      },
      ">"
    )
    .fromTo(
      "#img-habitalado",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1.4,
        ease: "power2.out",
      },
      "-=1"
    )
    .from(
      split.words,
      {
        autoAlpha: 0,
        y: 100,
        filter: "blur(10px)",
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
      },
      "-=1"
    )
    .to(
      "#section3",
      {
        autoAlpha: 0,
        scale: 0.97,
        duration: 0.7,
        onStart: () => {
          const s3 = document.getElementById("section3");
          if (s3) s3.style.pointerEvents = "none";
        },
      },
      "+=1"
    )
    .to(
      "#section4",
      {
        opacity: 1,
        scale: 1,
        duration: 0.7 /* 
        onStart: () => {
          const s4 = document.getElementById("section4");
          if (s4) s4.style.pointerEvents = "auto";
        }, */,
      },
      "+=0.1"
    )
    .from(
      contacto.words,
      {
        autoAlpha: 0,
        y: -100,
        filter: "blur(20px)",
        stagger: 0.1,
        duration: 2,
        ease: "power2.out",
      },
      "-=1"
    )
    .to(
      "#contacto",
      {
        color: "#e6006b",
        duration: 1,
        scale: 1.1,
      },
      ">"
    )
    .fromTo(
      "#web",
      { x: -1200 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power2.out",
      }
    )
    .fromTo(
      "#linkedin",
      { y: -1200 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      }
    )
    .fromTo(
      "#github",
      { x: 1200 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power2.out",
      }
    )
    .fromTo(
      "#email",
      { y: 1200 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      }
    )
    .to(
      "#section4",
      {
        autoAlpha: 0,
        duration: 0.5,
      },
      "+=1"
    )
    .to(
      "#section5",
      {
        autoAlpha: 1,
        duration: 1,
      },
      "-=0.5"
    )
    .to(
      "#picture-section5",
      {
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
      },
      ">"
    )
    .fromTo(
      "#container-proyectos",
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        duration: 1.8,
      },
      ">+=0.3"
    )
    .to(
      "#titulo-proyectos",
      {
        color: "#e6006b",
        duration: 1,
        scale: 1.1,
      },
      ">"
    )
    .from(
      proyectos.words,
      {
        autoAlpha: 0,
        x: 100,
        filter: "blur(10px)",
        stagger: 0.1,
        duration: 1.5,
        ease: "power2.out",
      },
      "-=1"
    )
    .to(
      "#section5",
      {
        autoAlpha: 0,
        duration: 0.5,
      },
      "+=2"
    )
    .to(
      "#section6",
      {
        autoAlpha: 1,
        duration: 1,
      },
      "+=1"
    )
    .fromTo(
      "#tele-zen",
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
      },
      ">"
    )
    .fromTo(
      ".strong-zen",
      {
        opacity: 0,
        y: 50,
        stagger: 0.5,
      },
      {
        opacity: 1,
        color: "#fff",
        y: 0,
        duration: 0.7,
        stagger: 0.5,
      },
      ">"
    )
    .to(
      "#section6",
      {
        autoAlpha: 0,
        duration: 2,
      },
      "+=2"
    )
    .to(
      "#section7",
      {
        autoAlpha: 1,
        duration: 2,
      },
      ">"
    )
    .fromTo(
      "#tele-maduixa",
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
      },
      ">"
    )
    .fromTo(
      ".strong-maduixa",
      {
        opacity: 0,
        y: 50,
        stagger: 0.5,
      },
      {
        opacity: 1,
        color: "#000",
        y: 0,
        duration: 0.7,
        stagger: 0.5,
      },
      ">"
    )
    .to(
      "#section7",
      {
        autoAlpha: 0,
        duration: 2,
      },
      "+=2"
    )
    .to(
      "#section8",
      {
        autoAlpha: 1,
        duration: 2,
      },
      ">"
    )
    .fromTo(
      "#tele-planterra",
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
      },
      ">"
    )
    .fromTo(
      ".strong-planterra",
      {
        opacity: 0,
        y: 50,
        stagger: 0.5,
      },
      {
        opacity: 1,
        color: "#fff",
        y: 0,
        duration: 0.7,
        stagger: 0.5,
      },
      ">"
    )
    .to(
      "#section8",
      {
        autoAlpha: 0,
        duration: 2,
      },
      "+=2"
    )
    .to(
      "#section9",
      {
        autoAlpha: 1,
        duration: 2,
      },
      ">"
    )
    .fromTo(
      "#tele-cafe",
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
      },
      ">"
    )
    .fromTo(
      ".strong-cafe",
      {
        opacity: 0,
        y: 50,
        stagger: 0.5,
      },
      {
        opacity: 1,
        color: "#000",
        y: 0,
        duration: 0.7,
        stagger: 0.5,
      },
      ">"
    )
    .to(
      "#section9",
      {
        autoAlpha: 0,
        duration: 2,
      },
      "+=2"
    );
});
</script>

<template>
  <main>
    <div class="h-[1150dvh] sm:h-[1200dvh] xl:h-[1050dvh]">
      <div id="logo-mask" class="fixed top-0 w-full h-screen">
        <section id="seccion-1" class="h-screen">
          <picture
            id="picture"
            class="h-screen scale-125 block overflow-hidden w-full"
          >
            <img
              src="/img/logo.svg"
              alt="logo"
              class="absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[400px] lg:h-[400px] object-cover top-[10%] lg:top-[5%] right-[10%] -translate-x-[10%] -translate-y-[5%] z-20"
              id="logo"
            />
            <img
              src="/img/habita.webp"
              alt="logo"
              class="w-full h-full object-cover"
              id="habita"
            />
          </picture>
          <div id="footer" class="absolute bottom-0 left-1/2 -translate-x-1/2">
            <img
              src="/img/logocut.svg"
              alt="Logo cortado"
              class="w-24 h-24 sm:w-36 sm:h-36 drop-shadow-[0_0_2px_rgba(255,255,255,.5),0_0_8px_#000]"
            />
            <span
              class="uppercase absolute tracking-[8px] whitespace-nowrap text-center top-10 sm:top-14 left-1/2 -translate-x-1/2 text-xs sm:text-2xl font-custom font-semibold"
              >FullStack Developer</span
            >
          </div>
        </section>
      </div>

      <section id="section2" class="h-screen bg-[rgb(17,17,17)]">
        <div
          id="article"
          class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        >
          <img
            id="fotomia"
            src="/img/fotomia.webp"
            alt="Mi foto"
            class="absolute left-1/2 bottom-16 -translate-x-1/2 w-36 h-36 rounded-full shadow-lg object-cover"
            style="z-index: 20; opacity: 0; clip-path: circle(0% at 50% 50%)"
          />
          <h2
            id="oficio"
            class="text-2xl sm:text-4xl font-custom font-semibold text-white text-center"
          >
            FullStack Developer
          </h2>
        </div>
        <div
          id="lenguajes"
          class="fixed w-full bottom-40 left-1/2 -translate-x-1/2 opacity-0 sm: flex sm:items-center sm:justify-center"
        >
          <div
            class="grid grid-cols-2 grid-rows-4 gap-3 absolute -top-20 left-1/2 -translate-x-1/2 w-[90vw] justify-items-center mx-auto sm:grid-cols-8 sm:grid-rows-1 sm:static sm:left-auto sm:translate-x-0 sm:w-auto sm:max-w-3xl"
          >
            <img
              class="icono-lenguaje w-12 h-12 sm:w-16 sm:h-16"
              src="/img/icons/html.svg"
              alt="HTML"
            />
            <img
              class="icono-lenguaje w-12 h-12 sm:w-16 sm:h-16"
              src="/img/icons/css.svg"
              alt="CSS"
            />
            <img
              class="icono-lenguaje w-12 h-12 sm:w-16 sm:h-16"
              src="/img/icons/javascript.svg"
              alt="JavaScript"
            />

            <img
              class="icono-lenguaje w-12 h-12 sm:w-16 sm:h-16"
              src="/img/icons/react.svg"
              alt="React"
            />
            <img
              class="icono-lenguaje w-12 h-12 sm:w-16 sm:h-16"
              src="/img/icons/vue.svg"
              alt="Vue"
            />
            <img
              class="icono-lenguaje w-12 h-12 sm:w-16 sm:h-16"
              src="/img/icons/nuxt-icon.svg"
              alt="Nuxt"
            />
            <img
              class="icono-lenguaje w-16 h-12 sm:w-24 sm:h-16 relative -top-4 sm:top-0"
              src="/img/icons/laravel.svg"
              alt="Laravel"
            />
            <img
              class="icono-lenguaje w-16 h-12 sm:w-16 sm:h-24 sm:relative sm:top-4"
              src="/img/icons/php.svg"
              alt="PHP"
            />
          </div>
        </div>
      </section>

      <section
        id="section3"
        class="fixed bottom-0 h-screen bg-[rgb(17,17,17)] flex items-center justify-center opacity-0 scale-100 pointer-events-none gap-8 px-8 sm:px-16 py-8 sm:py-12"
      >
        <div
          class="text-white flex-1 h-full min-h-0 flex flex-col justify-center items-center"
        >
          <img
            src="/img/perfil.webp"
            alt="Dibujo de perfil"
            class="perfil w-[80%] max-h-[80dvh] object-cover"
          />
          <h3
            id="nombre"
            class="relative top-4 font-custom font-semibold text-2xl right-[1000px]"
          >
            Jbortweb
          </h3>
          <p
            id="presentacion"
            class="w-[80%] relative top-8 font-custom text-xs sm:text-xl break-words whitespace-pre-line text-white"
          >
            Mi experiencia principal es en el desarrollo front-end con HTML5,
            CSS3 y JavaScript, tengo unas bases solidas de React y VueJs. En
            backend, mis competencias se centran en PHP y Laravel, con el
            desarrollo de APIs REST con estas tecnologías. Además, tengo
            conocimientos de Node.js, TypeScript, SCSS, Nuxt, jQuery, Git,
            Linux, Tailwind y Material UI, entre muchas otras.
          </p>
          <br />
        </div>
        <div
          class="flex-1 flex flex-col items-center justify-center relative min-h-[320px]"
        >
          <div class="w-[50%] h-[80dvh] max-w-full">
            <img
              id="img-habitadetras"
              src="/img/habitadetras.webp"
              alt="Dibujo de habita espaldas"
              class="opacity-0 border-0 rounded-lg cursor-pointer absolute bottom-10 right-[16px] w-[60%] h-full object-cover z-10"
              style="box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1)"
            />
            <img
              id="img-habitalado"
              src="/img/habitalado.webp"
              alt="Dibujo de habitalado"
              class="opacity-0 rounded-lg cursor-pointer absolute top-10 left-0 w-[60%] h-full object-cover z-10 hover:border-2 hover:border-[#e6006b]"
              style="box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16)"
            />
          </div>
        </div>
      </section>
      <section
        id="section4"
        class="fixed inset-0 h-[99vh] bg-[rgb(17,17,17)] opacity-0"
      >
        <h3
          class="text-4xl sm:text-6xl font-custom font-semibold text-white absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/6"
          id="contacto"
        >
          Contacto
        </h3>

        <div
          class="w-[90%] sm:w-[20%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-6"
        >
          <a
            href="https://jbortweb.netlify.app/proyectos"
            target="_blank"
            rel="noopener"
            class="flex w-full items-center gap-4 justify-start"
            id="web"
          >
            <img src="/img/contacto/web.svg" alt="Web" class="w-12 h-12" />
            <span class="text-2xl text-white hover:text-[#e6006b]"
              >Mis proyectos</span
            >
          </a>

          <a
            href="https://www.linkedin.com/in/jordi-bort/"
            target="_blank"
            rel="noopener"
            class="flex w-full items-center gap-4 justify-start"
            id="linkedin"
          >
            <img
              src="/img/contacto/linkedin.svg"
              alt="LinkedIn"
              class="w-12 h-12"
            />
            <span class="text-2xl text-white hover:text-[#e6006b]"
              >Linkedin</span
            >
          </a>

          <a
            href="https://github.com/jbortweb"
            target="_blank"
            rel="noopener"
            class="flex w-full items-center gap-4 justify-start"
            id="github"
          >
            <img
              src="/img/contacto/github.svg"
              alt="GitHub"
              class="w-12 h-12"
            />
            <span class="text-2xl text-white hover:text-[#e6006b]">GitHub</span>
          </a>

          <a
            href="mailto:jbortweb@gmail.com"
            class="flex w-full items-center gap-4 justify-start"
            id="email"
          >
            <img src="/img/contacto/email.svg" alt="Email" class="w-12 h-12" />
            <span class="text-2xl text-white hover:text-[#e6006b]">Email</span>
          </a>
        </div>
      </section>

      <section
        id="section5"
        class="h-screen fixed inset-0 bg-[rgb(17,17,17)] opacity-0"
      >
        <img
          id="picture-section5"
          src="/img/proyectos/cuadros.webp"
          alt="Proyectos"
          class="w-full h-full object-auto scale-0"
        />
        <div
          class="w-[100vw] sm:w-[50vw] h-screen text-center absolute top-0 right-0 opacity-0"
          id="container-proyectos"
        >
          <h3
            class="text-2xl w-full sm:text-4xl font-custom font-semibold text-white absolute top-10 left-1/2 -translate-x-1/2"
            id="titulo-proyectos"
          >
            Algunos de mis proyectos
          </h3>
          <p
            id="texto-proyectos"
            class="w-[80%] relative top-30 left-1/2 -translate-x-1/2 font-custom text-lg sm:text-2xl break-words whitespace-pre-line text-white text-start m-auto"
          >
            Como desarrollador full stack, he trabajado en diversos proyectos
            web centrados en la creación de interfaces modernas, funcionales y
            optimizadas para distintos tipos de usuarios. He desarrollado
            frontends con frameworks como Nuxt.js y React, utilizando Tailwind o
            Vuetify para lograr diseños responsivos y atractivos. En el backend,
            he implementado paneles de administración seguros con Laravel o
            Firebase, integrando funcionalidades como gestión de productos,
            pedidos y autenticación con Clerk. Todos los proyectos han sido
            diseñados con una experiencia de usuario clara y un enfoque práctico
            en la gestión de contenidos.
          </p>
        </div>
      </section>
      <section
        id="section6"
        class="fixed inset-0 h-[99vh] bg-[rgb(17,17,17)] opacity-0 flex items-center justify-center z-70"
      >
        <article
          class="flex w-full h-auto items-center justify-center relative z-20"
        >
          <div
            id="tele-zen"
            class="flex-1 flex flex-col justify-center items-center z-30"
          >
            <div
              class="flex items-center justify-center w-[70%] sm:w-[50%] h-30 md:h-[420px] relative z-30"
            >
              <a
                href="/espaciozen"
                style="view-transition-name: espaciozen-img"
                class="block transition-link z-30"
              >
                <img
                  src="/img/proyectos/telezen.webp"
                  alt="espaciozen.webp"
                  class="w-full h-auto rounded-lg object-cover relative -top-5 transition-img cursor-pointer z-30"
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
          <div class="flex-1 flex flex-col justify-center items-center">
            <div class="w-[75%] mx-auto flex flex-col items-start gap-3">
              <p class="texto-zen text-2xl md:text-4xl font-custom text-rosa">
                Proyecto:
                <strong class="strong-zen text-black text-lg md:text-2xl"
                  >Espacio Zen</strong
                >
              </p>
              <p class="texto-zen text-xl md:text-2xl text-rosa font-custom">
                Tecnologías front-end:
                <strong class="strong-zen text-black text-sm md:text-lg"
                  >Nuxt.js + Vuetify</strong
                >
              </p>
              <p class="texto-zen font-custom text-xl md:text-2xl text-rosa">
                Tecnologías back-end:
                <strong class="strong-zen text-black text-sm md:text-lg"
                  >PHP</strong
                >
              </p>
              <br />
              <p
                class="texto-zen block mt-2 mb-1 text-start w-full text-xl md:text-2xl text-rosa font-custom"
              >
                Características principales:
              </p>
              <ul class="w-full flex flex-col items-start gap-2 font-custom">
                <li
                  class="strong-zen w-full text-start text-sm md:text-lg text-black list-none"
                >
                  - Interfaz de usuario intuitiva y responsiva
                </li>
                <li
                  class="strong-zen w-full text-start text-sm md:text-lg text-black list-none"
                >
                  - Gestión completa de artículos (alta, edición y baja)
                </li>
                <li
                  class="strong-zen w-full text-start text-sm md:text-lg text-black list-none"
                >
                  - Integración con API de Instagram
                </li>
                <li
                  class="strong-zen w-full text-start text-sm md:text-lg text-black list-none"
                >
                  - Consultas a la API de ChatGPT
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section
        id="section7"
        class="fixed inset-0 h-[99vh] bg-white opacity-0 flex items-center justify-center z-60"
      >
        <article
          class="flex w-full h-auto items-center justify-center relative z-20"
        >
          <div class="flex-1 flex flex-col justify-center items-center">
            <div class="w-[75%] mx-auto flex flex-col items-start gap-3">
              <p
                class="texto-maduixa text-xl md:text-2xl font-custom text-rosa"
              >
                Proyecto:
                <strong class="strong-maduixa text-white text-xl md:text-4xl"
                  >Lencería Maduixa</strong
                >
              </p>
              <p
                class="texto-maduixa text-xl md:text-2xl text-rosa font-custom"
              >
                Tecnologías front-end:
                <strong class="strong-maduixa text-white text-sm md:text-lg"
                  >Nuxt + Tailwind</strong
                >
              </p>
              <p
                class="texto-maduixa font-custom text-xl md:text-2xl text-rosa"
              >
                Tecnologías back-end:
                <strong class="strong-maduixa text-white text-sm md:text-lg"
                  >Laravel y Clerk</strong
                >
              </p>
              <br />
              <p
                class="texto-maduixa block mt-2 mb-1 text-start w-full text-xl md:text-2xl text-rosa font-custom"
              >
                Características principales:
              </p>
              <ul class="w-full flex flex-col items-start gap-2 font-custom">
                <li
                  class="strong-maduixa w-full text-start text-sm md:text-lg text-white list-none"
                >
                  - Interfaz para clientes: catálogo de productos con imágenes,
                  descripción y precios.
                </li>
                <li
                  class="strong-maduixa w-full text-start text-sm md:text-lg text-white list-none"
                >
                  - Integración de Clerk para autentificación del administrador.
                </li>
                <li
                  class="strong-maduixa w-full text-start text-sm md:text-lg text-white list-none"
                >
                  - Gestión de productos vía administrador: alta, edición y baja
                </li>
              </ul>
            </div>
          </div>
          <div
            id="tele-maduixa"
            class="flex-1 flex flex-col justify-center items-center z-30"
          >
            <div
              class="flex items-center justify-center w-[70%] sm:w-[50%] h-30 md:h-[420px] z-30"
            >
              <a
                href="/maduixa"
                style="view-transition-name: maduixa-img"
                class="block transition-link z-30"
              >
                <img
                  src="/img/proyectos/telemaduixa.webp"
                  alt="Foto de inicio de maduixa"
                  class="w-full h-auto rounded-lg object-cover relative -top-10 transition-img cursor-pointer z-30"
                  style="view-transition-name: maduixa-img"
                />
              </a>
            </div>
            <a
              href="https://lenceriamaduixa.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-2xl font-bold mt-8 text-rosa text-custom"
              >Maduixa
            </a>
          </div>
        </article>
      </section>
      <section
        id="section8"
        class="fixed inset-0 h-[99vh] bg-[rgb(17,17,17)] opacity-0 flex items-center justify-center z-20"
      >
        <article
          class="flex w-full h-auto items-center justify-center relative z-20"
        >
          <div
            id="tele-planterra"
            class="flex-1 flex flex-col justify-center items-center z-30"
          >
            <div
              class="flex items-center justify-center w-[80%] sm:w-[50%] h-30 md:h-[420px] relative z-30"
            >
              <a
                href="/planterra"
                style="view-transition-name: planterra-img"
                class="block transition-link z-30"
              >
                <img
                  src="/img/proyectos/teleplanterra.webp"
                  alt="Imagen web planterra"
                  class="w-full h-auto rounded-lg object-cover relative -top-10 transition-img cursor-pointer z-30"
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
              <p
                class="texto-planterra text-2xl md:text-4xl font-custom text-rosa"
              >
                Proyecto:
                <strong class="strong-planterra text-black text-xl md:text-2xl"
                  >Planterra</strong
                >
              </p>
              <p
                class="texto-planterra text-xl md:text-2xl text-rosa font-custom"
              >
                Tecnologías front-end:
                <strong class="strong-planterra text-black text-sm md:text-lg"
                  >Nuxt.js + Tailwind
                </strong>
              </p>
              <p
                class="texto-planterra font-custom text-xl md:text-2xl text-rosa"
              >
                Tecnologías back-end:
                <strong class="strong-planterra text-black text-sm md:text-lg"
                  >Firebase</strong
                >
              </p>
              <br />
              <p
                class="texto-planterra block mt-2 mb-1 text-start w-full text-xl md:text-2xl text-rosa font-custom"
              >
                Características principales:
              </p>
              <ul class="w-full flex flex-col items-start gap-2 font-custom">
                <li
                  class="strong-planterra w-full text-start text-sm md:text-lg text-black list-none"
                >
                  - Interfaz de cliente intuitiva y responsiva
                </li>
                <li
                  class="strong-planterra w-full text-start text-sm md:text-lg text-black list-none"
                >
                  - Gestión de Productos: Añade, edita y elimina productos.
                </li>
                <li
                  class="strong-planterra w-full text-start text-sm md:text-lg text-black list-none"
                >
                  - Gestión de Pedidos: Visualiza y administra todos los pedidos
                  realizados.
                </li>
                <li
                  class="strong-planterra w-full text-start text-sm md:text-lg text-black list-none"
                >
                  - Calendario de Pedidos: Visualiza los pedidos organizados por
                  día
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section
        id="section9"
        class="fixed inset-0 h-[99vh] bg-white opacity-0 flex items-center justify-center"
      >
        <article class="flex w-full h-auto items-center justify-center">
          <div class="flex-1 flex flex-col justify-center items-center">
            <div class="w-[75%] mx-auto flex flex-col items-start gap-3">
              <p class="texto-cafe text-xl md:text-4xl font-custom text-rosa">
                Proyecto:
                <strong class="strong-cafe text-white text-xl md:text-2xl"
                  >Café JBortWeb</strong
                >
              </p>
              <p class="texto-cafe text-xl md:text-2xl text-rosa font-custom">
                Tecnologías front-end:
                <strong class="strong-cafe text-white text-sm md:text-lg"
                  >React + Tailwind</strong
                >
              </p>
              <p class="texto-cafe font-custom text-xl md:text-2xl text-rosa">
                Tecnologías back-end:
                <strong class="strong-cafe text-white text-sm md:text-lg"
                  >Laravel</strong
                >
              </p>
              <br />
              <p
                class="texto-cafe block mt-2 mb-1 text-start w-full text-xl md:text-2xl text-rosa font-custom"
              >
                Características principales:
              </p>
              <ul class="w-full flex flex-col items-start gap-2 font-custom">
                <li
                  class="strong-cafe w-full text-start text-sm md:text-lg text-white list-none"
                >
                  - Interfaz para clientes: catálogo de productos con imágenes,
                  descripción y precios.
                </li>
                <li
                  class="strong-cafe w-full text-start text-sm md:text-lg text-white list-none"
                >
                  - Carrito de compras: selección, edición de cantidades y total
                  actualizado.
                </li>
                <li
                  class="strong-cafe w-full text-start text-sm md:text-lg text-white list-none"
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
              class="flex items-center justify-center w-[70%] sm:w-[50%] h-30 md:h-[420px]"
            >
              <a
                href="/cafe"
                style="view-transition-name: cafe-img"
                class="block transition-link"
              >
                <img
                  src="/img/proyectos/telecafe.webp"
                  alt="cafereact.webp"
                  class="w-full h-auto rounded-lg object-cover relative -top-10 transition-img cursor-pointer"
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
      </section>
    </div>
    <!-- 
    <Proyecto /> -->
  </main>
</template>

<style scoped>
#logo-mask {
  background-color: #fff;
  -webkit-mask-image: url("/img/logo.svg");
  mask-image: url("/img/logo.svg");
  -webkit-mask-size: clamp(5000vh, 3500%, 0vh);
  mask-size: clamp(5000vh, 3500%, 0vh);
  -webkit-mask-position: center 25%;
  mask-position: center 25%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
.icono-lenguaje {
  opacity: 1;
  transition: opacity 0.7s, transform 0.7s;
}
#fotomia {
  transition: opacity 0.7s, clip-path 1.2s;
}
.perfil {
  position: relative;
  top: -50vh;
  opacity: 0;
}
.perfil:hover {
  border: 8px solid #1e40af !important;
}
</style>