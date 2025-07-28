import React, { useState } from "react";
import "./Menu.css";

const allDishes = [
  {
    id: 1,
    name: "Grilled Steak",
    category: "Main Course",
    price: 25,
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
  },
  {
    id: 2,
    name: "Veggie Pizza",
    category: "Main Course",
    price: 18,
    img: "https://www.pexels.com/photo/chef-preparing-vegetable-pizza-with-fresh-ingredients-33158372/",
  },
  {
    id: 3,
    name: "Caesar Salad",
    category: "Starters",
    price: 12,
    img: "https://images.unsplash.com/photo-1572449043416-55f4685c9bbf",
  },
  {
  id: 4,
  name: "Tiramisu",
  category: "Desserts",
  price: 10,
  img: "https://www.pexels.com/photo/a-piece-of-tiramisu-on-a-plate-27305272/",
},

  {
    id: 5,
    name: "Lemonade",
    category: "Drinks",
    price: 6,
    img: "https://images.unsplash.com/photo-1559847844-5315695dada4",
  },
  {
    id: 6,
    name: "Spaghetti Carbonara",
    category: "Main Course",
    price: 20,
    img: "https://images.unsplash.com/photo-1608759264649-23449b24a003",
  },
  {
    id: 7,
    name: "Garlic Bread",
    category: "Starters",
    price: 7,
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    id: 8,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 9,
    img: "https://www.pexels.com/photo/slice-cake-1854652/",
  },
];

const categories = ["All", "Starters", "Main Course", "Desserts", "Drinks"];

function Menu() {
  const [filteredCategory, setFilteredCategory] = useState("All");

  const filteredDishes =
    filteredCategory === "All"
      ? allDishes
      : allDishes.filter((dish) => dish.category === filteredCategory);

  return (
    <div className="menu-page">
      <h1 className="menu-title">🔥 Our Menu</h1>
      <div className="menu-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filteredCategory === cat ? "active" : ""}
            onClick={() => setFilteredCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredDishes.map((dish) => (
          <div key={dish.id} className="menu-card">
            <img
              src={dish.img}
              alt={dish.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div className="menu-info">
              <h3>{dish.name}</h3>
              <p>{dish.category}</p>
              <span>${dish.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
