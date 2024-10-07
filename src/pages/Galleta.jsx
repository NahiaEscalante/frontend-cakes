import React, { useState } from 'react';
import '../styles/index.css';
import ProductosRelacionados from './ProductosRelacionados';  
import Slider from 'react-slick';  
import Review from './Review';

const Galleta = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("/src/img/galleta.png");
  const [reviews, setReviews] = useState([]);  


  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);  
  };
  const handleAddReview = (review) => {
    setReviews([...reviews, review]);  
  };

  return (
    <div className="product-page">
      <main>
        <section className="product-images">
          <div className="thumbnails">
            <img 
              src="/src/img/galleta.png" 
              alt="Cheesecake de maracuyá" 
              onClick={() => handleImageClick("/src/img/galleta1.png")} 
            />
            <img 
              src="/src/img/galleta2.png" 
              alt="Cheesecake" 
              onClick={() => handleImageClick("/src/img/galleta2.png")} 
            />
            <img 
              src="/src/img/galleta3.png" 
              alt="Cheesecake de fresa" 
              onClick={() => handleImageClick("/src/img/galleta3.png")} 
            />
            <img 
              src="/src/img/galleta.png" 
              alt="Torta" 
              onClick={() => handleImageClick("/src/img/galleta.png")} 
            />
          </div>
          
          <div className="main-image">
            <img src={selectedImage} alt="Imagen de cheesecake" />
          </div>
        </section>

        <section className="product-details">
          <h1>Galletas de chocolate </h1>
          <p>Descripción:</p>
          <p>9 Galletas</p>
          Nuestras galletas de chocolate son una irresistible combinación de textura crujiente y el delicioso sabor del mejor chocolate. Elaboradas con ingredientes frescos y seleccionados, estas galletas se derriten en la boca, ofreciendo una experiencia inigualable en cada bocado. Perfectas para acompañar con una taza de café o para compartir en cualquier ocasión especial. ¡Sorprende a tus seres queridos o date un capricho con estas exquisitas galletas!
          <p>Precio: S/35.00 </p>
          <p>Categoría: Galletas</p>


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
      <section className="reviews-section">
          <h2>Reseñas</h2>

          <Review onSubmitReview={handleAddReview} />

          <div className="reviews-list">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="review">
                  <p>{review.comment}</p>
                  <p>Puntuación: {review.rating} estrella{review.rating > 1 && 's'}</p>
                </div>
              ))
            ) : (
              <p>No hay reseñas aún. Sé el primero en comentar.</p>
            )}
          </div>
        </section>
      <ProductosRelacionados />
    </div>

  );
};

export default Galleta;