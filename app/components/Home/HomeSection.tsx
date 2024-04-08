import PictureBlob from "./PictureBlob";
import TypingAnimation from "./TypingAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { LanguageContext } from "@/app/languageContext";

function HomeSection() {
  //Static content
  const languageContext = useContext(LanguageContext);
  return (
    <div className="relative mt-5 flex h-[50rem] min-h-screen w-full  items-center justify-center bg-blue-400 bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <section
        id="Home"
        className="relative flex min-h-screen flex-col  pt-5 sm:items-center
       sm:justify-center   md:flex-row  "
      >
        <div className="relative mt-5  flex flex-col items-center xl:pl-60">
          <PictureBlob />
          <div className="mt-2 w-full text-center">
            <TypingAnimation />
          </div>
        </div>
        <div className=" mt-5 flex flex-col  text-slate-200 xl:pr-40">
          <h1 className=" mb-10 pl-8 text-4xl font-medium text-orange-500 antialiased lg:w-full lg:pl-16 lg:text-7xl">
            {languageContext === "en" ? "Web Developer" : "Desarrollador Web"}
          </h1>
          {languageContext === "en" && (
            <p className="px-8  md:text-lg lg:pl-16  2xl:pr-40">
              Hello, my name is{" "}
              <span className="font-medium text-orange-700">
                Juan Pablo Valdez
              </span>
              , I am a programmer and industrial engineer with a passion for{" "}
              <span className="font-medium text-orange-700">ReactJS</span> and{" "}
              <span className="font-medium text-orange-700">NodeJS</span>{" "}
              development. I believe in the transformative power of love and
              determination in achieving remarkable results throughout my web
              development journey! 💪
            </p>
          )}
          {languageContext === "es" && (
            <p className="px-8  md:text-lg lg:pl-16  2xl:pr-40">
              Hola, my nombre es{" "}
              <span className="font-medium text-orange-700">
                Juan Pablo Valdez
              </span>
              , soy programador e ingeniero industrial apasionado por el
              desarrollo en{" "}
              <span className="font-medium text-orange-700">ReactJS</span> y
              <span className="font-medium text-orange-700"> NodeJS</span>.
              Confío plenamente en que el amor por lo que hago y la
              determinación son la clave para llegar lejos en el mundo.
            </p>
          )}
          <div className="mb-10 flex gap-3 pl-8 pt-5 lg:pl-16">
            <a href="https://www.linkedin.com/in/pavatbdev/" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-14 w-14  hover:text-orange-600"
              />
            </a>
            <a href="https://github.com/JuanP-VT" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="h-14 w-14 hover:text-orange-600"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeSection;
