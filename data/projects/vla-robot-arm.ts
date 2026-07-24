import { Project } from "@/types/project";

export const vlaRobotArm: Project = {
  id: "vla-robot-arm",
  title: "Wearable VLA Robotic Arm for Assistive Tasks",
  shortDescription: "A wearable supernumerary robotic arm platform evaluating Vision-Language-Action (VLA) models on human-in-the-loop assistive tasks.",
  description: `
Collaborators: Dr. Patrick Slade (PI), Alex Ko

Developed a wearable supernumerary robotic arm platform to evaluate Vision-Language-Action (VLA) models on Activities of Daily Living (ADL) tasks requiring \
direct human interaction.

Hardware Adaptation & Safety
- Wearable Harness Integration: Adapted an open-source LeRobot SO-101 arm onto a body-mounted harness to function as a wearable assistant.
- Mechanical Hard-Stops: Integrated physical range-of-motion limits on the arm to guarantee user safety during real-time model inference near the human body.
- 1-DOF Proof of Concept: Built an initial 1-DOF prototype with custom Arduino motor control firmware to validate the teleoperation, recording, \
and inference pipeline before scaling to multi-DOF manipulation.

Egocentric Vision & Data Pipeline
- Smart Glasses Integration: Interfaced Meta Project Aria Gen 1 smart glasses as the primary vision sensor, writing a Python camera handler to undistort, \
crop, and stream egocentric video into the SmolVLA pipeline.
- Teleoperation & Dataset Curation: Built a synchronized data recorder logging camera frames, joint telemetry, and natural language prompts, curating a dataset \
of 10,000+ labeled egocentric frames.

Model Fine-Tuning & Evaluation
- SmolVLA Fine-Tuning: Fine-tuned the SmolVLA model on the custom egocentric dataset for target assistive tasks (e.g., grasping glasses and handing them to the user).
- Experimental Protocols: Designed human-in-the-loop evaluation protocols with varying levels of task complexity and human motion to quantify model reliability \
under realistic operating conditions.
  `,
  coverImage: "/projects/vla-robot-arm/cover.png",
  videos: [
    {
      url: "https://youtu.be/0Kzn3tqjDkU",
      caption: "Task: Pick up the glasses and hand them to me"
    },
    {
      url: "https://youtu.be/2bWMW--klzI",
      caption: "(Proof of Concept) Task: Point to the glasses"
    }
  ],
  tags: ["VLAs", "Embedded Systems", "Robotics", "Computer Vision", "Python"],
  links: {
    github: "https://github.com/cchenalds17/vla-robot-arm",
    presentation: "https://docs.google.com/presentation/d/1zMrlxHVBTFBUcfUni9LxR7q94Z8kBFBncPyytkM-ByY/edit?usp=sharing"
  }
};