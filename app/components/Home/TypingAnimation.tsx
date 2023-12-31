/**
 * Represents a React component for displaying a typing animation using the 'typed.js' library.
 * @component
 */
"use client";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
function TypingAnimation() {
  const typing = useRef(null);
  useEffect(() => {
    if (typing.current) {
      const typed = new Typed(typing.current, {
        strings: [
          "Proven Industrial Engineer",
          "Passionate Web Developer",
          "Dedicated Self Learner",
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
  }, []);
  return (
    <div>
      <span
        ref={typing}
        className="md:text-1xl font-medium italic subpixel-antialiased"
      ></span>
    </div>
  );
}

export default TypingAnimation;
