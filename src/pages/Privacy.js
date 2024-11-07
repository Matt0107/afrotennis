import React from 'react';
import '../styles/Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <h1>Privacy Policy</h1>
      <p>Last updated: 07 November 2024</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          At AfroTennis, we respect your privacy and are committed to protecting
          your personal data. This policy explains how we collect, use, and protect
          information about you when you use our website.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>
          We may collect the following types of information:
          <ul>
            {/* <li><b>Personal Information:</b> such as your name, email address, and contact details when you contact us or sign up for our services.</li> */}
            <li><b>Usage Data:</b> data collected automatically, like IP addresses, browser type, and information about your interactions with our site.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>3. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies to improve your experience on our website, including:
          <ul>
            <li><b>Essential Cookies:</b> required for site functionality.</li>
            <li><b>Analytics Cookies:</b> to help us analyze site usage and improve our services.</li>
          </ul>
          You may choose to accept or reject cookies. Most browsers automatically accept cookies but allow you to modify your settings to disable them.
        </p>
      </section>

      <section>
        <h2>4. How We Use Your Information</h2>
        <p>
          The information we collect helps us:
          <ul>
            <li>Provide and maintain our services</li>
            <li>Analyze usage for improvement</li>
            {/* <li>Communicate with you regarding updates or offers</li> */}
          </ul>
        </p>
      </section>

      <section>
        <h2>5. Third-Party Services</h2>
        <p>
          We use Google Analytics to analyze usage. Google Analytics sets cookies to help us understand user interactions on our site. You can learn more about Google’s data usage <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
      </section>

      <section>
        <h2>6. Your Data Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete your information. Contact us at hello@afrotennis.com to exercise these rights.
        </p>
      </section>

      <section>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@afrotennis.com">hello@afrotennis.com</a>.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
