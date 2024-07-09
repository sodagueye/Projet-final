import React, { useState } from 'react';
import './AppreciationSection.css';

const SectionAppreciation = () => {
  const [reviews, setReviews] = useState([]);

  const [newReview, setNewReview] = useState({
    title: '',
    text: '',
    rating: 0,
    date: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews(prevReviews => [
      ...prevReviews,
      {
        ...newReview,
        id: prevReviews.length + 1,
        date: new Date().toISOString().split('T')[0]
      }
    ]);
    setNewReview({ title: '', text: '', rating: 0, date: '' });
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'star filled' : 'star'}>&#9733;</span>
      );
    }
    return stars;
  };

  return (
    <div className="appreciation-section">
      <div className="reviews-summary">

      </div>
      <div className="reviews-list">
        {reviews.map(review => (
          <div key={review.id} className="review">
            <h4>{review.title}</h4>
            <p>{review.text}</p>
            <div className="review-details">
              <div className="stars">{renderStars(review.rating)}</div>
              <span>Date : {review.date}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="review-form">
        <h3>Laisser un avis</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Titre"
            value={newReview.title}
            onChange={handleInputChange}
          />
          <textarea
            name="text"
            placeholder="Votre avis"
            value={newReview.text}
            onChange={handleInputChange}
          ></textarea>
          
          <input
            type="number"
            name="rating"
            placeholder="Note (0-5)"
            value={newReview.rating}
            onChange={handleInputChange}
            min="0"
            max="5"
          />
          <button type="submit">Soumettre</button>
        </form>
      </div>
    </div>
  );
};

export default SectionAppreciation;
