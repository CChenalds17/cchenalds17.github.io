import { Project } from "@/types/project";

import { alu32 } from "./projects/alu32";
import { reverbKaraokeMachine } from "./projects/reverb-karaoke-machine";
import { maskDetector } from "./projects/mask-detector";
import { vlaRobotArm } from "./projects/vla-robot-arm";
import { clientServerChatApp } from "./projects/client-server-chat-app";
import { personalWebsite } from "./projects/personal-website";
import { rtiow } from "./projects/rtiow";
import { mips } from "./projects/mips";
import { logicDemo } from "./projects/logic-demo";
import { diffAmp } from "./projects/diff-amp";

export const projects: Project[] = [
  diffAmp,
  reverbKaraokeMachine,
  logicDemo,
  mips,
  vlaRobotArm,
  rtiow,
  maskDetector,
  // clientServerChatApp,
  // alu32, 
  // personalWebsite
];