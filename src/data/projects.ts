export type Category = "fullstack" | "frontend" | "open-source" | "experiment";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  category: Category;
  year: number;
  tint: string;
  role: string;
  challenge: string;
  solution: string;
  links: {
    live?: string;
    code?: string;
  };
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: "ecommerce",
    title: "Ecommerce Platform",
    description:
      "Full-stack ecommerce platform — built with Django, SQLite, and Khali for a seamless shopping experience.",
    longDescription:
      "A comprehensive e-commerce solution designed to provide a seamless shopping experience for users while offering robust management tools for administrators. The platform focuses on performance, security, and a modern user interface.",
    stack: ["Django", "React", "SQLite", "Tailwind CSS", "Khali"],
    category: "fullstack",
    year: 2024,
    tint: "#4ECDC4",
    role: "Lead Full-Stack Developer",
    challenge:
      "Developing a real-time inventory management system that could handle high concurrency without data inconsistency, especially during peak sales periods.",
    solution:
      "Implemented a robust locking mechanism at the database level and optimized the Django ORM queries. Integrated a caching layer with Redis to speed up product catalog lookups.",
    links: {
      live: "https://example-shop.com",
      code: "https://github.com/DiwakarSR05/ecommerce",
    },
    screenshots: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1600",
    ],
  },
  {
    id: "awesome-wallpaper",
    title: "Awesome Wallpaper",
    description:
      "Open-source wallpaper gallery — built with React, Storybook, and Radix UI for a seamless user experience.",
    longDescription:
      "A curated gallery of high-resolution wallpapers, focused on minimalist design and lightning-fast performance. Users can browse, download, and contribute to the growing collection of digital art.",
    stack: ["React", "Storybook", "Radix UI", "Framer Motion"],
    category: "experiment",
    year: 2025,
    tint: "#C8FF57",
    role: "Frontend Architect",
    challenge:
      "Handling thousands of high-resolution images while maintaining a smooth scrolling experience and low initial bundle size.",
    solution:
      "Utilized progressive image loading, lazy loading techniques, and intersection observers. Built a custom component library with Radix UI to ensure accessibility and consistent styling.",
    links: {
      live: "https://wallpapers.dsr.dev",
      code: "https://github.com/DiwakarSR05/awesome-wallpaper",
    },
    screenshots: [
      "https://images.unsplash.com/photo-1493723843671-1d655e8d717f?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
    ],
  },
  {
    id: "todo",
    title: "Todo App",
    description:
      "Real-time collaborative todo app — built with React, WebSockets, and Redis for state synchronization.",
    longDescription:
      "A powerful task management application that allows multiple users to collaborate on lists in real-time. It features offline support, push notifications, and detailed productivity analytics.",
    stack: ["React", "WebSockets", "Redis", "Recharts", "Node.js"],
    category: "frontend",
    year: 2025,
    tint: "#FF6B35",
    role: "Product Engineer",
    challenge:
      "Synchronizing state across multiple clients instantly while handling edge cases like network disconnection and conflict resolution.",
    solution:
      "Leveraged Socket.io for real-time updates and implemented an optimistic UI strategy. Used an Event-Driven architecture to track and sync changes efficiently.",
    links: {
      live: "https://tasks.dsr.dev",
      code: "https://github.com/DiwakarSR05/sync-todo",
    },
    screenshots: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1600",
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio V.06",
    description:
      "Personal portfolio website — showcasing projects, certifications, and high-performance React interactions.",
    longDescription:
      "The website you are currently viewing. A high-performance personal branding tool built to showcase a career in full-stack development and design engineering.",
    stack: ["TanStack Start", "React 19", "Tailwind CSS v4", "Framer Motion"],
    category: "open-source",
    year: 2026,
    tint: "#B388FF",
    role: "Designer & Developer",
    challenge:
      "Building a site that feels premium and alive with animations while maintaining a 100/100 Lighthouse score for performance and SEO.",
    solution:
      "Optimized all assets, used modern CSS variables for thin styling, and leveraged TanStack Start's server-side rendering capabilities for instant page loads.",
    links: {
      code: "https://github.com/DiwakarSR05/portfolio",
    },
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1600",
    ],
  },
];
