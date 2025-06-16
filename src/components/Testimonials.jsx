// FRONTEND/src/components/Testimonials.jsx
import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>What Our Interns Say</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p>"Internify helped me land my dream internship! The process was smooth and the opportunities were exactly what I was looking for."</p>
          <h4>- Priya Sharma</h4>
          <span>Software Intern at TechCorp</span>
        </div>
        <div className="testimonial-card">
          <p>"A fantastic platform for students. I found an internship that truly aligned with my career goals. Highly recommended!"</p>
          <h4>- Rohan Singh</h4>
          <span>Data Science Intern at Analytics Co.</span>
        </div>
        <div className="testimonial-card">
          <p>"The best resource for internships. Clear descriptions, easy application. I got a great experience thanks to Internify."</p>
          <h4>- Sneha Reddy</h4>
          <span>Marketing Intern at BrandFlow</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;