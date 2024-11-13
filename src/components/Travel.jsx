import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import { MdHotel, MdOutlineTravelExplore } from "react-icons/md";
import { IoMdBoat } from "react-icons/io";
import { HashLink } from 'react-router-hash-link';

export default function Travel() {
  return (
    <div className='page-section'>
      <SectionTitle title='Travel & Accommodation' />
      <div className="travel-grid">

        <Link to='/travel' className='travel-link'>
          <div className='grid-item'>
            <MdOutlineTravelExplore className='card-icons' />
            <p>Travel to & <br />around Bequia</p>
          </div>
        </Link>

        <HashLink to='/travel#ferry-info' className='travel-link'>
          <div className='grid-item'>
            <IoMdBoat className='card-icons' />
            <p>Ferry Schedule</p>
          </div>
        </HashLink>

        <Link to='/accommodations' className='travel-link'>
          <div className='grid-item'>
            <MdHotel className='card-icons' />
            <p>Where to Stay</p>
          </div>
        </Link>
        
      </div>
    </div>
  )
}
