'use client';

import { FadeParallax } from '@/components/motion/fade-parallax';
import { AnimatedBadge } from '@/components/animated-badge';
import { skillsData } from '@/data/skills';

export default function SkillsSection() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <FadeParallax direction="up" distance={60} end={75} className="text-center">
        <h2 className="text-2xl font-bold">Skills</h2>
      </FadeParallax>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category) => (
          <FadeParallax 
            key={category.title} 
            direction="up" 
            distance={60} 
            end={75}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">{category.title}</h3>
            <div className="flex flex-wrap gap-1">
              {category.skills.map((skill) => (
                <AnimatedBadge key={skill.name} className="cursor-default px-4">
                  {skill.name}
                </AnimatedBadge>
              ))}
            </div>
          </FadeParallax>
        ))}
      </div>
    </div>
  );
}
