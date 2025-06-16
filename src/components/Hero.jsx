// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'; // Component-specific CSS

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Your Gateway to Practical Experience</h1>
        <p>Find diverse internship opportunities and kickstart your career.</p>
        <Link to="/internships" className="button">Explore Internships</Link>
      </div>
    </section>
  );
}

export default Hero;