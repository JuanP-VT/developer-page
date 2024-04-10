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
    <div className="relative flex h-[50rem] min-h-screen  w-full items-center justify-center bg-sky-200 bg-grid-black/[0.2] ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-600 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 bg-gradient-to-b from-slate-700 to-slate-800 bg-clip-text py-8  font-bold text-transparent ">
        <section id="Tech" className="">
          <div className=" text-center text-3xl font-medium ">
            {languageContext === "en"
              ? "My Tech Stack"
              : "Mi Stack Tecnológico"}
          </div>
          <p className="mb-10 text-center">
            {languageContext === "en"
              ? "Click The Burger!"
              : "Da Click a la Hamburguesa!"}
            !
          </p>
          <div className="mb-5 flex w-full flex-col items-center justify-center sm:flex-row">
            <BurgerControls
              setCurrentLayer={setCurrentLayer}
              currentLayer={currentLayer}
            />
            <TechStack currentLayer={currentLayer} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default TechStackSection;
