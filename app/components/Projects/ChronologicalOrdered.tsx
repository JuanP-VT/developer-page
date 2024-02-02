/**
 * Component to display projects sorted chronologically.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the ChronologicalOrdered component.
 */
import { useContext } from "react";
import SmallProjectCard from "./Project cards/SmallProjectCard";
import { LanguageContext } from "@/app/page";

function ChronologicalOrdered() {
  const languageContext = useContext(LanguageContext);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center gap-y-10 p-3 md:grid md:grid-cols-2 xl:grid-cols-3">
        <SmallProjectCard
          name="Landing Page"
          description={
            languageContext === "en"
              ? "Static Page - A common Home Page page found in almost all services"
              : "Página Estática - Una página de inicio comúnmente encontrada en la mayoría de servicios "
          }
          techs={["html", "css"]}
          backgroundColor="bg-red-100"
          src="/projects-photos/1-LandingPage.png"
          code="https://github.com/JuanP-VT/Landing-page"
          demo="https://juanp-vt.github.io/Landing-page/"
          objectives={
            languageContext === "en"
              ? [
                  "Basic HTML elements; divs, p, span, img.",
                  "Basic HTML attributes; id, class",
                  "Basic CSS properties: height, width, margin",
                  "The Box model",
                ]
              : [
                  "Elementos HTML; divs, p, span, img.",
                  "Atributos Html; id, class",
                  "Propiedades CSS: height, width, margin",
                  "El Modelo Box ",
                ]
          }
        />
        <SmallProjectCard
          name="Sign Up Page"
          description={
            languageContext === "en"
              ? "Static Page - A common sign up registration page found in almost all services"
              : "Página Estática - Formulario de registro estático"
          }
          src="/projects-photos/2-SignUp Page.png"
          techs={["html", "css"]}
          backgroundColor="bg-red-100"
          code="https://github.com/JuanP-VT/Sign-up-page"
          demo="https://juanp-vt.github.io/Sign-up-page/"
          objectives={
            languageContext === "en"
              ? [
                  "Form Styling",
                  "Styling Client Form Validation",
                  "CSS PseudoClasses",
                  "CSS PseudoElements",
                  "CSS FlexBox",
                ]
              : [
                  "Estilos de Formularios",
                  "Validación de Formularios",
                  "CSS PseudoClasses",
                  "CSS PseudoElements",
                  "CSS FlexBox",
                ]
          }
        />
        <SmallProjectCard
          name="Admin Dashboard"
          description={
            languageContext === "en"
              ? "Static Page - Admin Dashboard"
              : "Página Estática - Panel de Administrador"
          }
          src="/projects-photos/3-Dashboard.png"
          techs={["html", "css"]}
          backgroundColor="bg-red-100"
          code="https://github.com/JuanP-VT/Admin-Dashboard"
          demo="https://juanp-vt.github.io/Admin-Dashboard/"
          objectives={["CSS FlexBox", "CSS Grid", "Layout"]}
        />
        <SmallProjectCard
          name={
            languageContext === "en"
              ? "Rock Paper Scissors"
              : "Piedra Papel Tijeras"
          }
          description={
            languageContext === "en"
              ? "Classic rock paper scissors game against the cpu"
              : "Juego de Piedra, Panel, Tijera contra el CPU"
          }
          src="/projects-photos/4-RockPaperScissors.png"
          techs={["javascript", "html", "css"]}
          backgroundColor="bg-red-100"
          code="https://github.com/JuanP-VT/Rock-Paper-Scissors"
          demo="https://juanp-vt.github.io/Rock-Paper-Scissors/"
          objectives={
            languageContext === "en"
              ? ["Practice Javascript", "DOM methods", "Code logic"]
              : [
                  "Practicar Javascript",
                  "Métodos del DOM",
                  "Lógica de programación",
                ]
          }
        />
        <SmallProjectCard
          name={languageContext === "en" ? "Tic Tac Toe" : "El Gato"}
          description={
            languageContext === "en"
              ? "Classic Tic Tac Toe Game vs yourself"
              : "El clásico juego de El Gato"
          }
          src="/projects-photos/5-TicTacToe.png"
          techs={["javascript", "html", "css"]}
          backgroundColor="bg-red-100"
          code="https://github.com/JuanP-VT/Tic-tac-toe"
          demo="https://juanp-vt.github.io/Tic-tac-toe/"
          objectives={
            languageContext === "en"
              ? [
                  "Javascript Objects",
                  "More complex logic",
                  "Design Patterns",
                  "More DOM Methods",
                ]
              : [
                  "Javascript Objects",
                  "Lógica más compleja",
                  "Patrones de Diseño",
                  "Más Elementos del DOM",
                ]
          }
        />
        <SmallProjectCard
          name="Etch A Sketch"
          description={
            languageContext === "en"
              ? "Simulates a Sketch board to paint in different modes"
              : "Simula una pizarra para dibujar en diferentes modos y colores"
          }
          src="/projects-photos/6-Etch A Sketch.png"
          techs={["javascript", "html", "css"]}
          backgroundColor="bg-red-100"
          code="https://github.com/JuanP-VT/ETCH-A-SKETCH"
          demo="https://juanp-vt.github.io/ETCH-A-SKETCH/"
          objectives={
            languageContext === "en"
              ? [
                  "More DOM methods",
                  "More complex logic",
                  "Event listeners",
                  "Nodes",
                ]
              : [
                  "Más métodos del DOM",
                  "Lógica Más compleja",
                  "Event listeners",
                  "Nodes",
                ]
          }
        />
        <SmallProjectCard
          name={
            languageContext === "en"
              ? "Restaurant Page"
              : "Página de restaurante"
          }
          description={
            languageContext === "en"
              ? "A dynamic restaurant page with vanilla Javascript"
              : "Página dinámica de restaurante con vanilla Javascript"
          }
          src="/projects-photos/7-Restaurant.png"
          techs={["javascript", "html", "css", "webpack"]}
          backgroundColor="bg-red-100"
          code="https://github.com/JuanP-VT/Restaurant-Page "
          demo="https://juanp-vt.github.io/Restaurant-Page/"
          objectives={
            languageContext === "en"
              ? [
                  "Dynamic Content",
                  "Clean Code principles",
                  "Modular code",
                  "Webpack",
                ]
              : [
                  "Contenido Dinámico",
                  "Principios de Clean Code",
                  "Código Modular",
                  "Webpack",
                ]
          }
        />
        <SmallProjectCard
          name="To Do List App"
          description={
            languageContext === "en"
              ? "Personal activity tracker, allows you to create projects to schedule and manage your activities"
              : "Calendarizador de actividades, te permite crear proyectos para organizar y manejar tus actividades"
          }
          src="/projects-photos/8-To Do List.png"
          techs={["javascript", "html", "css", "webpack"]}
          backgroundColor="bg-red-100"
          code="https://github.com/JuanP-VT/To-Do-List"
          demo="https://juanp-vt.github.io/To-Do-List/"
          objectives={
            languageContext === "en"
              ? [
                  "Work with modules",
                  "Clean code principles",
                  "Webpack",
                  "Get deeper OOP understanding",
                ]
              : [
                  "Código Modular",
                  "Principios Clean Code",
                  "Webpack",
                  "Entendimiento de POO",
                ]
          }
        />
        <SmallProjectCard
          name="Library App"
          description={
            languageContext === "en"
              ? "Creates beautiful cards with book information to keep track of your books"
              : "Crea bellas tarjetas para guardar información de libros"
          }
          src="/projects-photos/9-Library.png"
          techs={["javascript", "html", "css", "webpack"]}
          backgroundColor="bg-red-100"
          code="https://github.com/JuanP-VT/Library"
          demo="https://juanp-vt.github.io/Library/"
          objectives={
            languageContext === "en"
              ? [
                  "Data Structures",
                  "Practice clean code principles",
                  "LocalStorage & Session",
                ]
              : [
                  "Estructuras de datos",
                  "Principios de código limpio",
                  "LocalStorage & Session",
                ]
          }
        />
        <SmallProjectCard
          name={
            languageContext === "en" ? "Weather Forecast App" : "App De Clima"
          }
          description={
            languageContext === "en"
              ? "This App lets you check the current weather of any place of the world and a five day forecast"
              : "Esta app te permite ver el estado del clima y un pronostico de 5 días"
          }
          src="/projects-photos/11-Weather App.png"
          techs={["javascript", "html", "css", "webpack"]}
          backgroundColor="bg-red-100"
          code="https://github.com/JuanP-VT/Weather-App"
          demo="https://juanp-vt.github.io/Weather-App/"
          objectives={
            languageContext === "en"
              ? [
                  "API consumption",
                  "Documentation reading",
                  "Linters",
                  "Enhanced styling",
                ]
              : [
                  "Consumo de APis",
                  "Lectura de Documentación",
                  "Linters",
                  "Estilos más complejos",
                ]
          }
        />
        <SmallProjectCard
          name={
            languageContext === "en"
              ? "Curriculum Builder"
              : "Constructor de CVs"
          }
          description={
            languageContext === "en"
              ? "Fill the fields to generate a template you can download as PDF"
              : "Llena los campos para generar un CV que puedes descargar como PDF"
          }
          src="/projects-photos/12-CV Creator.png"
          techs={["typescript", "react", "css"]}
          backgroundColor="bg-red-100"
          code="https://github.com/JuanP-VT/cv-app"
          demo="https://juanp-vt.github.io/cv-app/"
          objectives={
            languageContext === "en"
              ? [
                  "Typescript",
                  "React",
                  "Class components",
                  "Lifecycle methods",
                  "Component state",
                ]
              : [
                  "Typescript",
                  "React",
                  "Class components",
                  "Ciclo de vida del componente ",
                  "Estado del componente",
                ]
          }
        />
        <SmallProjectCard
          name={
            languageContext === "en"
              ? "Fortnite Shopping Cart App"
              : "App de carrito de compras de Fortnite"
          }
          description={
            languageContext === "en"
              ? "Consumes Fortnite Public API to fetch current items in sale, displays home page , product catalog and shopping cart system"
              : "Consume la API publica de Fortnite para conseguir los objectos en venta y mostrarlos en una tienda con sistema de carrito de compras"
          }
          src="/projects-photos/13-Shopping Cart.png"
          techs={["typescript", "react", "css"]}
          backgroundColor="bg-red-100"
          code="https://github.com/JuanP-VT/shop-app"
          demo="https://juanp-vt.github.io/shop-app/"
          objectives={[
            "Typescript",
            "React Functional Components",
            "React hooks",
            "React router",
          ]}
        />
        <SmallProjectCard
          name={
            languageContext === "en"
              ? "Old Developer Page"
              : "Página de desarrollador 1.0"
          }
          description={
            languageContext === "en"
              ? "My First Developer Page, it was reworked a year after its release"
              : "La Primera página personal que cree, la reconstruí al tiempo"
          }
          src="/projects-photos/14-MyWebPage.png"
          techs={["typescript", "react", "sass"]}
          backgroundColor="bg-red-100"
          code="https://github.com/JuanP-VT/personal-web-page"
          demo="https://juanp-vt.github.io/personal-web-page/"
          objectives={
            languageContext === "en"
              ? [
                  "Summarize my skills and competences in a webpage",
                  "Utilize a wide range of web developer skills (not just a boring page",
                  "No Framework Styling",
                ]
              : [
                  "Resumir mis habilidades y competencias en una página",
                  "Utilizar una amplia gama de técnicas, se creativo",
                  "Estilizar sin framework",
                ]
          }
        />
        <SmallProjectCard
          name={
            languageContext === "en"
              ? "Inventory Manager App"
              : "App de Inventarios"
          }
          description={
            languageContext === "en"
              ? "Allows easy management of digitalized goods"
              : "Permite el fácil manejo de bienes digitalizados"
          }
          src="/projects-photos/15-Inventory.png"
          techs={[
            "typescript",
            "react",
            "bootstrap",
            "expressjs",
            "mongodb",
            "heroku",
          ]}
          backgroundColor="bg-red-100"
          code="https://github.com/JuanP-VT/store-inventory"
          demo="https://juanp-vt.github.io/store-inventory/"
          objectives={
            languageContext === "en"
              ? [
                  "Frontend-Backend Integration",
                  "Build Restful API",
                  "NoSQL Databases",
                  "CRUDs",
                ]
              : [
                  "Integración Frontend-Backend ",
                  "Construir APIs",
                  "Bases de datos NoSQL",
                  "CRUDs",
                ]
          }
        />
        <SmallProjectCard
          name="Pc - Hub Ecommerce"
          description={
            languageContext === "en"
              ? "Fullstack ecommerce app for gaming pc components"
              : "App fullstack de comercio electronico para componentes de pc gaming"
          }
          src="/projects-photos/16 - ECommerce.png"
          techs={[
            "typescript",
            "react",
            "tailwindcss",
            "nextjs",
            "mongodb",
            "vercel",
            "jest",
          ]}
          backgroundColor="bg-red-100"
          code="https://store-juanp-vt.vercel.app/"
          demo="https://github.com/JuanP-VT/pc-ecommerce"
          objectives={
            languageContext === "en"
              ? [
                  "Get deeper understanding of the whole application development process",
                  "Unit Testing",
                ]
              : [
                  "Conseguir más entendimiento en todo el proceso de desarrollo de aplicaciones",
                  "Unit Testing",
                ]
          }
        />
        <SmallProjectCard
          name={
            languageContext === "en"
              ? "Recruiter Page"
              : "Página para reclutadores"
          }
          description={
            languageContext === "en"
              ? "Page to showcase my work to recruiters"
              : "Página para mostrar mi trabajo a reclutadores"
          }
          src="/projects-photos/developer.png"
          techs={["typescript", "react", "tailwindcss", "nextjs", "vercel"]}
          backgroundColor="bg-red-100"
          code="https://github.com/JuanP-VT/developer-page"
          demo="https://pablodev.vercel.app/"
          objectives={
            languageContext === "en"
              ? ["Showcase my skills", "Describe my developer journey"]
              : [
                  "Plasmar mis habilidades",
                  "Describir mi trayectoria como desarrollador",
                ]
          }
        />
      </div>
    </div>
  );
}

export default ChronologicalOrdered;
