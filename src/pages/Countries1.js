import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Countries1.css';
import federationsData from '../assets/data/federations.json'; // Importer les données

const Countries1 = () => {
  const [federations, setFederations] = useState([]);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  useEffect(() => {
    setFederations(federationsData.countries); // Charger les données depuis le fichier JSON
  }, []);

  // Fonction pour gérer le survol (hover) et afficher les informations
  const handleMouseOver = (country) => {
    setHoveredCountry(country); // Ouvrir la popup pour le pays survolé
  };

  return (
    <div className="countries1-page">
      <h1>Where to Find Tennis in Africa</h1>
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
                <a href={country.website} target="_blank" rel="noopener noreferrer">Visit Website</a><br />
                Contact: {country.contact}
              </Popup>
            )}
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Countries1;
