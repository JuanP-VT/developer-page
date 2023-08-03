type Props = {
  setCurrentSection: React.Dispatch<
    React.SetStateAction<"hobbies" | "background">
  >;
};

function AboutMeNav({ setCurrentSection }: Props) {
  return (
    <div className=" absolute top-0 flex gap-3 rounded-lg border bg-slate-500 p-2 text-white">
      <button
        className="rounded-lg border bg-slate-950 p-2 text-xs hover:bg-sky-950 sm:text-base"
        onClick={() => setCurrentSection("hobbies")}
      >
        Hobbies
      </button>
      <button
        className="rounded-lg border bg-slate-950 p-2 text-xs hover:bg-sky-950 sm:text-base"
        onClick={() => setCurrentSection("background")}
      >
        Professional Background
      </button>
    </div>
  );
}

export default AboutMeNav;
