/**
 * A card component to highlight project information with video, description, tech stack, and features.
 *
 * @component
 * @param {Object} Props - The props for the HighlightCard component.
 * @param {string} Props.videoUrl - The URL of the video related to the project.
 * @param {string} Props.projectName - The name of the project.
 * @param {string} Props.description - The description of the project.
 * @param {string[]} Props.techs - An array of strings representing the tech stack used in the project.
 * @param {string[]} Props.featureList - An array of strings representing the features of the project.
 * @param {string} Props.code - The URL to the source code of the project.
 * @param {string} Props.demo - The URL to the demo or live version of the project.
 * @returns {JSX.Element} The JSX element representing the HighlightCard component.
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import TechIcon from "../../Tech stack/TechIcon";
import Image from "next/image";
import Link from "next/link";
export const dynamic = "force-dynamic";
type Props = {
  projectName: string;
  description: string;
  techs: string[];
  code?: string;
  demo: string;
  imageSrc: string;
};

function HighlightCard({
  projectName,
  description,
  techs,
  demo,
  code,
  imageSrc,
}: Props) {
  return (
    <div
      className="flex h-min  max-w-xl  rounded-xl border-2 border-zinc-300
         bg-sky-50 p-3 pb-5 shadow-md md:flex-row"
    >
      <div className="flex flex-col px-2">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="flex p-2 text-3xl">{projectName}</p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row">
          <Image
            className=" w-3/5 self-center rounded-md"
            alt="demo site"
            width={500}
            height={500}
            src={imageSrc}
          />
          <div className="mt-2 grid grid-cols-3 items-center justify-center gap-y-2 self-center px-8 xl:px-0">
            {techs.map((tech, i) => (
              <TechIcon key={`prjTech${i}`} name={tech} />
            ))}
          </div>
        </div>
        <p className="py-4 pl-3 ">{description}</p>

        <div className="flex gap-2 self-baseline p-3">
          {code ? (
            <Link
              target="_blank"
              className="flex h-11 rounded-lg border-2 border-sky-600 bg-zinc-200 px-2 hover:text-blue-500"
              href={code}
            >
              <FontAwesomeIcon
                icon={faLink}
                className="h-4 w-4 p-2 sm:h-8 sm:w-8"
              />
              <p className="flex items-center font-medium">Code</p>
            </Link>
          ) : (
            ""
          )}
          <Link
            target="_blank"
            className="flex h-11 self-center rounded-lg border-2 border-sky-600 bg-zinc-200 px-2 hover:text-blue-500"
            href={demo}
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="h-4 w-4 self-center p-2 sm:h-8 sm:w-8"
            />
            <p className="flex items-center font-medium">Demo</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HighlightCard;
