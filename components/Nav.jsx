"use client";

import { Menu, X } from "./Icons.jsx";
import { useEffect, useState } from "react";

const nav = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="site-nav">
      <a className="brand-mark" href="#top" aria-label="Back to top">
        AK<span>.</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <a className="nav-cta" href="#contact">
          Let&apos;s talk <span>↗</span>
        </a>
        <button
          className="menu-btn"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        {nav.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}
