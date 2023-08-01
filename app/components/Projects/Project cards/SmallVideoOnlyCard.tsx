import TechIcon from "../../Tech stack/TechIcon";

type Props = {
  src: string;
  name: string;
  description: string;
  techs: string[];
  backgroundColor: string;
};

function SmallVideoOnlyCard({
  src,
  description,
  name,
  techs,
  backgroundColor,
}: Props) {
  return (
    <div
      className={`flex w-full flex-col justify-center rounded-lg ${backgroundColor} border-2 p-3 shadow-md sm:max-w-3xl`}
    >
      <div className="flex w-full flex-col justify-center ">
        <p className="mb-5 text-center text-2xl">{name}</p>
        <video
          src={src}
          muted={true}
          loop={true}
          autoPlay={true}
          className="w-full rounded-lg border-2"
        ></video>
      </div>
      <div className="flex w-full flex-col sm:px-16">
        <p className="p-2 text-center">{description}</p>
        <p className="p-3 text-center text-xl">Tools</p>
        <div className="grid grid-cols-3 items-center justify-center gap-y-5">
          {techs.map((tech, i) => (
            <TechIcon key={`prjTech${i}`} name={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SmallVideoOnlyCard;
