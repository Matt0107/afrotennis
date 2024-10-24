import React from "react";
import { useParams, Link } from "react-router-dom";
import countriesData from "../assets/data/countries.json"; // Importe les données des pays
import "../styles/Country.css"; // Importe le fichier CSS pour styliser la page

// Importation des icônes depuis react-icons
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Country = () => {
  const { countryName } = useParams(); // Récupérer le nom du pays depuis l'URL
  const country = countriesData.countries.find(
    (c) => c.name.toLowerCase() === countryName.toLowerCase()
  );

  if (!country) {
    return <p>Country not found!</p>;
  }

  // Fonction pour vérifier si une association a des informations valides
  const isValidAssociation = (association) => {
    return association.name || association.type || association.city;
  };

  // Vérifier si le pays a des associations avec des informations valides
  const validAssociations = country.associations.filter(isValidAssociation);

  return (
    <div className="association-page">
      <h1>Play or Support Tennis in {country.name}</h1>
      <p>
        Discover the different structures working to promote tennis in{" "}
        {country.name}.
      </p>
      <p>Find more information below.</p>

      <div className="association-list">
        {validAssociations.length > 0 ? (
          validAssociations.map((association, index) => (
            <div className="association-card" key={index}>
              <h3>{association.name || "Unnamed Association"}</h3>
              <p>
                <i>{association.type || "No type specified"}</i>
              </p>
              <p>City: {association.city || "No city specified"}</p>
              {association.website ? (
                <a
                  href={association.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              ) : (
                <p>No Website Available</p>
              )}
              {association.socialMedia && (
                <div className="social-icons">
                  {association.socialMedia.facebook && (
                    <a
                      href={association.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook size={24} />
                    </a>
                  )}
                  {association.socialMedia.instagram && (
                    <a
                      href={association.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram size={24} />
                    </a>
                  )}
                  {association.socialMedia.twitter && (
                    <a
                      href={association.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter size={24} />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="no-association">
            <p>We're sorry, but we couldn't find any tennis structures in {country.name}.</p>
            <p>If you know of any clubs, associations, or organizations, please help us improve our listings.</p>
            <Link to="/contact" className="cta-button">
              Contact Us to Share Info
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Country;
