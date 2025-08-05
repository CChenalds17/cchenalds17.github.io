'use client';

import Image from "next/image";
import { ExternalLink, FileText } from "lucide-react";
import { GitHubIcon } from "@/components/custom-icons";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { AnimatedBadge } from "@/components/animated-badge";
import { FadeParallax } from "@/components/motion/fade-parallax";
import { TypingEffect } from "@/components/motion/typing-effect";
import { Project } from "@/types/project";

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <main className="container mx-auto min-h-screen py-12 space-y-6 max-w-4xl mb-8">
      <div className="flex-row space-y-12 items-start">
        {/* Header */}
        <FadeParallax direction="up" distance={40} end={90} className="mb-6">
          <TypingEffect as="h1">{project.title}</TypingEffect>
          <div className="flex gap-1 flex-wrap mt-6">
            {project.tags.map((tag: string) => (
              <AnimatedBadge
                key={tag}
                size="xs"
                className="rounded-full px-2 cursor-default"
              >
                {tag}
              </AnimatedBadge>
            ))}
          </div>
        </FadeParallax>

        {/* Links */}
        {project.links && (
          <FadeParallax direction="up" distance={20} className="flex gap-4 flex-wrap" end={80}>
            {project.links.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button variant="outline" className="hover:cursor-pointer flex items-center gap-2">
                  <GitHubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </Button>
              </motion.a>
            )}
            {project.links.demo && (
              <motion.a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button variant="outline" className="hover:cursor-pointer flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>Demo</span>
                </Button>
              </motion.a>
            )}
            {project.links.paper && (
              <motion.a
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button variant="outline" className="hover:cursor-pointer flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Paper</span>
                </Button>
              </motion.a>
            )}
          </FadeParallax>
        )}

        {/* Cover Image */}
        <FadeParallax direction="up" distance={20} end={80} className="-mt-4">
          <Image
            src={project.coverImage}
            alt={project.title}
            width={1920}
            height={1080}
            className="w-full h-auto rounded-sm"
            priority
          />
        </FadeParallax>

        {/* Description */}
        <FadeParallax direction="up" distance={20} end={80}>
          <div className="whitespace-pre-line prose prose-zinc dark:prose-invert">{project.description}</div>
        </FadeParallax>

        {/* Additional Images */}
        <div className="space-y-12">
        {project.images.slice(1).map((image: string, index: number) => (
            <FadeParallax direction="up" distance={20} end={90} key={index}>
              <Image
                src={image}
                alt={`${project.title} image ${index + 1}`}
                width={1920}
                height={1080}
                className="w-full h-auto rounded-sm"
              />
            </FadeParallax>
          ))}
        </div>
        
        {/* Videos */}
        {project.videos && project.videos.length > 0 && (
          <FadeParallax direction="up" distance={20} end={90} className="space-y-6">
            <h2 className="text-2xl font-semibold">Videos</h2>
            {project.videos.map((video: string, index: number) => (
              <div key={index} className="relative aspect-video w-full overflow-hidden rounded-sm">
                <video
                  controls
                  className="w-full h-full"
                  src={video}
                />
              </div>
            ))}
          </FadeParallax>
        )}
      </div>
    </main>
  );
}
