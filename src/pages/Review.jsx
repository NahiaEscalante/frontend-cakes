import React, { useState } from 'react';

const Review = ({ onSubmitReview }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState(''); 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === '' || title.trim() === '') {
      alert('Por favor, completa el título y el comentario.');
      return;
    }

    onSubmitReview({ title, comment, rating });
    setComment('');
    setRating(5);
    setTitle('');
  };

  return (
    <div className="review-form">
      <h3>Deja tu Reseña</h3>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título de tu reseña"
          className="review-title-input"
          required
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Escribe tu comentario..."
          required
        />
        <div className="review-rating">
          <label>Puntuación:</label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((ratingValue) => (
              <option key={ratingValue} value={ratingValue}>
                {ratingValue} estrella{ratingValue > 1 && 's'}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">Publicar Reseña</button>
      </form>
    </div>
  );
};

export default Review;
