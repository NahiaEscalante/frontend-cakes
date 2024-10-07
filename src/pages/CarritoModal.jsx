import React, { useEffect, useRef } from 'react';

const CarritoModal = ({ isOpen, onClose, cartItems }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={modalRef} className="cart-modal">
      <div className="cart-header">
        <button onClick={onClose} className="close-btn">X</button>
        <h3>{cartItems.length} ITEM{cartItems.length > 1 ? 'S' : ''}</h3>
      </div>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p>{item.name} - {item.size}</p>
                <p>{item.quantity} x S/{item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CarritoModal;
