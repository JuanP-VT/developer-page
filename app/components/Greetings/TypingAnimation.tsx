/**
 * Represents a React component for displaying a typing animation using the 'typed.js' library.
 * @component
 */

import Typed from "typed.js";
import { useEffect, useRef } from "react";
function TypingAnimation() {
  const typing = useRef(null);
  useEffect(() => {
    if (typing.current) {
      const typed = new Typed(typing.current, {
        strings: [
          "Passionate Web Developer",
          "Dedicated Self Learner",
          "Experienced Industrial Engineer",
        ], // Speed settings
        startDelay: 300,
        typeSpeed: 30,
        backSpeed: 20,
        backDelay: 400,
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
      <span ref={typing}></span>
    </div>
  );
}

export default TypingAnimation;
