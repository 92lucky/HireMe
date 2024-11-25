import React from "react";

const Projects = () => {
  const projectData = [
    {
      title: "Project 1",
      description: "Description of project 1",
      link: "#project",
    },
    {
      title: "Web Barbershop",
      description: "React, Vite",
      link: "https://web-hairbugx.vercel.app/",
    },
    {
      title: "Invoice Generator",
      description: "React",
      link: "https://invoice-generator-beta-eosin.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="p-8  bg-gray-900">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:transform hover:translate-y-[-10px] hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-lg">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              className="text-blue-400 mt-4 block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
