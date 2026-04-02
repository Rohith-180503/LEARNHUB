import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Assuming logo is correctly placed based on App.jsx

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="modern-navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
          <span className="logo-text">LearnHub</span>
        </div>

        <ul className="navbar-links">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>

          <li 
            className="nav-item dropdown"
            onMouseEnter={() => handleMouseEnter('courses')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-link">
              Explore Courses <i className="dropdown-icon">▾</i>
            </span>
            {activeDropdown === 'courses' && (
              <div className="dropdown-menu glassmorphism active">
                <a href="#web-dev" className="dropdown-item">Web Development</a>
                <a href="#data-science" className="dropdown-item">Data Science & AI</a>
                <a href="#cloud" className="dropdown-item">Cloud Computing</a>
                <a href="#ui-ux" className="dropdown-item">UI/UX Design</a>
              </div>
            )}
          </li>

          <li 
            className="nav-item dropdown"
            onMouseEnter={() => handleMouseEnter('resources')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-link">
              Resources <i className="dropdown-icon">▾</i>
            </span>
            {activeDropdown === 'resources' && (
              <div className="dropdown-menu glassmorphism active">
                <a href="#blog" className="dropdown-item">Blog & Articles</a>
                <a href="#community" className="dropdown-item">Student Community</a>
                <a href="#success" className="dropdown-item">Success Stories</a>
              </div>
            )}
          </li>

          <li className="nav-item">
            <a href="#instructors" className="nav-link">Instructors</a>
          </li>
        </ul>

        <div className="navbar-actions">
          <button className="cart-btn">
            My Cart
            <span className="cart-icon">🛒</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
