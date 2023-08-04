import { useState } from "react";
import Hobbies from "./Hobbies";
import AboutMeNav from "./AboutMeNav";
import Background from "./Background";

function AboutMeSection() {
  const [currentSection, setCurrentSection] = useState<
    "hobbies" | "background"
  >("hobbies");
  return (
    <section className="flex-w relative bg-slate-300 pt-20">
      <AboutMeNav
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      />
      {currentSection === "hobbies" ? <Hobbies /> : <Background />}
    </section>
  );
}

export default AboutMeSection;
