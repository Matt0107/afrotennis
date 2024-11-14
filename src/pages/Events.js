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
          <img src={require('../assets/images/flyer.jpg')} alt="AfroTennis Party" />
        </div>
        <div className="party-content">
          <h1>AfroTennis Party</h1>
          <p>Join us for AfroTennis Party events in Berlin and Madrid! Connect with the tennis community, enjoy tennis and celebrate African culture.</p>

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
              <th>Type / Surface</th> {/* Nouvelle colonne Type */}
              <th>Location</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kigali 1</td>
              <td>ATP Challenger 50 / Clay</td> {/* Type de tournoi */}
              <td>Kigali, Rwanda</td>
              <td>24th February - 1st March 2025</td>

            </tr>
            <tr>
              <td>Kigali 2</td>
              <td>ATP Challenger 50 / Clay</td> {/* Type de tournoi */}
              <td>Kigali, Rwanda</td>
              <td>2nd - 8th March 2025</td>

            </tr>
            <tr>
              <td>Grand Prix Hassan II</td>
              <td>ATP 250 / Clay</td> {/* Type de tournoi */}
              <td>Marrakech, Morocco</td>
              <td>31th March - 7th April 2025</td>

            </tr>
            <tr>
              <td>Grand Prix De Son Altesse Royale La Princesse Lalla Meryem</td>
              <td>WTA 250 / Clay</td> {/* Type de tournoi */}
              <td>Rabat, Morocco</td>
              <td>18th - 24th May 2025</td>

            </tr>
            <tr>
              <td>Jasmin Open Tunisia</td>
              <td>WTA 250 / Hard</td> {/* Type de tournoi */}
              <td>Monastir, Tunsia</td>
              <td>8th - 14th September 2025</td>

            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Events;
