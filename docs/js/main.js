/**
 * Agency Template System - Main JavaScript
 * Initializes all components and animations
 */

// ========================================
// SCROLL ANIMATIONS
// ========================================

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

// ========================================
// TEXT REVEAL ANIMATION
// ========================================

function initTextReveal() {
  const textElements = document.querySelectorAll('[data-text-reveal]');

  if (!textElements.length) return;

  textElements.forEach((element) => {
    // Split text into words
    const text = element.textContent;
    const words = text.split(' ');

    element.innerHTML = words
      .map((word, i) => `<span class="word" style="--index: ${i}">${word}</span>`)
      .join(' ');

    element.classList.add('text-reveal');
  });

  // Observe for scroll trigger
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  textElements.forEach((el) => observer.observe(el));
}

// ========================================
// SMOOTH SCROLL
// ========================================

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

      // Update URL hash without jumping
      history.pushState(null, '', href);
    });
  });
}

// ========================================
// COUNTER ANIMATION
// ========================================

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');

  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const target = parseInt(element.dataset.counter, 10);
          const duration = parseInt(element.dataset.duration, 10) || 2000;
          const counterValue = element.querySelector('.counter-value');

          if (counterValue) {
            animateCounter(counterValue, target, duration);
          }

          element.classList.add('in-view');
          observer.unobserve(element);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function animateCounter(element, target, duration = 2000) {
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
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

// ========================================
// NAVIGATION
// ========================================

function initNavigation() {
  const nav = document.getElementById('nav');
  const toggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.getElementById('nav-mobile-menu');
  const mobileLinks = mobileMenu?.querySelectorAll('a');

  if (!nav) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateNav() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateNav);
      ticking = true;
    }
  }, { passive: true });

  updateNav();

  // Mobile menu
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');

      if (isOpen) {
        mobileMenu.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      } else {
        mobileMenu.classList.add('open');
        toggle.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });

    mobileLinks?.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
}

// ========================================
// ACCORDION
// ========================================

function initAccordions() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  if (!accordionItems.length) return;

  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    if (!header || !content) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other items
      accordionItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('open');
          const otherContent = other.querySelector('.accordion-content');
          if (otherContent) otherContent.style.maxHeight = null;
          other.querySelector('.accordion-header')?.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
        content.style.maxHeight = null;
        header.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Scroll animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.1 }
  );

  accordionItems.forEach((item) => observer.observe(item));
}

// ========================================
// PRICING TOGGLE
// ========================================

function initPricing() {
  const pricingSection = document.querySelector('.pricing[data-billing]');

  if (!pricingSection) return;

  const toggleSwitch = pricingSection.querySelector('.pricing-toggle-switch');
  const monthlyLabel = pricingSection.querySelector('[data-billing-label="monthly"]');
  const yearlyLabel = pricingSection.querySelector('[data-billing-label="yearly"]');

  if (toggleSwitch) {
    toggleSwitch.addEventListener('click', () => {
      const currentBilling = pricingSection.dataset.billing;
      const newBilling = currentBilling === 'monthly' ? 'yearly' : 'monthly';

      pricingSection.dataset.billing = newBilling;
      toggleSwitch.classList.toggle('active', newBilling === 'yearly');

      if (monthlyLabel && yearlyLabel) {
        monthlyLabel.classList.toggle('active', newBilling === 'monthly');
        yearlyLabel.classList.toggle('active', newBilling === 'yearly');
      }
    });
  }

  // Scroll animation
  const pricingCards = pricingSection.querySelectorAll('.pricing-card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.1 }
  );

  pricingCards.forEach((card) => observer.observe(card));
}

// ========================================
// LAZY LOADING IMAGES
// ========================================

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
    { rootMargin: '50px 0px' }
  );

  lazyImages.forEach((img) => imageObserver.observe(img));
}

// ========================================
// INITIALIZE ALL
// ========================================

function init() {
  initScrollAnimations();
  initTextReveal();
  initSmoothScroll();
  initCounters();
  initNavigation();
  initAccordions();
  initPricing();
  initLazyLoading();
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    init,
    initScrollAnimations,
    initTextReveal,
    initSmoothScroll,
    initCounters,
    animateCounter,
    initNavigation,
    initAccordions,
    initPricing,
    initLazyLoading,
  };
}
