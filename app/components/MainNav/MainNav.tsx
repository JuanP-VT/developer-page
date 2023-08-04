import React from "react";

type Props = {};

function MainNav({}: Props) {
  return (
    <div
      className="fixed top-0 z-20 flex w-full justify-center gap-3 
     rounded-b-lg bg-black p-2 text-xs sm:justify-end sm:text-base"
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
