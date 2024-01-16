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
export const dynamic = "force-dynamic";
type Props = {
  videoUrl: string;
  projectName: string;
  description: string;
  techs: string[];
  featureList: string[];
  code: string;
  demo: string;
};

function HighlightCard({
  videoUrl,
  projectName,
  description,
  techs,
  featureList,
  demo,
  code,
}: Props) {
  return (
    <div
      className="flex h-min w-full  flex-col-reverse justify-center rounded-xl border-2
         border-zinc-300 bg-sky-100 pb-5 shadow-md md:flex-row"
    >
      <div className="mt-5 flex flex-col items-center justify-center sm:mr-5 sm:h-full sm:max-w-4xl">
        <iframe src={videoUrl} className="h-128 w-full rounded-xl   "></iframe>
        <p className="py-2 pl-2 pr-3  text-sm">
          I enthusiastically share my motivations behind this project, delve
          into the technical architecture that powers it, and provide
          comprehensive explanation of the Apps functionalities. <br />
          <strong>Spanish / Sub Eng</strong>
        </p>
      </div>
      <div className="flex flex-col px-2 sm:w-full md:w-128">
        <div className="flex-flex-col ">
          <p className="flex justify-center py-4 text-3xl">{projectName}</p>
          <p className="mb-5 flex justify-center  xl:px-10">{description}</p>
        </div>

        <div className="grid grid-cols-3 items-center justify-center gap-y-5">
          {techs.map((tech, i) => (
            <TechIcon key={`prjTech${i}`} name={tech} />
          ))}
        </div>
        <div className="flex flex-col px-2">
          <h2 className="mb-2 ml-3 mt-10 text-lg font-semibold text-gray-900 ">
            Features
          </h2>
          <ul className="grid max-w-md grid-cols-1   space-y-1  sm:grid-cols-2">
            {featureList.map((feature, i) => (
              <li className="ml-3 mr-2" key={`ft${i}`}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center gap-2 py-10">
          <a
            className="flex rounded-lg border-2 border-sky-600 bg-zinc-300 px-5 hover:text-blue-500"
            href={code}
          >
            <FontAwesomeIcon
              icon={faLink}
              className="h-5 w-5 p-2 sm:h-8 sm:w-8"
            />
            <p className="flex items-center font-medium">Code</p>
          </a>
          <a
            className="flex rounded-lg border-2  border-sky-600 bg-zinc-300 px-5 hover:text-blue-500"
            href={demo}
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="h-5  w-5 p-2 sm:h-8 sm:w-8"
            />
            <p className="flex items-center font-medium">Demo</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HighlightCard;
