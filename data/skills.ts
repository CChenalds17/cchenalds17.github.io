// Skills data organized by category

export type Skill = {
  name: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const skillsData: SkillCategory[] = [
  {
    title: "EDA & Design Tools",
    skills: [
      { name: "Altium Designer" },
      { name: "LTspice" },
      { name: "Cadence Virtuoso" },
      { name: "Spectre" },
      { name: "KiCad" },
    ]
  },
  {
    title: "Lab & Test",
    skills: [
      { name: "Oscilloscopes" },
      { name: "Function Generators" },
      { name: "Spectrum Analyzers" },
      { name: "Power Supplies" },
      { name: "Multimeters" },
      { name: "Soldering" },
      { name: "Board Bring-Up" },
    ]
  },
  {
    title: "HDL & Digital",
    skills: [
      { name: "SystemVerilog" },
      { name: "Xilinx Vivado" },
      { name: "FPGA" },
    ]
  },
  {
    title: "Programming",
    skills: [
      { name: "Python" },
      { name: "C" },
      { name: "MATLAB" },
      { name: "Git" },
    ]
  },
];
