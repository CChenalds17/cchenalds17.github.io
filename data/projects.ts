import { Project } from "@/types/project";

import { alu32 } from "./projects/alu32";
import { reverbKaraokeMachine } from "./projects/reverb-karaoke-machine";
import { maskDetector } from "./projects/mask-detector";
import { vlaRobotArm } from "./projects/vla-robot-arm";
import { clientServerChatApp } from "./projects/client-server-chat-app";
import { personalWebsite } from "./projects/personal-website";
import { rtiow } from "./projects/rtiow";
import { mips } from "./projects/mips";

export const projects: Project[] = [
  mips,
  reverbKaraokeMachine,
  maskDetector,
  vlaRobotArm,
  rtiow,
  clientServerChatApp,
  alu32, 
  personalWebsite
];