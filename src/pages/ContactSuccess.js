import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ContactSuccess.css'; // Assurez-vous de créer un fichier CSS pour cette page

const ContactSuccess = () => {
  return (
    <div className="contact-success-page">
      <h1>Thank You!</h1>
      <p>Your message has been sent successfully. We will get back to you as soon as possible.</p>
      <Link to="/" className="cta-button">Return to Homepage</Link>
    </div>
  );
};

export default ContactSuccess;
