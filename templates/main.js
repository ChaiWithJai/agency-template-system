/**
 * Agency Template System
 * Core JavaScript Patterns
 */

// ============================================
// SCROLL ANIMATIONS (IntersectionObserver)
// ============================================

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  if (!animatedElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Optionally unobserve after animation
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  animatedElements.forEach((el) => observer.observe(el));
}

// ============================================
// COUNTER ANIMATIONS
// ============================================

function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(easeOut * target);

    element.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(updateCounter);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');

  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.counter, 10);
          const duration = parseInt(entry.target.dataset.duration, 10) || 2000;
          animateCounter(entry.target, target, duration);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    });
  });
}

// ============================================
// NAVBAR SCROLL EFFECTS
// ============================================

function initNavbarEffects() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateNavbar() {
    const currentScrollY = window.scrollY;

    // Add/remove scrolled class
    if (currentScrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Hide/show on scroll (optional)
    // if (currentScrollY > lastScrollY && currentScrollY > 200) {
    //   nav.classList.add('hidden');
    // } else {
    //   nav.classList.remove('hidden');
    // }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  });
}

// ============================================
// ACCORDION / FAQ
// ============================================

function initAccordions() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    if (!header || !content) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other items (optional - remove for multi-open)
      accordionItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('open');
          const otherContent = other.querySelector('.accordion-content');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
        content.style.maxHeight = null;
      } else {
        item.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-mobile-menu');
  const body = document.body;

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');

    if (isOpen) {
      menu.classList.remove('open');
      toggle.classList.remove('active');
      body.style.overflow = '';
    } else {
      menu.classList.add('open');
      toggle.classList.add('active');
      body.style.overflow = 'hidden';
    }
  });

  // Close menu when clicking a link
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('active');
      body.style.overflow = '';
    });
  });
}

// ============================================
// TABS
// ============================================

function initTabs() {
  const tabContainers = document.querySelectorAll('[data-tabs]');

  tabContainers.forEach((container) => {
    const triggers = container.querySelectorAll('[data-tab-trigger]');
    const panels = container.querySelectorAll('[data-tab-panel]');

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const targetId = trigger.dataset.tabTrigger;

        // Update triggers
        triggers.forEach((t) => t.classList.remove('active'));
        trigger.classList.add('active');

        // Update panels
        panels.forEach((panel) => {
          if (panel.dataset.tabPanel === targetId) {
            panel.classList.add('active');
          } else {
            panel.classList.remove('active');
          }
        });
      });
    });
  });
}

// ============================================
// FORM HANDLING
// ============================================

function initForms() {
  const forms = document.querySelectorAll('form[data-ajax]');

  forms.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('[type="submit"]');
      const originalText = submitBtn?.textContent;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      try {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Replace with your actual form endpoint
        const response = await fetch(form.action || '/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          form.reset();
          showNotification('Message sent successfully!', 'success');
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        showNotification('Something went wrong. Please try again.', 'error');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      }
    });
  });
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  document.body.appendChild(notification);

  // Trigger animation
  requestAnimationFrame(() => {
    notification.classList.add('show');
  });

  // Remove after delay
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ============================================
// LAZY LOADING IMAGES
// ============================================

function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');

  if (!lazyImages.length) return;

  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
          }
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    },
    {
      rootMargin: '50px 0px',
    }
  );

  lazyImages.forEach((img) => imageObserver.observe(img));
}

// ============================================
// PARALLAX EFFECTS
// ============================================

function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  if (!parallaxElements.length) return;

  function updateParallax() {
    const scrollY = window.scrollY;

    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.5;
      const rect = el.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;

      if (visible) {
        const yPos = (scrollY - el.offsetTop) * speed;
        el.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    });
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ============================================
// CURSOR EFFECTS (Optional, premium feel)
// ============================================

function initCursorEffects() {
  // Only on devices with fine pointer (mouse)
  if (!matchMedia('(pointer: fine)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // Hover effects
  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

// ============================================
// INITIALIZE ALL
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initCounters();
  initSmoothScroll();
  initNavbarEffects();
  initAccordions();
  initMobileMenu();
  initTabs();
  initForms();
  initLazyLoading();
  // initParallax(); // Enable if needed
  // initCursorEffects(); // Enable for premium cursor
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initScrollAnimations,
    initCounters,
    initSmoothScroll,
    initNavbarEffects,
    initAccordions,
    initMobileMenu,
    initTabs,
    initForms,
    initLazyLoading,
    initParallax,
    initCursorEffects,
    animateCounter,
    showNotification,
  };
}
