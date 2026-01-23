# 🟡 Mags Mustard Survey — Design Overhaul Spec

## The Problem

The current design is too safe and generic. It looks like every other survey template. We need personality, boldness, and fun.

**Current issues:**
- Flat, muted colors (boring beige everywhere)
- Default-looking form elements
- No texture or visual interest
- Plain white card with no character
- Progress bar is basic
- No micro-interactions or delight

---

## Design Direction: "Artisanal Chaos"

Think: A cool indie food brand meets a zine meets your fun friend's passion project. It should feel **handmade, bold, slightly irreverent, and joyful**.

**References/Vibes:**
- Scrappy startup landing pages
- Indie food packaging (Graza olive oil, Fly By Jing, Fishwife)
- 70s food advertising (mustard yellows, browns, retro typography)
- Subtle "controlled chaos" — not corporate clean

---

## Color Palette (BOLDER)

```css
:root {
  /* Primary */
  --mustard-bright: #FFD000;      /* Hero yellow - USE MORE OF THIS */
  --mustard-dark: #C9A000;        /* Darker accent */
  --dijon: #BB8C00;               /* Rich gold */
  
  /* Secondary */
  --brown-dark: #2D1810;          /* Primary text - almost black */
  --brown-medium: #5C4033;        /* Secondary text */
  --cream: #FFF8E7;               /* Background */
  --cream-dark: #F5E6C8;          /* Card backgrounds */
  
  /* Accents */
  --red-pop: #D64045;             /* For highlights, errors */
  --green-fresh: #4A7C59;         /* Success states */
  --orange-warm: #E86F2C;         /* Warm accent */
  
  /* Fun extras */
  --grain-opacity: 0.03;          /* Subtle texture */
}
```

**Key change:** The background should have MORE yellow energy, not be flat beige. Consider a gradient or the yellow being more present.

---

## Typography

### Display Font (Headers, Questions)
Use something with personality! Options:
- **`Fraunces`** — Variable font, very characterful, has "wonky" optical sizing
- **`Gambarino`** — Retro-funky display font  
- **`Cabinet Grotesk`** — Bold, geometric, modern
- **`Instrument Serif`** — Elegant but with quirks

```css
h1, h2, .question-title {
  font-family: 'Fraunces', serif;
  font-weight: 800;
  font-variation-settings: 'WONK' 1; /* Adds character */
}
```

### Body Font
- **`DM Sans`** or **`Satoshi`** — Clean but friendly

---

## Layout & Structure Overhaul

### Background
Don't use flat color. Add depth:

```css
body {
  background: 
    /* Grain texture overlay */
    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E"),
    /* Gradient background */
    linear-gradient(135deg, #FFF8E7 0%, #FFE4A0 50%, #FFF8E7 100%);
  background-blend-mode: overlay;
}
```

Or use **CSS patterns** — subtle mustard seeds, dots, or organic shapes in the background.

### Card Design
The white card is boring. Make it feel tactile:

```css
.survey-card {
  background: #FFFDF7;
  border: 3px solid var(--brown-dark);
  border-radius: 24px;
  box-shadow: 
    8px 8px 0 0 var(--mustard-bright),  /* Offset color shadow */
    12px 12px 0 0 var(--brown-dark);     /* Hard shadow */
  
  /* Or try a subtle rotation for "handmade" feel */
  transform: rotate(-0.5deg);
}

.survey-card:hover {
  transform: rotate(0deg) translateY(-2px);
  transition: transform 0.2s ease;
}
```

---

## Component Redesigns

### Progress Bar → Mustard Squeeze Bottle

Instead of a boring bar, show a **mustard bottle that fills up** or **squeezes out mustard** as you progress:

```
Option A: Bottle fills with yellow from bottom to top
Option B: Bottle squeezes, mustard trail extends across screen
Option C: Dots that turn into mustard blobs (● ● ● ○ ○ ○)
```

