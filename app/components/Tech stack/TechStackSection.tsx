/**
 * TechStackSection Component
 *
 * A component that displays a section showcasing different technology stacks based on the selected layer.
 *
 * @typedef {Object} Props
 * @property {("top" | "mid" | "bot")} currentLayer - The currently active layer (top, mid, or bot).
 *
 * @returns {JSX.Element} The JSX element representing the TechStackSection.
 */
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
      id="Tech"
      className="relative flex h-screen w-screen flex-col
      items-center border-2 bg-green-200"
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
