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
import { useContext, useState } from "react";
import BurgerControls from "./BurgerControls";
import TechStack from "./TechStack";
import { LanguageContext } from "@/app/languageContext";
function TechStackSection() {
  const languageContext = useContext(LanguageContext);
  const [currentLayer, setCurrentLayer] = useState<"top" | "mid" | "bot">(
    "top",
  );
  return (
    <section
      id="Tech"
      className="relative flex min-h-screen  flex-col
      items-center border-2 bg-cyan-100"
    >
      <p className="pt-20 text-center text-4xl font-medium sm:text-5xl">
        {languageContext === "en" ? "My Tech Stack" : "Mi Stack Tecnológico"}
      </p>
      <span className="mb-20 ">
        {" "}
        {languageContext === "en"
          ? "Click The Burger!"
          : "Click a la Hamburguesa!"}
        !
      </span>
      <div className="mb-5 flex w-full flex-col items-center justify-center sm:flex-row">
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
