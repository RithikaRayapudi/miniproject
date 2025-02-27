import React from "react";
import "../styles/Navbar.css"; // Ensure this file exists and is correctly linked

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="website-name">CREOVATE</div> {/* Temporary text logo */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/features">Features</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/resources">Resources</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/login" className="login-btn">Login</a></li>
        <li><a href="/signup" className="signup-btn">Sign Up</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
