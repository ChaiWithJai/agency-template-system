# AI Supply Template Evaluation

## Overview

| Property | Value |
|----------|-------|
| **URL** | https://aisupply.framer.website/ |
| **Template Category** | AI Startup / AI Agency / SaaS |
| **Creator** | Wize Templates |
| **Overall Score** | **9.2 / 10** |
| **Best For** | AI automation agencies, AI agent startups, SaaS companies offering AI-powered solutions |

---

## 4-Perspective Evaluation

### 1. Design Expert Perspective

**Score: 9.5/10**

#### Visual Hierarchy
The template demonstrates exceptional visual hierarchy through:
- **Large, impactful hero headlines** that immediately communicate value proposition
- **Clear section labels** (e.g., "Introducing", "Process", "Calculator") that orient users
- **Progressive disclosure** from high-level benefits to detailed features
- **Strategic use of accent color** (lime/chartreuse) on dark background for maximum contrast

#### Typography System

| Element | Font Family | Size | Weight | Line Height | Letter Spacing |
|---------|-------------|------|--------|-------------|----------------|
| **H1 (Hero)** | Geist, sans-serif | 62px | 600 | 68.6px (1.1) | -3.12px |
| **H2 (Section)** | Geist, sans-serif | 72px | 600 | 79.2px (1.1) | -2.88px |
| **H3 (Card Title)** | Geist, sans-serif | 56px | 600 | 61.6px (1.1) | -1.68px |
| **H4 (Subsection)** | Geist, sans-serif | 48px | 500 | 57.6px (1.2) | -1.92px |
| **H5 (Feature)** | Geist, sans-serif | 28px | 500 | 33.6px (1.2) | -1.12px |
| **H6 (Label)** | Geist, sans-serif | 19px | 500 | 26.6px (1.4) | -0.76px |
| **Body** | Inter, sans-serif | 16px | 400 | 19.2px (1.2) | normal |
| **Section Label** | Inter, sans-serif | 18px | 500 | auto | -0.54px |
| **Monospace** | Red Hat Mono | 12-14px | 400 | auto | normal |

**Key Typography Insights:**
- Tight letter-spacing (-2% to -5%) creates modern, compact headings
- Geist font family provides excellent readability with geometric precision
- Inter for body text ensures maximum legibility at smaller sizes
- Red Hat Mono for technical/code elements adds authenticity

#### Color Palette

| Role | Color | Hex Value | RGB |
|------|-------|-----------|-----|
| **Primary Background** | Near Black | `#0A0A0A` | rgb(10, 10, 10) |
| **Accent / CTA** | Lime/Chartreuse | `#E2FC7A` | rgb(226, 252, 122) |
| **Text Primary** | White | `#FFFFFF` | rgb(255, 255, 255) |
| **Text Secondary** | Light Gray | `#C0C0C0` | rgb(192, 192, 192) |
| **Text Muted** | 60% White | `rgba(0,0,0,0.6)` | rgba(0, 0, 0, 0.6) |
| **Card Background** | Dark Gray | `#1B1C1C` | rgb(27, 28, 28) |
| **Border/Divider** | 10% White | `rgba(255,255,255,0.1)` | rgba(255, 255, 255, 0.1) |
| **Subtle Background** | 5% White | `rgba(255,255,255,0.05)` | rgba(255, 255, 255, 0.05) |
| **Hover State** | 2% White | `rgba(255,255,255,0.02)` | rgba(255, 255, 255, 0.02) |

**Color Strategy:**
- Dark mode by default - positions as cutting-edge/technical
- Single accent color (lime) creates strong visual brand identity
- High contrast ratio ensures accessibility (WCAG AAA for primary text)
- Subtle layering using opacity creates depth without additional colors

#### Spacing Rhythm

| Use Case | Value |
|----------|-------|
| Section Gap (Large) | 120px |
| Section Gap (Medium) | 100px |
| Component Gap | 60px |
| Card Internal Gap | 48px |
| Element Gap (Small) | 10px |
| Container Max Width | 1900px |

---

### 2. UI Engineer Perspective

**Score: 9.0/10**

#### Component Architecture

