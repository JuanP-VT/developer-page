/**
 * Represents the "Background" section of the About Me page.
 *
 * This component displays information about the professional background of the developer.
 * It highlights skills acquired from a previous background in industrial engineering
 * and explains how those skills are valuable in the field of software development.
 *
 * @component
 *
 * @returns {JSX.Element} JSX element representing the "Background" section of the About Me page.
 */

import { useContext } from "react";
import IESkill from "./IESkill";
import { LanguageContext } from "@/app/page";

function Background() {
  const languageContext = useContext(LanguageContext);
  return (
    <div className="flex flex-col sm:p-5">
      <div className="flex w-full flex-col justify-center sm:justify-normal">
        <p className="p-2 text-3xl font-medium">
          {languageContext === "en"
            ? "¿Industrial Engineer? "
            : "¿Ingeniero Industrial?"}
        </p>
        <p className="w-3xl p-2">
          {languageContext === "en" ? (
            <span>
              Beyond my programming experience, I bring a unique set of skills
              to the table as a former industrial engineer.
              <br />
              My background in industrial engineering has instilled in me a
              strong analytical mindset, attention to detail, and an ability to
              optimize complex systems.
              <br />
              These qualities complement my passion for software development,
              allowing me to approach challenges with a well-rounded perspective
            </span>
          ) : (
            <span>
              Además de mi experiencia en programación, como ingeniero
              industrial, aporto un conjunto único de habilidades.
              <br />
              Mi formación en ingeniería industrial me ha inculcado una sólida
              mentalidad analítica, atención al detalle y la capacidad de
              optimizar sistemas complejos.
              <br />
              Estas cualidades se complementan perfectamente con mi pasión por
              el desarrollo de software, lo que me permite abordar los desafíos
              con una perspectiva integral y versátil
            </span>
          )}
        </p>
        <p className="p-1 font-bold">
          {languageContext === "en"
            ? "¡Click the skill for more detail!"
            : "¡Click a la habilidad para más detalle!"}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-5 sm:grid sm:p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <IESkill
          name={
            languageContext === "en"
              ? "Analytical & problem-solving skills"
              : "Habilidades Analíticas y de resolución de problemas"
          }
          description={
            languageContext === "en"
              ? "Industrial engineers are trained to analyze complex systems and processes, identify inefficiencies, and develop solutions to improve them. These analytical and problem-solving skills are highly transferable to software development, where programmers often encounter complex coding challenges and need to devise efficient and effective solutions"
              : "Los ingenieros industriales están capacitados para analizar sistemas y procesos complejos, identificar ineficiencias y desarrollar soluciones para mejorarlos. Estas habilidades analíticas y de resolución de problemas son altamente transferibles al desarrollo de software, donde los programadores a menudo se encuentran con desafíos de codificación complejos y necesitan diseñar soluciones eficientes y efectivas"
          }
          imageSrc="/IESkills/problem.png"
        />
        <IESkill
          name={
            languageContext === "en"
              ? "Systems thinking"
              : "Pensamiento Sistemático"
          }
          description={
            languageContext === "en"
              ? "Industrial engineers have a holistic approach to problem-solving, considering the interconnectedness of various components within a system. This perspective is valuable in software development, where developers need to understand how different modules and components interact to build scalable and robust software systems."
              : "Los ingenieros industriales tienen un enfoque holístico para la resolución de problemas, considerando la interconexión de varios componentes dentro de un sistema. Esta perspectiva es valiosa en el desarrollo de software, donde los desarrolladores necesitan entender cómo diferentes módulos y componentes interactúan para construir sistemas de software escalables y robustos"
          }
          imageSrc="/IESkills/thinking.png"
        />
        <IESkill
          name={
            languageContext === "en" ? "Quality Focus" : "Enfoque en la calidad"
          }
          description={
            languageContext === "en"
              ? "Industrial engineers are trained to prioritize quality in their work to ensure products or processes meet high standards. In software development, writing clean, bug-free code and conducting thorough testing are vital for delivering high-quality software."
              : "Los ingenieros industriales están capacitados para priorizar la calidad en su trabajo, garantizando que los productos o procesos cumplan con altos estándares. En el desarrollo de software, escribir código limpio y libre de errores, y realizar pruebas exhaustivas, son aspectos vitales para entregar un software de alta calidad."
          }
          imageSrc="/IESkills/quality.png"
        />
        <IESkill
          name={
            languageContext === "en"
              ? "Process optimization"
              : "Optimización de procesos"
          }
          description={
            languageContext === "en"
              ? "Industrial engineers are well-versed in optimizing workflows and processes to increase productivity and efficiency. In the world of software development, this skill can be applied to streamline development methodologies and project management practices, leading to faster and more efficient software development cycles."
              : "Los ingenieros industriales están altamente capacitados para optimizar flujos de trabajo y procesos con el objetivo de aumentar la productividad y la eficiencia. En el mundo del desarrollo de software, esta habilidad se puede aplicar para agilizar las metodologías de desarrollo y las prácticas de gestión de proyectos, lo que conduce a ciclos de desarrollo de software más rápidos y eficientes"
          }
          imageSrc="/IESkills/optimization.png"
        />

        <IESkill
          name={
            languageContext === "en"
              ? "Continuous improvement mindset"
              : "Mentalidad de mejora continua"
          }
          description={
            languageContext === "en"
              ? "Industrial engineers are trained to continuously seek improvements in processes and systems. In the realm of software development, this mindset translates into the ability to refactor code, seek better algorithms, and implement best practices to ensure code quality and maintainability."
              : "Los ingenieros industriales están formados para buscar continuamente mejoras en procesos y sistemas. En el ámbito del desarrollo de software, esta mentalidad se traduce en la capacidad de refactorizar código, buscar mejores algoritmos e implementar las mejores prácticas para garantizar la calidad y mantenibilidad del código"
          }
          imageSrc="/IESkills/improve.png"
        />
        <IESkill
          name={
            languageContext === "en"
              ? "Project management skills"
              : "Habilidades de gestión de proyectos"
          }
          description={
            languageContext === "en"
              ? "Industrial engineers are skilled in project management, planning, and resource allocation. These skills are beneficial in software development to ensure projects are delivered on time and within budget, as well as to effectively collaborate with cross-functional teams."
              : "Los ingenieros industriales son expertos en gestión de proyectos, planificación y asignación de recursos. Estas habilidades son sumamente beneficiosas en el desarrollo de software para garantizar la entrega de proyectos a tiempo y dentro del presupuesto, así como para colaborar eficazmente con equipos multidisciplinarios"
          }
          imageSrc="/IESkills/project-management.png"
        />
        <IESkill
          name={
            languageContext === "en"
              ? "Communication and teamwork"
              : "Comunicación y trabajo en equipo"
          }
          description={
            languageContext === "en"
              ? "Industrial engineers often work in multidisciplinary teams, requiring excellent communication and collaboration skills. These skills are essential for developers, as software development projects usually involve working with designers, product managers, and other stakeholders."
              : "Los ingenieros industriales a menudo trabajan en equipos multidisciplinarios, lo que requiere excelentes habilidades de comunicación y colaboración. Estas habilidades son esenciales para los desarrolladores, ya que los proyectos de desarrollo de software normalmente implican trabajar con diseñadores, gerentes de producto y otras partes interesadas"
          }
          imageSrc="/IESkills/teamwork.png"
        />
        <IESkill
          name={
            languageContext === "en"
              ? "Flexibility and adaptability"
              : "Flexibilidad y adaptabilidad"
          }
          description="Industrial engineers are trained to adapt to different industries and environments, making them well-suited for the fast-paced and ever-changing world of software development."
          imageSrc="/IESkills/adapt.png"
        />
      </div>
    </div>
  );
}

export default Background;
