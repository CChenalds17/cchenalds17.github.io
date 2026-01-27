'use client';

import { FadeParallax } from '@/components/motion/fade-parallax';

export default function Experience() {
  return (
    <div className="flex-1 relative pl-6 border-l border-muted-foreground/20">
      <FadeParallax direction="up" distance={80} end={75} className="text-2xl font-bold mb-8">Experience</FadeParallax>
      
      <div className="space-y-8">
        <div className="relative">
          <FadeParallax direction="up" distance={80} end={75} className="space-y-2">
            <h3 className="text-lg font-semibold">Undergraduate Researcher</h3>
            <p className="text-muted-foreground">Harvard Ability Lab</p>
            <p className="text-sm text-muted-foreground">2025</p>
            <FadeParallax direction="up" distance={20} end={75} className="list-disc list-inside text-muted-foreground space-y-1.5 mt-2">
              <li>Enabled human-in-the-loop experiments by prototyping stable wearable mounting system for supernumerary arm</li>
              <li>Designed task protocols varying complexity & motion to evaluate system behavior under realistic human movement</li>
              <li>Collected 10,000+ frames of egocentric video & actuator states to support VLA training & control analysis</li>
            </FadeParallax>
          </FadeParallax>
        </div>
      </div>
    </div>
  )
}
