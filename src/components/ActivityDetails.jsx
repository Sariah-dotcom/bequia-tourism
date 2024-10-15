import React from 'react'
import './pages.css'

export default function ActivityDetails(props) {
  return (
    <div className='activity-details'>
      <img src={props.activityImg} alt="" />
      <div className="activity-title">
        <h3>{props.activityName}</h3>
        <p className="location">{props.activityLocation}</p>
      </div>
      <p>{props.activityDescription}</p>
      <hr />
    </div>
  )
}
