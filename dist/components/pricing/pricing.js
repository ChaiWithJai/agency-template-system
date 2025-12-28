/**
 * Pricing Component - JavaScript
 * Handles billing toggle and animations
 */

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

      // Update data attribute
      pricingSection.dataset.billing = newBilling;

      // Update toggle switch
      toggleSwitch.classList.toggle('active', newBilling === 'yearly');

      // Update labels
      if (monthlyLabel && yearlyLabel) {
        monthlyLabel.classList.toggle('active', newBilling === 'monthly');
        yearlyLabel.classList.toggle('active', newBilling === 'yearly');
      }
    });
  }

  // Scroll animation for pricing cards
  const pricingCards = pricingSection.querySelectorAll('.pricing-card');

  if (pricingCards.length) {
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

    pricingCards.forEach((card) => observer.observe(card));
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPricing);
} else {
  initPricing();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initPricing };
}
