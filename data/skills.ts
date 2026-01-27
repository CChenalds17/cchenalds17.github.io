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

    title: "Digital & Embedded",
    skills: [
      { name: "FPGA Programming" },
      { name: "SystemVerilog" },
      { name: "Vivado" },
      { name: "Digital Circuit Design" },
      { name: "Arduino" },
      { name: "GPIO" },
      { name: "Linux" },
    ]
  },
  {
    title: "Hardware & Circuits",
    skills: [
      { name: "PCB Design" },
      { name: "Schematic Capture" },
      { name: "KiCad" },
      { name: "LTSpice" },
      { name: "Analog Circuit Design" },
      { name: "Op-Amps" },
      { name: "Soldering" },
      { name: "Board Bring-Up" },
      { name: "Oscilloscopes" },
      { name: "Multimeters" },
      { name: "Function Generators" },
      { name: "Power Supplies" },
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
