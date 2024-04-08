/**
 * Represents a React component for displaying a typing animation using the 'typed.js' library.
 * @component
 */
"use client";
import Typed from "typed.js";
import { useContext, useEffect, useRef } from "react";
import { LanguageContext } from "@/app/languageContext";
function TypingAnimation() {
  const languageContext = useContext(LanguageContext);
  const typing = useRef(null);
  useEffect(() => {
    if (typing.current) {
      //For English
      const typed = new Typed(typing.current, {
        strings:
          languageContext === "en"
            ? [
                "Passionate Web Developer",
                "Dedicated Self Learner",
                "Chill dude",
                "Proven Industrial Engineer",
              ]
            : [
                "Desarrollador Apasionado",
                "Autodidacta y Dedicado",
                "Buen Compañero",
                "Ingeniero Industrial",
              ], // Speed settings
        startDelay: 300,
        typeSpeed: 40,
        backSpeed: 30,
        backDelay: 1300,
        loop: true,
      });

      // Destroying
      return () => {
        typed.destroy();
      };
    }
  }, [languageContext]);
  return (
    <div>
      <span
        ref={typing}
        className="md:text-1xl font-bold italic text-orange-500 subpixel-antialiased"
      ></span>
    </div>
  );
}

export default TypingAnimation;
