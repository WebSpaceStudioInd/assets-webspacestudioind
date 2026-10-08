/**
 * File: assets/js/main.js
 * Version: 2.0.0
 * Description: Minimal Accordion & Core Event Bindings
 * Author: WebSpaceStudio Engineering Team
 * Last Update: 2026-07-31
 */

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    item.addEventListener('click', () => {
      const content = item.querySelector('.faq-content');
      const isHidden = content.classList.contains('hidden');

      faqItems.forEach((i) => {
        i.querySelector('.faq-content').classList.add('hidden');
        i.classList.remove('active');
      });

      if (isHidden) {
        content.classList.remove('hidden');
        item.classList.add('active');
      }
    });
  });
});