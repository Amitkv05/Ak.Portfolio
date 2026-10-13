import React from "react";
import { motion } from "framer-motion";

import Reveal from "../Reveal";
import { ArrowUpRight } from "../Icons";
import { projects } from "data/projects";

export default function Projects() {
  return (
    <section
      className="projects section-shell"
      id="projects"
      aria-labelledby="projects-title"
    >
      {/* SECTION HEADING */}
      <Reveal className="projects-heading">
        <span className="section-number">04 / SELECTED WORK</span>

        <div className="projects-title-row">
          <h2 id="projects-title">PROJECTS</h2>

          <p className="projects-intro">
            Selected web, mobile, and full-stack projects focused on real-world
            workflows, scalable architecture, and maintainable development.
          </p>
        </div>
      </Reveal>

      {/* PROJECT FOLDER GRID */}
      <div className="folder-grid">
        {projects.map((project, index) => (
          <Reveal
            key={project.id}
            delay={index * 0.06}
            className="folder-card-reveal"
          >
            <motion.a
              className={`folder-card ${project.accent || ""}`}
              href={`#${project.id}`}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.99 }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 22,
              }}
              aria-label={`View ${project.title} case study`}
            >
              {/* FOLDER TAB */}
              <div className="folder-tab">
                <span>{project.index}</span>
              </div>

              {/* FOLDER MAIN BODY */}
              <div className="folder-body">
                {/* TOP: EYEBROW + YEAR */}
                <div className="folder-top">
                  <span className="folder-eyebrow">{project.eyebrow}</span>

                  <div className="folder-top-right">
                    <span className="folder-year">{project.year}</span>

                    <ArrowUpRight size={21} aria-hidden="true" />
                  </div>
                </div>

                {/* MIDDLE: PROJECT TYPE + TECHNOLOGIES */}
                <div className="folder-information">
                  {project.projectType && (
                    <span className="folder-project-type">
                      {project.projectType}
                    </span>
                  )}

                  {project.stack?.length > 0 && (
                    <div
                      className="folder-stack"
                      aria-label={`${project.short} technologies`}
                    >
                      {project.stack.slice(0, 4).map((technology) => (
                        <span className="folder-stack-item" key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* BOTTOM: CASE STUDY + PROJECT NAME */}
                <div className="folder-bottom">
                  <strong className="folder-title">{project.short}</strong>

                  <div className="folder-footer">
                    <span>View case study</span>
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
