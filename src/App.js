import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Order from './pages/Order';
import Reservation from './pages/Reservation';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <Router>
      {/* Navbar shown at top of all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      {/* Footer shown at bottom of all pages */}
      <Footer />
    </Router>
  );
}

export default App;
