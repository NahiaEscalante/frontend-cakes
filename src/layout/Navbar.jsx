import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CarritoModal from '../pages/CarritoModal';
import cartIcon from '../img/cart-icon.png';  

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const cartItems = []; 

  return (
    <header className="navbar">
      <div className="logo">
        <h1>DOLCE BAKERY</h1>
      </div>
      <nav>
        <ul className="nav-links">
          
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/home">Dolce</Link></li>
          
        </ul>
        <button onClick={openModal} className="cart-btn">
            <img src={cartIcon} alt="Carrito" className="cart-icon" />
          </button>
      </nav>

      <CarritoModal isOpen={isModalOpen} onClose={closeModal} cartItems={cartItems} />
    </header>
  );
};

export default Navbar;