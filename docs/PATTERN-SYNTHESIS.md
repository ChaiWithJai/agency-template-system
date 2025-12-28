# Agency Template Pattern Synthesis
## Cross-Template Analysis of Top 20 Framer Templates

Based on comprehensive analysis of 20 premium agency templates from the Framer marketplace, this document synthesizes common patterns, design tokens, and implementation strategies.

---

## Template Rankings (Top Performers)

| Rank | Template | Score | Best For | Key Differentiator |
|------|----------|-------|----------|-------------------|
| 1 | Effica | 9.0/10 | AI/SaaS | Exceptional animation timing |
| 2 | Scarlet | 9.0/10 | Creative Agency | Bold typography, unique personality |
| 3 | Trifecta | 9.0/10 | Tech Agency | Futuristic dark theme |
| 4 | MONO AI | 9.0/10 | AI Products | Word-by-word reveals |
| 5 | Optimo | 8.75/10 | Marketing Agency | Clean minimalism |
| 6 | Kanso | 8.6/10 | Design Studio | Japanese-inspired |
| 7 | Arpeggio | 8.6/10 | Creative Studio | Musical theme integration |
| 8 | Noora | 8.6/10 | Wellness/Coaching | Warm palette |
| 9 | Fabrica | 8.6/10 | Digital Agency | Strong grid system |
| 10 | Nakula | 8.6/10 | Multi-purpose | Versatile components |
| 11 | BrightEdge | 8.4/10 | Marketing Agency | Comprehensive sections |
| 12 | Viral | 8.4/10 | Social Media Agency | Instagram-native aesthetic |
| 13 | Orbai | 8.3/10 | AI/Tech | Gradient hero backgrounds |
| 14 | Sadewa | 8.25/10 | Agency | Numbered sections |
| 15 | AI Supply | 8.25/10 | AI Tools | Product-focused |
| 16 | Bima | 8.2/10 | Corporate | Professional structure |
| 17 | Lyniq | 8.1/10 | Tech Startup | Modern minimal |
| 18 | Amber | 8.0/10 | Creative | Warm tones |
| 19 | Agevia | 8.0/10 | Agency | Classic structure |
| 20 | LogiNord | 7.8/10 | Logistics | Industry-specific |

---

## 1. Typography Patterns

### Font Families (Frequency of Use)

| Font Family | Usage Count | Character |
|-------------|-------------|-----------|
| **Geist** | 12/20 (60%) | Modern, geometric, tech-forward |
| **Inter** | 8/20 (40%) | Clean, versatile, readable |
| **Space Grotesk** | 6/20 (30%) | Geometric, distinctive |
| **Plus Jakarta Sans** | 4/20 (20%) | Friendly, professional |
| **Source Serif 4** | 5/20 (25%) | Accent/italic emphasis |
| **DM Sans** | 3/20 (15%) | Modern, geometric |

### Recommended Font Pairings

```css
/* Most Common: Single Font Family (Geist or Inter) */
--font-primary: 'Geist', 'Inter', system-ui, sans-serif;
--font-accent: 'Source Serif 4', 'Georgia', serif; /* For italic emphasis */

/* Alternative: Geometric + Serif Contrast */
--font-heading: 'Space Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;
--font-accent: 'Playfair Display', serif;
```

### Typography Scale

| Element | Desktop Size | Mobile Size | Weight | Line Height | Letter Spacing |
|---------|--------------|-------------|--------|-------------|----------------|
| **H1 Hero** | 64-100px | 40-56px | 500-600 | 1.1-1.2 | -2 to -4px |
| **H2 Section** | 48-64px | 32-40px | 500 | 1.1-1.2 | -1.5 to -2px |
| **H3 Card** | 24-32px | 20-24px | 500-600 | 1.3 | -0.5px |
| **Body Large** | 18-20px | 16-18px | 400 | 1.5-1.6 | 0 |
| **Body Regular** | 14-16px | 14-16px | 400-500 | 1.5 | 0 |
| **Label/Meta** | 12-14px | 12px | 500-600 | 1.4 | 0.5-1px |
| **Nav Items** | 14-16px | 14px | 500 | 1.5 | 0 |

### Key Typography Insights

1. **Tight letter-spacing is essential** - Headlines consistently use -2px to -4px tracking
2. **Single font families dominate** - 70% use one font with weight/style variations
3. **Italics for emphasis** - Serif italics for key words (e.g., "clarity", "right")
4. **Uppercase for labels** - Section labels, nav items often use uppercase + tracking

---

## 2. Color System Patterns

### Theme Distribution