```
Page Structure
├── Navigation (Sticky)
│   ├── Logo
│   ├── Nav Links (Use cases, About, Careers, Contact)
│   └── CTA Button ("Get started")
├── Hero Section
│   ├── Section Label ("Introducing AI Supply")
│   ├── H1 Headline (word-by-word animation)
│   ├── Subheadline
│   ├── CTA Button Group (Primary + Secondary)
│   └── Logo Marquee (infinite scroll)
├── Features Section
│   ├── Section Header (Label + H2)
│   └── Feature Cards Grid (3 columns)
│       ├── Card with Image
│       ├── Card with Image
│       └── Card with Stats
├── Process Section (Tabbed)
│   ├── Section Header
│   ├── Tab Navigation (Discovery, Develop, Optimize)
│   └── Tab Content
│       ├── Workflow Diagram
│       └── Description + CTA
├── Calculator Section (Interactive)
│   ├── Section Header
│   ├── Slider Inputs (Team size, Hours, Cost)
│   └── Dynamic Results
├── Industries Section
│   ├── Horizontal Scroll Marquee
│   ├── Section Header
│   └── Accordion Items
├── Benefits Section
│   └── 6-Column Grid Cards
├── Comparison Section
│   ├── "Other agencies" Column (negative)
│   └── "AI Supply" Column (positive)
├── Testimonials Section
│   └── 2-Column Testimonial Cards
├── Pricing Section
│   ├── Pricing Toggle (Monthly/Yearly)
│   └── 2 Pricing Cards
├── FAQ Section
│   └── Accordion Items
├── Footer CTA Section
│   ├── Final Headline
│   └── CTA Buttons
└── Footer
    ├── Page Links
    ├── Legal Links
    └── Social Links
```

#### CSS Patterns Extracted

**Button Styles:**
```css
/* Primary CTA Button */
.btn-primary {
  background-color: #E2FC7A;
  color: #0A0A0A;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  transition: background 0.2s cubic-bezier(0.44, 0, 0.56, 1);
}

/* Secondary/Ghost Button */
.btn-secondary {
  background-color: transparent;
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
}
```

**Card Styles:**
```css
/* Feature Card */
.feature-card {
  background-color: #1B1C1C;
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Pricing Card */
.pricing-card {
  background-color: rgba(255, 255, 255, 0.02);
  border-radius: 24px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

**Section Label:**
```css
.section-label {
  font-size: 14px;
  font-weight: 500;
  color: #E2FC7A;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
}
```

#### Design Tokens Extracted

```json
{
  "colors": {
    "background": {
      "primary": "#0A0A0A",
      "card": "#1B1C1C",
      "elevated": "rgba(255, 255, 255, 0.02)",
      "subtle": "rgba(255, 255, 255, 0.05)"
    },
    "text": {
      "primary": "#FFFFFF",
      "secondary": "#C0C0C0",
      "muted": "rgba(255, 255, 255, 0.6)"
    },
    "accent": {
      "primary": "#E2FC7A",
      "hover": "#D4EE6C"
    },
    "border": {
      "default": "rgba(255, 255, 255, 0.1)",
      "subtle": "rgba(255, 255, 255, 0.05)"
    }
  },
  "typography": {
    "fontFamily": {
      "heading": "Geist, sans-serif",
      "body": "Inter, sans-serif",
      "mono": "Red Hat Mono, monospace"
    },
    "fontSize": {
      "xs": "12px",
      "sm": "14px",
      "base": "16px",
      "lg": "18px",
      "xl": "22px",
      "2xl": "28px",
      "3xl": "38px",
      "4xl": "48px",
      "5xl": "56px",
      "6xl": "62px",
      "7xl": "72px"
    },
    "fontWeight": {
      "normal": 400,
      "medium": 500,
      "semibold": 600
    },
    "letterSpacing": {
      "tight": "-0.04em",
      "tighter": "-0.03em",
      "normal": "0"
    }
  },
  "spacing": {
    "xs": "10px",
    "sm": "16px",
    "md": "24px",
    "lg": "32px",
    "xl": "48px",
    "2xl": "60px",
    "3xl": "100px",
    "4xl": "120px"
  },
  "borderRadius": {
    "sm": "4px",
    "md": "8px",
    "lg": "16px",
    "xl": "24px",
    "full": "9999px"
  }
}
```

#### Responsive Approach
- **Mobile-first breakpoints** inferred from viewport adaptations
- **Fluid typography** scaling based on viewport width
- **Grid collapse patterns**: 3-col -> 2-col -> 1-col
- **Container max-width**: 1900px with generous side padding

---

### 3. Framer Motion Expert Perspective

**Score: 9.0/10**

#### Animation Types Identified

| Animation | Type | Implementation |
|-----------|------|----------------|
| **Hero Text Reveal** | Staggered word-by-word | Each word in H1 animates in sequence |
| **Logo Marquee** | Infinite horizontal scroll | CSS transform with continuous animation |
| **Scroll Reveal** | Fade + translate up | Elements animate into view on scroll |
| **Tab Content Switch** | Crossfade | Smooth opacity transition between tabs |
| **Accordion Expand** | Height + opacity | FAQ items expand with content reveal |
| **Hover States** | Color/background | Subtle transitions on interactive elements |
| **Slider Input** | Value-based animation | Calculator results animate on change |

#### Timing Functions

```css
/* Primary easing - used for most transitions */
transition: all 0.2s cubic-bezier(0.44, 0, 0.56, 1);

