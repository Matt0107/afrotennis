import React, { useState, useEffect } from 'react';
import '../styles/ConsentBanner.css';

const ConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('consent', 'default', {
      'analytics_storage': 'denied'
    });

    const cookiesConsent = localStorage.getItem("cookiesConsent");
    if (!cookiesConsent) {
      setIsVisible(true);
    } else if (cookiesConsent === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesConsent", "accepted");
    setIsVisible(false);
    loadGoogleAnalytics();
  };

  const rejectCookies = () => {
    localStorage.setItem("cookiesConsent", "rejected");
    setIsVisible(false);
  };

  const loadGoogleAnalytics = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-YCLSQKSW88`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-YCLSQKSW88');
  };

  return (
    isVisible && (
      <div className="consent-banner">
        <div className="consent-content">
          <p>
            We use cookies for analytics and to improve your experience on our site.
            By clicking "Accept", you consent to the use of cookies.
            <a href="/privacy-policy" className="privacy-link">Learn more</a>
          </p>
          <div className="button-group">
            <button className="accept-button" onClick={acceptCookies}>Accept</button>
            <button className="reject-button" onClick={rejectCookies}>Reject</button>
          </div>
        </div>
      </div>
    )
  );
};

export default ConsentBanner;
