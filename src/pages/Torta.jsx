import React, { useState } from 'react';
import '../styles/index.css';
import ProductosRelacionados from './ProductosRelacionados';  
import Review from './Review';

const Torta = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("/src/img/torta.png");
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
              src="/src/img/torta2.png" 
              alt="Cheesecake de maracuyá" 
              onClick={() => handleImageClick("/src/img/torta1.png")} 
            />

            <img 
              src="/src/img/torta3.png" 
              alt="Torta" 
              onClick={() => handleImageClick("/src/img/torta2.png")} 
            />


            <img 
              src="/src/img/torta3.png" 
              alt="Tortaß" 
              onClick={() => handleImageClick("/src/img/torta3.png")} 
            />

            <img 
              src="/src/img/torta.png" 
              alt="Torta" 
              onClick={() => handleImageClick("/src/img/torta.png")} 
            />
          </div>
          
  
          <div className="main-image">
            <img src={selectedImage} alt="Imagen de cheesecake" />
          </div>
        </section>

        <section className="product-details">
          <h1>Torta de chocolate</h1>
          <p>Descripción:</p>
          Nuestra torta de chocolate es el postre perfecto para los amantes del cacao. Elaborada con un bizcocho suave y esponjoso, esta delicia está hecha con el mejor chocolate, logrando un equilibrio perfecto entre sabor y textura. Cada capa está rellena de una cremosa ganache de chocolate que se derrite en la boca, haciendo de cada bocado una experiencia inigualable. Es ideal para cualquier celebración o para consentirte con un placer dulce.

<p>Precio: S/100.00 </p>
          <p>Categoría: Torta</p>


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
//a

export default Torta;
