const tl = gsap.timeline({defaults: {ease: 'sine.out'} });

tl.to(".text", {y:"0%", duration: 1.3, stagger: 0.3 });
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 1 });
tl.to(".intro", {y: "-100%", duration: 1}, "-=1.1");
tl.fromTo("nav", {opacity: .1, y:"-100"}, {y:"0", opacity: 1, duration: 1.5});
tl.fromTo(".big-text", {opacity: 0, y:"100"}, {y:"0", opacity: 1, duration: 1.5}, "-=1.5");
tl.to(".logo", {rotation:1080, duration: 1})