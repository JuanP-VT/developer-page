"use client";

import AboutMeSection from "./components/About me/AboutMeSection";
import GreetingsSection from "./components/Greetings/GreetingsSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import TechStackSection from "./components/Tech stack/TechStackSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <GreetingsSection />
      <TechStackSection />
      <ProjectsSection />
      <AboutMeSection />
    </main>
  );
}
