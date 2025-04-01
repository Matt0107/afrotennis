import './styles/App.css';  
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Countries from './pages/Countries';
import Country from './pages/Country';
import Progress from './pages/Progress';
import MediaCenter from './pages/MediaCenter';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Initiatives from './pages/Initiatives';
import ContactSuccess from './pages/ContactSuccess';
import Privacy from './pages/Privacy';
import ConsentBanner from './components/ConsentBanner';

function App() {
  return (
    <Router>
      <div className="site-container">
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/countries/:countryName" element={<Country />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/mediacenter" element={<MediaCenter />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/contact-success" element={<ContactSuccess />} />
            <Route path="/privacy-policy" element={<Privacy />} />
          </Routes>
        </div>
        <ConsentBanner /> {/* Place le ConsentBanner ici */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
