import PictureBlob from "./PictureBlob";
import TypingAnimation from "./TypingAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function HomeSection() {
  return (
    <section
      id="Home"
      className="relative flex min-h-screen flex-col items-center justify-center
       bg-slate-950   md:flex-row  "
    >
      <div className="relative mt-5  flex flex-col items-center xl:pl-60">
        <PictureBlob />
        <div className="mt-2 w-full text-center">
          <TypingAnimation />
        </div>
      </div>
      <div className=" mt-5 flex flex-col  text-slate-200 xl:pr-40">
        <h1 className=" mb-10 flex px-10 text-center text-5xl font-medium text-red-600 antialiased lg:w-full lg:pl-16 lg:text-7xl">
          Web Developer
        </h1>
        <p className="px-8  md:text-lg lg:pl-16  2xl:pr-40">
          Hello, my name is{" "}
          <span className="font-medium text-red-600">Juan Pablo Valdez</span>, I
          am a programmer and industrial engineer with a passion for{" "}
          <span className="font-medium text-red-600">ReactJS</span> and{" "}
          <span className="font-medium text-red-600">NodeJS</span> development.
          I believe in the transformative power of love and determination in
          achieving remarkable results throughout my web development journey! 💪
        </p>
        <div className="mb-10 flex gap-3 pl-8 pt-5 lg:pl-16">
          <a href="https://www.linkedin.com/in/pavatbdev/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-14 w-14  hover:text-red-700"
            />
          </a>
          <a href="https://github.com/JuanP-VT" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="h-14 w-14 hover:text-red-700"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
