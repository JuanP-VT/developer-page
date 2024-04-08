"use client";
import { useState, createContext } from "react";
import AboutMeSection from "./components/About me/AboutMeSection";
import HomeSection from "./components/Home/HomeSection";
import MainNav from "./components/MainNav/MainNav";
import ProjectsSection from "./components/Projects/ProjectsSection";
import TechStackSection from "./components/Tech stack/TechStackSection";
import { LanguageContext } from "./languageContext";
import { TracingBeam } from "./components/TracingBeam";

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState<"es" | "en">("en");
  return (
    <main className="relative">
      <LanguageContext.Provider value={currentLanguage}>
        <MainNav
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
        />
        <HomeSection />
        <TechStackSection />
        <TracingBeam>
          <ProjectsSection />
        </TracingBeam>
        <AboutMeSection />
      </LanguageContext.Provider>
    </main>
  );
}
