import PictureBlob from "./PictureBlob";
import TypingAnimation from "./TypingAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function HomeSection() {
  return (
    <section
      id="Home"
      className="relative flex min-h-screen w-screen flex-col
      items-center bg-sky-100 pt-5 sm:flex-row sm:items-start sm:pt-60 "
    >
      <div className="relative mt-16 flex w-screen flex-col items-center sm:mt-0 sm:h-screen xl:pl-60">
        <PictureBlob />
        <div className="mt-2 w-full text-center">
          <TypingAnimation />
        </div>
      </div>
      <div className=" mt-5 flex flex-col  xl:pr-40">
        <h1 className=" mb-10 flex px-10 text-center text-5xl antialiased lg:w-full lg:pl-16 lg:text-7xl">
          ReactJS-NodeJS <br />
          Developer
        </h1>
        <p className="px-8  lg:pl-16  2xl:pr-40">
          Hello, Im Juan Pablo Valdez, a proven Industrial Engineer with a
          passion for ReactJS and NodeJS development. I believe in the
          transformative power of determination in achieving remarkable results
          throughout my web development journey! 💪
        </p>
        <div className="mb-10 flex gap-3 pl-8 pt-5 lg:pl-16">
          <a href="https://www.linkedin.com/in/pavatbdev/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-14 w-14  hover:text-blue-700"
            />
          </a>
          <a href="https://github.com/JuanP-VT" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="h-14 w-14 hover:text-blue-700"
            />
          </a>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1b2IWZGYg0yHgtUePbFSn7gG2KHyqhZgW/view?usp=sharing"
            className="flex h-12 w-24 items-center justify-center rounded-lg border
              border-zinc-400 bg-black px-3 text-lg text-white shadow-lg outline-none hover:bg-blue-700"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
