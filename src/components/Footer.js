import React from 'react';
import '../styles/Footer.css'; // Assure-toi que le fichier CSS est correctement référencé

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} AfroTennis - All Rights Reserved.</p>
      <ul>
        <li><a href="https://www.linkedin.com/company/afrotennis" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://www.instagram.com/afrotennis/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://www.youtube.com/channel/UCpjoo0f3uktTfwhn6wO4OYw" target="_blank" rel="noopener noreferrer">YouTube</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
