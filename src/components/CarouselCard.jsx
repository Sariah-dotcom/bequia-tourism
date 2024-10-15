import React from 'react';
import '../carouselStyles.css';


export default function CarouselCard(props) {
  return (
    <div className='activity-card'>
      <img src={props.activityCardImg} alt='activities in bequia'  className='activity-img'/>
      <div className="carousel-text">
        <p className='activity-title'>{props.activityCardTitle}</p>
      </div>
    </div>
  )
}
