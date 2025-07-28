import React, { useState } from "react";
import "./Order.css";

const menuItems = [
  { id: 1, name: "Steak", price: 25, img: "https://source.unsplash.com/400x300/?steak" },
  { id: 2, name: "Pasta", price: 18, img: "https://source.unsplash.com/400x300/?pasta" },
  { id: 3, name: "Pizza", price: 20, img: "https://source.unsplash.com/400x300/?pizza" },
  { id: 4, name: "Salad", price: 12, img: "https://source.unsplash.com/400x300/?salad" },
];

function Order() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existing = cart.find((i) => i.id === item.id);
    if (existing) {
      const updated = cart.map((i) =>
        i.id === item.id ? { ...i, qty: i.qty + 1 } : i
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);
  };

  return (
    <div className="order-page">
      <h1>🛒 Order Online</h1>
      <div className="order-container">
        <div className="order-menu">
          {menuItems.map((item) => (
            <div key={item.id} className="order-card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>

        <div className="order-cart">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty 😞</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} × {item.qty} — ${item.price * item.qty}
                </li>
              ))}
            </ul>
          )}
          <hr />
          <h3>Total: ${getTotal()}</h3>
          <button disabled={cart.length === 0}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Order;
