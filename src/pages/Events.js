import React from 'react';
import '../styles/Events.css';  // Importation du fichier CSS

const Events = () => {
  // Variable pour indiquer si les dates sont disponibles ou non
  const afrotennisPartyDatesAvailable = false;

  return (
    <div className="events-page">
      {/* Section AfroTennis Party */}
      <section className="afrotennis-party">
        <div className="party-banner">
          <img src={require('../assets/images/afrotennis-party.jpg')} alt="AfroTennis Party" />
        </div>
        <div className="party-content">
          <h1>AfroTennis Party</h1>
          <p>Join us for AfroTennis Party events in Berlin and Madrid! Connect with the tennis community, enjoy great music, and celebrate African tennis culture.</p>

          {afrotennisPartyDatesAvailable ? (
            <>
              <p>The next AfroTennis Party will take place on [Insert Date]!</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScmYnSK4S51oGuocUAqk8IIjXGaFx85dkMliac5Qhqkdzfoug/viewform" target="_blank" rel="noopener noreferrer" className="cta-button">
                Sign Up
              </a>
            </>
          ) : (
            <p className="dates-unavailable">Dates for the next AfroTennis Party will be announced soon. Stay tuned!</p>
          )}
        </div>
      </section>

      {/* Section Pro Tournaments */}
      <section className="pro-tournaments">
        <h2>Upcoming Pro Tournaments in Africa</h2>
        <table className="tournament-table">
          <thead>
            <tr>
              <th>Tournament</th>
              <th>Type</th> {/* Nouvelle colonne Type */}
              <th>Location</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lagos Open</td>
              <td>ATP Challenger 50</td> {/* Type de tournoi */}
              <td>Lagos, Nigeria</td>
              <td>12th - 18th April 2024</td>
            </tr>
            <tr>
              <td>Cairo International</td>
              <td>WTA 125</td> {/* Type de tournoi */}
              <td>Cairo, Egypt</td>
              <td>5th - 11th May 2024</td>
            </tr>
            <tr>
              <td>Rwanda Open</td>
              <td>ATP Challenger 100</td> {/* Type de tournoi */}
              <td>Kigali, Rwanda</td>
              <td>20th - 25th June 2024</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Events;
