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
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { LanguageContext } from "@/app/languageContext";

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
  const languageContext = useContext(LanguageContext);
  const [currentBg, setCurrentBg] = useState("");
  //Creates an interval that will pick a random number and select a background color for the component from a list of tailwind utility classes
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

  //Manage content between techs and learning focus
  const [activeContent, setActiveContent] = useState<"tech" | "focus">("tech");

  return (
    <div
      className={`flex w-full flex-col  items-center rounded-lg ${currentBg} border-2 p-3 shadow-md sm:max-w-md`}
    >
      <div className="flex w-full flex-col justify-center">
        <p className="my-2 ml-2 text-2xl font-medium">{name}</p>
        <Image
          src={src}
          width={1000}
          height={1000}
          alt="photo of the website"
          className="w-full rounded-lg border-2"
        ></Image>
        <p className="flex h-32 items-center  py-1 ">{description}</p>
      </div>
      <div className="flex w-full flex-col  ">
        <div className="flex flex-col">
          <div className="flex gap-2 ">
            <button
              onClick={() => setActiveContent("tech")}
              className="rounded-md bg-gray-700 px-4 py-2 text-sm  text-white transition duration-300 ease-in-out hover:bg-gray-900"
            >
              {languageContext === "en"
                ? "Techs Used"
                : "Tecnologías Utilizadas"}
            </button>
            <button
              onClick={() => setActiveContent("focus")}
              className="rounded-md bg-gray-700 px-4 py-2 text-sm text-white transition duration-300 ease-in-out hover:bg-gray-900"
            >
              {languageContext === "en"
                ? "Learning Focus"
                : "Objetivo De Aprendizaje"}
            </button>
          </div>
          <div className="relative mt-3 flex h-56 ">
            <div
              className={`absolute h-52 transition-all duration-500 ${
                activeContent === "tech" ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-center text-xl  font-medium">
                {languageContext === "en" ? "Techs" : "Tecnologías"}
              </p>
              <div className="mt-1 grid grid-cols-3 items-center justify-center gap-y-1 sm:grid-cols-4">
                {techs.map((tech, i) => (
                  <TechIcon key={`prjTech${i}`} name={tech} />
                ))}
              </div>
            </div>
            <div
              className={`absolute h-52 transition-all duration-500 ${
                activeContent === "focus" ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="font-medium">
                {" "}
                {languageContext === "en" ? "Focus" : "Objetivo"}
              </p>
              <ul className={`grid max-w-md grid-cols-1 space-y-1  `}>
                {objectives.map((objetive, i) => (
                  <li className="ml-3 mr-2" key={`ft${i}`}>
                    - {objetive}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2">
          <Link
            target="_blank"
            className="flex rounded-lg border-2 border-sky-700 bg-zinc-300 px-5 hover:text-sky-600"
            href={code}
          >
            <FontAwesomeIcon icon={faGithub} className="h-5 w-5 p-2 " />

            <p className="flex items-center font-medium">
              {" "}
              {languageContext === "en" ? "Code" : "Código"}
            </p>
          </Link>

          <Link
            className="flex rounded-lg border-2 border-sky-600 bg-zinc-300 px-5 hover:text-sky-600"
            href={demo}
          >
            <FontAwesomeIcon icon={faLink} className="h-5 w-5 p-2 " />
            <p className="flex items-center font-medium">
              {" "}
              {languageContext === "en" ? "Site" : "Sitio"}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SmallProjectCard;
