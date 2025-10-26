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
    title: "Software & Programming",
    skills: [
      { name: "SystemVerilog" },
      { name: "Vivado" },
      { name: "Arduino" },
      { name: "MATLAB" },
      { name: "LTSpice" },
      { name: "Python" },
      { name: "Git" },
      { name: "Linux" },

      { name: "OpenCV" },
      { name: "PyTorch" },
      { name: "React/TypeScript" },
    ]
  },
  {
    title: "Hardware",
    skills: [
      { name: "FPGA Programming" },
      { name: "Analog & Digital Circuit Design" },
      { name: "Embedded Systems" },
      { name: "Oscilloscope" },
      { name: "Function Generator" },
      { name: "Soldering" },
    ]
  },
];
