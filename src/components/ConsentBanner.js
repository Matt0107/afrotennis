import React, { useState, useEffect } from 'react';
import '../styles/ConsentBanner.css'; // Assurez-vous d'avoir ce fichier CSS dans le dossier styles

const ConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Définit le consentement par défaut pour l'analyse et la publicité (analytique uniquement dans votre cas)
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('consent', 'default', {
      'analytics_storage': 'denied'
    });

    // Vérifie si l'utilisateur a déjà accepté les cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    // Enregistrer le consentement et cacher la bannière
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
    loadGoogleAnalytics();
  };

  const loadGoogleAnalytics = () => {
    // Charger Google Analytics 4 avec gtag.js
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-YCLSQKSW88`; // Remplacez G-XXXXXXXXXX par votre ID de mesure GA4
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-YCLSQKSW88'); // Remplacez également ici avec votre ID de mesure GA4
  };

  return (
    isVisible && (
      <div className="consent-banner">
        <p>
          We use cookies for analytics and to improve your experience on our site.
          By clicking "Accept", you consent to the use of cookies.
          <a href="/privacy-policy" className="privacy-link">Learn more</a>
        </p>
        <button className="accept-button" onClick={acceptCookies}>Accept</button>
      </div>
    )
  );
};

export default ConsentBanner;
