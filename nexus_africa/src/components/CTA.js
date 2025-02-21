import React from "react";
import AuthButton from "./AuthButton";

const CTA = () => {
  return (
    <div id="cta" className="cta">
      <h2>Get Started with Nexus Africa</h2>
      <p>
        Join us in making AI more inclusive with high-quality African datasets.
      </p>
      <AuthButton className="primary" text="Sign Up" />
    </div>
  );
};

export default CTA;
