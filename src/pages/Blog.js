import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-section">
      <h2>From the Chef’s Table 🍽️</h2>
      <div className="blog-posts">
        <div className="blog-post">
          <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" alt="Pasta" />
          <h3>Perfect Pasta Secrets</h3>
          <p>Discover how we craft the perfect pasta dish using authentic ingredients straight from Italy!</p>
        </div>
        <div className="blog-post">
          <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90" alt="Kitchen" />
          <h3>Behind the Scenes</h3>
          <p>Take a look inside our kitchen and meet the team making your meals with love and passion.</p>
        </div>
        <div className="blog-post">
          <img src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f" alt="Dessert" />
          <h3>Sweet Tooth Tales</h3>
          <p>Indulge in our chef’s favorite dessert picks for the season. Warning: May cause cravings!</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;