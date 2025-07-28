import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>Our Story</h1>
        <p>
          At Fork & Fire, food isn't just something we serve — it's a way of life. We started as
          a small food truck and grew into a full-fledged culinary destination where bold flavors
          and comforting classics collide.
        </p>
      </section>

      <section className="mission-section">
        <h2>🔥 Our Mission</h2>
        <p>
          We aim to spark joy through unforgettable meals, community connections, and a cozy dining experience that feels like home.
        </p>
      </section>

      <section className="team-section">
        <h2>👨‍🍳 Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="https://source.unsplash.com/300x300/?chef" alt="Chef" />
            <h3>Chef Antonio</h3>
            <p>Head Chef & Flavor Wizard</p>
          </div>
          <div className="team-card">
            <img src="https://source.unsplash.com/300x300/?woman-chef" alt="Sous Chef" />
            <h3>Chef Mia</h3>
            <p>Pastry Artist</p>
          </div>
          <div className="team-card">
            <img src="https://source.unsplash.com/300x300/?waiter" alt="Manager" />
            <h3>Jake Rivera</h3>
            <p>Restaurant Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
