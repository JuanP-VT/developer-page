import { Dispatch, SetStateAction } from "react";

type Props = {
  currentLayer: "top" | "mid" | "bot";
  setCurrentLayer: Dispatch<SetStateAction<"top" | "mid" | "bot">>;
};

function BurgerControls({ currentLayer, setCurrentLayer }: Props) {
  return (
    <div
      className="flex h-60 w-60 cursor-pointer flex-col sm:h-96 sm:w-96"
      style={{
        backgroundImage: `url("/${currentLayer}.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div
        className="flex h-20 w-full sm:h-36"
        onClick={() => setCurrentLayer("top")}
      ></div>
      <div
        className="flex h-20 w-full sm:h-28"
        onClick={() => setCurrentLayer("mid")}
      ></div>
      <div
        className="flex h-14 w-full sm:h-20 "
        onClick={() => setCurrentLayer("bot")}
      ></div>
    </div>
  );
}

export default BurgerControls;
