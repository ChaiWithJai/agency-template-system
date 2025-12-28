# Agency Template System - Implementation Plan

## Overview

Based on analysis of 20 premium Framer templates, this plan outlines the implementation strategy for creating a modular, reusable template system.

---

## Phase 1: Core Foundation (Priority: Immediate)

### 1.1 Design Token System

Create a comprehensive CSS custom properties file that can be themed.

**Files to create:**
- `styles/tokens.css` - Core design tokens
- `styles/themes/dark.css` - Dark theme overrides
- `styles/themes/light.css` - Light theme overrides
- `styles/themes/warm.css` - Warm cream theme (Viral-style)

**Implementation:**
```
tokens.css
├── Colors (bg, text, accent, borders)
├── Typography (font families, sizes, weights, spacing)
├── Spacing scale (8px base)
├── Border radius scale
├── Shadows
├── Transitions
├── Z-index layers
└── Container settings
```

### 1.2 Base CSS Reset & Utilities

**Files to create:**
- `styles/reset.css` - Modern CSS reset
- `styles/utilities.css` - Utility classes (flexbox, grid, spacing)
- `styles/animations.css` - Reusable animation keyframes

---

## Phase 2: Component Library

### 2.1 Navigation Component (90% of templates)

**Variants:**
1. **Floating pill nav** (most common) - glassmorphic, centered
2. **Full-width nav** - edge-to-edge, logo left
3. **Minimal nav** - logo + burger only

**Features:**
- Scroll detection (add `.scrolled` class)
- Mobile hamburger menu
- Dropdown support
- Active state indicators

**Files:**
- `components/nav/nav.html`
- `components/nav/nav.css`
- `components/nav/nav.js`

### 2.2 Hero Section (5 variants)

**Variants:**
1. **Centered hero** - text center, CTAs below
2. **Split hero** - text left, image/mockup right
3. **Full-width headline** - massive text filling viewport
4. **Video background hero**
5. **Gradient animated hero**

**Components within:**
- Announcement badge
- Word-by-word reveal headline
- Italic accent styling
- Dual CTA buttons

**Files:**
- `components/hero/hero-centered.html`
- `components/hero/hero-split.html`
- `components/hero/hero-fullwidth.html`
- `components/hero/hero.css`
- `components/hero/hero.js`

### 2.3 Logo Marquee (95% of templates)

**Variants:**
1. **Single row** - standard infinite scroll
2. **Dual row** - opposite directions
3. **Fading edges** - gradient masks on sides

**Files:**
- `components/marquee/marquee.html`
- `components/marquee/marquee.css`
- `components/marquee/marquee.js`

### 2.4 Stats Counter (80% of templates)

**Features:**
- IntersectionObserver trigger
- Animated counting (0 → target)
- Number formatting (K, M, +, %)
- Stagger animation for multiple counters

**Files:**
- `components/stats/stats.html`
- `components/stats/stats.css`
- `components/stats/stats.js`

### 2.5 Services/Features Grid

**Variants:**
1. **3-column grid** - icon + title + description
2. **Bento grid** - mixed sizes
3. **Card hover reveals** - expanded content on hover

**Files:**
- `components/services/services-grid.html`
- `components/services/services-bento.html`
- `components/services/services.css`

### 2.6 Process/Timeline Section (70% of templates)

**Variants:**
1. **Numbered steps** - vertical or horizontal
2. **Timeline** - alternating left/right
3. **Icon steps** - icons with descriptions

**Files:**
- `components/process/process.html`
- `components/process/process.css`

### 2.7 Testimonials (85% of templates)

**Variants:**
1. **Carousel** - arrows, dots navigation
2. **Marquee** - infinite scroll cards
3. **Grid** - static 3-column
4. **Featured quote** - large single testimonial

**Files:**
- `components/testimonials/testimonials-carousel.html`
- `components/testimonials/testimonials-marquee.html`
- `components/testimonials/testimonials.css`
- `components/testimonials/testimonials.js`

### 2.8 Pricing Section (70% of templates)

**Features:**
- 3-tier layout (Basic, Pro, Enterprise)
- Monthly/Annual toggle
- Feature comparison checkmarks
- Highlighted/popular tier

**Files:**
- `components/pricing/pricing.html`
- `components/pricing/pricing.css`
- `components/pricing/pricing.js`

### 2.9 FAQ Accordion (85% of templates)

**Features:**
- Expand/collapse animation
- Icon rotation (+ → ×)
- Single or multi-open modes
- Smooth height transitions

**Files:**
- `components/faq/faq.html`
- `components/faq/faq.css`
- `components/faq/faq.js`

### 2.10 Footer

**Variants:**
1. **Multi-column** - links, social, newsletter
2. **Minimal** - logo + essential links
3. **With contact info** - address, map embed

