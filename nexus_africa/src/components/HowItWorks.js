import React from "react";

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <h3>📊 Data Collection</h3>
          <p>We collect real-world AI data from diverse African sources.</p>
        </div>
        <div className="step">
          <h3>📝 Data Processing</h3>
          <p>We clean, label, and structure the datasets.</p>
        </div>
        <div className="step">
          <h3>💻 AI Integration</h3>
          <p>AI companies, Universities, etc, access our datasets our API</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
