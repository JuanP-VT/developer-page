/**
 * Component representing the projects section of the portfolio.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the ProjectsSection component.
 */
"use client";
import ChronologicalOrdered from "./ChronologicalOrdered";
import HighlightCard from "./Project cards/HighlightCard";
function ProjectsSection() {
  return (
    <section
      id="Projects"
      className="flex  flex-col justify-center bg-black pb-20 sm:p-10 "
    >
      <p className=" mt-6 text-center text-5xl text-white antialiased sm:text-start sm:text-6xl ">
        Experience
      </p>
      <p className="py-3  text-2xl italic text-white sm:text-4xl">
        🌟Highlight🌟
      </p>
      <div className="flex flex-col items-center justify-center p-1 sm:gap-20 xl:flex-row">
        <HighlightCard
          imageSrc="/projects-photos/17-Temazcal.png"
          projectName="Temazcal Website"
          description="Developed a responsive website for a local business. The project involved crafting an eye-catching design, a blog system, a FAQ section, an image gallery, and contact. I also integrated the website with a Map Api and Contentful CMS.
          Clients were very happy with my work"
          techs={[
            "typescript",
            "react",
            "nextjs",
            "tailwindcss",
            "jest",
            "git",
            "github",
            "vercel",
          ]}
          demo="https://temazcalmochis.com"
        />
        <HighlightCard
          projectName="Pc Hub - Ecommerce App"
          imageSrc="/projects-photos/16-Ecommerce2.png"
          description="Pc Hub is my most complex personal project to date, a full-stack ecommerce
          app built from the ground up to challenge myself and deepen my
          skills in both front-end and back-end development. Though front-end
          is my forte, I am particularly proud of how I thrived in this
          full-stack environment"
          techs={[
            "typescript",
            "react",
            "nextjs",
            "tailwindcss",
            "mongodb",
            "jest",
            "git",
            "github",
            "vercel",
          ]}
          demo="https://store-juanp-vt.vercel.app/"
          code="https://github.com/JuanP-VT/pc-ecommerce"
        />
      </div>
      <div className="flex flex-col p-2">
        <p className="py-5 text-center text-5xl text-white sm:text-start">
          Student Journey 🚀
        </p>
        <p className="font-medium text-white sm:text-lg xl:w-270">
          Witness the seeds of a web developer blossom! This student portfolio
          showcases my unwavering pursuit of excellence in web development. From
          basic front-end foundations to conquering Javascript intricacies, each
          project marks a chapter in my learning journey. Join me as I unlock
          new skills and refine my craft, one line of code at a time.
        </p>
      </div>
      <ChronologicalOrdered />
    </section>
  );
}

export default ProjectsSection;
