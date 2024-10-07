import React from 'react'
import SectionTitle from './SectionTitle';
import { MdHotel, MdOutlineTravelExplore } from "react-icons/md";
import { IoMdBoat } from "react-icons/io";

export default function Travel() {
  return (
    <div id='page-section'>
      <SectionTitle title='Travel & Accommodation' />
      <div className="travel-grid">

        <div className='grid-item'>
          <MdOutlineTravelExplore className='card-icons' />
          <p>Travel to & <br />around Bequia</p>
        </div>

        <div className='grid-item'>
          <IoMdBoat className='card-icons' />
          <p>Ferry Schedule</p>
        </div>

        <div className='grid-item'>
          <MdHotel className='card-icons' />
          <p>Where to Stay</p>
        </div>
      </div>
    </div>
  )
}
