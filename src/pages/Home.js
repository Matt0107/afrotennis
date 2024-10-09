import React from 'react';
import '../styles/Home.css';  // Import the CSS specific to the Home page

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to AfroTennis</h1>
          <p>Discover the universe of African Tennis!</p>
          <a href="/about" className="cta-button">Learn More</a>
        </div>
      </section>

      {/* About Section */}
      <section className="home-about">
        <h2>AfroTennis Goals</h2>
        <p>Promoting tennis across Africa, showcasing the talents, stories and efforts driving the sport forward.</p>
      </section>

      {/* Highlighted Sections */}
      <section className="highlights">
        <div className="highlight">
          <h3>Podcasts</h3>
          <p>Catch up on the latest interviews and insights from the world of African tennis.</p>
          <a href="/podcasts" className="cta-link">Listen Now</a>
        </div>
        <div className="highlight">
          <h3>Events</h3>
          <p>Stay up to date with the latest tennis events happening across Africa.</p>
          <a href="/events" className="cta-link">View Events</a>
        </div>
        <div className="highlight">
          <h3>Tennis in Africa</h3>
          <p>Explore the tennis scene in various African countries and discover local talents.</p>
          <a href="/countries" className="cta-link">Explore Now</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
