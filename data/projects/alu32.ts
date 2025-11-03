import { Project } from "@/types/project"

export const alu32: Project = 
{
  id: "alu32",
  title: "32-bit Arithemtic Logic Unit (ALU)",
  shortDescription: "Created a 32-bit ALU in Vivado supporting arithmetic, logical, and shift operations.",
  description: 
  `
    Created a 32-bit ALU with a carry-lookahead adder using structural Verilog supporting the following operations:
    - addition
    - subtraction
    - logical AND
    - set less than
    - shift left logical
    - shift right arithmetic
    - shift right logical
    - flags: zero, equal, overflow

    Hierarchical modular design included creating 8-bit multiplexer, carry-lookahead adder stages and hierarchical units, \
    shifter, and additional operation/output flag circuitry as submodules. Wrote circuitry and comprehensive tesbench for edge-case validation in Vivado. \
    Design synthesized on Xilinx FPGA and uploaded to Python GUI for verification.

  `,
  coverImage: "/projects/alu32/cover.png",
  images: [
    "/projects/alu32/schematic0.jpg",
    "/projects/alu32/schematic1.jpg",
    "/projects/alu32/schematic2.jpg",
    "/projects/alu32/schematic3.jpg",
    "/projects/alu32/schematic4.jpg",
    "/projects/alu32/schematic5.jpg",
  ],
  tags: ["SystemVerilog", "FPGA", "Vivado"],
  links: {
    github: "https://github.com/CChenalds17/alu32"
  }
}