import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaTiktok, FaUser, FaShoppingCart, FaPhone, FaHome } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  // Sample rice data
  const riceProducts = Array(18).fill({
    name: 'Basmathi',
    weight: '1kg',
    price: 500,
    image: '/rice.png' // Notice the leading "/"
  });

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
        <img src="/logo (1).png" alt="Logo" className="logo" />
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">Cart</a>
          <a href="#" className="nav-link">Buy</a>
        </div>
        <div className="social-icons">
          <a href="#" className="social-icon facebook"><FaFacebook /></a>
          <a href="#" className="social-icon whatsapp"><FaWhatsapp /></a>
          <a href="#" className="social-icon instagram"><FaInstagram /></a>
          <a href="#" className="social-icon tiktok"><FaTiktok /></a>
        </div>
        <div className="user-cart">
          <a href="#" className="user-icon"><FaUser /></a>
          <a href="#" className="cart-icon"><FaShoppingCart /></a>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search for products........................" 
          className="search-input"
        />
      </div>

      {/* Product Grid */}
      <div className="products-grid">
        {riceProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt="Basmathi Rice" className="product-image" />
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-details">{product.weight} -{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h3>Reach Us</h3>
          <div className="contact-item">
            <FaPhone />
            <p>+94 77 474 0621</p>
          </div>
          <div className="contact-item">
            <FaHome />
            <p>Raigama,Bandaragama</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Information</h3>
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
        </div>
        
        <div className="footer-section">
          <h3>Customer Care</h3>
          <a href="#">My Account</a>
          <a href="#">Order History</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;