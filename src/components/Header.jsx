import React from 'react'
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';

export default function Header() {
  return (
    <div>
      <nav>
        <div className="nav-content">
          <Link to='/'>
              <img src="/images/logo.png" alt="site logo" className='logo' />
          </Link>
          <IoMenu style={{ color:'FFFFFF', fontSize:'2rem'}} />
        </div>
        
      </nav>
    </div>
  )
}
