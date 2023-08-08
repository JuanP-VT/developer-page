/**
 * Represents the navigation bar for the About Me section.
 *
 * This component is responsible for rendering the navigation bar in the About Me section.
 * It consists of two buttons to switch between "Hobbies" and "Professional Background" sections.
 *
 * @component
 *
 * @param {Object} Props - The props for the AboutMeNav component.
 * @param {React.Dispatch<React.SetStateAction<"hobbies" | "background">>} Props.setCurrentSection - A function to set the current section ("hobbies" or "background").
 * @param {"hobbies" | "background"} Props.currentSection - The currently selected section ("hobbies" or "background").
 * @returns {JSX.Element} JSX element representing the navigation bar for the About Me section.
 */

type Props = {
  setCurrentSection: React.Dispatch<
    React.SetStateAction<"hobbies" | "background">
  >;
  currentSection: "hobbies" | "background";
};

function AboutMeNav({ currentSection, setCurrentSection }: Props) {
  return (
    <div className="absolute top-0 mt-7 flex w-full gap-3 rounded-lg bg-sky-900 p-2 px-5 text-gray-300">
      <button
        className={`rounded-lg  p-2 px-10 ${
          currentSection === "hobbies" ? "bg-sky-700" : "bg-black"
        }  text-xs sm:text-base`}
        onClick={() => setCurrentSection("hobbies")}
      >
        Hobbies
      </button>
      <button
        className={`rounded-lg  p-2 sm:px-10 ${
          currentSection === "background" ? "bg-sky-700" : "bg-black"
        }  text-xs sm:text-base`}
        onClick={() => setCurrentSection("background")}
      >
        Professional Background
      </button>
    </div>
  );
}

export default AboutMeNav;
