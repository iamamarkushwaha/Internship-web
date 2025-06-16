// src/pages/Internships.jsx
import React, { useState, useEffect } from 'react';
import { internships } from '../data/internships'; // Directly import local data

import InternshipCard from '../components/InternshipCards';
import './InternshipsPage.css'; // Page-specific CSS

function InternshipsPage() {
  const [allInternships, setAllInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate data loading delay for demonstration
    setTimeout(() => {
      try {
        setAllInternships(internships); // Load all internships
        setLoading(false);
      } catch (err) {
        console.error("Error loading local internships data:", err);
        setError("Failed to load all internships data locally.");
        setLoading(false);
      }
    }, 500); // Simulate data loading
  }, []);

  if (loading) {
    return <div className="loading-message">Loading all internships...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="internships-page page-container">
      <h1>All Internship Opportunities</h1>
      {allInternships.length === 0 ? (
        <p className="no-internships">No internships available at the moment.</p>
      ) : (
        <div className="internship-list">
          {allInternships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
      )}
    </div>
  );
}

export default InternshipsPage;