# Template: BrightEdge
**URL:** https://brightedge.framer.website
**Author:** Duncan Shen (oldshen)
**Price:** $79
**Category:** Digital Agency

## Quick Stats
- Overall Score: 8.4/10
- Tier: A-Tier
- Primary Style: Dark Professional / Agency
- Best For: Digital agencies, creative studios, marketing agencies

## Perspective Scores
| Perspective | Score | Key Strength | Key Weakness |
|-------------|-------|--------------|--------------|
| Design | 8.5/10 | Clean dark theme, consistent Geist typography | Hero could be more distinctive |
| Engineering | 8/10 | Efficient CSS animations, responsive patterns | 1500+ transition elements |
| Animation | 9/10 | Rotating badge, dual marquees, counters | No parallax |
| Customer | 8/10 | Multiple CTAs, social proof, transparent pricing | No live chat |

## Design System Extraction

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| --color-bg | `#000000` | Page background |
| --color-bg-card | `#111111` | Card backgrounds |
| --color-text-primary | `#FAFAFA` | Headlines |
| --color-text-secondary | `rgba(255, 255, 255, 0.8)` | Body text |
| --color-accent-gold | `#F2B76C` | Highlights |
| --color-accent-blue | `#7EC4E3` | Service cards |
| --color-accent-green | `#7EEA9B` | Success states |

### Typography
| Element | Font | Size | Weight | Line-height | Letter-spacing |
|---------|------|------|--------|-------------|----------------|
| H1 | Geist | 64px | 500 | 1.2 | -2.56px |
| H2 | Geist | 48px | 500 | 1.2 | -1.92px |
| Body | Geist | 18px | 400 | 1.4 | normal |
| Nav | Space Grotesk | 15px | 500-700 | 1.7 | normal |

### Button Styles
```css
.btn-primary {
  background: rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  border-radius: 100px;
  padding: 16px 32px;
}

.btn-submit {
  background: #FAFAFA;
  color: #000000;
  border-radius: 8px;
  padding: 16px 24px;
}
```

### Unique Features
- **Rotating circular badge**: "CREATE - IDEA - INSIGHT - SOLUTION" with continuous rotation
- **Dual-direction marquees**: Logo rows scrolling opposite directions
- **11 FAQ items**: Comprehensive accordion section
- **Google Maps embed**: In footer contact section

### Page Structure
1. Navigation
2. Hero ("We are digital design creators")
3. Rotating Badge
4. Services Section (4 services)
5. About Section with stats
6. Logo Marquee (32+ logos)
7. Projects Section (4 featured)
8. Process Section (5 steps)
9. Team Section (6 members)
10. Pricing (3 tiers: $499, $799, $1599)
11. Testimonials (dual marquee rows, 18+ cards)
12. FAQ (11 items)
13. Blog Section
14. Contact Form
15. Footer

### Clone Priority
- [x] Rotating circular text badge
- [x] Multi-accent color system
- [x] 5-step process section
- [x] Team hover reveals
- [x] Comprehensive FAQ
- [x] Contact form with service selector
