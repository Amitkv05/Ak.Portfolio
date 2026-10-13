import { useState } from "react";
import { aboutContent } from "content/aboutContent.js";

import { GitHubIcon, LinkedInIcon, Mail, MapPin, Phone } from "../Icons.jsx";

import Reveal from "../Reveal.jsx";

export default function About() {
  const [imageError, setImageError] = useState(false);

  const { portrait, contact, socialLinks } = aboutContent;

  const showImage =
    Boolean(portrait.showImage && portrait.image) && !imageError;

  const paragraphs = [
    aboutContent.descriptionPara1,
    aboutContent.descriptionPara2,
    aboutContent.descriptionPara3,
  ].filter(Boolean);

  return (
    <section className="about section-shell" id="about">
      {/* =================================
          LEFT - CINEMATIC PORTRAIT
      ================================= */}
      <Reveal className="portrait-card">
        {/* ORANGE AMBIENT LIGHT */}
        <div className="portrait-ambient" aria-hidden="true" />

        {/* DARK ARCH WITH ORANGE BORDER */}
        <div className="portrait-blob" aria-hidden="true" />

        {/* PROFILE PHOTO */}
        {showImage ? (
          <div className="portrait-photo-frame">
            {/* DUPLICATE IMAGE FOR ORANGE GLOW */}
            <img
              src={portrait.image}
              alt=""
              className="portrait-image-glow"
              aria-hidden="true"
            />

            {/* ACTUAL IMAGE */}
            <img
              src={portrait.image}
              alt={portrait.alt || "Developer profile"}
              className="portrait-image"
              loading="lazy"
              decoding="async"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="portrait-initials">{portrait.initials || "AK"}</div>
        )}

        {/* DARK BOTTOM GRADIENT */}
        <div className="portrait-bottom-shadow" aria-hidden="true" />

        {/* IMAGE BOTTOM CAPTION */}
        <div className="portrait-caption">
          <span>{portrait.caption || aboutContent.techStack}</span>

          <small>
            {portrait.tagline ||
              "Build clean UIs, solve real problems, anywhere"}
          </small>
        </div>
      </Reveal>

      {/* =================================
          RIGHT - ABOUT CONTENT
      ================================= */}
      <Reveal className="about-copy" delay={0.08}>
        {/* SECTION NUMBER */}
        <span className="section-number">{aboutContent.sectionNumber}</span>

        {/* MAIN HEADING */}
        <div className="about-title-group">
          <h2>{aboutContent.title}</h2>

          <div className="script-line">{aboutContent.subtitle}</div>
        </div>

        {/* DESCRIPTION */}
        <div className="about-description">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* CONTACT INFORMATION */}
        <div className="mini-contact">
          <strong>{contact.heading}</strong>

          <a href={`mailto:${contact.email}`}>
            <Mail size={17} />
            <span>{contact.email}</span>
          </a>

          {/* PHONE */}
          <a
            href={`tel:${aboutContent.socialLinks.phone.replace(/[^\d+]/g, "")}`}
          >
            <Phone size={17} />
            {aboutContent.socialLinks.phone}
          </a>

          <span className="about-location">
            <MapPin size={17} />
            <span>{contact.location}</span>
          </span>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="social-row">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>

          <a href={`mailto:${socialLinks.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