**Files:**
- `components/footer/footer.html`
- `components/footer/footer.css`

---

## Phase 3: Animation System

### 3.1 Scroll Animations

**Implementation:**
- Single IntersectionObserver instance
- `.animate-on-scroll` base class
- Variants: fade-up, fade-in, slide-left, slide-right, scale-in
- Stagger support via CSS custom properties

```javascript
// Core scroll animation system
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
```

### 3.2 Text Reveal Animations

**Types:**
1. **Word-by-word** - split text, stagger reveal
2. **Character-by-character** - typewriter effect
3. **Line-by-line** - block reveals

### 3.3 Micro-interactions

**Hover effects:**
- Button arrow slides
- Card scale/shadow
- Link underline animations
- Icon rotations

---

## Phase 4: Page Templates

### 4.1 Homepage Variants

Based on template rankings, create these homepage configurations:

1. **AI/SaaS Landing** (MONO AI style)
   - Dark theme
   - Announcement badge
   - Word-by-word hero
   - Bento features
   - Dual marquees

2. **Agency Landing** (BrightEdge style)
   - Dark theme
   - Rotating badge
   - Process section
   - Team section
   - Contact form

3. **Social Media Agency** (Viral style)
   - Warm cream theme
   - iPhone mockup hero
   - Comparison table
   - Instagram-native aesthetic

4. **Tech Startup** (Trifecta style)
   - Dark with purple accent
   - Gradient text
   - 3D card tilts
   - Particle background

### 4.2 Secondary Pages

- About page
- Services page
- Portfolio/Work page
- Pricing page
- Contact page
- Blog/Insights page

---

## Phase 5: Build & Deployment

### 5.1 Development Workflow

```
agency-template-system/
├── src/
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── reset.css
│   │   ├── utilities.css
│   │   ├── animations.css
│   │   └── themes/
│   ├── components/
│   │   ├── nav/
│   │   ├── hero/
│   │   ├── marquee/
│   │   └── ... (all components)
│   ├── pages/
│   │   ├── homepage-ai.html
│   │   ├── homepage-agency.html
│   │   └── ...
│   └── js/
│       └── main.js
├── dist/
│   └── (built files)
├── docs/
│   ├── SEMANTIC-EVALUATION-FRAMEWORK.md
│   ├── PATTERN-SYNTHESIS.md
│   └── IMPLEMENTATION-PLAN.md
└── evaluations/
    └── (template evaluations)
```

### 5.2 Build Process

1. **CSS Bundling**: Concatenate all CSS, minify
2. **JS Bundling**: Module bundler or vanilla concatenation
3. **HTML Processing**: Include partials, minify
4. **Asset Optimization**: Image compression, WebP conversion

### 5.3 Deployment

- **GitHub**: Push to repository
- **Netlify**: Auto-deploy from GitHub
- **Custom domain**: Configure DNS

---

## Implementation Order

### Week 1: Foundation
- [ ] Create token system (tokens.css)
- [ ] Create reset and utilities
- [ ] Create animation keyframes
- [ ] Create nav component (all variants)
- [ ] Create hero component (centered + split)

### Week 2: Core Components
- [ ] Logo marquee
- [ ] Stats counter
- [ ] Services grid
- [ ] FAQ accordion
- [ ] Footer

### Week 3: Advanced Components
- [ ] Testimonials (carousel + marquee)
- [ ] Pricing section
- [ ] Process/timeline
- [ ] Team section
- [ ] Contact form

### Week 4: Page Assembly
- [ ] AI/SaaS homepage
- [ ] Agency homepage
- [ ] Social media agency homepage
- [ ] Secondary pages
- [ ] Final polish and optimization

---

## Quality Checklist

### Before Each Component
- [ ] Read original template evaluation
- [ ] Extract exact design tokens
- [ ] Plan responsive breakpoints
- [ ] Identify animation triggers

### After Each Component
- [ ] Visual comparison with original
- [ ] Responsive testing (375, 768, 1024, 1440px)
- [ ] Animation timing verification
- [ ] Accessibility audit (keyboard nav, contrast)
- [ ] Performance check (no layout shifts)

### Before Deployment
- [ ] Lighthouse audit (target: 90+ performance)
- [ ] Cross-browser testing
- [ ] Reduced motion testing
- [ ] SEO meta tags
- [ ] Social sharing previews

---

## Success Metrics

1. **Visual Fidelity**: 90%+ match to original templates
2. **Performance**: Lighthouse 90+ on all pages
3. **Accessibility**: WCAG AA compliance
4. **Code Quality**: Clean, maintainable, documented
5. **Reusability**: Components work in isolation

---

*Plan created from synthesis of 20 premium Framer templates*
