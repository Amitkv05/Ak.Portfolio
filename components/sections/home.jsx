import { ArrowDownRight, ArrowUpRight } from "../Icons.jsx";
import { motion } from "framer-motion";
import { homeContent } from "content/homeContent.js";

export default function Home() {
  return (
    <section className="hero hero-v2 section-shell" id="home">
      {/* =====================================
          BACKGROUND GRID
      ===================================== */}
      <div className="hero-v2-grid" aria-hidden="true" />

      {/* =====================================
          LEFT SIDE - HERO CONTENT
      ===================================== */}
      <motion.div
        className="hero-v2-copy"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* AVAILABILITY STATUS */}
        <div className="hero-status">
          <i aria-hidden="true" />
          <span>{homeContent.availability}</span>
        </div>

        {/* TECHNOLOGY STACK */}
        <p className="hero-overline">{homeContent.techStack}</p>

        {/* HERO TITLE */}
        <h1>
          {homeContent.hero.titleLine1}
          <br />
          <span>{homeContent.hero.titleLine2}</span>
        </h1>

        {/* HERO DESCRIPTION */}
        <p className="hero-lead">{homeContent.hero.description}</p>

        {/* ACTION BUTTONS */}
        <div className="hero-actions">
          <a className="primary-btn" href="#projects">
            {homeContent.buttons.projects}
            <ArrowDownRight size={19} />
          </a>

          <a className="text-btn" href="#about">
            {homeContent.buttons.about}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </motion.div>

      {/* =====================================
          CENTER - PROFILE IMAGE & EFFECTS
      ===================================== */}
      <motion.div
        className="hero-visual"
        initial={{
          opacity: 0,
          scale: 0.9,
          rotate: -3,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 0.9,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* ORANGE BACKGROUND CIRCLE */}
        <div className="orange-disc" aria-hidden="true" />

        {/* OUTER ORBIT RINGS */}
        <div className="visual-orbit orbit-a" aria-hidden="true" />

        <div className="visual-orbit orbit-b" aria-hidden="true" />

        {/* ACTUAL PROFILE IMAGE */}
        <div className="hero-image-wrapper">
          <motion.img
            src={homeContent.hero.image}
            alt={homeContent.hero.imageAlt || "Full-stack developer profile"}
            className="hero-profile-image"
            loading="eager"
            decoding="async"
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </div>

        {/* FLOATING TECHNOLOGY LABELS */}
        <span className="visual-code code-a" aria-hidden="true">
          &lt; REACT /&gt;
        </span>

        <span className="visual-code code-b" aria-hidden="true">
          NODE.JS
        </span>

        <span className="visual-code code-c" aria-hidden="true">
          FLUTTER
        </span>
      </motion.div>

      {/* =====================================
          RIGHT SIDE - INTRODUCTION
      ===================================== */}
      <motion.aside
        className="hero-v2-side"
        initial={{
          opacity: 0,
          x: 28,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* INTRO NUMBER */}
        <span className="side-index">{homeContent.intro.number}</span>

        {/* INTRO HEADING */}
        <h2>
          {homeContent.intro.title1}
          <br />
          {homeContent.intro.title2}
        </h2>

        {/* INTRO DESCRIPTION */}
        <p>{homeContent.intro.description}</p>

        {/* EXPERIENCE STATISTICS */}
        <div className="hero-mini-stats">
          {homeContent.stats.map((stat, index) => (
            <div key={`${stat.label}-${index}`}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.aside>

      {/* =====================================
          BOTTOM FOOTER
      ===================================== */}
      <div className="hero-v2-footer">
        <span>{homeContent.location}</span>

        <a href="#about">
          {homeContent.scrollText}
          <ArrowDownRight size={17} />
        </a>
      </div>
    </section>
  );
}
