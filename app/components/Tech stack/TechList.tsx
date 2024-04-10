/**
 * TechList Component
 *
 * A component that displays a list of technology icons with a title.
 *
 * @typedef {Object} Props
 * @property {string} title - The title of the TechList.
 * @property {string[]} techs - An array of technology names to be displayed as icons.
 *
 * @param {Props} props - The component props.
 * @returns {JSX.Element} The JSX element representing the TechList.
 */
import TechIcon from "./TechIcon";
type Props = {
  title: string;
  techs: string[];
};

function TechList({ techs, title }: Props) {
  return (
    <div className="flex flex-col px-2">
      <p className="pb-2 text-2xl font-medium text-slate-700">{title}</p>
      <div className="grid grid-cols-3 justify-center gap-y-5">
        {techs.map((tech, i) => (
          <TechIcon name={tech} key={`tech${i}`} />
        ))}
      </div>
    </div>
  );
}

export default TechList;
