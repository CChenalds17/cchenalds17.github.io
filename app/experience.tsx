'use client';

import { FadeParallax } from '@/components/motion/fade-parallax';

export default function Experience() {
  return (
    <div className="flex-1 relative pl-6 border-l border-muted-foreground/20">
      <FadeParallax direction="up" distance={80} end={75} className="text-2xl font-bold mb-8">Experience</FadeParallax>
      
      <div className="space-y-8">
        <div className="relative">
          <FadeParallax direction="up" distance={80} end={75} className="space-y-2">
            <h3 className="text-lg font-semibold">General Dynamics Applied Physical Sciences</h3>
            <p className="text-muted-foreground">Electrical Engineering Intern</p>
            <p className="text-sm text-muted-foreground">Summer 2026</p>
            <FadeParallax direction="up" distance={20} end={75} className="list-disc list-inside text-muted-foreground space-y-1.5 mt-2">
              <li>Expanded underwater acoustic communication system to support 2 additional ~10kHz differential bands at ~5kV / 5A</li>
              <li>Routed amplifier outputs to frequency-appropriate magnetics & hydrophones via opto-isolated control signals</li>
              <li>Owned schematic capture, layout, library, & DRC across 3 PCB versions (4-layer, 2×4”) with varying switching topologies</li>
              <li>Designed hydrophone-test board with an overcurrent latching-protection circuit utilizing comparator hysteresis</li>
            </FadeParallax>
          </FadeParallax>
        </div>

        <div className="relative">
          <FadeParallax direction="up" distance={80} end={75} className="space-y-2">
            <h3 className="text-lg font-semibold">Harvard University ECE1410: Computing Hardware</h3>
            <p className="text-muted-foreground">Teaching Fellow</p>
            <p className="text-sm text-muted-foreground">Spring – Fall 2026</p>
            <FadeParallax direction="up" distance={20} end={75} className="list-disc list-inside text-muted-foreground space-y-1.5 mt-2">
              <li>Rewrite problem sets covering CMOS transistors, digital logic, FSMs, memory, RTL debugging & testbench writing</li>
              <li>Hold weekly office hours & review sessions, grade problem sets for 50 students, conduct FPGA hardware lab interviews</li>
            </FadeParallax>
          </FadeParallax>
        </div>

        <div className="relative">
          <FadeParallax direction="up" distance={80} end={75} className="space-y-2">
            <h3 className="text-lg font-semibold">Harvard Ability Lab</h3>
            <p className="text-muted-foreground">Undergraduate Researcher</p>
            <p className="text-sm text-muted-foreground">Summer – Fall 2025</p>
            <FadeParallax direction="up" distance={20} end={75} className="list-disc list-inside text-muted-foreground space-y-1.5 mt-2">
              <li>Prototyped wearable mounting & data recording system to collect 10,000+ frames for supernumerary-arm VLA study</li>
              <li>Coded custom firmware & camera handler to process & stream video into teleoperation, recording, & inference pipelines</li>
            </FadeParallax>
          </FadeParallax>
        </div>
      </div>
    </div>
  )
}