| Theme Type | Count | Templates |
|------------|-------|-----------|
| **Dark Mode** | 12/20 (60%) | MONO AI, Trifecta, Kanso, Effica, BrightEdge, Scarlet... |
| **Light Mode** | 5/20 (25%) | Viral, Noora, Bima, Amber... |
| **Cream/Warm** | 3/20 (15%) | Viral, Sadewa, Arpeggio... |

### Dark Theme Palette (Most Common)

```css
:root {
  /* Backgrounds */
  --bg-primary: #000000;        /* Pure black */
  --bg-secondary: #0A0A0A;      /* Near black */
  --bg-tertiary: #111111;       /* Card backgrounds */
  --bg-elevated: #1A1A1A;       /* Elevated cards */

  /* Text */
  --text-primary: #FAFAFA;      /* Headlines, white */
  --text-secondary: rgba(255, 255, 255, 0.8);  /* 80% white */
  --text-muted: rgba(255, 255, 255, 0.6);      /* 60% white */
  --text-subtle: rgba(255, 255, 255, 0.4);     /* 40% white */

  /* Accent Options (choose one) */
  --accent-primary: #7C3AED;    /* Purple (AI/Tech) */
  --accent-primary: #10B981;    /* Green (Growth) */
  --accent-primary: #F59E0B;    /* Orange/Gold (Premium) */
  --accent-primary: #3B82F6;    /* Blue (Trust) */

  /* Glassmorphism */
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-blur: blur(20px);
}
```

### Light Theme Palette (Clean/Warm)

```css
:root {
  /* Backgrounds */
  --bg-primary: #FFFFFF;        /* Pure white */
  --bg-secondary: #F8F8F8;      /* Off-white */
  --bg-warm: #EFEBE5;           /* Warm cream (Viral-style) */
  --bg-tertiary: #F0F0F0;       /* Light gray */

  /* Text */
  --text-primary: #000000;      /* Pure black */
  --text-secondary: rgba(0, 0, 0, 0.8);
  --text-muted: rgba(0, 0, 0, 0.6);

  /* Accent */
  --accent-primary: #000000;    /* Black buttons on light */
}
```

### Accent Color Strategies

| Strategy | Usage | Example Templates |
|----------|-------|-------------------|
| **Monochrome** | 8/20 | Viral, Kanso, MONO AI - Black/white only |
| **Single Accent** | 7/20 | Trifecta (purple), Effica (green) |
| **Multi-Accent** | 5/20 | BrightEdge (gold/blue/green) |

---

## 3. Button Patterns

### Primary Button (Most Common)

```css
.btn-primary {
  background-color: var(--text-primary);  /* White on dark, black on light */
  color: var(--bg-primary);
  border-radius: 100px;  /* Pill shape - 16/20 templates */
  padding: 12px 24px;
  font-size: 14-16px;
  font-weight: 500;
  border: none;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.btn-primary:hover {
  transform: scale(1.02);
  opacity: 0.9;
}
```

### Secondary/Ghost Button

```css
.btn-secondary {
  background-color: rgba(255, 255, 255, 0.1);  /* Glassmorphism */
  color: var(--text-primary);
  border-radius: 100px;
  padding: 12px 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.15);
}
```

### Button Variants Seen

| Variant | Border Radius | Description |
|---------|---------------|-------------|
| **Pill** | 100px/50px | Most common (80%) |
| **Rounded** | 8-12px | Second most common (15%) |
| **Square** | 0px | Rare, minimal styles (5%) |

### Common Button Patterns

1. **Arrow icon on hover** - Icon slides right on hover (12/20)
2. **Dual CTA layout** - Primary + Secondary side by side (15/20)
3. **Icon + Text** - Right-aligned arrow or icon (10/20)

---

## 4. Component Patterns

### Navigation (18/20 have floating/glassmorphic nav)

```css
.nav {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);  /* Or rgba(255,255,255,0.8) for light */
  backdrop-filter: blur(20px);
  border-radius: 100px;  /* Pill-shaped nav */
  padding: 8px 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
}

.nav.scrolled {
  background: rgba(0, 0, 0, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
```

### Hero Section Patterns

| Pattern | Frequency | Description |
|---------|-----------|-------------|
| **Center-aligned** | 12/20 | Text centered, CTA below |
| **Split layout** | 6/20 | Text left, image/mockup right |
| **Full-width text** | 2/20 | Massive headline filling viewport |

