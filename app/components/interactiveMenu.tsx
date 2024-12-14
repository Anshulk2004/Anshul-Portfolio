"use client";

import { useState } from "react";

export default function InteractiveMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <nav>
      <button
        onClick={toggleMobileMenu}
        className="mobile-toggle"
        aria-label="Toggle menu"
      >
        &#9776;
      </button>
      <ul id="menu" className={menuOpen ? "active" : ""}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="mailto:anshulk0102@gmail.com">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}
