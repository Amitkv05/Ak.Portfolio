"use client";

import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { ArrowUpRight } from "./Icons.jsx";

/* =========================================
   PROJECT IMAGE COMPONENT
========================================= */

function ProjectImage({ src, alt }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="case-image-empty" role="status">
        <span>Screenshot unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setImageError(true)}
    />
  );
}

/* =========================================
   FALLBACK IMAGE LABEL
========================================= */

function getImageLabel(src, index) {
  if (!src) {
    return `Screen ${index + 1}`;
  }

  const filename = src
    .split("/")
    .pop()
    .split("?")[0]
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ");

  return filename.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

/* =========================================
   PROJECT CASE STUDY
========================================= */

export default function ProjectCase({ project, reverse = false }) {
  const projectNumber = String(project.index ?? "01").padStart(2, "0");

  const projectName = project.short || project.title;

  const coverImage = project.images?.cover || "";

  const galleryImages = (project.images?.gallery || [])
    .filter(Boolean)
    .slice(0, 4);

  return (
    <article
      className={`case-study ${project.accent || ""}`}
      id={project.id}
      aria-labelledby={`${project.id}-title`}
    >
      {/* =================================
          PROJECT HEADER
      ================================= */}

      <Reveal className="case-title-row">
        <div className="case-heading-content">
          <div className="case-heading-meta">
            <span className="case-index">PROJECT / {projectNumber}</span>

            {project.projectType && (
              <span className="case-project-type">{project.projectType}</span>
            )}
          </div>

          <h3 id={`${project.id}-title`}>{project.title}</h3>

          {project.eyebrow && (
            <p className="case-subtitle">{project.eyebrow}</p>
          )}
        </div>

        <div className="case-year-box">
          <span>YEAR</span>
          <strong>{project.year}</strong>
        </div>
      </Reveal>

      {/* =================================
          INTRODUCTION
      ================================= */}

      <div className={`case-intro ${reverse ? "reverse" : ""}`}>
        <Reveal className="case-copy">
          {/* DETAILS */}

          <div className="case-copy-block">
            <span className="micro-label">
              <span className="label-dot" />
              01 / DETAILS
            </span>

            <p>{project.details}</p>
          </div>

          {/* TECHNOLOGIES */}

          {project.stack?.length > 0 && (
            <div className="case-copy-block">
              <span className="micro-label">
                <span className="label-dot" />
                02 / TECHNOLOGIES
              </span>

              <div className="stack-pills">
                {project.stack.map((item, index) => (
                  <span key={`${project.id}-${item}-${index}`}>{item}</span>
                ))}
              </div>
            </div>
          )}

          {/* APPROACH */}

          {project.approach && (
            <div className="case-copy-block">
              <span className="micro-label">
                <span className="label-dot" />
                03 / APPROACH
              </span>

              <p>{project.approach}</p>
            </div>
          )}

          {/* PROJECT LINKS */}

          {(project.liveUrl || project.githubUrl || project.apiHealthUrl) && (
            <div className="case-links">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-link case-link-primary"
                >
                  <span>Live Project</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-link"
                >
                  <span>View GitHub</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              )}

              {project.apiHealthUrl && (
                <a
                  href={project.apiHealthUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-link"
                >
                  <span>API Health</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </Reveal>

        {/* =================================
            MAIN PROJECT VISUAL
        ================================= */}

        <Reveal className="case-visual feature-visual" delay={0.08}>
          <div className="case-visual-glow" aria-hidden="true" />

          <div className="case-browser-screen">
            <ProjectImage
              key={coverImage || "no-cover"}
              src={coverImage}
              alt={`${projectName} project showcase`}
            />
          </div>

          <div className="case-visual-footer">
            <span>PROJECT SHOWCASE</span>

            <span>
              {projectNumber} / {project.year}
            </span>
          </div>
        </Reveal>
      </div>

      {/* =================================
          PROJECT OBJECTIVE
      ================================= */}

      {project.objective && (
        <Reveal className="objective-card">
          <div className="objective-label">
            <span className="micro-label">THE OBJECTIVE</span>

            <span className="objective-symbol" aria-hidden="true">
              ↗
            </span>
          </div>

          <p>{project.objective}</p>
        </Reveal>
      )}

      {/* =================================
          PROJECT GALLERY
      ================================= */}

      {galleryImages.length > 0 && (
        <>
          <Reveal className="case-gallery-heading">
            <div>
              <span className="micro-label">PROJECT PREVIEW</span>

              <h4>
                Inside the project<span>.</span>
              </h4>
            </div>

            <span className="case-gallery-count">
              {String(galleryImages.length).padStart(2, "0")} / SCREENS
            </span>
          </Reveal>

          <div className="case-gallery">
            {galleryImages.map((image, index) => {
              /*
               * Prefer project.screens labels.
               * Example:
               * Home, Products, Product Details, Cart
               *
               * Filename is only fallback.
               */
              const screenLabel =
                project.screens?.[index] || getImageLabel(image, index);

              return (
                <Reveal
                  className={`gallery-item gallery-${index + 1}`}
                  key={`${project.id}-${index}-${image}`}
                  delay={index * 0.06}
                >
                  <div className="case-gallery-card">
                    <div className="case-gallery-media">
                      <ProjectImage
                        src={image}
                        alt={`${projectName} - ${screenLabel}`}
                      />

                      <span className="case-gallery-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="case-gallery-caption">
                      <span>{screenLabel}</span>

                      <ArrowUpRight size={18} aria-hidden="true" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </>
      )}

      {/* =================================
          PROJECT METRICS
      ================================= */}

      {project.metrics?.length > 0 && (
        <Reveal className="metrics-row">
          {project.metrics.map(([value, label], index) => (
            <div className="metric" key={`${project.id}-${label}-${index}`}>
              <span className="metric-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{value}</strong>

              <span className="metric-label">{label}</span>
            </div>
          ))}
        </Reveal>
      )}
    </article>
  );
}
