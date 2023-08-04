/**
 * Represents the About Me Section component.
 *
 * This component is responsible for rendering the About Me section of the application.
 * It contains a navigation bar to switch between "hobbies" and "background" sections.
 * The content displayed depends on the value of `currentSection`.
 *
 * @component
 * @returns {JSX.Element} JSX element representing the About Me section.
 */
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
