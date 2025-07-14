import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "Efficient Parking System",
    description:
      "A multi-platform parking solution with QR-based permits and Firebase integration.",
    image: "/capstone.PNG",
    github: "https://github.com/Lariosamark/park",
    demo: "https://spcparking0.netlify.app/",
    tags: ["Next.js", "Firebase", "Tailwind", "QR"],
  },
  {
    title: "English Proficiency Exam System",
    description:
      "Online exam platform for English proficiency with admin scoring and result tracking.",
    image: "/athena.PNG",
    github: "https://github.com/Lariosamark/english-proficiency-system",
    demo: "https://athens-db.web.app/",
    tags: ["React", "Firebase", "Node.js"],
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio built with modern stack, showcasing skills, projects, and contact.",
    image: "/portfolio.PNG",
    github: "https://github.com/Lariosamark/portfolio",
    demo: "https://mark-portfolio.netlify.app",
    tags: ["Next.js", "Tailwind CSS", "Responsive"],
  },
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
