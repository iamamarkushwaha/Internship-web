// src/components/ApplyForm.jsx
import React, { useState } from 'react';
import './ApplyForm.css'; // Component-specific CSS

// --- IMPORTANT: Replace this with YOUR Google Form URL ---
// You will need to create a Google Form and get its shareable link.
const GOOGLE_FORM_BASE_URL = 'https://forms.gle/YOUR_GOOGLE_FORM_SHORT_URL'; // Replace with your actual shortened Google Form URL
// For example: 'https://forms.gle/abcdefg12345'
// Or the full URL: 'https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_ID/viewform'
// --------------------------------------------------------

function ApplyForm({ internshipId }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    if (!name || !email) {
      setMessage('Please fill in your name and email.');
      return;
    }

    // For simplicity, we'll just open the form in a new tab.
    // If you want to pre-fill, you'd construct a URL like:
    // const formUrl = `<span class="math-inline">\{GOOGLE\_FORM\_BASE\_URL\}?entry\.YOUR\_NAME\_FIELD\_ID\=</span>{encodeURIComponent(name)}&entry.YOUR_EMAIL_FIELD_ID=<span class="math-inline">\{encodeURIComponent\(email\)\}&entry\.YOUR\_INTERNSHIP\_ID\_FIELD\_ID\=</span>{encodeURIComponent(internshipId)}`;
    // To find field IDs, inspect the Google Form's HTML or submit a test entry and check the URL.
    window.open(GOOGLE_FORM_BASE_URL, '_blank');

    setMessage('Redirecting to Google Form...');
    setName('');
    setEmail('');
  };

  return (
    <div className="apply-form">
      <h3>Apply for this Internship</h3>
      <p>Please click the button below to fill out the application via our Google Form.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {internshipId && (
          <div className="form-group">
            <label htmlFor="internshipId">Internship ID:</label>
            <input
              type="text"
              id="internshipId"
              value={internshipId}
              readOnly // User shouldn't change this
              disabled // Visually indicate it's not editable
            />
          </div>
        )}
        <button type="submit" className="button">Proceed to Google Form</button>
        {message && <p className="form-message">{message}</p>}
      </form>
      <p className="note">Note: You will be redirected to an external Google Form to complete your application.</p>
    </div>
  );
}

export default ApplyForm;