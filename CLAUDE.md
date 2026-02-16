# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SEMGOKU Portfolio - Professional SEM/PPC specialist portfolio website built with Next.js 16, showcasing multi-platform advertising expertise (Google Ads, Meta Ads, Microsoft Advertising) with unique focus on product feed optimization.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16.1.6 (App Router, React Server Components)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 (new CSS-first architecture)
- **UI Components**: shadcn/ui with Radix UI primitives
- **Charts**: Recharts 3.7
- **Icons**: Lucide React
- **Font**: Inter (via next/font)

### Key Architectural Decisions

**Next.js App Router** (`app/` directory):
- `app/layout.tsx` - Root layout with Inter font, metadata, dark mode enabled by default
- `app/page.tsx` - Main portfolio page (client component due to interactive calculator)
- `app/globals.css` - Tailwind v4 imports with custom color variables for dark theme
- `app/icon.svg` - Favicon (SEMGOKU sygnet/logo)

**Tailwind CSS v4**:
- Uses new `@import "tailwindcss"` syntax
- CSS variables defined in `:root` and `.dark` for theming
- Custom color palette with orange accent (`oklch(0.68 0.20 35)`) matching brand
- No `tailwind.config.js` - configuration via CSS

**shadcn/ui Components**:
- Located in `components/ui/`
- Currently installed: Button, Card, Slider
- Use `npx shadcn@latest add [component]` to add new components
- Configured with "new-york" style, neutral base color, CSS variables enabled

## Project Structure

```
app/
├── layout.tsx          # Root layout with Inter font
├── page.tsx            # Main portfolio page (interactive calculator, charts)
├── globals.css         # Tailwind v4 + dark theme colors
└── icon.svg            # Favicon

components/ui/          # shadcn/ui components
lib/utils.ts           # cn() utility for className merging
public/                # Static assets (SVG logos)
```

## Design System

**Color Scheme** (Premium Dark):
- Primary: Orange/coral `oklch(0.68 0.20 35)` - matches SEMGOKU brand
- Background: Very dark `oklch(0.06 0 0)`
- Cards: Dark gray `oklch(0.12 0 0)`
- Text: Light `oklch(0.98 0 0)`

**Brand Assets**:
- `semgoku logo poziomo białe.svg` - Horizontal logo (white text) for header
- `semgoku logo kwadrat białe.svg` - Square logo for footer
- `semgoku sygnet.svg` - Logo mark only (used as favicon)

**Typography**:
- Font family: Inter (loaded via next/font in layout.tsx)
- Applied via `--font-inter` CSS variable

## Key Features

### Interactive ROAS Calculator
- Uses React state hooks and shadcn/ui Slider components
- Real-time calculation of potential revenue gains
- Located in main page.tsx

### Charts (Recharts)
- Performance comparison chart (LineChart)
- ROAS by platform chart (BarChart)
- Styled with HSL color variables for theme consistency

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Fixed header with backdrop blur
- Grid layouts for cards and stats

## Adding New Components

To add shadcn/ui components:
```bash
npx shadcn@latest add [component-name]
```

Components are automatically added to `components/ui/` with proper theming.

## Deployment

Configured for Vercel deployment (Next.js native platform):
- Zero-config deployment
- Automatic HTTPS
- Edge network CDN
- Preview deployments for branches

Simply connect GitHub repository to Vercel - no additional configuration needed.

## Important Notes

- **Dark mode is enabled by default** via `className="dark"` on `<html>` element
- **Client components** must use `"use client"` directive (e.g., page.tsx for interactive features)
- **Tailwind v4** uses CSS-first approach - no JS config file
- **Image paths** reference `/public/` directly (e.g., `/semgoku logo poziomo białe.svg`)
- **Polish language** - content is in Polish for target audience
