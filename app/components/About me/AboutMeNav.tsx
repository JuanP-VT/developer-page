type Props = {
  setCurrentSection: React.Dispatch<
    React.SetStateAction<"hobbies" | "background">
  >;
  currentSection: "hobbies" | "background";
};

function AboutMeNav({ currentSection, setCurrentSection }: Props) {
  return (
    <div className=" absolute top-0 flex w-full gap-3 rounded-lg bg-sky-900 p-2 px-5 text-gray-300">
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