```html
<!-- Most Common Hero Structure -->
<section class="hero">
  <div class="hero-badge">Announcement Badge</div>
  <h1>Headline with <em>italic emphasis</em></h1>
  <p class="hero-subtitle">Supporting description text</p>
  <div class="hero-ctas">
    <a href="#" class="btn-primary">Get Started</a>
    <a href="#" class="btn-secondary">Learn More</a>
  </div>
</section>
```

### Logo Marquee (19/20 templates have this)

```css
.marquee-container {
  overflow: hidden;
  white-space: nowrap;
}

.marquee-track {
  display: flex;
  gap: 48px;
  animation: marquee 30s linear infinite;
}

/* Duplicate content for seamless loop */
.marquee-track::after {
  content: '';
  /* Duplicate logos via JavaScript or CSS */
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
```

### FAQ Accordion (17/20 templates)

```css
.accordion-item {
  border-bottom: 1px solid var(--glass-border);
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  cursor: pointer;
}

.accordion-icon {
  transition: transform 0.3s ease;
}

.accordion-item.open .accordion-icon {
  transform: rotate(45deg);  /* + becomes × */
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.accordion-item.open .accordion-content {
  max-height: 500px;  /* Or calculated scrollHeight */
}
```

### Pricing Section (14/20 templates)

```html
<!-- Common 3-tier pricing structure -->
<section class="pricing">
  <div class="pricing-toggle">
    <span>Monthly</span>
    <button class="toggle"></button>
    <span>Yearly <span class="badge">Save 20%</span></span>
  </div>

  <div class="pricing-grid">
    <div class="pricing-card"><!-- Basic tier --></div>
    <div class="pricing-card featured"><!-- Popular/Growth tier --></div>
    <div class="pricing-card"><!-- Pro/Enterprise tier --></div>
  </div>
</section>
```

### Stats Counter (16/20 templates)

```javascript
function animateCounter(element, target, duration = 2000) {
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);

    element.textContent = Math.floor(easeOut * target).toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(update);
}

// Trigger with IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target, parseInt(entry.target.dataset.target));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
```

---

## 5. Animation Patterns

### Scroll-Triggered Animations (All 20 templates)

```javascript
// IntersectionObserver pattern
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-on-scroll.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
.stagger-children > * {
  transition-delay: calc(var(--index) * 0.1s);
}
```

### Word-by-Word Text Reveal (8/20 templates)

```javascript
function splitText(element) {
  const words = element.textContent.split(' ');
  element.innerHTML = words.map((word, i) =>
    `<span class="word" style="--index: ${i}">${word}</span>`
  ).join(' ');
}

// Trigger on scroll
const textObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, { threshold: 0.3 });
```

```css
.word {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  transition-delay: calc(var(--index) * 0.05s);
}

.reveal .word {
  opacity: 1;
  transform: translateY(0);
}
```

### Animation Timing Standards

| Animation Type | Duration | Easing | Trigger |
|----------------|----------|--------|---------|
| **Fade in** | 0.5-0.8s | ease-out | Scroll |
| **Slide up** | 0.4-0.6s | ease-out | Scroll |
| **Hover state** | 0.2-0.3s | ease | Hover |
| **Counter** | 1.5-2.5s | ease-out | Scroll |
| **Marquee** | 20-40s | linear | Auto |
| **Accordion** | 0.3s | ease | Click |
| **Word reveal** | 0.05s stagger | ease | Scroll |

---

## 6. Page Structure (Section Order)

### Most Common Section Ordering

1. **Navigation** (fixed/floating)
2. **Hero** (headline, subtitle, CTAs)
3. **Logo Marquee** ("Trusted by...")
4. **Mission/About Statement**
5. **Services/Features Grid**
6. **How It Works / Process** (numbered steps)
7. **Portfolio/Projects**
8. **Stats/Metrics Counter**
9. **Testimonials** (carousel or marquee)
10. **Pricing** (3-tier with toggle)
11. **Team** (optional)
12. **FAQ Accordion**
13. **Final CTA** ("Ready to start?")
14. **Footer**

### Section Labeling Pattern (12/20 templates)

```html
<section class="section">
  <div class="section-header">
    <span class="section-number">01</span>
    <span class="section-label">SERVICES</span>
  </div>
  <h2>Section Headline</h2>
  <!-- Content -->
</section>
```

---

## 7. Spacing System

### Consistent Spacing Scale

```css
:root {
  /* Base unit: 8px */
  --space-1: 8px;    /* Tight elements */
  --space-2: 16px;   /* Button padding, card padding */
  --space-3: 24px;   /* Component gaps */
  --space-4: 32px;   /* Section header to content */
  --space-5: 48px;   /* Between related sections */
  --space-6: 64px;   /* Major section dividers */
  --space-7: 96px;   /* Section padding */
  --space-8: 120px;  /* Page section gaps (mobile: 80px) */
  --space-9: 160px;  /* Hero padding (mobile: 100px) */
}
```

