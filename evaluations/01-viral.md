# Template: Viral
**URL:** https://viral-sma.framer.website
**Author:** Hamza Ehsan
**Price:** $129
**Category:** Social Media Agency

## Quick Stats
- Overall Score: 8.4/10
- Tier: A-Tier
- Primary Style: Modern Minimal / Social-Native
- Best For: Social media agencies, content creators, SMM services

## Perspective Scores
| Perspective | Score | Key Strength | Key Weakness |
|-------------|-------|--------------|--------------|
| Design | 9/10 | Instagram-native aesthetic, beautiful imagery | Some text contrast could be better |
| Engineering | 8/10 | Clean structure, good semantics | Heavy on images, load optimization needed |
| Animation | 8/10 | Smooth marquee, subtle hover effects | Could use more scroll-triggered sequences |
| Customer | 8.5/10 | Clear value prop, strong social proof | Price not immediately visible |

## Design System Extraction

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| --color-bg | `#EFEBE5` / `rgb(239, 235, 229)` | Page background - warm cream/beige |
| --color-primary | `#000000` | Headlines, CTAs, text |
| --color-text | `#000000` | All text |
| --color-text-muted | `rgba(0,0,0,0.6)` | Secondary text, descriptions |
| --color-accent | `#000000` | Buttons (monochrome) |

### Typography
| Element | Font | Size | Weight | Line-height | Letter-spacing |
|---------|------|------|--------|-------------|----------------|
| Logo | Inter | 26px | 500 | 1.1 | -1.56px |
| H1 (Hero) | Inter | 70-100px | 500 | 1.1 | -6% tight |
| H2 | Inter | 48-70px | 500 | 1.1 | -4% |
| H3 | Inter | 24-32px | 500 | 1.3 | -2% |
| Body | Inter | 14-16px | 400-500 | 1.5 | normal |
| Nav | Inter | 14px | 500 | 1.5 | normal |

**Typography Notes:**
- Single font family (Inter) throughout - clean, modern approach
- Heavy use of negative letter-spacing for headlines (-6% creates density)
- "right" uses italic/serif variant for emphasis
- Monospace-like density in smaller text

### Spacing System
| Token | Value |
|-------|-------|
| --space-section | 120-160px |
| --space-component | 48-64px |
| --space-element | 24-32px |
| --space-tight | 8-16px |

### Button Styles
```css
.btn-primary {
  background: #000000;
  color: #FFFFFF;
  border-radius: 50px; /* pill shape */
  padding: 12px 24px;
  font-weight: 500;
  font-size: 14px;
}

.btn-primary:hover {
  /* Slight scale or background shift */
  transform: scale(1.02);
}
```

### Key Components & Patterns

#### 1. Hero Section
- **Layout:** 2-column split (text left, iPhone mockup right)
- **Social icons bar:** Horizontal strip above headline
- **Headline:** 3-line stack with italic emphasis on "right"
- **Subtext:** Muted description below
- **CTA:** Single black pill button
- **Visual:** iPhone frame with Instagram story mockup

#### 2. Logo Marquee
- **Pattern:** Infinite horizontal scroll of client logos
- **Speed:** Slow, continuous (30-40s loop)
- **Duplicated:** Items doubled for seamless loop
```css
.marquee {
  display: flex;
  animation: scroll 30s linear infinite;
}
@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
```

#### 3. Services Grid
- **Layout:** 3-column grid
- **Cards:** Simple text blocks with H3 + description
- **Hover:** Subtle background shift
- **No icons:** Text-only, minimalist

#### 4. Stats Counter Section
- **Pattern:** Animated number counters (0 → target)
- **Format:** "0K" views, "0%" engagement
- **Trigger:** IntersectionObserver on scroll

#### 5. Comparison Table
- **Layout:** 2-column side-by-side
- **Visual:** ✗ for competitors, ✓ for Viral
- **Strong contrast:** Clear differentiation pattern

#### 6. Team Section
- **Layout:** 3-column image grid
- **Cards:** Portrait image + name + role
- **Style:** Clean, professional photos

#### 7. FAQ Accordion
- **Pattern:** Click to expand/collapse
- **Icon:** + rotates to × on open
- **Animation:** Smooth height transition

#### 8. CTA Section
- **Pattern:** Centered text block with button
- **Copy:** "Your viral journey starts right here"

### Animation Patterns
| Animation | Trigger | Duration | Easing |
|-----------|---------|----------|--------|
| Logo marquee | Auto | 30s | linear |
| Counter | Scroll into view | 2s | ease-out |
| FAQ expand | Click | 300ms | ease |
| Button hover | Hover | 200ms | ease |
| Card hover | Hover | 200ms | ease |

### Performance Notes
- Heavy image usage (Instagram mockups, team photos)
- Logo marquee duplicates images (performance concern)
- Could benefit from lazy loading
- WebP format recommended

### Clone Priority
- [x] Hero layout with iPhone mockup frame
- [x] Infinite logo marquee
- [x] Counter animation pattern
- [x] Comparison table (us vs them)
- [x] FAQ accordion
- [x] Warm beige background palette
- [x] Tight letter-spacing headlines

### What Makes This Template Premium
1. **Social-native aesthetic** - Feels like Instagram/TikTok visual language
2. **Strong value proposition** - "Short form done right" is immediately clear
3. **Results-focused** - Stats and case studies front and center
4. **Clean typography** - Single font, multiple weights, tight tracking
5. **Warm palette** - Cream background feels approachable yet premium
