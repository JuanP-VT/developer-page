/**
 * A video-only card component to showcase a project with a video, its details, and technologies used.
 *
 * @component
 * @param {Object} Props - The props for the SmallVideoOnlyCard component.
 * @param {string} Props.src - The URL of the video representing the project.
 * @param {string} Props.name - The name of the project.
 * @param {string} Props.description - The description of the project.
 * @param {string[]} Props.techs - An array of strings representing the technologies used in the project.
 * @param {string} Props.backgroundColor - The background color for the card.
 * @param {string} Props.code - The URL to the source code of the project.
 * @param {string} Props.demo - The URL to the demo or live version of the project.
 * @returns {JSX.Element} The JSX element representing the SmallVideoOnlyCard component.
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import TechIcon from "../../Tech stack/TechIcon";
type Props = {
  src: string;
  name: string;
  description: string;
  techs: string[];
  backgroundColor: string;
  code: string;
  demo: string;
};

function SmallVideoOnlyCard({
  src,
  description,
  name,
  techs,
  backgroundColor,
  code,
  demo,
}: Props) {
  return (
    <div
      className={`flex w-full flex-col justify-center rounded-lg ${backgroundColor} border-2 p-3 shadow-md sm:max-w-3xl`}
    >
      <div className="flex w-full flex-col justify-center ">
        <p className="my-8 text-center text-2xl">{name}</p>
        <video
          src={src}
          muted={true}
          loop={true}
          autoPlay={true}
          className="w-full rounded-lg border-2"
        ></video>
      </div>
      <div className="flex w-full flex-col sm:px-16">
        <p className="p-2 py-5 text-center">{description}</p>
        <p className="p-3 text-center text-xl  font-medium">Technologies</p>
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
