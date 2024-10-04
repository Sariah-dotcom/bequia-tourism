import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className='footer'>
      <footer>
        <img src="/images/logo.png" alt="" />
        <div className="footer-links">
            <div>
                <Link to='/'>Home</Link>
                <Link to='/'>About Bequia</Link>
                <Link to='/'>Travel</Link>
            </div>

            <div>
                <Link to='/'>Accomodation</Link>
                <Link to='/'>Activities</Link>
                <Link to='/'>Links</Link>
            </div>
        </div>
        <p style={{fontSize:'0.5rem'}}>Bequia Toursim Authority 2024</p>
      </footer>
    </div>
  )
}
