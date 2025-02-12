import React from "react";

const Pricing = () => {
  return (
    <div className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-grid">
        <div className="price-card">
          <h3>Free</h3>
          <p>Basic access to African datasets</p>
          <h4>$0/month</h4>
          <button className="primary">Get Started</button>
        </div>
        <div className="price-card">
          <h3>Team</h3>
          <p>Enhanced dataset access for small teams</p>
          <h4>$49/month</h4>
          <button className="primary">Choose Plan</button>
        </div>
        <div className="price-card">
          <h3>Enterprise</h3>
          <p>Full dataset access with custom solutions</p>
          <h4>Contact Sales</h4>
          <button className="secondary">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