### Container Widths

```css
.container {
  width: 100%;
  max-width: 1280px;  /* Most common */
  margin: 0 auto;
  padding: 0 24px;
}

@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
}
```

---

## 8. Performance Patterns

### Image Optimization

```html
<!-- Lazy loading pattern -->
<img
  data-src="image.webp"
  data-srcset="image-400.webp 400w, image-800.webp 800w, image-1200.webp 1200w"
  alt="Description"
  loading="lazy"
>
```

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Critical CSS Inlining

```html
<!-- Inline critical styles for above-fold content -->
<style>
  .nav, .hero { /* Critical styles */ }
</style>

<!-- Defer non-critical CSS -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

---

## 9. Implementation Priorities

### Must-Have Components (Clone First)

1. **Glassmorphic floating navigation** - Universal pattern
2. **Hero with word-by-word reveal** - High impact
3. **Logo marquee** - Essential social proof
4. **Stats counter with IntersectionObserver**
5. **FAQ accordion**
6. **3-tier pricing with toggle**

### Should-Have Components

1. **Testimonial carousel/marquee**
2. **Process/timeline section**
3. **Bento grid feature cards**
4. **Team section with hover reveals**
5. **Contact form with validation**

### Nice-to-Have Components

1. **Custom cursor effects** (desktop only)
2. **Parallax backgrounds**
3. **Page transitions**
4. **Dark/light mode toggle**
5. **Rotating/circular badges**

---

## 10. CSS Custom Properties Master Template

```css
:root {
  /* === COLORS === */
  /* Background */
  --color-bg: #000000;
  --color-bg-secondary: #0A0A0A;
  --color-bg-card: rgba(255, 255, 255, 0.05);
  --color-bg-card-hover: rgba(255, 255, 255, 0.08);

  /* Text */
  --color-text: #FAFAFA;
  --color-text-secondary: rgba(255, 255, 255, 0.8);
  --color-text-muted: rgba(255, 255, 255, 0.6);

  /* Accent */
  --color-accent: #7C3AED;
  --color-accent-hover: #6D28D9;

  /* Borders */
  --color-border: rgba(255, 255, 255, 0.1);
  --color-border-hover: rgba(255, 255, 255, 0.2);

  /* === TYPOGRAPHY === */
  --font-sans: 'Geist', 'Inter', system-ui, sans-serif;
  --font-serif: 'Source Serif 4', Georgia, serif;

  /* Font sizes */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 32px;
  --text-4xl: 48px;
  --text-5xl: 64px;
  --text-6xl: 80px;
  --text-7xl: 100px;

  /* Font weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* Letter spacing */
  --tracking-tighter: -0.04em;
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;

  /* Line heights */
  --leading-none: 1;
  --leading-tight: 1.1;
  --leading-snug: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;

  /* === SPACING === */
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;

  /* === BORDER RADIUS === */
  --radius-none: 0;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* === SHADOWS === */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);

  /* === TRANSITIONS === */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
  --transition-slower: 500ms ease;

  /* === CONTAINER === */
  --container-max: 1280px;
  --container-padding: 24px;

  /* === Z-INDEX === */
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-nav: 500;
  --z-modal: 1000;
  --z-tooltip: 1500;
}

/* Dark mode is default, light mode override */
[data-theme="light"] {
  --color-bg: #FFFFFF;
  --color-bg-secondary: #F8F8F8;
  --color-bg-card: rgba(0, 0, 0, 0.03);
  --color-bg-card-hover: rgba(0, 0, 0, 0.06);
  --color-text: #000000;
  --color-text-secondary: rgba(0, 0, 0, 0.8);
  --color-text-muted: rgba(0, 0, 0, 0.6);
  --color-border: rgba(0, 0, 0, 0.1);
  --color-border-hover: rgba(0, 0, 0, 0.2);
}
```

---

## Summary Statistics

| Metric | Value |
|--------|-------|
| Templates Analyzed | 20 |
| Average Score | 8.4/10 |
| Dark Mode Templates | 60% |
| Use Pill Buttons | 80% |
| Have Logo Marquee | 95% |
| Have FAQ Accordion | 85% |
| Have Stats Counter | 80% |
| Have 3-Tier Pricing | 70% |
| Use Geist Font | 60% |
| Use Glassmorphic Nav | 90% |

---

*Generated from analysis of 20 premium Framer templates, December 2025*
