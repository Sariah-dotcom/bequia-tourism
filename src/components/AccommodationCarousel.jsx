import React, { useState } from 'react';
import './Carousel.css';
const cardData = [
  { id: 1, title: 'Card 1', content: 'Content for card 1.' },
  { id: 2, title: 'Card 2', content: 'Content for card 2.' },
  { id: 3, title: 'Card 3', content: 'Content for card 3.' },
  { id: 4, title: 'Card 4', content: 'Content for card 4.' },
  { id: 5, title: 'Card 5', content: 'Content for card 5.' },
];

export default function AccommodationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerView = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;

  function handleNext() {
    if (currentIndex < cardData.length - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handlePrev} disabled={currentIndex === 0}>
        &#10094;
      </button>

      <div className="carousel-wrapper">
        <div className="carousel-cards" style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}>
          {cardData.map((card) => (
            <div className="card" key={card.id}>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-button next" onClick={handleNext} disabled={currentIndex >= cardData.length - cardsPerView}>
        &#10095;
      </button>
    </div>
  );
}
