import Image from "next/image";

type Props = { name: string; description: string; imageSrc: string };

function IESkill({ name, description, imageSrc }: Props) {
  return (
    <div className="relative flex w-72 flex-col items-center">
      <Image src={imageSrc} alt="skill" width={100} height={100} className="" />
      <div className="">
        <div data-description={description} className="IESkill flex p-2">
          {name}
        </div>
      </div>
    </div>
  );
}

export default IESkill;
