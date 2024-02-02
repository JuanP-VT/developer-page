"use client";
import { useState, createContext } from "react";
import AboutMeSection from "./components/About me/AboutMeSection";
import HomeSection from "./components/Home/HomeSection";
import MainNav from "./components/MainNav/MainNav";
import ProjectsSection from "./components/Projects/ProjectsSection";
import TechStackSection from "./components/Tech stack/TechStackSection";

export const LanguageContext = createContext<"es" | "en">("en");
export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState<"es" | "en">("en");
  console.log(currentLanguage);
  return (
    <main className="relative">
      <LanguageContext.Provider value={currentLanguage}>
        <MainNav
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
        />
        <HomeSection />
        <TechStackSection />
        <ProjectsSection />
        <AboutMeSection />
      </LanguageContext.Provider>
    </main>
  );
}
