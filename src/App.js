import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Countries from './pages/Countries';
import Podcasts from './pages/Podcasts';
import Events from './pages/Events';
import Contact from './pages/Contact';
import logo from './assets/images/logo-white.png'; // Chemin vers ton logo

function App() {
  const [isOpen, setIsOpen] = useState(false); // State to track menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <Router>
      <div className="site-container">
        {/* Hamburger button */}
        <button className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Unicode for hamburger icon */}
        </button>

        {/* Desktop Navigation Bar */}
        <nav className="desktop">
        <div className="nav-logo">
            <img src={logo} alt="Afrotennis Logo" />
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
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

        <div className="content-wrap">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>

         {/* Footer */}
         <footer className="footer">
          <p>&copy; {new Date().getFullYear()} AfroTennis - All Rights Reserved.</p>
          <ul>
            <li><a href="https://www.linkedin.com/company/afrotennis" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/afrotennis/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.youtube.com/channel/UCpjoo0f3uktTfwhn6wO4OYw" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </footer>
      </div>
    </Router>
  );
}

export default App;
