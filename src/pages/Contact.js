import React, { useState } from 'react';
import '../styles/Contact.css'; // Importation du style pour la page Contact

// Importation des fichiers SVG
import InstagramIcon from '../assets/images/instagram_black.svg';
import LinkedInIcon from '../assets/images/linkedin_black.svg';
import YouTubeIcon from '../assets/images/YouTube_black.svg';

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch('https://www.afrotennis.com/contact.php', { // Le fichier PHP qui traitera le formulaire
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((text) => {
        setStatusMessage(text);
        form.reset(); // Réinitialiser le formulaire

        // Optionnel : Redirection après envoi réussi
        window.location.href = '/contact-success'; // Redirection vers la page de succès
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
        <p>Feel free to reach out to us by using this form.</p>
        <p> You can also send us an email at <a href="mailto:hello@afrotennis.com">hello@afrotennis.com</a>.</p>
      </section>

      <section className="contact-form-section">
        <h2>Send us a message</h2>
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
          <a href="https://www.linkedin.com/company/afrotennis" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/afrotennis/" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" />
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
