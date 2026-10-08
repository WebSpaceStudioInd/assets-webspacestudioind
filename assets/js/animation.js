/**
 * File: assets/js/animation.js
 * Version: 2.0.0
 * Description: Ultra-clean minimal loader and hero entry
 * Author: WebSpaceStudio Engineering Team
 * Last Update: 2026-07-31
 */

window.addEventListener('load', () => {
  const tl = gsap.timeline();

  tl.to('#loader-bar', { width: '100%', duration: 0.8, ease: 'power2.inOut' })
    .to('#loader-title', { y: -30, opacity: 0, duration: 0.4 }, '+=0.1')
    .to('#loader-subtitle', { y: -20, opacity: 0, duration: 0.3 }, '-=0.2')
    .to('#loader', { opacity: 0, duration: 0.6, onComplete: () => {
        document.getElementById('loader').style.display = 'none';
      }
    })
    .from('.hero-text-reveal', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.2')
    .from('.hero-fade', { opacity: 0, y: 15, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=0.4');
});