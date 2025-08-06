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
import { motion } from "motion/react";
import { TypingEffect } from "./motion/typing-effect";
import { AnimatedBadge } from "./animated-badge";
import { useState, useRef } from "react";
import Autoplay from 'embla-carousel-autoplay';

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const router = useRouter();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Create autoplay plugin with smooth, continuous scrolling
  // The plugin will be recreated each time the component renders,
  // but Embla only uses the initial instance
  const autoplayOptions = {
    delay: 6000,              // Time between auto-scrolls (ms)
    stopOnInteraction: true,  // Pause on user interaction
    stopOnMouseEnter: true,   // Pause on mouse hover
    playOnInit: true,         // Start playing immediately
    rootNode: (emblaRoot: any) => emblaRoot.parentElement, // Required for stopOnMouseEnter
  };
  
  const autoplayPlugin = useRef(
    Autoplay(autoplayOptions)
  );

  const MotionCarouselPrevious = motion(CarouselPrevious);
  const MotionCarouselNext = motion(CarouselNext);

  const handleLinkClick = (href: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push(href);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      <div className="flex justify-center">
        <motion.div
          className="inline-block"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <TypingEffect 
            as="h2" 
            className="hover:cursor-pointer" 
            onClick={() => handleLinkClick('/projects')}
          >
            Featured Projects
          </TypingEffect>
        </motion.div>
      </div>

      <Carousel 
        className="w-full" 
        opts={{
          loop: true,
          align: "center",
          dragFree: true,
          slidesToScroll: 1,
          duration: 80
        }}
        plugins={[autoplayPlugin.current]}
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id} className="md:basis-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="h-full"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Link 
                  href={`/projects/${project.id}`} 
                  onClick={() => handleLinkClick(`/projects/${project.id}`)}
                  className="block h-full"
                >
                  <motion.div 
                    className="rounded-lg bg-gradient-to-br from-muted/40 via-muted/50 to-muted/40 p-5 h-full flex flex-col group overflow-hidden"
                    animate={{
                      y: hoveredProject === project.id ? -5 : 0,
                      boxShadow: hoveredProject === project.id 
                        ? "0 10px 30px -15px rgba(0, 0, 0, 0.15)" 
                        : "0 0 0 rgba(0, 0, 0, 0)",
                      backgroundColor: hoveredProject === project.id
                        ? "var(--muted)"
                        : "transparent"
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }}
                    whileTap={{ y: 2.5 }}
                  >
                    <motion.h3 
                      className="text-lg font-semibold line-clamp-1"
                    >
                      {project.title}
                    </motion.h3>
                    
                    <div className="mt-3 flex-1">
                      <div className="overflow-hidden rounded-lg relative">
                        <div className="relative aspect-video">
                          <Image
                            src={typeof project.coverImage === 'string' ? project.coverImage : project.coverImage.url}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                          <motion.div 
                            className="absolute inset-0 bg-black/70 flex items-center justify-center"
                            animate={{
                              opacity: hoveredProject === project.id ? 1 : 0
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.p 
                              className="text-white/95 text-sm p-4 text-center"
                              animate={{
                                y: hoveredProject === project.id ? 0 : 10,
                                opacity: hoveredProject === project.id ? 1 : 0
                              }}
                              transition={{ delay: 0.1, duration: 0.2 }}
                            >
                              {project.shortDescription}
                            </motion.p>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-3 min-h-[2.5rem] items-center overflow-hidden">
                      <div className="flex items-center overflow-hidden">
                        {project.tags.slice(0, 2).map((tag) => (
                          <AnimatedBadge
                            key={tag}
                            size="xs"
                            className="rounded-full px-2"
                          >
                            {tag}
                          </AnimatedBadge>
                        ))}
                        {project.tags.length > 2 && (
                          <AnimatedBadge
                            size="xs"
                            className="rounded-full px-2"
                          >
                            +{project.tags.length - 2} more
                          </AnimatedBadge>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <MotionCarouselPrevious 
          className="bg-primary/10 hover:bg-primary/20 border-none hover:cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
        
        <MotionCarouselNext 
          className="bg-primary/10 hover:bg-primary/20 border-none hover:cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
      </Carousel>
    </div>
  );
}
