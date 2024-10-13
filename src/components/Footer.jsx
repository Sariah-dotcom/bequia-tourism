import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <footer>

        <div className="footer-top">
        <div className='email-contact'>
          <img src="/images/logo.png" alt="" />

          <h2>Want to know more? <br /> Contact us at</h2>
          <a href="mailto:">info@bequiatourism.com</a>
        </div>
          
        </div>

        <div className="footer-links">
            <div>
              <Link to='/' className='footer-link'>Home</Link>
              <Link to='/about-bequia' className='footer-link'>About Bequia</Link>
              <Link to='/travel' className='footer-link'>Travel</Link>
              <Link to='/accommodations' className='footer-link'>Accommodation</Link>
              <Link to='/' className='footer-link'>Activities</Link>
              <Link to='/' className='footer-link'>Links</Link>
            </div>
        </div>

        <div className='copyright'>
          <hr />
          <p style={{fontSize:'0.5rem', marginTop: '0.8rem'}}>Bequia Tourism Association © {year}</p>
        </div>
        
      </footer>
    </div>
  )
}
