/**
 * File: assets/js/lenis.js
 * Version: 2.0.0
 * Description: Lenis smooth scroll engine config
 * Author: WebSpaceStudio Engineering Team
 * Last Update: 2026-07-31
 */

document.addEventListener('DOMContentLoaded', () => {
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});