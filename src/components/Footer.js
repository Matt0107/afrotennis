import React from 'react';
import '../styles/Footer.css'; 
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import des icônes

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} AfroTennis - All Rights Reserved.</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/company/afrotennis" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} /> {/* Icône LinkedIn */}
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/afrotennis/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} /> {/* Icône Instagram */}
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCpjoo0f3uktTfwhn6wO4OYw" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} /> {/* Icône YouTube */}
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
