import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "robotic-arm-adl",
    title: "Robotic Arm ADL Assistant",
    shortDescription: "Developing an assistive robotic arm system for Activities of Daily Living (ADL) tasks.",
    description: `Research project at Harvard Ability Lab focusing on robotic assistance for daily living tasks. 
    The system uses computer vision and motion tracking to help users with tasks like picking up objects, 
    stabilizing items, and assisting with hygiene activities.
    
    Key features:
    - OpenCap integration for motion tracking
    - Computer vision-based object detection
    - Task-specific robotic control algorithms
    - Comprehensive user evaluation system`,
    coverImage: "/projects/robotic-arm/cover.jpg",
    images: [
      "/projects/robotic-arm/cover.jpg",
      "/projects/robotic-arm/setup.png",
      "/projects/robotic-arm/interface.JPG"
    ],
    videos: [
      "/projects/robotic-arm/demo.mp4"
    ],
    tags: ["Robotics", "Computer Vision", "Research"],
    links: {
      paper: "#"
    }
  },
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
    - Timeline-based experience section`,
    coverImage: "/projects/website/cover.png",
    images: [
      "/projects/website/cover.png",
      "/projects/website/dark-mode.png",
      "/projects/website/mobile.png"
    ],
    tags: ["Web Development", "Next.js", "TypeScript", "UI/UX", "Design", "Animation", "Motion", "Tailwind CSS", "Shadcn UI", "Responsive", "Dark/Light Mode", "Carousel", "Timeline", "Experience Section", "Project Showcase"],
    links: {
      github: "https://github.com/cchenalds17/homepage",
      demo: "/"
    }
  },
  {
    id: "placeholder",
    title: "Placeholder",
    shortDescription: "placeholder",
    description: "Placeholder description",
    coverImage: "/projects/website/cover.png",
    images: [
      "/projects/website/cover.png"
    ],
    tags: ["Placeholder"]
  }
];
