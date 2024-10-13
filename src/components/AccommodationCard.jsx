import React from 'react'
import { HashLink } from 'react-router-hash-link';


export default function AccommodationCard(props) {
  return (
    <div className="card-wrapper">
        <div className='accommodation-card'>
      <img src={props.accommodationImg} alt="accommodation" />
      <div>
        <h3>{props.accommodationTitle}</h3>
        <p className='location'>{props.location}</p>
        <p>{props.accommodationDescription}</p>
        <button 
            className="learn-btn" 
            onClick={() => props.onLearnMore(props.section)} // Call the handler passed down from parent
          >
            Learn More
        </button>
      </div>
    </div>
    </div>
    
  )
}
