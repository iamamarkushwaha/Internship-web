// FRONTEND/src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'; // Page-specific CSS

function NotFoundPage() {
  return (
    <div className="not-found-page page-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="button">Go to Home Page</Link>
    </div>
  );
}

export default NotFoundPage;