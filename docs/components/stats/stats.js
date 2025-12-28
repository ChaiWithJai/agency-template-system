/**
 * Stats Counter Animation
 * Animates numbers from 0 to target value on scroll
 */

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

          // Add in-view class for CSS transitions
          element.classList.add('in-view');

          // Unobserve after animation
          observer.unobserve(element);
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  counters.forEach((counter) => observer.observe(counter));
}

/**
 * Animate a counter from 0 to target
 * @param {HTMLElement} element - Element to update
 * @param {number} target - Target number
 * @param {number} duration - Animation duration in ms
 */
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out cubic)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(easeOut * target);

    // Format number with commas for large numbers
    element.textContent = formatNumber(current);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = formatNumber(target);
    }
  }

  requestAnimationFrame(updateCounter);
}

/**
 * Format number with commas (e.g., 1,000,000)
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    // For numbers like 1500, show as 1.5K or 1,500
    // return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return num.toLocaleString();
  }
  return num.toString();
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCounters);
} else {
  initCounters();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initCounters, animateCounter, formatNumber };
}
