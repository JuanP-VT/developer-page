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
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import Hobbies from "./Hobbies";
import AboutMeNav from "./AboutMeNav";
import Background from "./Background";
import { faMailBulk, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "@/app/languageContext";

function AboutMeSection() {
  const [currentSection, setCurrentSection] = useState<
    "hobbies" | "background"
  >("hobbies");
  const languageContext = useContext(LanguageContext);
  return (
    <section id="AboutMe" className="flex-w relative  bg-slate-300 pt-20">
      <AboutMeNav
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      />
      <div className="relative flex h-auto flex-col">
        <div
          className={`
           w-full transition-all duration-300 ${
             currentSection === "hobbies"
               ? "block opacity-100"
               : "absolute opacity-0"
           }`}
        >
          <Hobbies />
        </div>
        <div
          className={`
           w-full transition-all duration-300 ${
             currentSection === "background"
               ? "block opacity-100"
               : "absolute hidden h-0 opacity-100"
           }`}
        >
          <Background />
        </div>
      </div>
      <div className="flex-col p-5">
        <p className="mb-3 text-xl font-bold text-blue-600">
          {languageContext === "en" ? "Contact" : "Contacto"}
        </p>
        <div className=" flex flex-col gap-5 sm:flex-row">
          <div className="flex gap-5">
            <div className="flex items-center">
              <FontAwesomeIcon
                className=" h-10 w-10 text-blue-500"
                icon={faMapLocation}
              />
            </div>
            <div className="flex flex-col font-medium">
              <p className="font-semibold">
                {languageContext === "en" ? "Location" : "Locación"}
              </p>
              <p>México, Juan José Ríos</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex items-center">
              <FontAwesomeIcon
                className=" h-10 w-10 text-blue-500"
                icon={faMailBulk}
              />
            </div>
            <div className="flex flex-col font-medium">
              <p className="font-semibold">e-mail</p>
              <a href="mailto:cv.juanp@gmail.com">cv.juanp@gmail.com</a>
            </div>
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
