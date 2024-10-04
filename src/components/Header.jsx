import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
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
