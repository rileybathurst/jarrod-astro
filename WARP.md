# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a promotional website for Jarrod Semmens Window Cleaning built with Astro as a static site. It's a TypeScript-based Astro project focused on presenting window cleaning services in the Tahoe City area.

## Development Commands

### Core Development
- `npm run dev` or `npm start` - Start development server
- `npm run build` - Build for production (includes type checking)
- `npm run preview` - Preview production build locally
- `astro check` - Run TypeScript type checking

### Package Management
- `npm install` - Install dependencies
- `npm update` - Update dependencies

## Architecture & Code Structure

### Project Structure
- `src/pages/` - Astro pages (routes): index, about, 404, screens, washing
- `src/components/` - Reusable Astro components and React/TSX components
- `src/images/` - SVG components for illustrations (logo, squeegee, cleaner, etc.)
- `src/styles/` - Modular CSS files organized by concern
- `public/` - Static assets served directly

### Key Patterns

**Component Architecture:**
- Main layout components: `header.astro`, `footer.astro`, `menu-list.astro`
- SVG graphics are componentized in `src/images/` as `.astro` files
- Metadata is centralized in `src/components/meta.tsx` as a TypeScript module
- Custom web components using vanilla JavaScript (see menu-button in header.astro)

**Styling System:**
- Modular CSS approach with separate files for different concerns:
  - `variables.css` - CSS custom properties
  - `typography.css` - Font and text styling
  - `layout.css` - Layout and positioning
  - `color.css` - Color schemes
  - `media.css` - Media queries and responsive design
  - `a11y.css` - Accessibility enhancements
  - `visibility.css` - Show/hide utilities

**Data Management:**
- Business information (phone, address, email) centralized in `meta.tsx`
- Phone number formatting handled programmatically
- External images hosted on S3 (jarrodsemmenswindowcleaning.s3.us-west-1.amazonaws.com)

**Navigation:**
- Progressive enhancement approach with menu-button web component
- Mobile-first responsive navigation
- Accessibility-focused with proper ARIA attributes

### TypeScript Configuration
- Extends Astro's strict TypeScript configuration
- Type checking integrated into build process

### Key Business Logic
- Phone number formatting and display
- Multiple address handling (main address and screen facility)
- Image optimization through external CDN
- SEO-focused meta data structure
