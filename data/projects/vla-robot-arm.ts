import { Project } from "@/types/project";

export const vlaRobotArm: Project = 
{
  id: "vla-robot-arm",
  title: "VLA Robot Arm",
  shortDescription: "Conducted human-in-the-loop experiments to evaluate the performance of the vision-language-action (VLA) models on \
    activities of daily living tasks involving human interaction.",
  description: 
  `
    Collaborators: Patrick Slade (Principal Investigator), Alex Ko (Co-Intern)

    Conducted human-in-the-loop experiments to evaluate the performance of the vision-language-action (VLA) models on \
    activities of daily living tasks involving human interaction.

    We adapted the open-source LeRobot SO-101 Arm with SmolVLA with a wearable human-mounted harness, adding hard-stops to ensure user safety. \
    We also collected 10,000+ frames of egocentric training data, which we used to fine-tune the SmolVLA model to our specific tasks, \
    and designed experimental task protocols with varying levels of complexity & human motion to measure VLA performance under realistic conditions.

    As a proof of concept, we began by implementing a custom 1-DOF robotic arm based on the SmolVLA architecture with the Meta Project Aria Gen 1 Glasses as our vision system. \
    I developed a custom camera handler to undistort, crop, and stream video into the SmolVLA recording/inference pipeline, wrote custom firmware for the \
    Arduino Uno to control the arm, and implemented a teleoperation recorder to log camera frames, servo angles, and tasks to curate labeled dataset for model fine-tuning.

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
  tags: ["VLAs", "Embedded Systems", "Robotics", "Computer Vision"],
  links: {
    github: "https://github.com/cchenalds17/vla-robot-arm",
    presentation: "https://docs.google.com/presentation/d/1zMrlxHVBTFBUcfUni9LxR7q94Z8kBFBncPyytkM-ByY/edit?usp=sharing"
  }
}