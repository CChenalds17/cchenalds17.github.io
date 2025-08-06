import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectContent from "./project-content";

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }
  
  return <ProjectContent project={project} />;
}
