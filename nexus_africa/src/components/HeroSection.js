import React from "react";
import digitalPulse from "../assets/DigitalPulse.mov";
import "./styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <video src={digitalPulse} autoPlay loop muted />
      <div className="overlay"></div>
      <div className="content">
        <h1>Unlock Africa’s AI Data Potential</h1>
        <p>
          High-quality, ethically sourced datasets for AI companies and
          researchers.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
