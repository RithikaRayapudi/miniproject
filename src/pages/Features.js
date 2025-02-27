import React from "react";
import "../styles/Features.css"; // Ensure you create and style this file accordingly

const Features = () => {
  return (
    <div className="features-container">
      <h1 className="features-title">Powerful Features to Supercharge Your Content</h1>
      <p className="features-subtitle">
        AI-driven content generation tailored for marketers, entrepreneurs, and creators.
      </p>
      
      <div className="features-grid">
        <div className="feature-card">
          <h3>🚀 Intelligent Content Creation</h3>
          <p>Generate high-quality, engaging content with AI that adapts to your brand’s voice.</p>
        </div>
        
        <div className="feature-card">
          <h3>📅 Automated Scheduling & Publishing</h3>
          <p>Plan, schedule, and publish your content seamlessly across multiple platforms.</p>
        </div>
        
        <div className="feature-card">
          <h3>🔄 Content Categorization & Recycling</h3>
          <p>Organize your content effortlessly and keep your audience engaged with automated recycling.</p>
        </div>
        
        <div className="feature-card">
          <h3>📊 In-Depth Analytics & Reporting</h3>
          <p>Track key metrics, understand audience behavior, and optimize your content strategy.</p>
        </div>

        <div className="feature-card">
          <h3>🤝 Collaborative Workspace</h3>
          <p>Work efficiently with your team, share content, and streamline collaboration.</p>
        </div>
        
        <div className="feature-card">
          <h3>🎨 Customizable Templates</h3>
          <p>Ensure brand consistency with our library of customizable content templates.</p>
        </div>
        
        <div className="feature-card">
          <h3>📈 AI-Powered SEO Optimization</h3>
          <p>Boost your content's visibility with AI-driven keyword suggestions and SEO tools.</p>
        </div>
        
        <div className="feature-card">
          <h3>🔗 Multi-Platform Integration</h3>
          <p>Connect with social media, blogs, and websites to manage all content in one place.</p>
        </div>
      </div>
      
      <div className="cta-section">
        <h2>Why Choose CREAOVATE?</h2>
        <p>We combine AI-powered automation with a user-friendly experience, helping you create impactful content effortlessly.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default Features;
