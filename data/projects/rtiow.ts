import { Project } from "@/types/project";

export const rtiow: Project = 
{
  id: "rtiow",
  title: "Ray Tracer",
  shortDescription: "Ray tracer in C++",
  description: `
  Implemented a physically based ray tracer in C++ following Peter Shirley's \
  Ray Tracing in One Weekend. Built core rendering features including ray-object intersection, \
  recursive light scattering, diffuse and metallic materials, anti-aliasing, and depth-of-field camera simulation. \
  Optimized image generation through parallel computation and modular scene configuration. \
  Produced photorealistic renders from first principles without external graphics libraries.
  `,
  coverImage: "/projects/rtiow/cover.png",
  tags: ["C++"],
  links: {
    github: "https://github.com/cchenalds17/Ray-Tracing-IOW",
  }
}