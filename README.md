# Modern Personal Portfolio

A premium, interactive, and high-performance portfolio website built with **TanStack Start**, **React 19**, and **Framer Motion**. Designed for developers who want a sleek, modern, and highly-performant online presence.

## ✨ Features

- **Dynamic Hero Section**: A stunning entrance with smooth animations and a clear call-to-action.
- **Dynamic Project Case Studies**: Individual routing for every project with detailed breakdowns, challenges, and solutions.
- **Interactive Works Gallery**: Showcase your projects with high-quality screenshots and metadata.
- **Verified Certifications**: A dedicated section for professional credentials with interactive cards.
- **Skills Showcase**: A beautifully animated overview of your technical stack.
- **Client Testimonials**: Dynamic carousel to display feedback from collaborators and clients.
- **Custom UI Components**: Built with Radix UI and customized with "Claymorphism" aesthetics.
- **Responsive Design**: Flawless experience across mobile, tablet, and desktop devices.
- **Premium Interactivity**: Powered by Framer Motion for smooth transitions and hover effects.
- **Seamless Contact Form**: Integrated with **Web3Forms** for direct email delivery to `deewakarsinghraz@gmail.com`.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Framework**: [TanStack Start](https://tanstack.com/start) (Full-stack React framework)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query)

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

4. Build for production:
   ```bash
   bun run build
   # or
   npm run build
   ```

### 📧 Contact Form Configuration

The portfolio uses **Web3Forms** for email delivery. To receive messages in your inbox:

1. Get a free access key from [Web3Forms](https://web3forms.com/).
2. Update the `access_key` in `src/components/sections/Contact.tsx`.
3. (Optional) Set up a [Honeypot](https://docs.web3forms.com/honeypot) for spam protection.

## 📁 Project Structure

```text
src/
├── components/
│   ├── layout/      # Navbar, Footer, Preloader, CustomCursor
│   ├── sections/    # Hero, About, Skills, Projects, Certifications, etc.
│   └── ui/          # Reusable UI primitives
├── data/            # Centralized project and certification data
├── lib/             # Utility functions and motion variants
├── routes/          # TanStack Router page definitions ($projectId support)
└── styles.css       # Global styles and Tailwind v4 configuration
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Designed by Diwakar Singh Rajbanshi.
