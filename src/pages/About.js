// src/pages/About.js
import React from "react";
import "../styles/About.css"; // Make sure to create a corresponding CSS file for styling.

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About CREOVATE</h1>
        <p>Your AI-powered content generation companion</p>
      </header>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          CREOVATE is designed to make content creation effortless. Whether you're a marketer, entrepreneur, or content creator, 
          our AI-driven platform helps you generate high-quality, engaging content in just a few clicks.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          We aim to revolutionize the way content is created. By leveraging cutting-edge AI technology, 
          we provide users with smart, efficient, and creative solutions to enhance their digital presence.
        </p>
      </section>

      <section className="about-features">
        <h2>What We Offer</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🚀 AI-Powered Content</h3>
            <p>Generate high-quality social media posts, blogs, and marketing copy in seconds.</p>
          </div>
          <div className="feature-card">
            <h3>📅 Smart Content Planning</h3>
            <p>Stay ahead with content scheduling and organization tools.</p>
          </div>
          <div className="feature-card">
            <h3>📊 Analytics & Insights</h3>
            <p>Track your content performance and optimize your strategy with data-driven insights.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Why Choose CREOVATE?</h2>
        <ul className="about-list">
          <li>✅ Saves time by automating content creation</li>
          <li>✅ Ensures high-quality and engaging posts</li>
          <li>✅ Helps you focus on growing your audience</li>
          <li>✅ User-friendly interface for seamless experience</li>
        </ul>
      </section>

      <footer className="about-footer">
        <h2>Join Us Today!</h2>
        <p>Experience the power of AI in content creation. Start your journey with CREOVATE now!</p>
        <button className="about-btn">Get Started</button>
      </footer>
    </div>
  );
}

export default About;
