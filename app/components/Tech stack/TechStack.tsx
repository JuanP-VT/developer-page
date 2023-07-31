import React from "react";
import FrontEndStack from "./FrontEndStack";
import BackEndStack from "./BackEndStack";
import Tools from "./Tools";

type Props = {
  currentLayer: "top" | "mid" | "bot";
};

function TechStack({ currentLayer }: Props) {
  if (currentLayer === "top") {
    return <FrontEndStack />;
  }
  if (currentLayer === "mid") {
    return <BackEndStack />;
  }
  if (currentLayer === "bot") {
    return <Tools />;
  }
}

export default TechStack;
