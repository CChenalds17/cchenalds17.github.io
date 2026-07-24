import { Project } from "@/types/project";

export const reverbKaraokeMachine: Project = {
  id: "reverb-karaoke-machine",
  title: "Reverb Karaoke Machine",
  shortDescription: "A mixed-signal real-time audio effects processor featuring custom analog active filtering, discrete 10-bit converters, and MCU-based DSP.",
  description: `
Built a mixed-signal audio processing system from scratch, handling everything from microphone input conditioning to speaker output.

Analog Front-End:
Designed the input signal chain starting with a low-noise op-amp pre-amp stage to bias and amplify weak electret microphone signals \
into a single-supply MCU-readable range. Added bandpass filter stage to reject background hum and high-frequency noise while satisfying Nyquist \
criteria before sampling.

Custom Converters:
Instead of using the MCU's built-in ADC/DAC, I built discrete converters to evaluate their performance. \
Implemented a 10-bit R-2R resistor ladder DAC and tested a SAR ADC topology. Added output reconstruction filtering \
after the DAC to smooth quantization steps and eliminate high-frequency images.

Bring-Up & Debugging:
Used an oscilloscope to debug clipping, ground bounce, and other sources of noise across all stages.
  `,
  coverImage: {
    url: "/projects/reverb-karaoke-machine/cover.png",
    caption: "Circuitry inside custom-printed microphone casing.",
  },
  images: [
    { url: "/projects/reverb-karaoke-machine/block-diagram.png", caption: "Block diagram of system" },
    { url: "/projects/reverb-karaoke-machine/schematic.png", caption: "Multi-stage filter schematic" },
    { url: "/projects/reverb-karaoke-machine/breadboard.JPG", caption: "Breadboard bring-up and converter hardware testing." },
    { url: "/projects/reverb-karaoke-machine/scope.gif", caption: "Oscilloscope capture: Raw mic input vs. amplified & filtered output." },
    { url: "/projects/reverb-karaoke-machine/dac-output.png", caption: "Close-up of the Arduino DAC output." },
  ],
  tags: ["Mixed-Signal Design", "Analog Signal Conditioning", "Op-Amps & Active Filters", "ADC", "DAC"],
};