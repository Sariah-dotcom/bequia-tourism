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
        <HashLink to={`/accommodation-info/#${props.section}`}>
          <button className='learn-btn'>Learn More</button>
        </HashLink>
      </div>
    </div>
    </div>
    
  )
}
