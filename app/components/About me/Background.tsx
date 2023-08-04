import IESkill from "./IESkill";

function Background() {
  return (
    <div className="flex flex-col sm:p-5">
      <div className="flex w-full flex-col justify-center sm:justify-normal">
        <p className="p-2 text-3xl font-medium">Professional Background</p>
        <p className="max-w-5xl p-2">
          Beyond my programming experience, I bring a unique set of skills to
          the table as a former industrial engineer.
          <br />
          My background in industrial engineering has instilled in me a strong
          analytical mindset, attention to detail, and an ability to optimize
          complex systems.
          <br />
          These qualities complement my passion for software development,
          allowing me to approach challenges with a well-rounded perspective
        </p>
        <p className="p-1 font-bold">Hover the skill for more detail</p>
      </div>
      <div className="flex flex-col gap-y-5 sm:grid sm:p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <IESkill
          name="Analytical & problem-solving skills"
          description="Industrial engineers are trained to analyze complex systems and processes, identify inefficiencies, and develop solutions to improve them. These analytical and problem-solving skills are highly transferable to software development, where programmers often encounter complex coding challenges and need to devise efficient and effective solutions"
          imageSrc="/IESkills/problem.png"
        />
        <IESkill
          name="Systems thinking"
          description="Industrial engineers have a holistic approach to problem-solving, considering the interconnectedness of various components within a system. This perspective is valuable in software development, where developers need to understand how different modules and components interact to build scalable and robust software systems."
          imageSrc="/IESkills/thinking.png"
        />
        <IESkill
          name="Quality Focus"
          description="Industrial engineers are trained to prioritize quality in their work to ensure products or processes meet high standards. In software development, writing clean, bug-free code and conducting thorough testing are vital for delivering high-quality software."
          imageSrc="/IESkills/quality.png"
        />
        <IESkill
          name="Process optimization"
          description="Industrial engineers are well-versed in optimizing workflows and processes to increase productivity and efficiency. In the world of software development, this skill can be applied to streamline development methodologies and project management practices, leading to faster and more efficient software development cycles."
          imageSrc="/IESkills/optimization.png"
        />

        <IESkill
          name="Continuous improvement mindset"
          description="Industrial engineers are trained to continuously seek improvements in processes and systems. In the realm of software development, this mindset translates into the ability to refactor code, seek better algorithms, and implement best practices to ensure code quality and maintainability."
          imageSrc="/IESkills/improve.png"
        />
        <IESkill
          name="Project management skills"
          description="Industrial engineers are skilled in project management, planning, and resource allocation. These skills are beneficial in software development to ensure projects are delivered on time and within budget, as well as to effectively collaborate with cross-functional teams."
          imageSrc="/IESkills/project-management.png"
        />
        <IESkill
          name="Communication and teamwork"
          description="Industrial engineers often work in multidisciplinary teams, requiring excellent communication and collaboration skills. These skills are essential for developers, as software development projects usually involve working with designers, product managers, and other stakeholders."
          imageSrc="/IESkills/teamwork.png"
        />
        <IESkill
          name="Flexibility and adaptability"
          description="Industrial engineers are trained to adapt to different industries and environments, making them well-suited for the fast-paced and ever-changing world of software development."
          imageSrc="/IESkills/adapt.png"
        />
      </div>
    </div>
  );
}

export default Background;
