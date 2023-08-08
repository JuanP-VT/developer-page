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
import { useState } from "react";
import Hobbies from "./Hobbies";
import AboutMeNav from "./AboutMeNav";
import Background from "./Background";
import { faMailBulk, faMapLocation } from "@fortawesome/free-solid-svg-icons";

function AboutMeSection() {
  const [currentSection, setCurrentSection] = useState<
    "hobbies" | "background"
  >("hobbies");
  return (
    <section id="AboutMe" className="flex-w relative  bg-slate-300 pt-20">
      <AboutMeNav
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      />
      {currentSection === "hobbies" ? <Hobbies /> : <Background />}
      <div className="flex-col p-5">
        <p className="mb-3 text-xl font-bold text-blue-600">Contact</p>
        <div className=" flex flex-col gap-5 sm:flex-row">
          <div className="flex gap-5">
            <div className="flex items-center">
              <FontAwesomeIcon
                className=" h-10 w-10 text-blue-500"
                icon={faMapLocation}
              />
            </div>
            <div className="flex flex-col font-medium">
              <p className="font-semibold">Location</p>
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
              <p className="font-semibold">Mail</p>
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
