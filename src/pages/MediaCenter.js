import React from 'react';
import '../styles/MediaCenter.css';

const MediaCenter = () => {
  return (
    <div className="media-center">
      <h1 className="media-title">Media Center</h1>

      {/* YouTube Section */}
      <section className="media-section youtube-section">
        <h2 className="platform-title">🎥 AfroTennis on YouTube</h2>
        <div className="video-gallery">
          {/* Exemple de vidéos (tu peux en ajouter plus) */}
          <div className="video-card">
            <iframe
              src="https://www.youtube-nocookie.com/embed/RdlsW-ldFvk"
              title="YouTube video"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            ></iframe>
            <h3 className="video-caption">Episode 1: Tennis, Too Elitist?</h3>
          </div>
          <div className="video-card">
            <iframe
              src="https://www.youtube-nocookie.com/embed/7ZFePjW9HZs"
              title="YouTube video"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            ></iframe>
            <h3 className="video-caption">Episode 2: Education Through Tennis</h3>
          </div>
          <div className="video-card">
            <iframe
              src="https://www.youtube-nocookie.com/embed/ACBa-lGtEiY?si=cinp2oSK7Qz9pFSP"
              title="YouTube video"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            ></iframe>
            <h3 className="video-caption">Episode 3: Behind The Scenes of Kigali Challengers</h3>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="media-section instagram-section">
        <h2 className="platform-title">📸 AfroTennis on Instagram</h2>
        <div className="instagram-widget">
          {/* LightWidget embed */}
          <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
          <iframe
            src="//lightwidget.com/widgets/6ece17daf3bc540681f4485c1086e8c2.html"
            scrolling="no"
            allowtransparency="true"
            className="lightwidget-widget"
            style={{
              width: '100%',
              border: '0',
              overflow: 'hidden'
            }}
            title="Instagram Feed"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default MediaCenter;
