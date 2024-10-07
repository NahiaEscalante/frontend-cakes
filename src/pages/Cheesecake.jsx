import React, { useState, useContext } from 'react'; 
import '../styles/index.css';
import { CartContext } from '../context/CartContext'; 
import ProductosRelacionados from './ProductosRelacionados';  
import Review from './Review';

const Cheesecake = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("/src/img/cheesecake.png");
  const [reviews, setReviews] = useState([]);
  const { addItemToCart } = useContext(CartContext);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value)); 
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);  
  };

  const handleAddReview = (review) => {
    setReviews([...reviews, review]); 
  };


  const handleAddToCart = () => {
    const item = {
      name: "Cheesecake de fresa",
      price: 120.00,
      quantity: quantity,
      image: selectedImage,
      size: 'Medium',
    };
    console.log("Producto añadido al carrito:", item); 
    addItemToCart(item); 
  };

  return (
    <div className="product-page">
      <main>
        <section className="product-images">
          <div className="thumbnails">
            <img 
              src="/src/img/fresa2.png" 
              alt="Cheesecake de maracuyá" 
              onClick={() => handleImageClick("/src/img/fresa2.png")} 
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
              src="/src/img/fresa1.png" 
              alt="Torta" 
              onClick={() => handleImageClick("/src/img/fresa1.png")} 
            />
          </div>
          
          <div className="main-image">
            <img src={selectedImage} alt="Imagen de cheesecake" />
          </div>
        </section>

        <section className="product-details">
          <h1>Cheesecake de fresa</h1>
          <p>Descripción:</p>
          <p>Nuestro cheesecake de fresa es una delicia suave y cremosa que combina lo mejor de la repostería artesanal. Hecho con los ingredientes más frescos, cada bocado es una experiencia única. La base crujiente de galleta y mantequilla complementa a la perfección el relleno de queso, creando una textura irresistible. Ideal para cualquier ocasión, este cheesecake es la opción perfecta para sorprender a tus invitados o darte un gusto especial.</p>
          <p>Precio: S/120.00 </p>
          <p>Categoría: Cheesecake</p>

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

          <button className="add-to-cart" onClick={handleAddToCart}>Añadir al Carrito</button> {/* Añadido onClick */}
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

export default Cheesecake;
