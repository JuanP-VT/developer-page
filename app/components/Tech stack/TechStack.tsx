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
  if (currentLayer === "top") {
    return (
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
    );
  }
  if (currentLayer === "mid") {
    return (
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
    );
  }
  if (currentLayer === "bot") {
    return (
      <TechList
        techs={["jest", "git", "github", "vscode", "vercel", "heroku"]}
        title="Tools"
      />
    );
  }
}

export default TechStack;
