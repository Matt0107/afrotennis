import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Countries.css';
import federationsData from '../assets/data/federations.json'; // Importer les données
import { useNavigate } from 'react-router-dom'; // Utilisation de useNavigate pour la redirection
import { FaFacebook, FaInstagram, FaTwitter, FaGlobe } from 'react-icons/fa'; // Import des icônes

const Countries = () => {
  const [federations, setFederations] = useState([]);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const navigate = useNavigate(); // Utilisation de useNavigate pour la redirection

  useEffect(() => {
    setFederations(federationsData.countries); // Charger les données depuis le fichier JSON
  }, []);

  // Fonction pour gérer le survol (hover) et afficher les informations
  const handleMouseOver = (country) => {
    setHoveredCountry(country); // Ouvrir la popup pour le pays survolé
  };

// Fonction pour gérer l'ouverture du lien externe du site web
const handleWebsiteClick = (website, e) => {
  e.preventDefault(); // Empêche le comportement par défaut du lien
  window.open(website, '_blank'); // Ouvre le site dans un nouvel onglet
};

  return (
    <div className="countries-page">
      <h1 className='title-country'>Where to Find Tennis in Africa</h1>
      <MapContainer center={[9.082, 8.6753]} zoom={3} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
        />
        {federations.map((country, index) => (
          <CircleMarker
            key={index}
            center={[country.lat, country.lng]}
            radius={8} // Taille du cercle (tu peux l'ajuster)
            fillColor="#ff6b35"
            color="#000" // Bordure du cercle
            weight={1} // Épaisseur de la bordure
            fillOpacity={0.8}
            eventHandlers={{
              mouseover: () => handleMouseOver(country),
            }}
          >
            {hoveredCountry === country && (
              <Popup>
                <b>{country.name}</b><br />
                <i>{country.federation}</i><br />
                <div className="social-links">
                  {country.website && (
                    <a href="/" onClick={(e) => handleWebsiteClick(country.website, e)} target="_blank" rel="noopener noreferrer">
                      <FaGlobe size={24} /> {/* Icône pour le site web */}
                    </a>
                  )}
                  {country.socialMedia?.facebook && (
                    <a href={country.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                      <FaFacebook size={24} />
                    </a>
                  )}
                  {country.socialMedia?.instagram && (
                    <a href={country.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram size={24} />
                    </a>
                  )}
                  {country.socialMedia?.twitter && (
                    <a href={country.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                      <FaTwitter size={24} />
                    </a>
                  )}
                </div>
                <a href={`/countries/${country.name.toLowerCase()}`}>More about Tennis</a><br/>
              </Popup>
            )}
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Countries;
