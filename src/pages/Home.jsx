// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { internships } from '../data/internships'; // Directly import local data
import Hero from '../components/Hero';
import InternshipCard from '../components/InternshipCards';
import Testimonials from '../components/Testimonials';


import './HomePage.css'; // Page-specific CSS

function HomePage() {
  const [featuredInternships, setFeaturedInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate data loading delay for demonstration
    setTimeout(() => {
      try {
        // Get first 6 internships as featured (or fewer if less data)
        const subset = internships.slice(0, 6);
        setFeaturedInternships(subset);
        setLoading(false);
      } catch (err) {
        console.error("Error loading local internships data:", err);
        setError("Failed to load featured internships data locally.");
        setLoading(false);
      }
    }, 500); // Simulate data loading
  }, []);

  if (loading) {
    return <div className="loading-message">Loading featured internships...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="homepage">
      <Hero />

      <div className="page-container">
        <h2>Featured Internships</h2>
        {featuredInternships.length === 0 ? (
          <p className="no-internships">No featured internships available at the moment.</p>
        ) : (
          <div className="internship-list">
            {featuredInternships.map((internship) => (
              <InternshipCard key={internship.id} internship={internship} />
            ))}
          </div>
        )}
        <div className="view-all-button-container">
          <Link to="/internships" className="button">View All Internships</Link>
        </div>
      </div>

      <Testimonials />
    </div>
  );
}

export default HomePage;