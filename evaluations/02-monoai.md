# Template: MONO AI
**URL:** https://monoai.framer.website
**Author:** Framer Marketplace
**Price:** $79
**Category:** AI/SaaS Product

## Quick Stats
- Overall Score: 9.0/10
- Tier: S-Tier
- Primary Style: Dark Minimal / AI-Native
- Best For: AI products, SaaS platforms, tech startups

## Perspective Scores
| Perspective | Score | Key Strength | Key Weakness |
|-------------|-------|--------------|--------------|
| Design | 9/10 | Exceptional dark mode, sophisticated typography | Limited color variety |
| Engineering | 8.5/10 | Clean component hierarchy, consistent spacing | Heavy transitions |
| Animation | 8/10 | Smooth marquees, word-by-word reveals | Could use more entrance animations |
| Customer | 9/10 | Premium feel, comprehensive sections, CMS-ready | No light mode option |

## Design System Extraction

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| --color-bg | `#000000` | Page background |
| --color-primary | `#FAFAFA` | Headlines, CTAs |
| --color-text | `rgba(255, 255, 255, 0.8)` | Body text |
| --color-button-primary | `#FAFAFA` | Primary button bg |
| --color-button-secondary | `rgba(255, 255, 255, 0.15)` | Ghost button bg |

### Typography
| Element | Font | Size | Weight | Line-height | Letter-spacing |
|---------|------|------|--------|-------------|----------------|
| H1 | Geist | 64px | 500 | 1.2 | -2.56px |
| H2 | Geist | 48px | 500 | 1.2 | -1.92px |
| Body | Geist | 14px | 500 | 1.3 | normal |
| Accent | Source Serif 4 | - | italic | - | - |

### Button Styles
```css
.btn-primary {
  background: #FAFAFA;
  color: #000000;
  border-radius: 64px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 500;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.15);
  color: #FFFFFF;
  border-radius: 64px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Page Structure
1. Navigation (floating glassmorphic)
2. Hero (announcement badge + headline + CTAs)
3. Logo Marquee
4. Mission Statement (word-by-word reveal)
5. Feature Cards (AI Automation, Data Insights, Adaptive AI)
6. Product Showcases (AI Chat, Assistant, Transcription)
7. Features Grid (6 cards)
8. Testimonials with metrics
9. Integrations (multi-row marquees)
10. Bento Grid Features
11. Quote Section
12. FAQ Accordion
13. Final CTA
14. Footer

### Clone Priority
- [x] Dark theme with glassmorphism
- [x] Word-by-word text reveal animation
- [x] Dual-direction logo marquees
- [x] Bento grid feature layout
- [x] Announcement badge component
- [x] Italic serif accent typography
