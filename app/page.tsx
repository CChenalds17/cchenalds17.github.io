import ProfileCard from "./profile-card";
import AboutMe from "./about-me";
import Education from "./education";
import Experience from "./experience";
import SkillsSection from "./skills-section";
import ProjectCarousel from "@/components/project-carousel";
import { projects } from "@/data/projects";
import { FadeParallax } from "@/components/motion/fade-parallax";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen py-12 space-y-24 max-w-7xl mb-4">
      <div className="flex flex-col md:flex-row gap-20 items-start">
        <FadeParallax direction="up" distance={40}>
          <ProfileCard />
        </FadeParallax>
        <FadeParallax direction="up" distance={60}>
          <AboutMe />
        </FadeParallax>
      </div>
      <FadeParallax direction="up" distance={60} end={75} className="flex flex-col md:flex-row justify-center px-40">
        <Education />
        <Experience />
      </FadeParallax>
      <FadeParallax direction="up" distance={60} end={75}>
        <SkillsSection />
      </FadeParallax>
      <FadeParallax direction="up" distance={60} end={85}>
        <ProjectCarousel projects={projects} />
      </FadeParallax>
    </main>
  );
}
