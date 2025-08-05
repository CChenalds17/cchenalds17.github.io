'use client';

import { FadeParallax } from '@/components/motion/fade-parallax';

export default function Experience() {
  return (
    <div className="flex-1 relative pl-6 border-l border-muted-foreground/20">
      <FadeParallax direction="up" distance={80} className="text-2xl font-bold mb-8">Experience</FadeParallax>
      
      <div className="space-y-8">
        <div className="relative">
          <FadeParallax direction="up" distance={80} className="space-y-2">
            <h3 className="text-lg font-semibold">Research Assistant</h3>
            <p className="text-muted-foreground">Harvard Ability Lab</p>
            <p className="text-sm text-muted-foreground">2025 - Present</p>
            <FadeParallax direction="up" distance={20} className="list-disc list-inside text-muted-foreground space-y-1.5 mt-2">
              <li>Conducting robotics research under PI Patrick Slade</li>
              <li>Funded by Harvard's Generative AI Research Program</li>
              <li>Developing experimental protocols for robotic arm assistance in ADL tasks</li>
              <li>Implementing computer vision and motion tracking systems</li>
            </FadeParallax>
          </FadeParallax>
        </div>

        <div className="relative">
          <FadeParallax direction="up" distance={80} className="space-y-2">
            <h3 className="text-lg font-semibold">Software Engineering Intern</h3>
            <p className="text-muted-foreground">Meta</p>
            <p className="text-sm text-muted-foreground">Summer 2024</p>
            <FadeParallax direction="up" distance={20} className="list-disc list-inside text-muted-foreground space-y-1.5 mt-2">
              <li>Full-stack development with React and GraphQL</li>
              <li>Worked on internal tools team</li>
            </FadeParallax>
          </FadeParallax>
        </div>
      </div>
    </div>
  )
}
