import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Nexus Africa</h1>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#how-it-works">How It Works</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#cta" className="cta-btn">
            Get Started
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
