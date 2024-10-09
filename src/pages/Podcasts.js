import React, { useState } from 'react';
import '../styles/Podcasts.css'; // Importation des styles spécifiques
import Modal from 'react-modal'; // Utilisation d'une modal pour le lecteur YouTube

Modal.setAppElement('#root'); // Spécifie l'élément racine pour la modal

const videos = [
  { id: 'RdlsW-ldFvk', title: 'Episode 1 : Tennis, Too Elitist ? ' },
  { id: '7ZFePjW9HZs', title: 'Episode 2 : Education Through Tennis' },
  { id: 'ACBa-lGtEiY', title: 'Episode 3 : Kigali Challenger 2024' },
  // Ajoutez autant de vidéos que nécessaire
];

const Podcast = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Ouvre la modal avec la vidéo sélectionnée
  const openModal = (videoId) => {
    setSelectedVideo(videoId);
    setModalIsOpen(true);
  };

  // Ferme la modal
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="podcast-page">
      {/* Section d'introduction */}
      <section className="podcast-intro">
        <h1>Our Podcasts</h1>
        <p>Explore our collection of podcasts featuring exclusive interviews, insights, and stories from the world of African tennis.</p>
      </section>

      {/* Galerie de vidéos YouTube */}
      <section className="video-gallery">
        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card" onClick={() => openModal(video.id)}>
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                className="video-thumbnail"
              />
              <h3>{video.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Modal pour le lecteur YouTube */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        {selectedVideo && (
          <iframe
            title="YouTube video player"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </Modal>
    </div>
  );
};

export default Podcast;
