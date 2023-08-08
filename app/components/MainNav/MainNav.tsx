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
import { useEffect, useState } from "react";

function MainNav() {
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
      className={`fixed top-0 z-20 flex w-full justify-center gap-3 rounded-b-lg
      md:p-4 ${
        currentY > 50 ? "bg-teal-700" : "bg-black transition-all duration-300"
      } p-2 text-xs shadow-2xl sm:justify-end sm:text-base`}
    >
      <a href="#Home" className="font-medium text-white hover:text-sky-300">
        Home
      </a>
      <a href="#Tech" className="font-medium text-white hover:text-sky-300">
        Tech Stack
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
