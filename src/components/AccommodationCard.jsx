import React from 'react'

export default function AccommodationCard(props) {
  return (
    <div className='accommodation-card'>
      <img src={props.accommodationImg} alt="accommodation" />
      <div>
        <h3>{props.accommodationTitle}</h3>
        <p className='location'>{props.location}</p>
        <p>{props.accommodationDescription}</p>
        <button className='learn-btn'>Learn More</button>

      </div>
    </div>
  )
}
