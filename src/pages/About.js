import React, { useEffect, useRef, useState } from 'react';
import '../styles/About.css';  // Import the CSS specific to the About page

const About = () => {
  const teamRef = useRef(null); // Référence pour la section "team"
  const [isParallaxVisible, setIsParallaxVisible] = useState(false); // État pour le fondu de la section parallax

  // Utilisation de useEffect pour démarrer l'animation en fondu dès le chargement de la page
  useEffect(() => {
    setTimeout(() => {
      setIsParallaxVisible(true); // Déclencher l'affichage en fondu après le chargement de la page
    }, 100); // Délai léger pour que l'animation soit fluide (facultatif)
  }, []);

  useEffect(() => {
    const teamMembers = document.querySelectorAll('.team-member');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide'); // Ajoute la classe d'animation
            observer.unobserve(entry.target); // Stop observing once it's in view
          }
        });
      },
      {
        threshold: 0.2, // L'animation démarre quand 20% de la section est visible
      }
    );

    teamMembers.forEach(member => {
      observer.observe(member);
    });

    return () => {
      teamMembers.forEach(member => observer.unobserve(member)); // Nettoyage
    };
  }, []);

  return (
    <div className="home-about">
      
      {/* Parallax Section */}
      <section 
        className={`about-parallax ${isParallaxVisible ? 'fade-in' : ''}`}
      >
        <div className="parallax-content">
          <h2>Our Mission</h2>
          <p>AfroTennis is dedicated to creating a platform for African tennis players, coaches, and enthusiasts to come together and grow the sport across the continent. Our mission is to provide resources, opportunities, and recognition for African tennis talents, while fostering a community that celebrates the diversity of African tennis.</p>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="team" ref={teamRef}>
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={require('../assets/images/profil-matt.jpg')} alt="Mathieu" />
            <h3>Mathieu</h3>
            <p>Founder</p>
          </div>
          <div className="team-member">
            <img src={require('../assets/images/profil-andrea.jpg')} alt="Andrea" />
            <h3>Andrea</h3>
            <p>Managing Partner</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
