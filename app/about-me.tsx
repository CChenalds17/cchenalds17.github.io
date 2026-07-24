'use client'

import { TypingEffect } from "@/components/motion/typing-effect"
import { Fade } from "@/components/motion/fade"

export default function AboutMe() {
  return (
    <div className="flex-1 space-y-6">
      <TypingEffect as="h2" delay={0.5}>About Me</TypingEffect>

      <div className="space-y-4 text-muted-foreground text-lg">
        <Fade direction="up" staggerChildren={0.2} delay={1}>
          <p>
            Hi! I&apos;m a rising senior at Harvard studying Electrical Engineering and Computer Science.
          </p>
          <br />
          <p>
            I&apos;m currently interning at General Dynamics Applied Physical Sciences, where I&apos;m expanding an underwater communication system to support two additional ~10kHz bands.
            Most of my time is currently spent designing PCBs in Altium and running simulations in LTspice.
          </p>
          <br />
          <p>
            I&apos;m passionate about developing technologies that both push the boundaries of innovation and make a difference in people&apos;s lives.
          </p>
          <br />
          <p>
            Outside of work, I enjoy hiking, going on runs, and cooking.
          </p>
        </Fade>
      </div>
    </div>
  )
}