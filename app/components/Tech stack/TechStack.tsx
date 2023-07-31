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
