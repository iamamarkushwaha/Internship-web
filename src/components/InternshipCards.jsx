// FRONTEND/src/components/InternshipCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import './InternshipCard.css'; // Component-specific CSS

function InternshipCard({ internship }) {
  return (
    <div className="internship-card">
      <img src={internship.image || '/assets/default-internship.jpg'} alt={internship.title} className="internship-card-image" />
      <h3>{internship.title}</h3>
      <p className="company-name"><strong>Company:</strong> {internship.company}</p>
      <p className="location"><strong>Location:</strong> {internship.location}</p>
      <p className="description">{internship.description.substring(0, 120)}...</p> {/* Truncate */}
      <Link to={`/internships/${internship.id}`} className="details-link button">View Details</Link>
    </div>
  );
}

export default InternshipCard;