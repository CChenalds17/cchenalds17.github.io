import { Project } from "@/types/project"

export const mips: Project = 
{
  id: "mips",
  title: "Multicycle MIPS Processor",
  shortDescription: "Created a Multicycle MIPS processor in Vivado supporting R-, I-, and J-type instructions.",
  description: 
  `
    Implemented a multicycle MIPS processor in SystemVerilog by designing the core datapath and building the \
    finite-state-machine control unit needed to support R-, I-, and J-type instructions. \
    This included wiring together the provided ALU, register file, memory interfaces, and internal registers \
    to create a functioning multicycle architecture, and extending the control logic to handle branching, memory operations, and jumps.

    Validated the processor through waveform simulation with custom tests, then deployed it to an FPGA using a \
    Python-based loader to run real MIPS programs. Through this project, I gained hands-on experience with hardware design, multicycle CPU control, and FPGA debugging.

  `,
  coverImage: "/projects/mips/cover.jpg",
  images: [
    "/projects/mips/fsm0.jpg",
    "/projects/mips/fsm1.jpg",
    "/projects/mips/fsm2.jpg",
  ],
  tags: ["SystemVerilog", "RTL Design", "FPGA", "FSM Control", "Testbenches", "Vivado"],
  links: {
    github: "https://github.com/CChenalds17/mips"
  }
}