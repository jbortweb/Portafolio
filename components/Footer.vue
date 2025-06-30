<script setup>
</script>

<template>
  <div>
    <main id="container-footer">
      <article id="footer-poster">
        <header id="footer-poster__header">
          <h1 id="footer-poster__header__title" data-title="JBORTWEB">
            JBORTWEB
          </h1>
        </header>
        <p id="footer-poster__director">Director:</p>

        <img
          src="/img/logonegro.svg"
          alt="Logo jbortweb"
          id="footer-poster__logo"
        />
        <p id="footer-poster__oficio">FullStack <strong>Developer</strong></p>
        <p id="footer-poster__stack">
          <span data-title="NUXT 3">NUXT 3</span>
          <span data-title="GSAP">GSAP</span>
        </p>
        <img
          id="footer-poster__front_image"
          src="/img/ladorecortado.webp"
          alt="Furiosa Front image"
        />
      </article>
    </main>
    <nav>
      <a href="https://jbortweb.netlify.app/" target="_blank">Página oficial</a>
    </nav>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "Agency FB Black";
  src: url("https://cdn.jsdelivr.net/gh/olivier3lanc/cinematics-resources@master/furiosa/fonts/AgencyFBBlack.woff2")
      format("woff2"),
    url("https://cdn.jsdelivr.net/gh/olivier3lanc/cinematics-resources@master/furiosa/fonts/AgencyFBBlack.woff")
      format("woff");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Agency FB Regular";
  src: url("https://cdn.jsdelivr.net/gh/olivier3lanc/cinematics-resources@master/furiosa/fonts/AgencyFB-Reg.woff2")
      format("woff2"),
    url("https://cdn.jsdelivr.net/gh/olivier3lanc/cinematics-resources@master/furiosa/fonts/AgencyFB-Reg.woff")
      format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Agency FB Bold";
  src: url("https://cdn.jsdelivr.net/gh/olivier3lanc/cinematics-resources@master/furiosa/fonts/AgencyFB-Bold.woff2")
      format("woff2"),
    url("https://cdn.jsdelivr.net/gh/olivier3lanc/cinematics-resources@master/furiosa/fonts/AgencyFB-Bold.woff")
      format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
html,
body {
  font-family: "Agency FB Regular", sans-serif;
  margin: 0;
  padding: 0;
  background: black;
  scrollbar-color: #ffcd1c black;
  min-height: 100vh;
}
/* @media (min-width: 960px) {
    main {
        scale: 0.9
    }
} */
@media (orientation: landscape) {
  main {
    scale: 0.9;
  }
}
@keyframes move {
  0% {
    transform: rotateY(-20deg) rotateX(-5deg);
  }
  25% {
    transform: rotateY(20deg) rotateX(-5deg);
  }
  50% {
    transform: rotateY(20deg) rotateX(5deg);
  }
  75% {
    transform: rotateY(-20deg) rotateX(5deg);
  }
  100% {
    transform: rotateY(-20deg) rotateX(-5deg);
  }
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  perspective: 1000px;
}
#footer-poster {
  aspect-ratio: 9/14;
  background: center / cover no-repeat url("/img/habita.webp");
  width: 100%;
  max-width: 70vmin;
  position: relative;
  animation: move 10s 0s infinite;
  transform-style: preserve-3d;
  border-radius: 6vmin;
}
#footer-poster__header {
  position: absolute;
  top: 30%;
  left: 0;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  transform: translateZ(10vmin);
  transform-style: preserve-3d;
}
#footer-poster__header__title {
  font-family: "Agency FB Black";
  font-size: 22vmin;
  position: absolute;
  margin: 0;
  top: -100px;
  line-height: 1em;
  white-space: nowrap;
  background-image: url("/img/degradado.webp");
  background-size: cover;
  background-position: center;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
#footer-poster__header__title::before {
  content: attr(data-title);
  position: absolute;
  color: #ffc61c5e;
  -webkit-text-fill-color: initial;
  mix-blend-mode: overlay;
  opacity: 1;
  text-shadow: 0px 0px 4vmin rgba(0, 0, 0, 0.4), 1px 1px #bf4528;
}
#footer-poster__front_image {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  transform: translateZ(20vmin);
  transform-style: preserve-3d;
  filter: drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.4));
  border-radius: 6vmin;
}

#footer-poster__director {
  font-family: "Agency FB Black";
  font-size: 2.6vmin;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #00100b;
  text-shadow: 0px 0px 3vmin rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 5%;
  left: 35%;
  transform: translateZ(5vmin);
  transform-style: preserve-3d;
  margin: 0;
}
#footer-poster__logo {
  font-family: "Agency FB Black";
  width: 7vmin;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #00100b;
  text-shadow: 0px 0px 3vmin rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 3%;
  right: 37%;
  transform: translateZ(5vmin);
  transform-style: preserve-3d;
  margin: 0;
}
#footer-poster__oficio {
  font-family: "Agency FB Regular";
  font-size: 2.5vmin;
  text-transform: uppercase;
  text-align: center;
  color: white;
  letter-spacing: 0.4em;
  width: 100%;
  position: absolute;
  top: 14%;
  left: 0%;
  transform: translateZ(5vmin);
  transform-style: preserve-3d;
  margin: 0;
}
#footer-poster__oficio strong {
  font-family: "Agency FB Black";
}
#footer-poster__stack {
  display: flex;
  justify-content: space-between;
  font-family: "Agency FB Black";
  font-size: 5vmin;
  line-height: 1em;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  position: absolute;
  top: 38%;
  left: 0%;
  width: 100%;
  margin: 0;
  transform: translateZ(10vmin);
  /* transform-style: preserve-3d; */
  /* text-shadow: 0px 0px 4vmin rgba(0,0,0,0.4); */
}
#footer-poster__stack > span {
  display: flex;
  background-image: url("/img/degradado.webp");
  background-size: cover;
  background-position: center;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
#footer-poster__stack > span::before {
  content: attr(data-title);
  position: absolute;
  color: #ffc61c5e;
  -webkit-text-fill-color: initial;
  mix-blend-mode: overlay;
  opacity: 1;
  text-shadow: 0px 0px 4vmin rgba(0, 0, 0, 0.4), 1px 1px #bf4528;
}
nav {
  position: fixed;
  bottom: 0;
  right: 0;
}
nav a {
  font-size: 16px;
  color: #ffc61c;
  display: inline-flex;
  padding: 2em;
  font-family: "Agency FB Black";
  font-weight: 900;
  text-transform: uppercase;
  text-decoration-style: dashed;
}
@media (width >= 500px) and (width <= 1023px) {
  #container-footer {
    display: none;
  }
}
</style>