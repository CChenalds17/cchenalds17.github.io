import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto min-h-screen py-12 space-y-24 max-w-7xl">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="group"
          >
            <div className="overflow-hidden rounded-lg">
              <div className="relative aspect-video">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-muted/40">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-muted-foreground">{project.shortDescription}</p>
                <div className="flex gap-2 flex-wrap mt-3">
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
