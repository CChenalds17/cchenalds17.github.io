import { projects } from "@/data/projects";
import ProjectsContent from "./projects-content";

export default function ProjectsPage() {
  return <ProjectsContent projects={projects} />;
}
