// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

import './Hero.css'; // Component-specific CSS

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">

        <h2 className="typing-text"><TypeAnimation
            sequence={[
              ' Your Gateway to Practical Experience', // Text to type
              3000,             // Wait 2s
              '',               // Delete
              2000,             // Wait 1s
            ]}
            wrapper="span"
            speed={70}
            style={{ display: 'inline-block', color: '#007bff', fontWeight: 'bold' }}
            repeat={Infinity}
          /></h2>


        <p>Find diverse internship opportunities and kickstart your career.</p>
        <Link to="/internships" className="button">Explore Internships</Link>
      </div>
    </section>
  );
}

export default Hero;