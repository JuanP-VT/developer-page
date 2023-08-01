"use client";

import HighlightCard from "./Project cards/HighlightCard";

type Props = {};

function ProjectsSection({}: Props) {
  return (
    <section className="flex w-screen justify-center bg-pink-50">
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
      />
    </section>
  );
}

export default ProjectsSection;
