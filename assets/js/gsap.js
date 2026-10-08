/**
 * File: assets/js/gsap.js
 * Version: 2.0.0
 * Description: GSAP animation sequences & counters
 * Author: WebSpaceStudio Engineering Team
 * Last Update: 2026-07-31
 */

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // Scroll reveal elements
  document.querySelectorAll('.scroll-reveal').forEach((el) => {
    gsap.fromTo(el, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%'
        }
      }
    );
  });

  // Counter animations
  document.querySelectorAll('.counter').forEach((counter) => {
    const target = +counter.getAttribute('data-target');
    gsap.to(counter, {
      innerText: target,
      duration: 1.8,
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: counter,
        start: 'top 90%'
      }
    });
  });
});