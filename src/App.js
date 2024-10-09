import './styles/App.css'; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Assure-toi que le nom du fichier est correct
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Countries from './pages/Countries';
import Podcast from './pages/Podcast';
import Events from './pages/Events';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="site-container">
        <Navbar /> {/* Appel du composant Navbar */}
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/podcasts" element={<Podcast />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer /> {/* Appel du composant Footer */}
      </div>
    </Router>
  );
}

export default App;
