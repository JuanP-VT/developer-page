"use client";
import { useState, createContext } from "react";
import AboutMeSection from "./components/About me/AboutMeSection";
import HomeSection from "./components/Home/HomeSection";
import MainNav from "./components/MainNav/MainNav";
import ProjectsSection from "./components/Projects/ProjectsSection";
import TechStackSection from "./components/Tech stack/TechStackSection";
import { LanguageContext } from "./languageContext";

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState<"es" | "en">("en");
  return (
    <main className="overflow-hidden bg-gradient-to-r from-slate-900 via-slate-700 to-slate-800">
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
