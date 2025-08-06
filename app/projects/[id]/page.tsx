import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectContent from "./project-content";

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }
  
  return <ProjectContent project={project} />;
}
