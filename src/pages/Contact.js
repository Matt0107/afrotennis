import React, { useState } from 'react';
import '../styles/Contact.css'; // Importation du style pour la page Contact

// Importation des fichiers SVG
import InstagramIcon from '../assets/images/instagram_black.svg';
import LinkedInIcon from '../assets/images/linkedin_black.svg';
import YouTubeIcon from '../assets/images/YouTube_black.svg';

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState(''); // Pour afficher un message de statut

  // Fonction qui gère l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target; // Récupérer le formulaire
    const formData = new FormData(form); // Créer un objet FormData

    fetch('https://afrotennis.com/contact.php', { // Lien vers le fichier PHP en production
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((text) => {
        setStatusMessage(text); // Afficher la réponse de PHP (message de succès ou d'erreur)
        form.reset(); // Réinitialiser le formulaire après soumission
      })
      .catch((error) => {
        setStatusMessage('Failed to send message. Please try again.');
        console.error('Error:', error);
      });
  };

  return (
    <div className="contact-page">
      <section className="contact-info">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us.</p>
        <p> You can also send us an email at <a href="mailto:hello@afrotennis.com">hello@afrotennis.com</a>.</p>
      </section>

      <section className="contact-form-section">
        <h2>Send us a message</h2>
        {/* Utilisation de "action" pour pointer vers le fichier PHP */}
        <form className="contact-form" onSubmit={handleSubmit} method="POST">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="cta-button">Send Message</button>
        </form>
        {statusMessage && <p className="status-message">{statusMessage}</p>} {/* Affichage du message de statut */}
      </section>

      <section className="social-media">
        <h2>Follow us</h2>
        <div className="social-icons">
          <a href="https://www.instagram.com/afrotennis/" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/afrotennis" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.youtube.com/channel/UCpjoo0f3uktTfwhn6wO4OYw" target="_blank" rel="noopener noreferrer">
            <img src={YouTubeIcon} alt="YouTube" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
