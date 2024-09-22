
$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);
});


const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
});

gsap.ticker.lagSmoothing(0);

let container = document.querySelector('.landing');

gsap.to(".home", {
  opacity: 0,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".landing",
    scrub: true,
    markers: false,
    start: "30% 0%",
    end: `bottom 50%`,
  }
});

gsap.to(".brand", {
  opacity: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".landing",
    scrub: true,
    markers: false,
    start: "55% top",
    end: `bottom bottom`,
  }
});

gsap.to(".bg_video", { 
  scrollTrigger: {
    trigger: ".wrapper",
    pin: true,
    scrub: 0,
    markers: false,
    start: "top 0%",
  }
});

/*
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".landing",
    toggleActions: 'restart none none none',
    scrub: true,
    markers: true,
    start: "90% top",
    end: "bottom top",
    id: "start-bg"
  }
})
 .to(".portrait", {
  y: -1030,
  duration: 2,
  ease: "power1.out"
 });*/