Simple CSS version with blobs:
```css
.progress-dots {
  display: flex;
  gap: 8px;
}

.progress-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--cream-dark);
  border: 2px solid var(--brown-medium);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.progress-dot.completed {
  background: var(--mustard-bright);
  transform: scale(1.2);
  border-radius: 45% 55% 40% 60%; /* Blob shape */
}
```

### Radio Buttons → Custom Styled Options

The default radios are boring. Make selection feel satisfying:

```css
.option-card {
  background: var(--cream);
  border: 2px solid var(--brown-medium);
  border-radius: 16px;
  padding: 16px 20px;
  cursor: pointer;
  transition: all 0.15s ease;
  position: relative;
  overflow: hidden;
}

.option-card:hover {
  border-color: var(--mustard-dark);
  transform: translateX(4px);
  background: #FFFEF5;
}

.option-card.selected {
  background: var(--mustard-bright);
  border-color: var(--brown-dark);
  transform: translateX(8px);
  box-shadow: -4px 0 0 0 var(--brown-dark); /* Left accent bar */
}

/* Hide default radio, use custom indicator */
.option-card .radio-indicator {
  width: 24px;
  height: 24px;
  border: 2px solid var(--brown-medium);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-card.selected .radio-indicator {
  background: var(--brown-dark);
  border-color: var(--brown-dark);
}

.option-card.selected .radio-indicator::after {
  content: '✓';
  color: var(--mustard-bright);
  font-weight: bold;
}
```

### Buttons → Chunky & Fun

```css
.btn-primary {
  background: var(--mustard-bright);
  color: var(--brown-dark);
  border: 3px solid var(--brown-dark);
  border-radius: 50px;
  padding: 14px 32px;
  font-family: 'Fraunces', serif;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  transition: all 0.1s ease;
  box-shadow: 4px 4px 0 0 var(--brown-dark);
}

.btn-primary:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 0 var(--brown-dark);
}

.btn-primary:active {
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0 0 var(--brown-dark);
}
```

### Text Inputs → Handwritten Feel

```css
.text-input {
  background: transparent;
  border: none;
  border-bottom: 3px solid var(--brown-medium);
  font-size: 18px;
  padding: 12px 4px;
  font-family: 'Caveat', cursive; /* Or keep normal font */
  width: 100%;
  transition: border-color 0.2s;
}

.text-input:focus {
  outline: none;
  border-bottom-color: var(--mustard-bright);
  border-bottom-width: 4px;
}

.text-input::placeholder {
  color: var(--brown-medium);
  opacity: 0.6;
  font-style: italic;
}
```

---

## Micro-Interactions & Animations

### Page Transitions
Slide questions in/out:
```css
.question-enter {
  opacity: 0;
  transform: translateX(40px);
}

.question-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.3s ease-out;
}

.question-exit {
  opacity: 1;
  transform: translateX(0);
}

.question-exit-active {
  opacity: 0;
  transform: translateX(-40px);
  transition: all 0.3s ease-in;
}
```

### Selection Feedback
Add a subtle "pop" when selecting:
```css
@keyframes selectPop {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}

.option-card.just-selected {
  animation: selectPop 0.2s ease;
}
```

### Submit → Confetti Explosion
Use a library like `canvas-confetti` for the thank you screen:
```js
import confetti from 'canvas-confetti';

// On successful submit
confetti({
  particleCount: 100,
  spread: 70,
  colors: ['#FFD000', '#C9A000', '#2D1810', '#D64045'],
  origin: { y: 0.6 }
});
```

---

## Visual Embellishments

### Decorative Elements
Add personality with small illustrations/icons:
- Mustard jar icons
- Splatter/blob shapes in corners
- Hand-drawn arrows or underlines
- Star/sparkle decorations ✦

