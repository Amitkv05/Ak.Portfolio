import { useState } from "react";

import {
  ArrowUpRight,
  GitHubIcon,
  LinkedInIcon,
  Mail,
  Phone,
} from "components/Icons";

import Reveal from "components/Reveal";
import { aboutContent } from "content/aboutContent";
import { footerContent } from "content/footerContent";

export default function Footer() {
  const [imageError, setImageError] = useState(false);

  const { contact, socialLinks } = aboutContent;

  const showImage = Boolean(footerContent.contact.image) && !imageError;

  return (
    <section className="contact section-shell" id="contact">
      {/* TOPLINE */}
      <Reveal className="contact-topline">
        <span>Available for opportunities & freelance work</span>

        <div className="contact-socials">
          {/* GITHUB */}
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>

          {/* LINKEDIN */}
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>

          {/* EMAIL */}
          <a href={`mailto:${socialLinks.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </Reveal>

      {/* MAIN CONTACT CARD */}
      <Reveal className="contact-pill" delay={0.06}>
        {/* LEFT POLAROID CARD */}
        <span className="contact-polaroid">
          <span className="mini-photo">
            {showImage ? (
              <img
                src={footerContent.contact.image}
                alt={footerContent.contact.imageAlt}
                className="footer-profile-image"
                loading="lazy"
                decoding="async"
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="footer-photo-fallback">
                {footerContent.contact.initials || "AK"}
              </span>
            )}
          </span>

          <small>
            {footerContent.contact.caption || "Let's build something useful."}
          </small>
        </span>

        {/* RIGHT CONTACT DETAILS */}
        <div className="contact-main">
          <h2>GET IN TOUCH!</h2>

          <div className="contact-details">
            {/* EMAIL */}
            <a href={`mailto:${aboutContent.contact.email}`}>
              <Mail size={17} />
              {aboutContent.contact.email}
            </a>

            {/* PHONE */}
            <a
              href={`tel:${aboutContent.socialLinks.phone.replace(/[^\d+]/g, "")}`}
            >
              <Phone size={17} />
              {aboutContent.socialLinks.phone}
            </a>
          </div>
        </div>
      </Reveal>

      {/* BOTTOM FOOTER */}
      <Reveal className="contact-footer">
        <span className="year-pill">{new Date().getFullYear()}</span>

        <span>Designed & built with Next.js + React</span>

        <a href="#home">
          Back to top
          <ArrowUpRight size={16} />
        </a>
      </Reveal>
    </section>
  );
}
