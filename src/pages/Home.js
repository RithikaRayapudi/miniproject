import React from "react";
import "../styles/Home.css"; // Ensure correct file path

function Home() {
  return (
    <div className="app-container">
      {/* Sidebar for prompt history */}
      <aside className="sidebar">
        <h2>History</h2>
        <ul>
          <li><i className="fas fa-history"></i> Previous prompt 1</li>
          <li><i className="fas fa-history"></i> Previous prompt 2</li>
          <li><i className="fas fa-history"></i> Previous prompt 3</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <div className="home-container">
          <h1 className="home-title">Welcome to MINIPROJECT</h1>
          <p className="home-subtitle">AI-powered content generation made easy.</p>
          
          {/* Professional Prompt Section */}
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Type a prompt..." />
            <button className="send-button">Send</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
