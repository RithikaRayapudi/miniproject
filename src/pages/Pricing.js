import React from "react";
import "../styles/Pricing.css"; // Ensure this CSS file exists

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Choose the Best Plan for You</h1>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h2>Basic</h2>
          <p className="price">₹49/month</p>
          <ul>
            <li>✔ 10 AI-generated posts per month</li>
            <li>✔ 1 Social media platform</li>
            <li>✔ Basic analytics</li>
          </ul>
          <button className="pricing-btn">Get Started</button>
        </div>
        <div className="pricing-card popular">
          <h2>Pro</h2>
          <p className="price">₹99/month</p>
          <ul>
            <li>✔ 30 AI-generated posts per month</li>
            <li>✔ 3 Social media platforms</li>
            <li>✔ Advanced analytics</li>
            <li>✔ Hashtag recommendations</li>
          </ul>
          <button className="pricing-btn">Get Started</button>
        </div>
        <div className="pricing-card">
          <h2>Business</h2>
          <p className="price">₹199/month</p>
          <ul>
            <li>✔ Unlimited AI-generated posts</li>
            <li>✔ 5+ Social media platforms</li>
            <li>✔ Team collaboration</li>
            <li>✔ Premium support</li>
          </ul>
          <button className="pricing-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
