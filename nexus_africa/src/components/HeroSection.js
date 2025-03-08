import React from "react";
import "./styles/HeroSection.css";
import AuthButton from "./AuthButton";

function scrollToContact(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const HeroSection = () => {
  return (
    <div className="hero">
      <h1>Unlock Africa’s AI Data Potential</h1>
      <p>
        High-quality, ethically sourced datasets for AI companies and
        researchers.
      </p>
      <div className="cta-buttons">
        <AuthButton text="Get Started" />
        <button
          onClick={() => scrollToContact("contact")}
          className="secondary"
        >
          Book a Demo
        </button>
      </div>
    </div>
  );
};

export default HeroSection



// import React from "react";
// import "./styles/HeroSection.css";
// import AuthButton from "./AuthButton";

// const HeroSection = () => {
//   return (
//     <div className="hero">
//       <h1>Unlock Africa’s AI Data Potential</h1>
//       <p>
//         High-quality, ethically sourced datasets for AI companies and
//         researchers.
//       </p>
//       <div className="cta-buttons">
//         <AuthButton text="Get Started" />
//         <button className="secondary">Book a Demo</button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