```css
/* Decorative blob */
.blob-decoration {
  position: absolute;
  width: 60px;
  height: 60px;
  background: var(--mustard-bright);
  border-radius: 60% 40% 50% 70%;
  opacity: 0.5;
  z-index: -1;
}

/* Hand-drawn underline effect */
.fun-underline {
  background-image: url("data:image/svg+xml,..."); /* Squiggly SVG */
  background-position: bottom;
  background-repeat: no-repeat;
  padding-bottom: 8px;
}
```

### Question Copy — Add Flavor!
Each question should have personality:

| Boring | Fun |
|--------|-----|
| "What's your favourite type of mustard?" | "What's your mustard personality?" |
| "How often do you use mustard?" | "How deep is your mustard obsession?" |
| "Select flavours you'd try" | "What should we cook up next? 🧪" |

Option labels too:
- "English (the hot stuff! 🔥)"
- "Dijon (ooh la la 🇫🇷)"
- "Wholegrain (chunky & rustic)"
- "American Yellow (ballpark classic 🌭)"

---

## Welcome & Thank You Screens

### Welcome Screen (Before Q1)
Big, bold, sets the tone:
```
┌─────────────────────────────────────┐
│                                     │
│     🟡 MUSTARD BY MAGS 🟡           │
│                                     │
│   ══════════════════════════════    │
│   Help shape the condiment          │
│   revolution of 2026!               │
│   ══════════════════════════════    │
│                                     │
│   This takes ~2 minutes.            │
│   Your answers = better mustard.    │
│                                     │
│        [ LET'S GO 🚀 ]              │
│                                     │
└─────────────────────────────────────┘
```

### Thank You Screen
Celebratory, shareable:
```
┌─────────────────────────────────────┐
│                                     │
│          🎉 YOU DID IT! 🎉          │
│                                     │
│    You're officially a              │
│    ★ MUSTARD-TEER ★                 │
│                                     │
│    Thanks for helping Mags          │
│    make mustard dreams come true!   │
│                                     │
│    Stay tuned for updates...        │
│    2026 is gonna be SAUCY 🟡        │
│                                     │
│    [ Share ] [ Follow Mags ]        │
│                                     │
└─────────────────────────────────────┘
```

---

## Mobile Considerations

- Buttons should be minimum 48px tap target
- Options should be full-width stacked cards (easier to tap)
- Consider bottom-fixed navigation (Back/Next)
- Progress indicator shouldn't take too much vertical space
- Test that the "fun" doesn't make it unusable on small screens

---

## Quick Wins Checklist

If tight on time, prioritize these high-impact changes:

1. [ ] **Add grain texture to background** — instant artisanal feel
2. [ ] **Change to a display font** for headers (Fraunces is free)
3. [ ] **Style the radio options as cards** with yellow selected state
4. [ ] **Add hard shadow to main card** (offset box-shadow)
5. [ ] **Make button chunky** with offset shadow and :active state
6. [ ] **Add confetti on submit** (one line of code with library)
7. [ ] **Inject personality into copy** — make it sound like Mags

---

## Implementation Notes

### Fonts to Import
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,700;9..144,800&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
```

### Tailwind Custom Config
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        mustard: {
          bright: '#FFD000',
          dark: '#C9A000',
          dijon: '#BB8C00',
        },
        brown: {
          dark: '#2D1810',
          medium: '#5C4033',
        },
        cream: {
          DEFAULT: '#FFF8E7',
          dark: '#F5E6C8',
        }
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'hard': '4px 4px 0 0 #2D1810',
        'hard-lg': '8px 8px 0 0 #2D1810',
        'hard-mustard': '8px 8px 0 0 #FFD000',
      }
    }
  }
}
```

---

## Summary

**Before:** Generic survey template that looks like every other form on the internet.

**After:** A memorable, personality-packed experience that feels like Mags made it herself. Bold colors, chunky elements, satisfying interactions, and copy that makes you smile.

The goal isn't perfection — it's character. Let it feel a little handmade, a little funky. That's the vibe.

---

*"Make it feel like a friend asked you to fill this out, not a corporation."*