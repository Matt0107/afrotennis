import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Countries from './pages/Countries';
import Podcasts from './pages/Podcasts';
import Events from './pages/Events';
import Contact from './pages/Contact';

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
      <div>
        {/* Hamburger button */}
        <button className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Unicode for hamburger icon */}
        </button>

        {/* Desktop Navigation Bar */}
        <nav className="desktop">
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
    </Router>
  );
}

export default App;
