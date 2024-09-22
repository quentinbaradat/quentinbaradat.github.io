
$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);
});


let container = document.querySelector('.landing');

gsap.to(".home", {
  opacity: 0,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".landing",
    scrub: true,
    markers: false,
    start: "50% 0%",
    end: `bottom 30%`,
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


const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".landing",
    toggleActions: 'restart none none none',
    scrub: true,
    markers: false,
    start: "90% top",
    end: "300px top",
    id: "start-bg"
  }
})
 .to(".portrait", {
  y: -230,
  duration: 2,
  ease: "power1.out"
 });
