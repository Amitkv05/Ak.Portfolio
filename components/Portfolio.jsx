"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  GitHubIcon,
  LinkedInIcon,
  Mail,
  Phone,
  Sparkles,
} from "./Icons.jsx";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav.jsx";
import SplashScreen from "./SplashScreen.jsx";
import Reveal from "./Reveal.jsx";
import ProjectCase from "./ProjectCase.jsx";
import { projects } from "../data/projects.js";
import { useEffect, useState } from "react";
import { homeContent } from "content/homeContent.js";
import About from "./sections/about.jsx";
import Skills from "./sections/skills.jsx";
import { aboutContent } from "content/aboutContent.js";
import Projects from "./sections/projects.jsx";
import ProjectsCase from "./sections/projectsCase.jsx";
import Footer from "./sections/footer.jsx";
import Home from "./sections/home.jsx";

const skills = [
  "React.js",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Flutter",
  "REST APIs",
  "Framer Motion",
  "Three.js",
];

export default function Portfolio() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowSplash(false), 2000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (showSplash) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [showSplash]);

  return (
    <div className="app" id="top">
      <AnimatePresence>{showSplash && <SplashScreen />}</AnimatePresence>
      <Nav />
      <main>
        {/* About Section */}
        <Home />

        {/* About Section */}
        <About />

        {/*SKILLS & CERTIFICATES Section*/}
        <Skills />

        {/*Projects Section*/}
        <Projects />

        {/*Projects ShowCase Section*/}
        <ProjectsCase />

        {/* footer Section */}
        <Footer />
      </main>
    </div>
  );
}
