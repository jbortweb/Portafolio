gsap.registerPlugin(ScrollTrigger);

const nave = document.querySelector('.nave');
const presentacion = document.querySelector('.presentacion');
const sobreMi = document.querySelector('.sobre-mi');
const habilidades = document.querySelector('.habilidades');
const listaHabilidades = document.querySelector('.lista-habilidades');
const proyectos = document.querySelector('.proyectos');
const contacto = document.querySelector('.contacto');
const header = document.querySelector('.header');


const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".contenedor_animacion",
    pin: true,
    markers: false,
    start: "top top",
    end: "100% 100%",
    scrub: true,
  },
});

tl.to(nave, {
  scale: 0.5,
  y: '30vh',
  duration: 4
})
tl.to(header, {
  opacity: 1,
  duration: 1,
}, 0);
tl.to(header, {
  opacity: 0,
  duration: 1,
  immediateRender: false
}, '+=2');

tl.to(presentacion, {
  opacity: 1,
  y: '-5vh',
  scale: 1,
  duration: 3.5,
  immediateRender: false
});

tl.to(sobreMi, {
  opacity: 1,
  y: '-40vh',
  scale: 1.3,
  duration: 4,
  immediateRender: false
}, '-=2.5');
tl.to(nave, {
  rotate: 230,
  duration: 3.5
})
tl.to(nave, {
  x: '-35vw',
  duration: 4
}, '-=2.5')

tl.to(sobreMi, {
  y: '-180vh',
  duration: 3.5
}, '-=4');
tl.to(nave, {
  rotate: 115,
  duration: 3.5
})
tl.to(presentacion, {
  y: '-150vh',
  duration: 3.5
}, '-=2');
tl.to(nave, {
  x: '75vh',
  duration: 5
}, '-=2.5')
tl.to(habilidades, {
  opacity: 1,
  x: '-120vw',
  duration: 4,
  immediateRender: false
}, '-=5');
tl.to(listaHabilidades, {
  opacity: 1,
  duration: 4,
})

tl.to(nave, {
  rotate: 250,
  duration: 5
})
tl.to(nave, {
  x: '-35vw',
  y: 300,
  duration: 8
}, '-=2.5')
tl.to(habilidades, {
  x: '-100vw',
  y: '-100vh',
  duration: 8
}, '-=5');
tl.to(proyectos, {
  opacity: 1,
  x: '130vh',
  duration: 8,
  immediateRender: false
}, '-=9');

tl.to(nave, {
  rotate: 110,
  duration: 6
}, '-=3')

tl.to(proyectos, {
  y: '-150vh',
  duration: 6,
}, '-=3');

tl.to(contacto, {
  opacity: 1,
  y: '-100vh',
  duration: 5,
  immediateRender: false
}, '-=5');

tl.to(nave, {
  x: '0vh',
  duration: 5
}, '-=8')

tl.to(nave, {
  rotate: 0,
  duration: 3
}, '-=4')
