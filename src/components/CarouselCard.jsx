import React from 'react';
import '../carouselStyles.css';

export default function CarouselCard(props) {
  return (
    <div className="carousel-card">
      <img src={props.activitiesImg} alt="activities in bequia" />
      <div className='carousel-text'>
        <h3>{props.activitiesTitle}</h3>
        <p>{props.activitiesDescription}</p>
      </div>
    </div>
  )
}
