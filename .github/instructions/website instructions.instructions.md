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
# TECH BASELINE (REPO-AWARE)

This repo uses Next.js 14 with the **Pages Router**.
- Routes live in `/pages` (e.g. pages/index.tsx, pages/servicios.tsx).
- Do NOT create new routes in `/app` unless explicitly asked.
- Do NOT add `'use client'` directives in components (only relevant for App Router).

Styling:
- Use **CSS Modules** for all new UI work.
- `styles/globals.css` exists for legacy/reset only.
- Do NOT introduce new global variables, animations, shadows, gradients, or design tokens in globals.
- Prefer keeping design decisions inside the local CSS Module of each component/section.

Project structure:
- Reusable UI components go in `/components`.
- Page-level composition stays in `/pages`.
- Do not create new folders or move files unless asked.

Change policy:
- Minimal diff. Do not refactor unrelated files.
- Do not change copy/content unless explicitly asked.
/* 
MOBILE-FIRST RULES:
- Desktop styles must remain untouched
- All mobile fixes go inside media queries
- No visual hacks (no scale, no magic numbers)
- Keep brutalist / editorial aesthetic
*/
We have inconsistent section widths on mobile: some sections are constrained (boxed) leaving white gutters, others are full width. 
Goal: ensure every section background spans full viewport width (100vw) and only the inner content is constrained via a shared container.
Do NOT use hacks like transform scale.
Prefer a consistent layout system: .section { width: 100%; } + .container { max-width; margin auto; padding; }.
Apply fixes mobile-first but do not break desktop.

