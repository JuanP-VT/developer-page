/**
 * BurgerControls Component
 *
 * A component that displays burger controls with three layers (top, mid, bot).
 *
 * @property {"top" | "mid" | "bot"} currentLayer - The currently active layer (top, mid, or bot).
 * @property {import("react").Dispatch<import("react").SetStateAction<"top" | "mid" | "bot">>} setCurrentLayer - A React State function to set the currently active layer.
 *
 * @param {Props} props - The component props.
 * @returns {JSX.Element} The JSX element representing the BurgerControls.
 */
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
type Props = {
  currentLayer: "top" | "mid" | "bot";
  setCurrentLayer: Dispatch<SetStateAction<"top" | "mid" | "bot">>;
};

function BurgerControls({ currentLayer, setCurrentLayer }: Props) {
  return (
    <div className="relative flex h-60 w-60 flex-col sm:h-96 sm:w-96">
      <Image
        draggable={false}
        src={`/${currentLayer}.png`}
        alt=""
        height={700}
        width={700}
        className={`absolute h-full w-full `}
      />
      <div
        className="z-20 flex h-20 w-full bg-transparent sm:h-36 sm:cursor-pointer"
        onClick={() => setCurrentLayer("top")}
      ></div>
      <div
        className="z-20 flex h-20 w-full bg-transparent  sm:h-28 sm:cursor-pointer"
        onClick={() => setCurrentLayer("mid")}
      ></div>
      <div
        className="z-20 flex h-20 w-full bg-transparent  sm:h-20 sm:cursor-pointer"
        onClick={() => setCurrentLayer("bot")}
      ></div>
    </div>
  );
}

export default BurgerControls;
