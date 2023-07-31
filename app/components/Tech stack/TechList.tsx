import TechIcon from "./TechIcon";
type Props = {
  title: string;
  techs: string[];
};

function TechList({ techs, title }: Props) {
  return (
    <div className="flex flex-col px-2">
      <p className="pb-2 text-2xl font-medium">{title}</p>
      <div className="grid grid-cols-3 justify-center gap-y-5">
        {techs.map((tech, i) => (
          <TechIcon name={tech} key={`tech${i}`} />
        ))}
      </div>
    </div>
  );
}

export default TechList;
