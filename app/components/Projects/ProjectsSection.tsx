"use client";

import ChronologicalOrdered from "./ChronologicalOrdered";
import HighlightCard from "./Project cards/HighlightCard";
import VideoOnlyCardSection from "./VideoOnlyCardSection";

function ProjectsSection() {
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
      <VideoOnlyCardSection />
      <ChronologicalOrdered />
    </section>
  );
}

export default ProjectsSection;
