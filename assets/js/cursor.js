/**
 * File: assets/js/cursor.js
 * Version: 2.0.0
 * Description: Ultra-smooth custom cursor and subtle magnetic elements logic
 * Author: WebSpaceStudio Engineering Team
 * Last Update: 2026-07-31
 */

document.addEventListener('DOMContentLoaded', () => {
  const outer = document.getElementById('cursor-outer');
  const inner = document.getElementById('cursor-inner');

  if (!outer || !inner || window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = 0, mouseY = 0;
  let outerX = 0, outerY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    inner.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function render() {
    outerX += (mouseX - outerX) * 0.18;
    outerY += (mouseY - outerY) * 0.18;
    outer.style.transform = `translate(${outerX}px, ${outerY}px) translate(-50%, -50%)`;
    requestAnimationFrame(render);
  }
  render();

  // Magnetic Button Engine
  const magneticBtns = document.querySelectorAll('.magnetic-btn');
  magneticBtns.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const strength = btn.dataset.strength || 15;
      const x = (e.clientX - rect.left - rect.width / 2) / strength;
      const y = (e.clientY - rect.top - rect.height / 2) / strength;
      
      gsap.to(btn, { x: x * 8, y: y * 8, duration: 0.3, ease: 'power2.out' });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: 'power2.out' });
    });
  });

  // Cursor Hover Selectors
  document.querySelectorAll('a, button, .magnetic-btn, .faq-item').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
});