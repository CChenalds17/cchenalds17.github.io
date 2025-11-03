import { Project } from "@/types/project";

export const vlaRobotArm: Project = 
{
  id: "vla-robot-arm",
  title: "VLA Robot Arm",
  shortDescription: "Developed a vision-language-action model powered robotic arm system.",
  description: 
  `
    This project implements a custom robotic arm setup based on SmolVLA. \
    Our custom 1-DOF robotic arm uses the LeRobot library for data collection and SmolVLA as its base model. \
    We use the Meta Project Aria Gen 1 Glasses as our vision system, for which I wrote a camera handler to undistort, crop, and stream video into my custom SmolVLA recording/inference pipeline. \
    The arm is controlled by an Arduino Uno, which communicates with the Python script through custom firmware over a custom motor bus and communication protocol. \
    I built a teleoperation recorder to log camera frames, servo angles, and tasks to curate labeled dataset for model fine-tuning. \
    I also implemented an autonomous action inference loop that parses inputs and issues live servo commands to complete tasks.
    
    Key Features:
    - Custom 1-DOF robotic arm
    - LeRobot library for data collection
    - SmolVLA as base model
    - Meta Project Aria Gen 1 Glasses for vision system
    - Arduino Uno for control
    - Custom motor bus and communication protocol
    - Teleoperation recorder for dataset collection
    - Autonomous action inference loop
  `,
  coverImage: "/projects/vla-robot-arm/cover.jpg",
  videos: [
    {
      url: "/projects/vla-robot-arm/demo.mp4",
      caption: "Task: Point to the glasses"
    }
  ],
  tags: ["Embedded Systems", "Robotics", "Computer Vision", "Generative AI"],
  links: {
    github: "https://github.com/cchenalds17/vla-robot-arm"
  }
}