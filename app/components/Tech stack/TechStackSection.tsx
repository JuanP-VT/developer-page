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
      items-center bg-sky-100  "
    >
      <h1 className="mb-10 py-4 text-4xl">My Tech Stack</h1>

      <div className="flex w-screen flex-col sm:flex-row">
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
