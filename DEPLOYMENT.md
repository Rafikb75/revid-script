# AI Video Toolkit — Deployment & Architecture Guide

## Overview
**AI Video Toolkit** is an ultra-lightweight, high-performance Micro-SaaS application and creator benchmark directory. It features a dual-runtime architecture:
1. **Google Apps Script (HTMLService) Native**: Zero hosting costs, runs directly inside Google Workspace infrastructure.
2. **Client-First Static / Web App**: Self-contained Vanilla HTML5 / Modern CSS / ES6+ JavaScript, ready for instant deployment on GitHub Pages, Cloudflare Pages, Netlify, or local previews.

---

## Directory Structure
- [Code.gs](file:///c:/Users/Rafik/Downloads/ai%20viveo/Code.gs): Server-side router, `doGet(e)` request handler, API endpoint compiler, and sub-template inclusion.
- [Config.gs](file:///c:/Users/Rafik/Downloads/ai%20viveo/Config.gs): Global application configuration, taxonomy categories, benchmark criteria, and partner/affiliate links.
- [Data.gs](file:///c:/Users/Rafik/Downloads/ai%20viveo/Data.gs): Structured database of 8 verified AI video tools with benchmark metrics, specs, pros/cons, and workflow matrices.
- [SEO.gs](file:///c:/Users/Rafik/Downloads/ai%20viveo/SEO.gs): Generative Engine Optimization (GEO) structured data generators (`SoftwareApplication`, `Review`, `HowTo`, `FAQPage` JSON-LD).
- [Styles.html](file:///c:/Users/Rafik/Downloads/ai%20viveo/Styles.html): Modern dark-mode glassmorphism CSS design system with custom properties and responsive mobile breakpoints.
- [Scripts.html](file:///c:/Users/Rafik/Downloads/ai%20viveo/Scripts.html): Client controller for live search, category filtering, ROI calculator, and clipboard utilities.
- [Home.html](file:///c:/Users/Rafik/Downloads/ai%20viveo/Home.html): Overview landing page with benchmark matrix, Revid AI spotlight, ROI calculator, and workflow blueprints.
- [Tools.html](file:///c:/Users/Rafik/Downloads/ai%20viveo/Tools.html): Full directory and filterable benchmark comparator table.
- [ToolDetails.html](file:///c:/Users/Rafik/Downloads/ai%20viveo/ToolDetails.html): Universal deep-dive scorecard template for individual tools.
- [Revid.html](file:///c:/Users/Rafik/Downloads/ai%20viveo/Revid.html): In-depth, non-spammy authoritative review of Revid AI with architecture breakdown, head-to-head comparisons, and verified promo code.
- [index.html](file:///c:/Users/Rafik/Downloads/ai%20viveo/index.html): Standalone zero-build runner for local browsers and static CDN hosting.

---

## Deployment Option A: Google Apps Script (HTMLService)
1. Go to [script.google.com](https://script.google.com) and create a **New Project**.
2. Rename the project to `AI Video Toolkit`.
3. In the Apps Script editor:
   - Create 4 Script files (`.gs`): `Code.gs`, `Config.gs`, `Data.gs`, `SEO.gs`. Paste the respective code.
   - Create 6 HTML files (`.html`): `Styles.html`, `Scripts.html`, `Home.html`, `Tools.html`, `ToolDetails.html`, `Revid.html`. Paste the respective code.
4. Click **Deploy** -> **New Deployment**.
5. Select type **Web app**.
   - **Execute as:** `Me`
   - **Who has access:** `Anyone`
6. Click **Deploy** and copy your live Web App URL.

### Web App Query Routes:
- `?page=home` (Default overview & benchmarks)
- `?page=tools` (Full directory & filter)
- `?page=tools&cat=short-form` (Filtered by category)
- `?page=revid` (Revid AI in-depth benchmark)
- `?page=tool&tool=runway-gen3` (Tool specification scorecard)
- `?api=tools` (JSON API of all verified tools)
- `?api=tool&id=revid-ai` (JSON API for specific tool)

---

## Deployment Option B: Static Web Hosting (Cloudflare Pages, Netlify, GitHub Pages)
- Simply deploy the project folder.
- [index.html](file:///c:/Users/Rafik/Downloads/ai%20viveo/index.html) operates as the root SPA runner, seamlessly handling dynamic views, search filtering, and the ROI calculator without any build tools (`npm`, `webpack`, `vite`) required!
