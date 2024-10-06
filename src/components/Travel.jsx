import React from 'react'
import SectionTitle from './SectionTitle'

export default function Travel() {
  return (
    <div id='page-section'>
      <SectionTitle title='Travel & Accommodation' />
      <div className="travel-grid">

        <div className='grid-item'>
            <p>Getting to and around Bequia</p>
        </div>

        <div className='grid-item'>
            <p>Ferry Schedule</p>
        </div>

        <div className='grid-item'>
            <p>Where to Stay</p>
        </div>
      </div>
    </div>
  )
}
