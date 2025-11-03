import { Project } from "@/types/project";

export const reverbKaraokeMachine: Project = 
{
  id: "reverb-karaoke-machine",
  title: "Reverb Karaoke Machine",
  shortDescription: "A karaoke machine that adds compression and reverb to the audio of the singer.",
  description: 
  `
  Created a karaoke machine that adds compression and reverb to the singer's voice. \
  Built from scratch using Arduino, analog circuitry, and digital signal processing, \
  the project combined electrical engineering and embedded software design to produce real-time audio effects.

  Key Features:
  - Real-time audio input from a microphone filtered through custom analog circuits (50 Hz - 1.2 kHz range)
  - Digital signal processing on Arduino using a modified YIN frequency estimation algorithm for autotune (later replaced with reverb + compression due to hardware limits)
  - Custom-built 10-bit DAC (R-2R ladder) for smooth audio playback through a speaker with adjustable volume
  
  Engineering Challenges:
  - Designing stable high-pass and low-pass filters for human vocal frequencies
  - Creating a biasing and amplification circuit for readable mic input
  - Overcoming Arduino's processing limitations in real-time autotuning
  - Debugging a 10-bit DAC with over 20 soldered resistors and multiple rework
  `,
  coverImage: {url: "/projects/reverb-karaoke-machine/cover.png", caption: "Circutry inside our custom-printed microphone-shaped casing."},
  images: [
    {url: "/projects/reverb-karaoke-machine/block-diagram.png", caption: "Block diagram of system"},
    {url: "/projects/reverb-karaoke-machine/schematic.png", caption: "Multi-stage filter schematic"},
    {url: "/projects/reverb-karaoke-machine/breadboard.JPG", caption: "Testing breadboard setup"},
    {url: "/projects/reverb-karaoke-machine/scope.gif", caption: "Oscilloscope input and amplified output"},
    {url: "/projects/reverb-karaoke-machine/filters.png", caption: "Input filters"},
    {url: "/projects/reverb-karaoke-machine/dac-output.png", caption: "Close-up of the Arduino DAC output."},
  ],
  tags: ["Audio Processing", "Filters", "Op Amps", "DAC", "Arduino", "Soldering"],
}