import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Taste Bud</h1>
          <p>Where every bite tells a story. Taste the fire, feel the flavor!</p>
          <div className="hero-buttons">
            <Link to="/menu"><button>Explore Menu</button></Link>
            <Link to="/reservation"><button className="reserve-btn">Reserve Now</button></Link>
          </div>
        </div>
      </section>

      <section className="featured-dishes">
        <h2>🔥 Featured Dishes</h2>
        <div className="dish-grid">
          <div className="dish-card">
            <img src="https://source.unsplash.com/400x300/?steak" alt="Steak" />
            <h3>Grilled Prime Steak</h3>
          </div>
          <div className="dish-card">
            <img src="https://source.unsplash.com/400x300/?pasta" alt="Pasta" />
            <h3>Creamy Alfredo Pasta</h3>
          </div>
          <div className="dish-card">
            <img src="https://source.unsplash.com/400x300/?pizza" alt="Pizza" />
            <h3>Wood-Fired Pizza</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
