import Image from "next/image";

type Props = { name: string; description: string; imageSrc: string };

function IESkill({ name, description, imageSrc }: Props) {
  return (
    <div className="relative flex w-72 flex-col items-center self-center">
      <Image src={imageSrc} alt="skill" width={100} height={100} className="" />
      <div className="">
        <div
          data-description={description}
          className={`inline-block cursor-pointer p-2 text-center after:absolute 
          after:bottom-0 after:left-0 after:hidden after:w-72 after:rounded-lg after:border-2 
          after:bg-black after:p-5 after:text-13px after:text-white  after:transition-all 
          after:content-[attr(data-description)] hover:after:block`}
        >
          {name}
        </div>
      </div>
    </div>
  );
}

export default IESkill;
