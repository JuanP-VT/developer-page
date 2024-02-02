/**
 * Represents the main navigation bar of the application.
 *
 * This component displays a fixed navigation bar at the top of the page.
 * It contains links to different sections of the application, such as Home, Tech Stack, Projects, and About Me.
 * The navigation bar's appearance changes based on the scroll position:
 * - When the user scrolls down more than 50 pixels, the background turns black.
 * - Otherwise, the background transitions from a teal color to the default background color.
 *
 * @component
 *
 * @returns {JSX.Element} JSX element representing the main navigation bar of the application.
 */
"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import LanguageButton from "./LanguageButton";

type Props = {
  currentLanguage: "es" | "en";
  setCurrentLanguage: Dispatch<SetStateAction<"es" | "en">>;
};
function MainNav({ currentLanguage, setCurrentLanguage }: Props) {
  const [currentY, setCurrentY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    setTimeout(() => {
      setCurrentY(window.scrollY);
    }, 200);
  };
  return (
    <div
      className={`fixed top-0 z-20 flex w-full justify-center gap-3 self-center rounded-b-lg
       ${
         currentY > 50 ? "bg-teal-700" : "bg-black transition-all duration-300"
       } p-1 text-xs shadow-2xl sm:justify-end sm:text-base`}
    >
      <LanguageButton
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
      <a href="#Home" className="font-medium text-white hover:text-sky-300">
        Home
      </a>
      <a href="#Tech" className="font-meadium text-white hover:text-sky-300">
        Techs
      </a>
      <a href="#Projects" className="font-medium text-white hover:text-sky-300">
        Projects
      </a>
      <a href="#AboutMe" className="font-medium text-white hover:text-sky-300">
        About Me
      </a>
    </div>
  );
}

export default MainNav;
