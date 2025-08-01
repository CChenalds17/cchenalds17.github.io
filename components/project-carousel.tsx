'use client'

import { Project } from "@/types/project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push(href);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <div className="flex justify-center">
        <Button
          onClick={() => handleLinkClick('/projects')}
          className="p-0 hover:cursor-pointer hover:bg-transparent hover:scale-105 transition-transform"
          variant="ghost"
        >
          <h2 className="text-2xl font-bold text-center">
            Featured Projects
          </h2>
        </Button>
      </div>

      <Carousel className="w-full px-4">
        <CarouselContent className="-ml-4">
          {projects.map((project) => (
            <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <Link 
                href={`/projects/${project.id}`} 
                onClick={() => handleLinkClick(`/projects/${project.id}`)}
                className="block h-full transform transition-all hover:scale-[1.02]"
              >
                <div className="rounded-lg bg-gradient-to-br from-muted/40 via-muted/50 to-muted/40 p-5 hover:shadow-md transition-all hover:from-muted/50 hover:via-muted/60 hover:to-muted/50 h-full flex flex-col group overflow-hidden">
                  <h3 className="text-lg font-semibold line-clamp-1">{project.title}</h3>
                  <div className="mt-3 flex-1">
                    <div className="overflow-hidden rounded-lg relative">
                      <div className="relative aspect-video">
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-[1.05]"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <p className="text-white/90 text-sm p-4 text-center">{project.shortDescription}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-3 min-h-[3.5rem] items-center">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
