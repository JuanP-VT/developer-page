/**
 * A project card component to showcase a project with its details, technologies used, and objectives.
 *
 * @component
 * @param {Object} Props - The props for the SmallProjectCard component.
 * @param {string} Props.src - The URL of the image representing the project.
 * @param {string} Props.name - The name of the project.
 * @param {string} Props.description - The description of the project.
 * @param {string[]} Props.techs - An array of strings representing the technologies used in the project.
 * @param {string} Props.code - The URL to the source code of the project.
 * @param {string} Props.demo - The URL to the demo or live version of the project.
 * @param {string[]} Props.objectives - An array of strings representing the objectives or focus of the project.
 * @returns {JSX.Element} The JSX element representing the SmallProjectCard component.
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { list } from "./bgList";
import TechIcon from "../../Tech stack/TechIcon";
import Image from "next/image";
import { useEffect, useState } from "react";
type Props = {
  src: string;
  name: string;
  description: string;
  techs: string[];
  backgroundColor: string;
  code: string;
  demo: string;
  objectives: string[];
};

function SmallProjectCard({
  src,
  description,
  name,
  techs,
  code,
  demo,
  objectives,
}: Props) {
  const [currentBg, setCurrentBg] = useState("");
  useEffect(() => {
    //Initial load
    const randomNumber = Math.floor(Math.random() * list.length);
    setCurrentBg(list[randomNumber]);
    //set Timer
    const myInterval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * list.length);
      setCurrentBg(list[randomNumber]);
    }, 10000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <div
      className={`flex w-full flex-col items-center rounded-lg ${currentBg} border-2 p-3 shadow-md sm:max-w-md`}
    >
      <div className="flex w-full flex-col justify-center">
        <p className="my-8 text-center text-2xl font-medium">{name}</p>
        <Image
          src={src}
          width={1000}
          height={1000}
          alt="photo of the website"
          className="w-full rounded-lg border-2"
        ></Image>
      </div>
      <div className="flex w-full flex-col sm:px-16">
        <p className="flex h-32 items-center p-2 py-5 text-center">
          {description}
        </p>
        <p className="p-3 text-center text-xl  font-medium">Technologies</p>
        <div className="grid grid-cols-3 items-center justify-center gap-y-5">
          {techs.map((tech, i) => (
            <TechIcon key={`prjTech${i}`} name={tech} />
          ))}
        </div>
        <div className="flex justify-center gap-2 py-10">
          <a
            target="_blank"
            className="flex rounded-lg border-2 border-sky-700 bg-zinc-300 px-5 hover:text-sky-600"
            href={code}
          >
            <FontAwesomeIcon
              icon={faLink}
              className="h-5 w-5 p-2 sm:h-8 sm:w-8"
            />
            <p className="flex items-center font-medium">Code</p>
          </a>
          <a
            className="flex rounded-lg border-2 border-sky-600 bg-zinc-300 px-5 hover:text-sky-600"
            href={demo}
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="h-5 w-5 p-2 sm:h-8 sm:w-8"
            />
            <p className="flex items-center font-medium">Demo</p>
          </a>
        </div>
        <div className="flex flex-col">
          <p className="font-medium">Focus</p>
          <ul className="grid max-w-md grid-cols-1   space-y-1  ">
            {objectives.map((objetive, i) => (
              <li className="ml-3 mr-2" key={`ft${i}`}>
                -{objetive}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SmallProjectCard;
