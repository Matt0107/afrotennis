import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Assure-toi que le fichier CSS est correctement référencé
import logo from '../assets/images/logo-white.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Gestion du menu mobile

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Ouvre/Ferme le menu
  };

  const closeMenu = () => {
    setIsOpen(false); // Ferme le menu après un clic sur un lien
  };

  return (
    <>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Icône hamburger */}
      </button>

      {/* Desktop Navigation Bar */}
      <nav className="desktop">
        <div className="nav-logo">
          <Link to="/">
          <img src={logo} alt="AfroTennis Logo" />
          </Link>
        </div>
        <ul>
          {/* <li><Link to="/">Home</Link></li> */}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/countries">Tennis in Africa</Link></li>
          <li><Link to="/podcasts">Podcast</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile Navigation Bar */}
      <nav className={`mobile ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/countries" onClick={closeMenu}>Tennis in Africa</Link></li>
          <li><Link to="/podcasts" onClick={closeMenu}>Podcast</Link></li>
          <li><Link to="/events" onClick={closeMenu}>Events</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
