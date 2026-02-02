'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Project } from "@/types/project";
import { AnimatedBadge } from "@/components/animated-badge";
import { useState, useEffect } from "react";
import { TypingEffect } from "@/components/motion/typing-effect";
import { FadeParallax } from "@/components/motion/fade-parallax";

interface ProjectsContentProps {
  projects: Project[];
}

export default function ProjectsContent({ projects }: ProjectsContentProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    // set initial width
    setScreenWidth(window.innerWidth);

    // update on resize
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (screenWidth === null) {
    // SSR render (before client hydration)
    return null;
  }

  return (
    <main className="container mx-auto min-h-screen py-8 space-y-12 max-w-7xl px-10">
      <div className="flex-row space-y-12 items-start">
        <FadeParallax direction="up" distance={40} end={90}>
          <TypingEffect as="h1">
            Projects
          </TypingEffect>
        </FadeParallax>

        {/* Desktop */}
        { screenWidth >= 768 && (
          <div className="grid grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="block h-full"
                >
                  <motion.div 
                    className="rounded-lg bg-gradient-to-br from-muted/40 via-muted/50 to-muted/40 p-5 h-full flex flex-col overflow-hidden"
                    animate={{
                      y: hoveredProject === project.id ? -5 : 0,
                      boxShadow: hoveredProject === project.id 
                        ? "0 10px 30px -15px rgba(0, 0, 0, 0.15)" 
                        : "0 0 0 rgba(0, 0, 0, 0)",
                      backgroundColor: hoveredProject === project.id
                        ? "var(--muted)" 
                        : "transparent"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    whileTap={{ y: 2.5 }}
                  >
                    <motion.h2 
                      className="text-lg font-semibold mb-3 line-clamp-1"
                    >
                      {project.title}
                    </motion.h2>
                    
                    <div className="mt-1 flex-1">
                      <div className="overflow-hidden rounded-lg relative">
                        <div className="relative aspect-video">
                          <Image
                            src={typeof project.coverImage === 'string' ? project.coverImage : project.coverImage.url}
                            alt={project.title}
                            fill
                            className="object-cover transition-all duration-300"
                          />
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <p className="text-sm text-muted-foreground mb-3">
                          {project.shortDescription}
                        </p>
                        
                        <div className="flex gap-1 flex-wrap">
                          {project.tags.map((tag: string) => (
                            <AnimatedBadge
                              key={tag}
                              size="xs"
                              className="rounded-full px-2"
                            >
                              {tag}
                            </AnimatedBadge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Mobile */}
        { screenWidth < 768 && projects.map((project) => (
          <div 
            key={project.id}
            className="grid grid-cols-1 gap-8"
          >
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Link
                href={`/projects/${project.id}`}
                className="block h-full"
              >
                <motion.div 
                  className="rounded-lg bg-gradient-to-br from-muted/40 via-muted/50 to-muted/40 p-5 h-full flex flex-col overflow-hidden"
                  animate={{
                    y: hoveredProject === project.id ? -5 : 0,
                    boxShadow: hoveredProject === project.id 
                      ? "0 10px 30px -15px rgba(0, 0, 0, 0.15)" 
                      : "0 0 0 rgba(0, 0, 0, 0)",
                    backgroundColor: hoveredProject === project.id
                      ? "var(--muted)" 
                      : "transparent"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  whileTap={{ y: 2.5 }}
                >
                  <motion.h2 
                    className="text-lg font-semibold mb-3 line-clamp-1"
                  >
                    {project.title}
                  </motion.h2>
                  
                  <div className="mt-1 flex-1">
                    <div className="overflow-hidden rounded-lg relative">
                      <div className="relative aspect-video">
                        <Image
                          src={typeof project.coverImage === 'string' ? project.coverImage : project.coverImage.url}
                          alt={project.title}
                          fill
                          className="object-cover transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <p className="text-sm text-muted-foreground mb-3">
                        {project.shortDescription}
                      </p>
                      
                      <div className="flex gap-1 flex-wrap">
                        {project.tags.map((tag: string) => (
                          <AnimatedBadge
                            key={tag}
                            size="xs"
                            className="rounded-full px-2"
                          >
                            {tag}
                          </AnimatedBadge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </main>
  );
}
