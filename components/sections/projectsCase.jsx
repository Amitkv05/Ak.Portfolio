import ProjectCase from "components/ProjectCase";
import { projects } from "data/projects";
import React from "react";

export default function ProjectsCase() {
  return (
    <section className="case-shell">
      {projects.map((project, index) => (
        <ProjectCase
          key={project.id}
          project={project}
          reverse={index % 2 === 1}
        />
      ))}
    </section>
  );
}
