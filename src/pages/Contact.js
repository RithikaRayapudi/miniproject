import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">
        We'd love to hear from you! Fill out the form below or reach us through other channels.
      </p>

      <div className="contact-content">
        {/* Contact Information Section */}
        <div className="contact-info">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>123 AI Street, Tech City, India</p>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <p>+91 98765 43210</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>support@miniproject.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
