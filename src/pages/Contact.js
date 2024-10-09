import React, { useState } from 'react';
import '../styles/Contact.css'; // Importation du style pour la page Contact

// Importation des fichiers SVG
import InstagramIcon from '../assets/images/Instagram_logo.svg';
import LinkedInIcon from '../assets/images/LinkedIn_icon.svg';
import YouTubeIcon from '../assets/images/YouTube-Icon.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter une logique pour envoyer le formulaire ici
    alert('Message sent!');
    setFormData({ name: '', email: '', subject: '', message: '' });
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
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
          <button type="submit" className="cta-button">Send Message</button>
        </form>
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
