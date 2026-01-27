import { Project } from "@/types/project";

export const maskDetector: Project = 
{
  id: "mask-detector",
  title: "Mask Detector",
  shortDescription: "A covid-era machine that sprays you with water if you aren't wearing a mask.",
  description: `
  During the COVID-19 pandemic, I built an AI-powered mask detection system that identifies whether a person is wearing a face mask in real time — \
  and automatically sprays sanitizer at them if they aren't. \
  This project combined computer vision, machine learning, and embedded hardware to encourage hygiene in public settings like offices or classrooms.

  Key Features:
  - Deep Learning Model: Trained a MobileNetV2 CNN using Keras to classify “Mask” vs. “No Mask” with over 90% accuracy
  - Real-time Detection: Deployed with OpenCV to capture and process live video frames
  - Arduino Integration: Used serial communication between Python and Arduino to control a relay-triggered DC motor that activates a sanitizer spray
  - Automation Loop: The system detects, classifies, and triggers physical response in under one second
  - Custom Wooden Chassis: Designed and hand-built a sturdy wooden enclosure to mount the webcam, Arduino, \
  and sanitizer components — ensuring stability and a clean aesthetic presentation
  `,
  coverImage: "/projects/mask-detector/cover.png",
  images: [
    {url: "/projects/mask-detector/block-diagram.png", caption: "Block diagram of system"},
    {url: "/projects/mask-detector/circuit.JPG", caption: "Arduino-relay-motor circuit"},
    {url: "/projects/mask-detector/sprayer.JPG", caption: "Wooden chassis with motor, spray bottle, and webcam"},
    {url: "/projects/mask-detector/Demo-min.gif", caption: "System demo"},
  ],
  tags: ["Embedded Systems","Arduino", "Real-Time IO", "Serial Communication"],
  links: {
    github: "https://github.com/cchenalds17/MaskDetector"
  }
}