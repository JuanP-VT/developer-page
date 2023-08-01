"use client";

import HighlightCard from "./Project cards/HighlightCard";
import SmallVideoOnlyCard from "./Project cards/SmallVideoOnlyCard";

type Props = {};

function ProjectsSection({}: Props) {
  return (
    <section className="flex w-screen flex-col justify-center bg-pink-50">
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
    </section>
  );
}

export default ProjectsSection;
