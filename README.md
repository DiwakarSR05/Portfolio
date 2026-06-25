# Modern Personal Portfolio

A premium, interactive, and high-performance portfolio website built with **TanStack Start**, **React 19**, and **Framer Motion**. Designed with a "Design Engineer" mindset, focusing on technical excellence, smooth interactivity, and premium aesthetics.

## ✨ Key Features

- **Interactive Grid Scan & Face Tracking**: A sophisticated background effect using **Three.js** and **Face-API** that responds to mouse movement and webcam-based face detection (optional).
- **Claymorphic & Glassmorphic UI**: A modern design system utilizing subtle depth, glass effects, and custom shadows for a premium "tactile" feel.
- **Dynamic Project Case Studies**: Individual routing for every project with detailed breakdowns, automated screenshot galleries, and category-specific tints.
- **Micro-Interactions**: Magnetic buttons, scramble text effects, and custom pulse animations powered by **Framer Motion 12**.
- **Performance Optimized**: Leveraging **TanStack Start** for server-side capabilities and smooth client-side transitions.
- **Responsive & Accessible**: Flawless experience across all devices with semantic HTML and Radix UI primitives.

## 🛠️ Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (Full-stack React with TanStack Router/Query)
- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Visuals & 3D**: [Three.js](https://threejs.org/), [OGL](https://github.com/o-gl/ogl), [Postprocessing](https://pmndrs.github.io/postprocessing/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **AI/Interactivity**: [Face-API.js](https://github.com/justadudewhohacks/face-api.js) (Face tracking interactivity)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Components**: [Radix UI](https://www.radix-ui.com/) primitives

## 🏗️ Core Layout Components

The project's layout is modularized into specialized components located in `src/components/layout/`:

| Component          | Description                                                                    |
| :----------------- | :----------------------------------------------------------------------------- |
| **Navbar**         | Sticky glassmorphic navigation bar with smooth-scroll integration to sections. |
| **Footer**         | Global footer featuring dynamic social links and site metadata.                |
| **Preloader**      | A custom entrance experience with branding and state synchronization.          |
| **CustomCursor**   | An interactive magnetic cursor that changes based on hovered elements.         |
| **ScrollProgress** | A top-level progress bar indicating current scroll depth.                      |
| **HeroBackground** | Houses the `GridScan` 3D elements for a high-impact landing page.              |
| **ParticleCanvas** | Canvas-based ambient particle effects for background depth.                    |

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (Recommended) or [Node.js](https://nodejs.org/) (v18+)
- npm or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-portfolio.git
   cd your-portfolio
   ```

2. Install dependencies:

   ```bash
   bun install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   bun dev
   # or
   npm run dev
   ```

## 📁 Project Structure

```text
src/
├── components/
│   ├── layout/      # Global layout components (Navbar, Footer, Cursor, etc.)
│   ├── sections/    # Modular page sections (Hero, About, Projects, etc.)
│   └── ui/          # Atomic UI primitives and 3D/GL components like GridScan
├── data/            # Centralized project, certification, and experience data
├── lib/             # Utilities, motion variants, and error reporting
├── routes/          # TanStack Router definitions including case study routes
└── styles.css       # Global CSS and Tailwind v4 configuration
```

## 📧 Contact Form Configuration

The portfolio uses **Web3Forms** for email delivery. To receive messages in your inbox:

1. Get a free access key from [Web3Forms](https://web3forms.com/).
2. Update the `access_key` in `src/components/sections/Contact.tsx`.

## 📄 License

This project is licensed under the MIT License.

---

Designed and Developed by **Diwakar Singh Rajbanshi**.
