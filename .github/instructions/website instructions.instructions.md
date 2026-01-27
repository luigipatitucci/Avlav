---
applyTo: '**'
---
You are working on a Next.js + TypeScript website for a creative cooperative.

Design system rules:
- Visual style is brutalist, editorial, minimal, high contrast
- This is NOT a corporate or SaaS website

Colors:
- Background: #212323
- Primary text: #E7ECEF
- Accent (rare): #162DFF
- Detail accent (very rare): #F62DAE

Typography:
- Titles: Rajdhani Bold (uppercase, strong hierarchy)
- Highlights: Rajdhani Medium (can be rotated 9° or 350°)
- Body text: Inter Regular (always horizontal)

Layout rules:
- Large spacing
- Few elements
- Text is a design element
- Prefer editorial layouts
- No cards
- No shadows
- No gradients
- No rounded UI
- No visual noise

Graphic rules:
- Titles may be slightly rotated
- Use diagonals (169° / 190°) for backgrounds if needed
- Circles only for extra info or callouts
- Logo only in black or gray

Tech rules:
- Use CSS Modules only
- No inline styles
- No global CSS unless explicitly asked
- Keep components simple and readable

When refactoring:
- Improve hierarchy, spacing and rhythm
- Do not change content, only structure and styles

Important:
- Do not introduce new UI patterns
- Do not add animations unless explicitly requested
- Do not add colors outside the defined palette
- Do not add external UI libraries
- Prefer refactoring over rewriting

# GLOBAL DESIGN SYSTEM (MANDATORY)

You are working on a Next.js + TypeScript website for a creative cooperative.

Goal:
Build a strong brutalist / editorial website with identity.
This is NOT a SaaS or corporate website.

Core principles:
- Full-width sections (no boxed layouts)
- Inner container for content
- Parallax background (fixed image) with content flowing above
- Strong typography hierarchy
- Editorial rhythm and spacing
- Minimal UI, maximum clarity

Design rules:
1. NO cards
2. NO shadows
3. NO gradients
4. NO rounded corners
5. NO glassmorphism or blur
6. Use solid borders (2px / 3px) when needed
7. Use large spacing (editorial feeling)
8. Prefer text and layout over decorative UI
9. Avoid “container inside container” layouts
10. Always full-width section + inner container

Colors:
- Background: #212323
- Primary text: #E7ECEF
- Accent: #162DFF (use rarely)
- Rare accent: #F62DAE (very rare, detail only)

Typography:
- Headings: Rajdhani, uppercase, strong hierarchy
- Body: Inter, normal reading flow
- Text can be a design element (editorial)

Layout:
- Prefer 2-column editorial layouts
- Use horizontal lines (1–2px) as separators
- Use numbers (01, 02, 03) as visual anchors
- Use asymmetry intentionally

Behavior:
- Do not change content text unless asked
- Do not add animations unless explicitly requested
- If unsure, choose the most minimal brutalist option
