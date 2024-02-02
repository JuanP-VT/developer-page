/**
 * Component representing the projects section of the portfolio.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the ProjectsSection component.
 */
"use client";
import { LanguageContext } from "@/app/languageContext";
import ChronologicalOrdered from "./ChronologicalOrdered";
import HighlightCard from "./Project cards/HighlightCard";
import { useContext } from "react";
function ProjectsSection() {
  const languageContext = useContext(LanguageContext);
  return (
    <section
      id="Projects"
      className="flex  flex-col justify-center bg-black pb-20 sm:p-10 "
    >
      <p className=" mt-6 text-center text-5xl text-white antialiased sm:text-start sm:text-6xl ">
        {" "}
        {languageContext === "en" ? "Experience" : "Experiencia"}
      </p>
      <p className="py-3  text-2xl italic text-white sm:text-4xl">
        {languageContext === "en" ? "🌟Highlight🌟" : "🌟Destacados🌟"}
      </p>
      <div className="flex flex-col items-center justify-center p-1 sm:gap-20 xl:flex-row">
        <HighlightCard
          imageSrc="/projects-photos/17-Temazcal.png"
          projectName="Temazcal Website"
          description={
            languageContext === "en"
              ? "Developed a responsive website for a local business. The project involved crafting an eye-catching design, a blog system, a FAQ section, an image gallery, and contact. I also integrated the website with a Map Api and Contentful CMS.Clients were very happy with my work"
              : "Desarrollé un sitio web responsivo para un negocio local. El proyecto incluyó la creación de un diseño llamativo, un sistema de blog, una sección de preguntas frecuentes, una galería de imágenes y un formulario de contacto. También integré el sitio web con Map Api y Contentful CMS. Los clientes quedaron muy contentos con mi trabajo"
          }
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
          description={
            languageContext === "en"
              ? "Pc Hub is my most complex personal project to date, a full-stack ecommerce  app built from the ground up to challenge myself and deepen my          skills in both front-end and back-end development. Though front-end          is my forte, I am particularly proud of how I thrived in this          full-stack environment"
              : "Pc Hub es mi proyecto personal más complejo hasta la fecha, una aplicación de comercio electrónico full-stack creada desde cero para desafiarme a mí mismo y profundizar mis habilidades tanto en el desarrollo front-end como back-end. Si bien el front-end es mi fuerte, estoy particularmente orgulloso de cómo prosperé en este entorno full-stack"
          }
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
          {languageContext === "en"
            ? " Student Journey 🚀"
            : "Portafolio De Estudiante 🚀"}
        </p>
        <p className="font-medium text-white sm:text-lg xl:w-270">
          {languageContext === "en"
            ? "¡Witness the seeds of a web developer blossom! This student portfolio showcases my unwavering pursuit of excellence in web development. From         basic front-end foundations to conquering Javascript intricacies, each         project marks a chapter in my learning journey. Join me as I unlock         new skills and refine my craft, one line of code at a time."
            : "¡Sé testigo de cómo una semilla de desarrollador web florece! Este portafolio estudiantil muestra mi constante búsqueda de la excelencia en el desarrollo web. Desde los fundamentos básicos del front-end hasta conquistar las complejidades de Javascript, cada proyecto marca un capítulo en mi aprendizaje. Acompáñame mientras desbloqueo nuevas habilidades y refino mi arte, línea de código por línea."}
        </p>
      </div>
      <ChronologicalOrdered />
    </section>
  );
}

export default ProjectsSection;
