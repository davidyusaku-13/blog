export interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "overblogged",
    description: "A minimal, typography-focused technical blog built with Astro and deployed to Cloudflare Workers.",
    tech: ["Astro", "TypeScript", "Cloudflare Workers"],
    github: "https://github.com/yourusername/overblogged",
    live: "https://overblogged.dev",
    featured: true,
  },
  // Add more projects here
];
