// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Component-specific CSS

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/internships">Internships</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>123, Internship Lane, Tech City, IN</p>
          <p>info@internify.com</p>
          <p>+91 98765 43210</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            {/* You'd use actual icon libraries like Font Awesome here */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a> {/* Placeholder for Facebook icon */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a> {/* Placeholder for Twitter icon */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">👔</a> {/* Placeholder for LinkedIn icon */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</a> {/* Placeholder for Instagram icon */}
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} INTERNIFY. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;