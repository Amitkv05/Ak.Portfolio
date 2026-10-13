import { useState } from "react";
import Reveal from "../Reveal";
import { Sparkles } from "../Icons";
import { skillsContent } from "content/skillsContent";
import { motion, AnimatePresence } from "framer-motion";

const SKILLS_PER_PAGE = 8;

export default function Skills() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const skills = skillsContent.skills;

  const totalPages = Math.ceil(skills.length / SKILLS_PER_PAGE);

  const startIndex = currentPage * SKILLS_PER_PAGE;

  const visibleSkills = skills.slice(startIndex, startIndex + SKILLS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 60 : -60,
    }),

    center: {
      opacity: 1,
      x: 0,
    },

    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -60 : 60,
    }),
  };

  return (
    <section className="skills section-shell" id="skills">
      {/* SECTION HEADING */}
      <Reveal className="skills-heading">
        <span className="section-number">{skillsContent.sectionNumber}</span>

        <h2>
          {skillsContent.heading.line1}
          <br />
          {skillsContent.heading.line2}
        </h2>
      </Reveal>

      {/* CERTIFICATES */}
      <Reveal className="cert-list" delay={0.06}>
        {skillsContent.certificates.map((certificate) => (
          <div className="certificate" key={certificate.id}>
            <Sparkles size={25} />

            <div>
              <strong>{certificate.title}</strong>
              <span>{certificate.description}</span>
            </div>
          </div>
        ))}
      </Reveal>

      {/* SKILLS SLIDER */}
      <div className="skills-slider">
        {/* TOP HEADING + ARROWS */}
        <div className="skills-slider-header">
          <div className="skills-slider-title">
            <span>TECHNICAL SKILLS</span>

            <small>
              {String(currentPage + 1).padStart(2, "0")}
              {" / "}
              {String(totalPages).padStart(2, "0")}
            </small>
          </div>

          <div className="skills-slider-controls">
            <button
              type="button"
              className="skills-arrow"
              onClick={previousPage}
              disabled={currentPage === 0}
              aria-label="Previous skills"
            >
              <span aria-hidden="true">←</span>
            </button>

            <button
              type="button"
              className="skills-arrow"
              onClick={nextPage}
              disabled={currentPage >= totalPages - 1}
              aria-label="Next skills"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* ANIMATED SKILLS GRID */}
        <div className="skills-slider-viewport">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              className="skills-grid"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
            >
              {visibleSkills.map((skill, index) => (
                <motion.div
                  className="skill-card"
                  key={skill}
                  whileHover={{
                    y: -6,
                    rotate: index % 2 ? 0.6 : -0.6,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <span>{String(startIndex + index + 1).padStart(2, "0")}</span>

                  <strong>{skill}</strong>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PAGINATION DOTS */}
        {totalPages > 1 && (
          <div className="skills-pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                type="button"
                key={index}
                aria-label={`Go to skills page ${index + 1}`}
                aria-current={currentPage === index ? "page" : undefined}
                className={`skills-page-dot ${
                  currentPage === index ? "active" : ""
                }`}
                onClick={() => {
                  setDirection(index > currentPage ? 1 : -1);
                  setCurrentPage(index);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
