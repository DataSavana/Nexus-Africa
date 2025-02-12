import React from "react";

const FAQ = () => {
  return (
    <div id="faq" className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>What types of data do you provide?</h3>
        <p>
          We provide speech, text, image, and video datasets tailored for AI
          models.
        </p>
      </div>
      <div className="faq-item">
        <h3>How do you ensure ethical data collection?</h3>
        <p>
          We work with local communities, obtain consent, and follow strict data
          privacy policies.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
