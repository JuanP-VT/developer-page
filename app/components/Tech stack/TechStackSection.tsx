"use client";

import { useState } from "react";
import BurgerControls from "./BurgerControls";
import TechStack from "./TechStack";
function TechStackSection() {
  const [currentLayer, setCurrentLayer] = useState<"top" | "mid" | "bot">(
    "top",
  );
  return (
    <section
      className="relative flex h-screen w-screen flex-col
      items-center border bg-green-50"
    >
      <p className="pt-20 text-4xl font-medium sm:text-5xl">My Tech Stack</p>
      <span className="mb-20 ">Click The Hamburger!</span>
      <div className="flex w-screen flex-col items-center justify-center sm:flex-row md:gap-32">
        <BurgerControls
          setCurrentLayer={setCurrentLayer}
          currentLayer={currentLayer}
        />
        <TechStack currentLayer={currentLayer} />
      </div>
    </section>
  );
}

export default TechStackSection;
