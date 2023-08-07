/**
 * Component to display projects sorted chronologically.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the ChronologicalOrdered component.
 */
import SmallProjectCard from "./Project cards/SmallProjectCard";

function ChronologicalOrdered() {
  return (
    <div className="flex flex-col">
      <p className="px-2 py-10 text-4xl">Projects Sorted Chronologically</p>
      <div className="grid grid-cols-1 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
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
            "Practice javascript",
            "DOM methods",
            "Create readable/understandable code",
          ]}
        />
        <SmallProjectCard
          name="Tic Tac Toe "
          description="Classic Tic Tac Toe Game against yourself"
          src="/projects-photos/5-TicTacToe.png"
          techs={["javascript", "html", "css"]}
          backgroundColor="bg-red-100"
          code="https://github.com/JuanP-VT/Tic-tac-toe"
          demo="https://juanp-vt.github.io/Tic-tac-toe/"
          objectives={[
            "Objects",
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
            "Arrays",
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
            "Data Structures",
            "Practice clean code principles",
            "LocalStorage & Session",
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
          objectives={[
            "More Typescript",
            "React Functional Components",
            "React hooks",
            "React router",
          ]}
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
          description="My developer journey"
          src="/projects-photos/developer.png"
          techs={["typescript", "react", "tailwindcss", "nextjs", "vercel"]}
          backgroundColor="bg-red-100"
          code="https://github.com/JuanP-VT/developer-page"
          demo="https://pablodev.vercel.app/"
          objectives={["Showcase my skills", "Describe my developer journey"]}
        />
      </div>
    </div>
  );
}

export default ChronologicalOrdered;
