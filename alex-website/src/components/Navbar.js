// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleDropdown}>
        &#9776; {/* hamburger icon */}
      </div>
      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleDropdown}>About</Link>
        <Link to="/projects" onClick={toggleDropdown}>Projects</Link>
        <a href="https://github.com/AlexZorrilla99" target="_blank" rel="noopener noreferrer">
        <img src="GitHub.png" alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/alexander-zorrilla/" target="_blank" rel="noopener noreferrer">
        <img src="LinkedIn.png" alt="LinkedIn" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
