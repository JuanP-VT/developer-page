/**
 * Represents a skill card related to my background in Industrial Engineering.
 *
 * This component displays an image representing a specific skill, along with its name and a brief description.
 * The description is hidden by default and appears on hover, providing additional details about the skill.
 * It used within the "Background" section of the About Me page to showcase skills acquired from Industrial Engineering.
 *
 * @component
 *
 * @param {Object} Props - The props for the IESkill component.
 * @param {string} Props.name - The name of the skill.
 * @param {string} Props.description - A brief description of the skill.
 * @param {string} Props.imageSrc - The URL or path of the image representing the skill.
 * @returns {JSX.Element} JSX element representing a skill card related to the developer's background in Industrial Engineering.
 */
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
