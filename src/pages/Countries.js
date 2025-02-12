import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Countries.css';
import federationsData from '../assets/data/federations.json';
import { FaFacebook, FaInstagram, FaTwitter, FaGlobeAfrica } from 'react-icons/fa';

const Countries = () => {
  const [federations, setFederations] = useState([]);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  useEffect(() => {
    setFederations(federationsData.countries); // Charger les données

    // ✅ Corriger la largeur de la carte pour éviter le débordement
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }, []); // ✅ Fermeture correcte

  const handleMouseOver = (country) => {
    setHoveredCountry(country);
  };

  const handleWebsiteClick = (website, e) => {
    e.preventDefault();
    window.open(website, '_blank');
  };

  return (
    <div className="countries-page">
      <h1 className="title-country">Where to Find Tennis in Africa</h1>
      <MapContainer
        center={[9.082, 8.6753]}
        zoom={3}
        style={{ height: '500px', width: '100%', maxWidth: '100vw' }} // ✅ Ajout du maxWidth pour éviter le débordement
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
        />
        {federations.map((country, index) => (
          <CircleMarker
            key={index}
            center={[country.lat, country.lng]}
            radius={8}
            fillColor="#ff6b35"
            color="#000"
            weight={1}
            fillOpacity={0.8}
            eventHandlers={{ mouseover: () => handleMouseOver(country) }}
          >
            {hoveredCountry === country && (
              <Popup>
                <b>{country.name}</b>
                <br />
                <i>{country.federation}</i>
                <br />
                <div className="social-links">
                  {country.website && (
                    <a href="/" onClick={(e) => handleWebsiteClick(country.website, e)} target="_blank" rel="noopener noreferrer">
                      <FaGlobeAfrica size={24} />
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
                <a href={`/countries/${country.name.toLowerCase()}`}>More about Tennis</a>
                <br />
              </Popup>
            )}
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Countries;
