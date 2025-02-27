import React from "react";
import "../styles/Resources.css"; // Ensure this file exists

const Resources = () => {
  const resources = [
    {
      title: "📖 Beginner's Guide to AI Content Creation",
      description: "Learn the basics of AI-powered content generation and how to leverage it for your brand.",
      link: "https://example.com/ai-beginners-guide",
    },
    {
      title: "🚀 How to Automate Social Media Posts",
      description: "Discover strategies to schedule and automate your content effectively using AI tools.",
      link: "https://example.com/automate-social-media",
    },
    {
      title: "🎯 SEO Strategies for AI-Generated Content",
      description: "Optimize your AI-created content to rank higher on search engines.",
      link: "https://example.com/seo-ai-content",
    },
    {
      title: "📊 Case Study: Boosting Engagement with AI",
      description: "See real-world examples of brands improving their engagement using AI content.",
      link: "",
    },
  ];

  return (
    <div className="resources-container">
      <h1 className="resources-title">Resources & Guides</h1>
      <p className="resources-intro">
        Explore our collection of articles, tutorials, and guides to maximize your AI-powered content creation.
      </p>
      
      <div className="resource-list">
        {resources.map((resource, index) => (
          <div className="resource-card" key={index}>
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            {resource.link ? (
              <a 
                href={resource.link} 
                className="resource-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Read More
              </a>
            ) : (
              <button className="resource-button" onClick={() => alert("Coming Soon!")}>
                Coming Soon!
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
