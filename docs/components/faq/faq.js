/**
 * FAQ Accordion Component - JavaScript
 * Handles expand/collapse behavior
 */

function initAccordions() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  if (!accordionItems.length) return;

  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    if (!header || !content) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      const isMultipleOpen = item.closest('.accordion--multiple');

      // Close all other items (unless multiple mode is enabled)
      if (!isMultipleOpen) {
        accordionItems.forEach((other) => {
          if (other !== item) {
            closeAccordion(other);
          }
        });
      }

      // Toggle current item
      if (isOpen) {
        closeAccordion(item);
      } else {
        openAccordion(item);
      }
    });

    // Keyboard support
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });

  // Scroll animation for accordion items
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  accordionItems.forEach((item) => observer.observe(item));
}

function openAccordion(item) {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  item.classList.add('open');
  header.setAttribute('aria-expanded', 'true');

  // Animate max-height
  content.style.maxHeight = content.scrollHeight + 'px';
}

function closeAccordion(item) {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  item.classList.remove('open');
  header.setAttribute('aria-expanded', 'false');

  // Reset max-height
  content.style.maxHeight = null;
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAccordions);
} else {
  initAccordions();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initAccordions, openAccordion, closeAccordion };
}
