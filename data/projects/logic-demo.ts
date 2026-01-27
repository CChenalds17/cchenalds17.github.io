import { Project } from "@/types/project"

export const logicDemo: Project = 
{
  id: "logic-demo",
  title: "NAND-Only Logic Gate Demo PCB",
  shortDescription: "Designed and assembled a NAND-Only Logic Gate Demo PCB using KiCad.",
  description: 
  `
    Designed & assembled 2-layer PCB implementing all six Boolean functions using only NAND-gates with user inputs.
    Added per-IC decoupling capacitors to suppress noise & prevent transient VDD droop on input transitions.
    Reduced ground bounce & improved signal integrity using solid ground plane to minimize return path impedance.
    Validated correct behavior across all input combinations during board bring-up using LEDs and DMM measurements.
  `,
  coverImage: "/projects/logic-demo/cover.png",
  images: [
    "/projects/logic-demo/schematic.jpg",
    "/projects/logic-demo/pcb.png",
  ],
  tags: ["KiCad", "PCB Design", "Board Bring-Up", "Power & Signal Integrity"]
}