// src/pages/InternshipDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { internships } from "../data/internships";
import ApplyForm from '../components/ApplyForm'; // Correct path from 'pages' to 'data'
import './InternshipDetailPage.css'; // Page-specific CSS

const InternshipDetailPage = () => {
  const { id } = useParams();
  const [internship, setInternship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate data loading delay for demonstration
    setTimeout(() => {
      try {
        const foundInternship = internships.find(i => i.id === id);
        if (foundInternship) {
          setInternship(foundInternship);
          setLoading(false);
        } else {
          setError('Internship not found.');
          setLoading(false);
        }
      } catch (err) {
        console.error("Error loading local internship details:", err);
        setError("Failed to load internship details locally.");
        setLoading(false);
      }
    }, 300); // Simulate data loading
  }, [id]);

  if (loading) {
    return <div className="loading-message">Loading internship details...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  // Check if internship is null after loading and error checks
  if (!internship) {
    return <div className="not-found-message">Internship not found.</div>;
  }

  return (
    <div className="internship-detail-page page-container">
      {internship.image && <img src={internship.image} alt={internship.title} className="internship-image" />}
      <h1>{internship.title}</h1>
      <p><strong>Company:</strong> {internship.company}</p>
      <p><strong>Location:</strong> {internship.location}</p>
      <p><strong>Duration:</strong> {internship.duration}</p>
      <p><strong>Stipend:</strong> {internship.stipend}</p>
      <p><strong>Apply By:</strong> {internship.applyBy}</p>

      <h3>About the Internship:</h3>
      <p className="detail-description">{internship.description}</p>

      {internship.responsibilities && Array.isArray(internship.responsibilities) && internship.responsibilities.length > 0 && (
        <>
          <h3>Key Responsibilities:</h3>
          <ul>
            {internship.responsibilities.map((res, index) => (
              <li key={index}>{res}</li>
            ))}
          </ul>
        </>
      )}

      {internship.requirements && Array.isArray(internship.requirements) && internship.requirements.length > 0 && (
        <>
          <h3>Requirements:</h3>
          <ul>
            {internship.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </>
      )}

      <ApplyForm internshipId={internship.id} />

      <div className="detail-page-actions">
        <Link to="/internships" className="button back-button">Back to All Internships</Link>
      </div>
    </div>
  );
};

export default InternshipDetailPage;