/* Hover states */
transition: color 0.2s cubic-bezier(0.44, 0, 0.56, 1);

/* Opacity transitions */
transition: opacity 0.2s ease-in-out;

/* Background transitions */
transition: background 0.2s, box-shadow 0.2s;
```

**Easing Analysis:**
- `cubic-bezier(0.44, 0, 0.56, 1)` - Custom ease-out curve, slightly snappier than default
- Short duration (200ms) keeps interactions feeling responsive
- Consistent timing across all micro-interactions

#### Scroll-Triggered Animations

Based on the page structure, likely implementations:

```javascript
// Framer Motion scroll reveal pattern
const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.44, 0, 0.56, 1]
    }
  }
};

// Staggered children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Word-by-word text reveal
const wordReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4
    }
  })
};
```

#### Performance Considerations

**Optimizations Observed:**
1. **Transform-based animations only** - Uses `transform: matrix()` for GPU acceleration
2. **Will-change hints** - Likely applied to animated elements
3. **Reduced motion support** - Should be implemented for accessibility
4. **Lazy loading** - Images load on scroll into viewport
5. **No layout thrashing** - Animations don't trigger reflows

**Potential Issues:**
- Marquee infinite animation could impact battery on mobile
- Multiple scroll observers may need optimization
- Consider `content-visibility: auto` for off-screen sections

---

### 4. Agency Owner/Customer Perspective

**Score: 9.3/10**

#### Business Needs Solved

| Need | How Template Addresses It |
|------|---------------------------|
| **Explain AI complexity** | Process section with visual workflow diagrams |
| **Justify pricing** | ROI Calculator shows concrete savings |
| **Build trust** | Testimonials with specific metrics (97% efficiency, 4x growth) |
| **Show expertise** | Industry-specific use cases (Finance, Healthcare, etc.) |
| **Differentiate** | Comparison section vs. "Other agencies" |
| **Generate leads** | Multiple CTAs, clear contact points |

#### Conversion Optimization Elements

1. **Above-the-fold clarity**
   - Immediate value prop: "Reimagine work with autonomous AI agents"
   - Clear CTA: "Get started" + "View use cases"
   - Social proof: "Trusted by 300+ clients"

2. **ROI Calculator**
   - Interactive engagement increases time-on-page
   - Personalizes value proposition
   - Creates urgency: "You're losing ~$20,784/month"
   - Direct CTA: "Get a custom automation plan"

3. **Social Proof Distribution**
   - Logo marquee (brand trust)
   - Specific metrics in testimonials
   - "300+ clients" repeated strategically

4. **Objection Handling**
   - FAQ section addresses common concerns
   - Security mentioned in benefits
   - "No technical skills needed" positioning

5. **Multiple CTAs**
   - Sticky navigation CTA
   - Hero section dual CTAs
   - Section-specific CTAs
   - Footer CTA section

#### Trust Signals Identified

| Signal | Implementation |
|--------|----------------|
| **Client Count** | "300+ clients" - specific but round number |
| **Specific Metrics** | "97% boost in efficiency", "4x increase in bottom line" |
| **Named Testimonials** | Real names + titles (Lauren Meyers, Marcus Lee) |
| **Industry Expertise** | 8 industry verticals listed |
| **Security Emphasis** | "Enterprise-Grade Security" benefit |
| **Pricing Transparency** | Clear pricing tiers ($899/mo, $1,899/mo) |

#### Professionalism Indicators

- **Dark, premium aesthetic** signals sophistication
- **Clean typography** shows attention to detail
- **Interactive elements** demonstrate technical capability
- **Workflow diagrams** show process maturity
- **Consistent branding** builds recognition

---

## Key Patterns to Extract

### Hero Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]     Use cases  About  Careers  Contact  [Get started] │ <- Nav
├─────────────────────────────────────────────────────────────┤
│                                                               │
│                    Introducing AI Supply                      │ <- Label
│                                                               │
│      Reimagine work with autonomous AI agents                 │ <- H1 (animated)
│                                                               │
│      Your on-demand AI workforce. Automate routine tasks...   │ <- Subhead
│                                                               │
│        [Get in touch]    [View use cases]                     │ <- CTAs
│                                                               │
├─────────────────────────────────────────────────────────────┤
│  ◀ [Logo] [Logo] [Logo] [Logo] [Logo] [Logo] [Logo] ▶        │ <- Marquee
└─────────────────────────────────────────────────────────────┘
```

