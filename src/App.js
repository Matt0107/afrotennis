import './styles/App.css';  
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Assure-toi que le nom du fichier est correct
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Countries from './pages/Countries';
import Country from './pages/Country';
import Progress from './pages/Progress';
import Podcast from './pages/Podcast';
import Events from './pages/Events';
import Contact from './pages/Contact';
import ContactSuccess from './pages/ContactSuccess';

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
            <Route path="/countries/:countryName" element={<Country />} />
            <Route path="/progress" element={<Progress />} />  {/* Route pour la page "Progress" */}
            <Route path="/podcasts" element={<Podcast />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-success" element={<ContactSuccess />} />
          </Routes>
        </div>
        <Footer /> {/* Appel du composant Footer */}
      </div>
    </Router>
  );
}

export default App;
