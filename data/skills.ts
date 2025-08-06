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
    title: "Software",
    skills: [
      { name: "Python" },
      { name: "C" },
      { name: "C++" },
      { name: "Arduino" },
      { name: "MATLAB" },
      { name: "Linux" },
      { name: "Git" },
      { name: "OpenCV" },
      { name: "PyTorch" },
      { name: "Fusion360" },
      { name: "React/TypeScript" },
    ]
  },
  {
    title: "Hardware",
    skills: [
      { name: "Soldering" },
      { name: "Op Amps" },
      { name: "Function Generator" },
      { name: "Oscilloscope" },
      { name: "Power Supply" },
      { name: "Multimeter" },
    ]
  },
];
