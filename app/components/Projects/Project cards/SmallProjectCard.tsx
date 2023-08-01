import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import TechIcon from "../../Tech stack/TechIcon";
import Image from "next/image";
type Props = {
  src: string;
  name: string;
  description: string;
  techs: string[];
  backgroundColor: string;
  code: string;
  demo: string;
};

function SmallProjectCard({
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
      className={`flex w-full flex-col justify-center rounded-lg ${backgroundColor} border-2 p-3 shadow-md sm:max-w-md`}
    >
      <div className="flex w-full flex-col justify-center ">
        <p className="my-8 text-center text-2xl">{name}</p>
        <Image
          src={src}
          width={1000}
          height={1000}
          alt="photo of the website"
          className="w-full rounded-lg border-2"
        ></Image>
      </div>
      <div className="flex w-full flex-col sm:px-16">
        <p className="p-2 py-5 text-center">{description}</p>
        <p className="p-3 text-center text-xl  font-medium">Technologies</p>
        <div className="grid grid-cols-3 items-center justify-center gap-y-5">
          {techs.map((tech, i) => (
            <TechIcon key={`prjTech${i}`} name={tech} />
          ))}
        </div>
        <div className="flex justify-center gap-2 py-10">
          <a
            className="flex rounded-lg border-2 border-sky-600 bg-zinc-300 px-5"
            href={code}
          >
            <FontAwesomeIcon
              icon={faLink}
              className="h-5 w-5 p-2 sm:h-8 sm:w-8"
            />
            <p className="flex items-center font-medium">Code</p>
          </a>
          <a
            className="flex rounded-lg border-2  border-sky-600 bg-zinc-300 px-5"
            href={demo}
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="h-5 w-5 p-2 sm:h-8 sm:w-8"
            />
            <p className="flex items-center font-medium">Demo</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SmallProjectCard;
