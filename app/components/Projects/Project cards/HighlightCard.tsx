import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
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
      className="flex h-min w-full max-w-6xl flex-col-reverse justify-center rounded-xl border-2
         border-zinc-300 bg-sky-100 pb-5 shadow-md md:flex-row"
    >
      <div className="mx-1 mt-5 flex  flex-col items-center justify-center sm:w-128 ">
        <iframe
          src={videoUrl}
          className="h-80 w-full rounded-md md:mr-10"
        ></iframe>
        <p className="py-2 pl-2 pr-3  text-sm">
          I enthusiastically share my motivations behind this project, delve
          into the technical architecture that powers it, and provide
          comprehensive explanation of the Apps functionalities. <br />
          <strong>Spanish / Sub Eng</strong>
        </p>
      </div>
      <div className="flex flex-col px-2 sm:w-full md:w-128">
        <div className="flex-flex-col px-2">
          <p className="flex justify-center p-4 text-3xl">{projectName}</p>
          <p className="mb-5 flex justify-center  sm:px-10">{description}</p>
        </div>

        <div className="grid grid-cols-3 items-center justify-center gap-y-5">
          {techs.map((tech, i) => (
            <TechIcon key={`prjTech${i}`} name={tech} />
          ))}
        </div>
        <div className="flex flex-col px-2">
          <h2 className="mb-2 mt-5 text-lg font-semibold text-gray-900 ">
            Features
          </h2>
          <ul className="grid max-w-md list-inside list-disc grid-cols-1 space-y-1 sm:grid-cols-2">
            {featureList.map((feature, i) => (
              <li className="mr-2" key={`ft${i}`}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center gap-2 py-10">
          <a
            className="flex rounded-lg border-2 border-sky-600 bg-zinc-300 px-5"
            href={code}
          >
            <FontAwesomeIcon icon={faLink} className=" h-8 w-8 p-2" />
            <p className="flex items-center font-medium">Code</p>
          </a>
          <a
            className="flex rounded-lg border-2  border-sky-600 bg-zinc-300 px-5"
            href={demo}
          >
            <FontAwesomeIcon icon={faGithub} className="h-8 w-8 p-2" />
            <p className="flex items-center font-medium">Demo</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HighlightCard;
