import ProfileCard from "./profile-card";
import AboutMe from "./about-me";
import Education from "./education";
import Experience from "./experience";
import SkillsSection from "./skills-section";
import ProjectCarousel from "@/components/project-carousel";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen py-12 space-y-24 max-w-7xl mb-4">
      <div className="flex flex-col md:flex-row gap-20 items-start">
        <ProfileCard />
        <AboutMe />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-16 px-64">
        <Education />
        <Experience />
      </div>
      <SkillsSection />
      <ProjectCarousel projects={projects} />
    </main>
  );
}
