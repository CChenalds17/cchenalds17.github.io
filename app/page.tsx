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
    <main className="container mx-auto min-h-screen py-12 space-y-24 max-w-7xl mb-4 px-10">
      <div className="flex flex-col gap-20 items-center md:flex-row">
        <FadeParallax direction="up" distance={40}>
          <ProfileCard />
        </FadeParallax>
        <FadeParallax direction="up" distance={60}>
          <AboutMe />
        </FadeParallax>
      </div>
      <FadeParallax direction="up" distance={60} end={75} className="flex flex-col justify-center gap-20 md:flex-row md:gap-0">
        <Education />
        <Experience />
      </FadeParallax>
      <FadeParallax direction="up" distance={60} end={75}>
        <SkillsSection />
      </FadeParallax>
      <FadeParallax direction="up" distance={60} end={85} className="px-4">
        <ProjectCarousel projects={projects} />
      </FadeParallax>
    </main>
  );
}
