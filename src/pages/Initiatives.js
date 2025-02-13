// src/pages/Initiatives.js
import React from 'react';
import '../styles/Initiatives.css';

const initiativesData = [
  {
    title: 'Programme de Développement des Jeunes Talents',
    description: 'Un programme dédié à l\'identification et au soutien des jeunes talents du tennis à travers l\'Afrique.',
    imageUrl: '/images/young-talents.jpg',
    status: 'Accompli',
  },
  {
    title: 'Construction de Terrains de Tennis Communautaires',
    description: 'Initiative visant à construire des terrains de tennis dans les communautés défavorisées.',
    imageUrl: '/images/community-courts.jpg',
    status: 'En cours',
  },
  // Ajoutez d'autres initiatives ici
];

const Initiatives = () => {
  return (
    <div className="initiatives-page">
      <h1 className="initiatives-title">Nos Initiatives</h1>
      <div className="initiatives-list">
        {initiativesData.map((initiative, index) => (
          <div className="initiative-card" key={index}>
            <img src={initiative.imageUrl} alt={initiative.title} className="initiative-image" />
            <h2 className="initiative-title">{initiative.title}</h2>
            <p className="initiative-description">{initiative.description}</p>
            <span className={`initiative-status ${initiative.status === 'Accompli' ? 'completed' : 'ongoing'}`}>
              {initiative.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Initiatives;
