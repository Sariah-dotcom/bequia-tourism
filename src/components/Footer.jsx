import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <footer>

        <div className="footer-top">
          <img src="/images/logo.png" alt="" />
          <h2>Bequia Tourism Authority</h2>
        </div>

        <div className="footer-links">
            <div>
              <Link to='/' className='footer-link'>Home</Link>
              <Link to='/about-bequia' className='footer-link'>About Bequia</Link>
              <Link to='/travel' className='footer-link'>Travel</Link>
            </div>

            <div>
                <Link to='/accommodations' className='footer-link'>Accommodation</Link>
                <Link to='/' className='footer-link'>Activities</Link>
                <Link to='/' className='footer-link'>Links</Link>
            </div>
        </div>
        <p style={{fontSize:'0.5rem'}}>Bequia Tourism Authority © {year}</p>
      </footer>
    </div>
  )
}