### Navigation Style

```css
/* Transparent, minimal navigation */
.nav {
  position: sticky;
  top: 0;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent; /* or subtle blur */
}

.nav-links {
  display: flex;
  gap: 32px;
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
}

.nav-cta {
  background: #E2FC7A;
  color: #0A0A0A;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
}
```

### Button Styles

**Primary (Accent):**
```css
.btn-primary {
  background: #E2FC7A;
  color: #0A0A0A;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
}

.btn-primary:hover {
  background: #D4EE6C;
  transform: translateY(-2px);
}
```

**Secondary (Ghost):**
```css
.btn-secondary {
  background: transparent;
  color: #FFFFFF;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}

.btn-secondary:hover {
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.05);
}
```

### Card Designs

**Feature Card:**
```css
.feature-card {
  background: #1B1C1C;
  border-radius: 20px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.feature-card img {
  width: 100%;
  border-radius: 12px;
}

.feature-card h3 {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.feature-card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}
```

**Pricing Card:**
```css
.pricing-card {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 24px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.pricing-card.featured {
  background: #E2FC7A;
  color: #0A0A0A;
}

.pricing-amount {
  font-size: 48px;
  font-weight: 600;
  letter-spacing: -0.03em;
}
```

**Testimonial Card:**
```css
.testimonial-card {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 24px;
  padding: 48px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.testimonial-quote {
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
}

.testimonial-metric {
  font-size: 48px;
  font-weight: 600;
  color: #E2FC7A;
}
```

### Section Spacing

```css
/* Section wrapper */
.section {
  padding: 120px 0;
}

/* Section header */
.section-header {
  margin-bottom: 60px;
}

.section-label {
  font-size: 14px;
  font-weight: 500;
  color: #E2FC7A;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
}

.section-title {
  font-size: 56px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.03em;
  max-width: 800px;
}

/* Content grids */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
```

---

## Summary & Recommendations

### Strengths
1. **Outstanding visual design** with cohesive dark theme and accent color
2. **Conversion-focused layout** with strategic CTA placement
3. **Interactive elements** (calculator, tabs, accordions) increase engagement
4. **Strong typography system** with excellent hierarchy
5. **Performance-optimized animations** using transforms

### Areas for Improvement
1. **Accessibility** - Could improve focus states and reduced motion support
2. **Mobile optimization** - Some sections may need layout adjustments
3. **Loading performance** - Consider skeleton states for images

### Best Use Cases
- AI automation agencies
- AI SaaS products
- Tech consultancies
- Developer tool companies
- B2B software with complex value propositions

### Template Value
At the Framer Marketplace price point, this template offers exceptional value for:
- Startups needing a polished launch page quickly
- Agencies wanting a proven conversion-optimized structure
- Teams without dedicated design resources

---

**Sources:**
- [AI Supply - Framer Marketplace](https://www.framer.com/marketplace/templates/ai-supply/)
- [Wize Templates](https://wizetemplates.com/templates/ai-supply)
- [AI Supply Demo](https://aisupply.framer.website/)
