import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ExternalLink, FileText } from "lucide-react";
import { GitHubIcon } from "@/components/custom-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto min-h-screen py-12 space-y-8 max-w-4xl">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Links */}
      {project.links && (
        <div className="flex gap-4">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Button variant="outline" className="hover:cursor-pointer">
                <GitHubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </Button>
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Button variant="outline" className="hover:cursor-pointer">
                <ExternalLink className="h-4 w-4" />
                <span>Demo</span>
              </Button>
            </a>
          )}
          {project.links.paper && (
            <a
              href={project.links.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Button variant="outline" className="hover:cursor-pointer">
                <FileText className="h-4 w-4" />
                <span>Paper</span>
              </Button>
            </a>
          )}
        </div>
      )}

      {/* Cover Image */}
      <div className="relative w-full overflow-hidden rounded-lg">
        <Image
          src={project.coverImage}
          alt={project.title}
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Description */}
      <div className="relative w-full">
        <div className="whitespace-pre-line">{project.description}</div>
      </div>

      {/* Additional Images */}
      <div className="space-y-8">
        {project.images.slice(1).map((image, index) => (
          <div key={index} className="space-y-4">
            <div className="relative w-full overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 2}`}
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Videos */}
      {project.videos && project.videos.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Videos</h2>
          {project.videos.map((video, index) => (
            <div key={index} className="relative aspect-video w-full overflow-hidden rounded-lg">
              <video
                controls
                className="w-full h-full"
                src={video}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
