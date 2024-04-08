/**
 * TechIcon Component
 *
 * A reusable component to display a technology icon with its name.
 * We use https://skillicons.dev/icons to display icons
 * @typedef {Object} Props
 * @property {string} name - The name of the technology icon to display.
 *
 * @param {Props} props - The component props.
 * @returns {JSX.Element} The JSX element representing the TechIcon.
 */
import Image from "next/image";

type Props = { name: string };

function TechIcon({ name }: Props) {
  return (
    <div className="mr-5 flex w-20 flex-col ">
      <Image
        alt="tech icon"
        src={`https://skillicons.dev/icons?i=${name}`}
        width={40}
        height={40}
        className="self-center"
      />
      <p className="mt-1 text-center text-xs font-normal capitalize text-black">
        {name}
      </p>
    </div>
  );
}

export default TechIcon;
