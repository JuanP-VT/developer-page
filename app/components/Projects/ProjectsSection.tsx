"use client";

import HighlightCard from "./Project cards/HighlightCard";
import SmallProjectCard from "./Project cards/SmallProjectCard";
import SmallVideoOnlyCard from "./Project cards/SmallVideoOnlyCard";

type Props = {};

function ProjectsSection({}: Props) {
  return (
    <section className="flex w-screen flex-col justify-center bg-pink-50 sm:p-10">
      <p className=" text-6xl antialiased">Portfolio</p>
      <HighlightCard
        projectName="Pc Hub - Ecommerce"
        videoUrl="https://www.youtube.com/embed/HdrY0wZqlFk"
        description="Fullstack Ecommerce Prototype.
        Streamlined inventory management, user registration, and seamless product selling."
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
        featureList={[
          "Responsive design",
          "User authentication",
          "Authentication roles",
          "Product catalog",
          "Product search filters",
          "Pagination",
          "Product page",
          "Shopping cart system",
          "Payment process",
          "User profile",
          "User reviews",
          "Admin Panel",
          "Add product ",
          "Edit product",
          "Delete product",
        ]}
        demo="https://store-juanp-vt.vercel.app/"
        code="https://github.com/JuanP-VT/pc-ecommerce"
      />
      <div className="flex flex-col p-2">
        <p className="py-5 text-5xl">Developer Journey</p>
        <p className="font-medium lg:w-270">
          Welcome to my portfolio, a testament to my unyielding determination,
          passion, and discipline in web development. Each project reflects my
          pursuit of excellence, embracing challenges as opportunities for
          growth. Witness my evolving skills and innovative solutions, driven by
          the desire improve.
        </p>
      </div>
      <div className="mt-5 grid gap-y-10 rounded-lg border-2 border-zinc-300 bg-cyan-700 shadow-lg sm:p-10 lg:grid-cols-2">
        <SmallVideoOnlyCard
          name="Fortnite Shopping Cart App"
          description="Consumes Fortnite Public API to fetch current items in sale, displays home page , product catalog and shopping cart system"
          src="/video/shopping-app.mp4"
          techs={["typescript", "react", "css", "git"]}
          backgroundColor="bg-teal-200"
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
      <div className="flex flex-col">
        <p className="py-5 text-4xl">Sorted Chronologically</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <SmallProjectCard
            name="Landing Page"
            description="Static Page - A common Home Page page found in almost all services"
            src="/projects-photos/2-SignUp Page.png"
            techs={["html", "css"]}
            backgroundColor="bg-red-100"
            code="https://github.com/JuanP-VT/Landing-page"
            demo="https://juanp-vt.github.io/Landing-page/"
            objectives={[
              "Basic HTML elements; divs, p, span, img.",
              "Basic HTML attributes; id, class",
              "Basic CSS properties: color, text properties, background, height, margin , padding",
              "Box model",
            ]}
          />
          <SmallProjectCard
            name="Sign Up Page"
            description="Static Page - A common sign up registration page found in almost all services"
            src="/projects-photos/1-LandingPage.png"
            techs={["html", "css"]}
            backgroundColor="bg-red-100"
            code="https://github.com/JuanP-VT/Sign-up-page"
            demo="https://juanp-vt.github.io/Sign-up-page/"
            objectives={[
              "Form Styling",
              "Styling Client Form Validation",
              "CSS PseudoClasses",
              "CSS PseudoElements",
              "CSS FlexBox",
            ]}
          />
          <SmallProjectCard
            name="Admin Dashboard"
            description="Static Page - Administrative panel "
            src="/projects-photos/3-Dashboard.png"
            techs={["html", "css"]}
            backgroundColor="bg-red-100"
            code="https://github.com/JuanP-VT/Admin-Dashboard"
            demo="https://juanp-vt.github.io/Admin-Dashboard/"
            objectives={["CSS FlexBox", "CSS Grid"]}
          />
          <SmallProjectCard
            name="Rock Paper Scissors"
            description="Classic rock paper scissors game against the cpu "
            src="/projects-photos/4-RockPaperScissors.png"
            techs={["javascript", "html", "css"]}
            backgroundColor="bg-red-100"
            code="https://github.com/JuanP-VT/Rock-Paper-Scissors"
            demo="https://juanp-vt.github.io/Rock-Paper-Scissors/"
            objectives={[
              "Practice new javascript knowledge",
              "DOM methods",
              "Create readable/understandable code",
            ]}
          />{" "}
          <SmallProjectCard
            name="Tic Tac Toe "
            description="Classic Tic Tac Toe Game against yourself"
            src="/projects-photos/5-TicTacToe.png"
            techs={["javascript", "html", "css"]}
            backgroundColor="bg-red-100"
            code="https://github.com/JuanP-VT/Tic-tac-toe"
            demo="https://juanp-vt.github.io/Tic-tac-toe/"
            objectives={[
              "Object Oriented Programming",
              "More complex logic",
              "Design Patterns",
              "More DOM Methods",
            ]}
          />
          <SmallProjectCard
            name="Etch A Sketch"
            description="Simulates a Sketch board to paint in different modes "
            src="/projects-photos/6-Etch A Sketch.png"
            techs={["javascript", "html", "css"]}
            backgroundColor="bg-red-100"
            code="https://github.com/JuanP-VT/ETCH-A-SKETCH"
            demo="https://juanp-vt.github.io/ETCH-A-SKETCH/"
            objectives={[
              "More DOM methods",
              "More complex logic",
              "Event listeners",
              "Improve styling",
            ]}
          />
          <SmallProjectCard
            name="Restaurant Page"
            description="A dynamic restaurant page with vanilla javascript "
            src="/projects-photos/7-Restaurant.png"
            techs={["javascript", "html", "css", "webpack"]}
            backgroundColor="bg-red-100"
            code="https://github.com/JuanP-VT/Restaurant-Page "
            demo="https://juanp-vt.github.io/Restaurant-Page/"
            objectives={[
              "Dynamic page with javascript (more DOM)",
              "Practice clean code principles",
              "Basic Webpack",
              "More OOP",
            ]}
          />
          <SmallProjectCard
            name="To Do List App"
            description="Personal activity tracker, allows you to create projects to schedule and manage your activities"
            src="/projects-photos/8-To Do List.png"
            techs={["javascript", "html", "css", "webpack"]}
            backgroundColor="bg-red-100"
            code="https://github.com/JuanP-VT/To-Do-List"
            demo="https://juanp-vt.github.io/To-Do-List/"
            objectives={[
              "Work with modules",
              "Clean code principles",
              "More Webpack",
              "Get deeper OOP understanding",
            ]}
          />
          <SmallProjectCard
            name="Library App"
            description="Creates beautiful cards with book information to keep track of your books"
            src="/projects-photos/9-Library.png"
            techs={["javascript", "html", "css", "webpack"]}
            backgroundColor="bg-red-100"
            code="https://github.com/JuanP-VT/Library"
            demo="https://juanp-vt.github.io/Library/"
            objectives={[
              "Practice more OOP",
              "Practice clean code principles",
              "Get familiar with LocalStorage",
            ]}
          />
          <SmallProjectCard
            name="Weather Forecast App"
            description="This App lets you check the current weather of any place of the world and a five day forecast"
            src="/projects-photos/11-Weather App.png"
            techs={["javascript", "html", "css", "webpack"]}
            backgroundColor="bg-red-100"
            code="https://github.com/JuanP-VT/Weather-App"
            demo="https://juanp-vt.github.io/Weather-App/"
            objectives={[
              "API data fetching",
              "Documentation reading",
              "Linters",
              "Enhanced styling",
            ]}
          />
          <SmallProjectCard
            name="Curriculum Builder"
            description="Fill the fields to generate a template you can download as PDF"
            src="/projects-photos/12-CV Creator.png"
            techs={["typescript", "react", "css"]}
            backgroundColor="bg-red-100"
            code="https://github.com/JuanP-VT/cv-app"
            demo="https://juanp-vt.github.io/cv-app/"
            objectives={[
              "Typescript",
              "React",
              "Class components",
              "Lifecycle methods",
              "State",
            ]}
          />
          <SmallProjectCard
            name="Fortnite Shopping Cart App"
            description="Consumes Fortnite Public API to fetch current items in sale, displays home page , product catalog and shopping cart system"
            src="/projects-photos/13-Shopping Cart.png"
            techs={["typescript", "react", "css"]}
            backgroundColor="bg-red-100"
            code="https://github.com/JuanP-VT/shop-app"
            demo="https://juanp-vt.github.io/shop-app/"
            objectives={["More Typescript", "React Hooks", "React Router"]}
          />
          <SmallProjectCard
            name="Old Developer Page"
            description="My First Developer Page, it was reworked a year after its release"
            src="/projects-photos/14-MyWebPage.png"
            techs={["typescript", "react", "sass"]}
            backgroundColor="bg-red-100"
            code="https://github.com/JuanP-VT/personal-web-page"
            demo="https://juanp-vt.github.io/personal-web-page/"
            objectives={[
              "Summarize my skills and competences in a webpage",
              "Utilize a wide range of web developer skills (not just a boring page",
              "Create the page from complete scratch with CRA",
            ]}
          />
          <SmallProjectCard
            name="Inventory Manager App"
            description="Allows easy management of digitalized goods"
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
            code="https://github.com/JuanP-VT/https://juanp-vt.github.io/store-inventory"
            demo="https://juanp-vt.github.io/personal-web-page/"
            objectives={[
              "Frontend-Backend Integration",
              "Build Restful API",
              "Databases",
              "CRUDs",
            ]}
          />
          <SmallProjectCard
            name="Pc - Hub Ecommerce"
            description="Fully functional ecommerce from scratch"
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
            code="https://github.com/JuanP-VT/https://juanp-vt.github.io/store-inventory/"
            demo="https://juanp-vt.github.io/personal-web-page/"
            objectives={[
              "Get deeper understanding of the whole application development process",
              "Unit Testing",
            ]}
          />
          <SmallProjectCard
            name="Developer Page"
            description="Showcasing my developer journey"
            src="/projects-photos/developer.png"
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
            code="https://github.com/JuanP-VT/pc-ecommerce"
            demo="https://store-juanp-vt.vercel.app"
            objectives={["Showcase my skills", "Describe my developer journey"]}
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
