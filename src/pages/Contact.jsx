// src/pages/Contact.jsx
import React from 'react';
import './ContactPage.css'; // Page-specific CSS

function ContactPage() {
  return (
    <div className="contact-page page-container">
      <h1>Contact Us</h1>
      <p>
        Have questions, feedback, or need assistance? Feel free to reach out to us using the contact information below. We're here to help you on your internship journey!
      </p>

      <div className="contact-info">
        <ul>
          <li>
            <strong>Address:</strong> 123, Internship Lane, Tech City, 560001, India
          </li>
          <li>
            <strong>Email:</strong> info@internify.com
          </li>
          <li>
            <strong>Phone:</strong> +91 98765 43210
          </li>
          <li>
            <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM (IST)
          </li>
        </ul>
      </div>

      <p className="follow-us">
        You can also connect with us on our social media channels for the latest updates and opportunities.
      </p>
    </div>
  );
}

export default ContactPage;