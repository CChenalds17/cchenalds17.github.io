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
            Hi! I'm a junior at Harvard studying Electrical Engineering and Computer Science.
          </p>
          <br />
          <p>
            I'm currently conducting research at the Harvard Ability Lab, combining cutting-edge machine learning models and accessible hardware
            to create assistive devices.
          </p>
          <br />
          <p>
            I'm passionate about developing technologies that not only push the boundaries of innovation
            but also make a meaningful difference in people's lives.
          </p>
          <br />
          <p>
            When I'm not in the lab or working on personal projects, I enjoy going on runs, hiking, and cooking.
          </p>
        </Fade>
      </div>
    </div>
  )
}