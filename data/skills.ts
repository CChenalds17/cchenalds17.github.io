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
    title: "Robotics & Hardware",
    skills: [
      { name: "Computer Vision" },
      { name: "Motion Tracking" },
      { name: "Robotic Control Systems" },
      { name: "Circuit Design" },
      { name: "Signal Processing" },
    ]
  },
  {
    title: "Software & AI",
    skills: [
      { name: "Python" },
      { name: "C/C++" },
      { name: "MATLAB" },
      { name: "OpenCV" },
      { name: "React/TypeScript" },
    ]
  },
  {
    title: "Research Tools",
    skills: [
      { name: "OpenCap" },
      { name: "Lab Equipment" },
      { name: "Data Analysis" },
      { name: "Experimental Design" },
      { name: "Technical Writing" },
    ]
  }
];
