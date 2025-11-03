import { Project } from "@/types/project";

export const personalWebsite: Project = 
{
  id: "personal-website",
  title: "Personal Website",
  shortDescription: "A clean, modern personal website built with Next.js and shadcn/ui.",
  description: `Modern, responsive personal website showcasing my work and experience. 
  Built with Next.js 13, TypeScript, and shadcn/ui components.
  
  Features:
  - Clean, minimal design
  - Dark/light mode support
  - Responsive layout
  - Project showcase carousel
  - Scroll-based animations`,
  coverImage: "/projects/personal-website/cover.png",
  images: [
    {
      url: "/projects/personal-website/dark-mode.png",
      caption: "Dark mode version with contrast optimized for low-light viewing"
    },
  ],
  tags: ["Web Development", "Next.js", "TypeScript"],
  links: {
    github: "https://github.com/cchenalds17/homepage",
    demo: "/"
  }
}