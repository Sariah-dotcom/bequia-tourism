import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { IoMdClose } from "react-icons/io";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Header() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const handleScroll = () => {
      const navContent = document.querySelector('.nav-content');
      if (window.scrollY > 0) {
        navContent.classList.add('scroll');  // Apply .scroll class when scrolling
      } else {
        navContent.classList.remove('scroll'); // Remove .scroll class when at the top
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [getMenuVisible, setMenuVisible] = useState(false);
  function showMenu(){
    setMenuVisible(!getMenuVisible);
  }

  return (
    <div>
      <nav>
        <div className="nav-content">
          <Link to='/'>
              <img src="/images/logo.png" alt="site logo" className='logo' />
          </Link>

          <div className="desktop-menu">
            <Link to='/' className='header-link'>Home</Link>
            <Link to='/about-bequia'  className='header-link'>About Bequia</Link>
            <Link to='/accommodations'  className='header-link'>Accommodation</Link>
            <Link to='/activities'  className='header-link'>Activities</Link>
            <Link to='/travel'  className='header-link'>Travel</Link>
          </div>
          <IoMenu style={{ color:'FFFFFF', fontSize:'2rem'}} onClick={showMenu}  id='hamburger-menu' />
        </div>

        <div className={`menu-items ${getMenuVisible ? 'show' : ''}`}>
          <div className="close-icon">
            <IoMdClose  style={{ height:'2rem', width: '2rem' }} onClick={showMenu}/>
          </div>
          <Link to='/' className='header-link' onClick={showMenu}>Home</Link>
          <Link to='/about-bequia'  className='header-link' onClick={showMenu}>About Bequia</Link>
          <Link to='/accommodations'  className='header-link' onClick={showMenu} >Accommodation</Link>
          <Link to='/activities'  className='header-link'  onClick={showMenu}>Activities</Link>
          <Link to='/travel'  className='header-link' onClick={showMenu}>Travel</Link>
        </div>

        
        
      </nav>
    </div>
  )
}
