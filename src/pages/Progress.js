import React from 'react';
import '../styles/Progress.css';  // Importation des styles pour la page

const Progress = () => {
  return (
    <div className="progress-page">
      <div className="construction-content">
        <img 
          src={require('../assets/images/tennis_construction_scene.png')} 
          alt="Tennis in Progress" 
          className="construction-image"
        />
        <h1>Page Under Construction</h1>
        <p>We are working hard to bring you all the information about tennis in Africa. Stay tuned!</p>
      </div>
    </div>
  );
};

export default Progress;
