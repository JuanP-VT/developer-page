/**
 * TechStack Component
 *
 * A component that displays different technology stacks based on the current layer.
 *
 * @typedef {Object} Props
 * @property {"top" | "mid" | "bot"} currentLayer - The currently active layer (top, mid, or bot).
 *
 * @param {Props} props - The component props.
 * @returns {JSX.Element | null} The JSX element representing the TechStack or null if no valid layer is provided.
 */
import TechList from "./TechList";

type Props = {
  currentLayer: "top" | "mid" | "bot";
};

function TechStack({ currentLayer }: Props) {
  return (
    <div className="relative h-96 w-72">
      <div
        className={`absolute h-72 w-72 transition-all duration-500 ${
          currentLayer === "top" ? "opacity-100" : "opacity-0"
        }`}
      >
        <TechList
          techs={[
            "javascript",
            "typescript",
            "react",
            "nextjs",
            "html",
            "css",
            "tailwindcss",
            "sass",
            "bootstrap",
          ]}
          title="Frontend"
        />
      </div>
      <div
        className={`absolute h-72 w-72 transition-all duration-500 ${
          currentLayer === "mid" ? "opacity-100" : "opacity-0"
        }`}
      >
        <TechList
          techs={[
            "javascript",
            "typescript",
            "nodejs",
            "expressjs",
            "nextjs",
            "mongodb",
          ]}
          title="Backend"
        />
      </div>
      <div
        className={`absolute h-72 w-72 transition-all duration-500 ${
          currentLayer === "bot" ? "opacity-100" : "opacity-0"
        }`}
      >
        <TechList
          techs={["jest", "git", "github", "vscode", "vercel", "heroku"]}
          title="Tools"
        />
      </div>
    </div>
  );
}

export default TechStack;
