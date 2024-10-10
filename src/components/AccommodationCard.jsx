import React from 'react'
import { Link } from 'react-router-dom'

export default function AccommodationCard(props) {
  return (
    <div className="card-wrapper">
        <div className='accommodation-card'>
      <img src={props.accommodationImg} alt="accommodation" />
      <div>
        <h3>{props.accommodationTitle}</h3>
        <p className='location'>{props.location}</p>
        <p>{props.accommodationDescription}</p>
        <Link to='/accommodation-info'>
          <button className='learn-btn'>Learn More</button>
        </Link>
      </div>
    </div>
    </div>
    
  )
}
