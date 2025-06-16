// src/components/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'; // Component-specific CSS

function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <Link to="/" className="logo">
          INTERNIFY
        </Link>
        <nav>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/internships">Internships</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/my-internships">My Internships</NavLink></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search internships..." />
          <button type="button">🔍</button>
        </div>
      </div>
    </header>
  );
}

export default Header;