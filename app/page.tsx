import AboutMeSection from "./components/About me/AboutMeSection";
import HomeSection from "./components/Home/HomeSection";
import MainNav from "./components/MainNav/MainNav";
import ProjectsSection from "./components/Projects/ProjectsSection";
import TechStackSection from "./components/Tech stack/TechStackSection";

export default function Home() {
  return (
    <main className="relative ">
      <MainNav />
      <HomeSection />
      <TechStackSection />
      <ProjectsSection />
      <AboutMeSection />
    </main>
  );
}
