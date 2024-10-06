import React, { useState } from 'react';
import '../styles/index.css';
import ProductosRelacionados from './ProductosRelacionados';  // Asegúrate de que la ruta es correcta
import Slider from 'react-slick';  // Slider si usas react-slick para el carrusel

const Cheesecake = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("/src/img/maracuyacheesecake.png");

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);  // Cambiar la imagen principal al hacer clic en una miniatura
  };

  return (
    <div className="product-page">
      <main>
        <section className="product-images">
          <div className="thumbnails">
            {/* Las miniaturas que cambian la imagen principal al hacer clic */}
            <img 
              src="/src/img/maracuyacheesecake.png" 
              alt="Cheesecake de maracuyá" 
              onClick={() => handleImageClick("/src/img/cheesecake.png")} 
            />
            <img 
              src="/src/img/cheesecake.png" 
              alt="Cheesecake" 
              onClick={() => handleImageClick("/src/img/cheesecake.png")} 
            />
            <img 
              src="/src/img/fresacheesecake.png" 
              alt="Cheesecake de fresa" 
              onClick={() => handleImageClick("/src/img/fresacheesecake.png")} 
            />
            <img 
              src="/src/img/torta.png" 
              alt="Torta" 
              onClick={() => handleImageClick("/src/img/fresacheesecake.png")} 
            />
          </div>
          
          {/* Imagen principal que cambia según la miniatura seleccionada */}
          <div className="main-image">
            <img src={selectedImage} alt="Imagen de cheesecake" />
          </div>
        </section>

        <section className="product-details">
          <h1>Cheesecake</h1>
          <p>Descripción:</p>
          <p>S/85.00 – S/160.00</p>
          <p>Categoría:</p>


          <div className="quantity-control">
            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <button className="add-to-cart">Añadir al Carrito</button>
        </section>
      </main>
      <ProductosRelacionados />
    </div>
  );
};

export default Cheesecake;
