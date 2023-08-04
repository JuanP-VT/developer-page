"use client";

import AboutMeSection from "./components/About me/AboutMeSection";
import GreetingsSection from "./components/Greetings/GreetingsSection";
import MainNav from "./components/MainNav/MainNav";
import ProjectsSection from "./components/Projects/ProjectsSection";
import TechStackSection from "./components/Tech stack/TechStackSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <MainNav />
      <GreetingsSection />
      <TechStackSection />
      <ProjectsSection />
      <AboutMeSection />
    </main>
  );
}
