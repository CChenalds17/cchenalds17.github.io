'use client';

import { FadeParallax } from '@/components/motion/fade-parallax';

export default function Education() {
  return (
    <div className="flex-1 relative pl-6 border-l border-muted-foreground/20">
      <FadeParallax direction="up" distance={80} end={75} className="text-2xl font-bold mb-8">Education</FadeParallax>
      
      <div className="space-y-8">
        <div className="relative">
          <FadeParallax direction="up" distance={80} end={75} className="space-y-2">
            <h3 className="text-lg font-semibold">Harvard University</h3>
            <p className="text-muted-foreground font-semibold">Bachelor of Science in Electrical Engineering</p>
            <p className='text-muted-foreground'>Minor in Computer Science</p>
            <p className="text-muted-foreground">GPA: 3.97/4.0</p>
            <p className="text-sm text-muted-foreground italic">Expected May 2027</p>
          </FadeParallax>
        </div>

        <div className="relative">
          <FadeParallax direction="up" distance={80} end={75} className="space-y-2">
            <h4 className="text-md font-semibold">Relevant Coursework</h4>
            <FadeParallax direction="up" distance={20} end={75} className="list-disc list-inside text-muted-foreground space-y-1.5">
              <li>Semiconductor Electronic Circuits (MIT)</li>
              <li>Computing Hardware</li>
              <li>Circuits, Devices, and Transduction</li>
              <li>Signals & Communications</li>
              <li>Systems and Control</li>
              <li>Physics Electromagnetism</li>
              <li>Systems Programming</li>
              <li>Data Structures and Algorithms</li>
              <li>Intro to Machine Learning (MIT)</li>
              <li>Intro to Distributed Computing</li>
            </FadeParallax>
          </FadeParallax>
        </div>
      </div>
    </div>
  )
}
