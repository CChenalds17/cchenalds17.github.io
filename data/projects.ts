import { Project } from "@/types/project";

export const projects: Project[] = [
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
      
      Key features:
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
  },
  {
    id: "reverb-karaoke-machine",
    title: "Reverb Karaoke Machine",
    shortDescription: "A karaoke machine that adds compression and reverb to the audio of the singer.",
    description: 
    `
    Built a custom karaoke machine that adds compression and reverb to the audio of the singer.

    Key features:
    - Built passive high-pass & low-pass filter stages with op-amp buffers to condition microphone signals for Arduino ADC
    - Developed Arduino signal processing firmware at 8 kHz sample rate, featuring dynamic compression and reverb effects
    - Engineered 10-bit R-2R DAC with low-pass output filters to reconstruct & smooth processed audio for speaker playback
    `,
    coverImage: {url: "/projects/reverb-karaoke-machine/cover.png", caption: "Circutry inside our custom-printed microphone-shaped casing."},
    images: [
      {url: "/projects/reverb-karaoke-machine/dac-output.png", caption: "Close-up of the Arduino DAC output."},
    ],
    tags: ["Audio Processing", "Filters", "Op Amps", "DAC", "Arduino", "Soldering"],
  },
  {
    id: "mask-detector",
    title: "Mask Detector",
    shortDescription: "A covid-era machine that sprays you with water if you aren't wearing a mask.",
    description: `
    Developed a mask detector that sprays you with water if you aren't wearing a mask.

    Key features:
    - Real-time mask detection
    - Face detection pipeline with optimized MobileNetV2 (91% accuracy) to spray unmasked people with water
    - Arduino firmware for serial-controlled relay actuation and prototyped/soldered the relay & motor circuit
    `,
    coverImage: "/projects/mask-detector/cover.png",
    images: [
      "/projects/mask-detector/demo.gif"
    ],
    tags: ["Computer Vision", "Arduino"],
    links: {
      github: "https://github.com/cchenalds17/MaskDetector"
    }
  },
  {
    id: "client-server-chat-app",
    title: "Client-Server Chat App",
    shortDescription: "A distributed client-server chat app with socket-based custom wire protocol, JSON, and gRPC implementations.",
    description: `
    Developed a distributed chat app with custom socket-based, JSON-based, and gRPC implementations.

    Key features:
    - Real-time message delivery with offline queuing
    - Secure account creation and authentication
    - Custom wire protocol (10+ times throughput increase) using sockets
    - Re-architected the system with gRPC, evaluating impacts on client/server structure, testing, and overall performance
    `,
    coverImage: {
      url: "/projects/client-server-chat-app/cover.png",
      caption: "Graph showing the performance of the chat app with different protocols."
    },
    tags: ["Distributed Systems"],
    links: {
      github: "https://github.com/cchenalds17/CS2620_RPC"
    }
  },
  {
    id: "personal-website",
    title: "Personal Website",
    shortDescription: "A clean, modern personal website built with Next.js and shadcn/ui.",
    description: `Modern, responsive personal website showcasing my work and experience. 
    Built with Next.js 13, TypeScript, and shadcn/ui components.
    
    Features:
    - Clean, minimal design
    - Dark/light mode support
    - Responsive layout
    - Project showcase carousel
    - Scroll-based animations`,
    coverImage: "/projects/personal-website/cover.png",
    images: [
      {
        url: "/projects/personal-website/dark-mode.png",
        caption: "Dark mode version with contrast optimized for low-light viewing"
      },
    ],
    tags: ["Web Development", "Next.js", "TypeScript"],
    links: {
      github: "https://github.com/cchenalds17/homepage",
      demo: "/"
    }
  },
];
