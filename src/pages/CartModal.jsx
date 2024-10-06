import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartModal from './CartModal'; // Importar el modal del carrito

const Navbar = () => {
  const { cartItems } = useContext(CartContext); // Acceder al carrito desde el contexto
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir y cerrar el modal

  // Calcular la cantidad total de productos en el carrito
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header>
      <div className="logo">
        <h1>DOLCE BAKERY</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/dolce">Dolce</Link></li>
          {/* Carrito */}
          <li>
            {/* Botón para abrir el modal del carrito */}
            <button onClick={openModal} className="cart-btn">
              Carrito ({totalItems})
            </button>
          </li>
        </ul>
      </nav>

      {/* Modal del carrito */}
      <CartModal isOpen={isModalOpen} onClose={closeModal} cartItems={cartItems} />
    </header>
  );
};

export default Navbar;
