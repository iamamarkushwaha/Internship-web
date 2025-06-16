// src/pages/MyInternshipPage.jsx
import React from 'react';
import './MyInternshipPage.css'; // Page-specific CSS

function MyInternshipPage() {
  return (
    <div className="my-internships-page page-container">
      <h1>My Applied Internships</h1>
      <p>
        This page would typically show a list of internships you have applied for,
        their status, and other relevant information.
      </p>
      <p>
        Since we are using Google Forms for applications and not storing
        application data on our backend, this page is currently a placeholder.
        In a full-stack application, applied internship data would be managed
        and displayed here after a user logs in.
      </p>
      <p>
        You can imagine seeing details like:
      </p>
      <ul>
        <li>Internship Title</li>
        <li>Company</li>
        <li>Application Date</li>
        <li>Status (e.g., Applied, Under Review, Interview Scheduled, Rejected, Offered)</li>
      </ul>
    </div>
  );
}

export default MyInternshipPage;