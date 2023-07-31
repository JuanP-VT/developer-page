import Image from "next/image";

type Props = { name: string };

function TechIcon({ name }: Props) {
  return (
    <div className="mr-5 flex w-20 flex-col ">
      <Image
        alt="tech icon"
        src={`https://skillicons.dev/icons?i=${name}`}
        width={50}
        height={50}
        className="self-center"
      />
      <p className="mt-2 text-center capitalize">{name}</p>
    </div>
  );
}

export default TechIcon;
