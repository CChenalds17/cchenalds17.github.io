import { Project } from "@/types/project";

import { alu32 } from "./alu32";
import { reverbKaraokeMachine } from "./reverb-karaoke-machine";
import { maskDetector } from "./mask-detector";
import { vlaRobotArm } from "./vla-robot-arm";
import { clientServerChatApp } from "./client-server-chat-app";
import { personalWebsite } from "./personal-website";

export const projects: Project[] = [
  alu32, 
  reverbKaraokeMachine,
  maskDetector,
  vlaRobotArm,
  clientServerChatApp,
  personalWebsite
];