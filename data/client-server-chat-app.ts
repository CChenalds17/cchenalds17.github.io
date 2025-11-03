import { Project } from "@/types/project";

export const clientServerChatApp: Project =
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
}