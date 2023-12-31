/**
 * Component representing a section with video-only project cards for a quick look at the projects.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the VideoOnlyCardSection component.
 */
import SmallVideoOnlyCard from "./Project cards/SmallVideoOnlyCard";

function VideoOnlyCardSection() {
  return (
    <div className="flex flex-col">
      <p className="p-2 text-2xl">Quick Look 👀</p>
      <div className="mt-5 grid gap-y-10 rounded-lg border-2 border-zinc-700 bg-slate-900 shadow-xl shadow-slate-800 sm:p-10 lg:grid-cols-2">
        <SmallVideoOnlyCard
          name="Fortnite Shopping Cart App"
          description="Consumes Fortnite Public API to fetch current items in sale, displays home page , product catalog and shopping cart system"
          src="/video/shopping-app.mp4"
          techs={["typescript", "react", "css", "git"]}
          backgroundColor="bg-teal-50"
          code="https://github.com/JuanP-VT/shop-app"
          demo="https://juanp-vt.github.io/shop-app"
        />
        <SmallVideoOnlyCard
          name="Resume Builder"
          description="Allows to build your resume with a custom template and download as PDF"
          src="/video/cv-app.mp4"
          techs={["typescript", "react", "css", "git"]}
          backgroundColor="bg-emerald-100"
          code="https://github.com/JuanP-VT/cv-app"
          demo="https://juanp-vt.github.io/cv-app/"
        />
        <SmallVideoOnlyCard
          name="Etch A Sketch"
          description="Painting game, unleash your creativity, you can select brush mode, color , eraser and set the grid to different sizes"
          src="/video/etch-a-sketch.mp4"
          techs={["javascript", "html", "css", "webpack", "git"]}
          backgroundColor="bg-sky-100"
          code="https://github.com/JuanP-VT/ETCH-A-SKETCH"
          demo="https://juanp-vt.github.io/ETCH-A-SKETCH/"
        />
        <SmallVideoOnlyCard
          name="Library App"
          description="Allows the user to store book cards in its personal library, the user can sort this cards as reminders"
          src="/video/library.mp4"
          techs={["javascript", "html", "css", "webpack", "git"]}
          backgroundColor="bg-red-100"
          code="https://github.com/JuanP-VT/Library"
          demo="https://juanp-vt.github.io/Library/"
        />
      </div>
    </div>
  );
}

export default VideoOnlyCardSection;
