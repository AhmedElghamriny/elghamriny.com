import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state for color change
  const navbarRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // Detect clicks outside of the navbar to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current && 
        !navbarRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Track scroll position to change hamburger icon color
  useEffect(() => {
    const handleScroll = () => {
      const scrollPoint = 50; // Adjust this value as needed
      if (window.scrollY > scrollPoint) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Toggle Button for Desktop and Mobile */}
      <div ref={toggleButtonRef} className="navbar-toggle" onClick={toggleNavbar}>
        <FontAwesomeIcon
          icon={faBars}
          className={`hamburger-icon ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`} // Conditionally apply 'scrolled' and 'open' classes
        />
      </div>

      {/* Navbar with Slide Effect */}
      <div ref={navbarRef} className={`navbar ${isOpen ? 'navbar-open' : 'navbar-hidden'}`}>
        <div className='navbar_section-1'>
          <div className='navbar_section-1_container'>
            <p className='title-text'>Ahmed Elghamriny</p>
            <p className='title-text'>احمد الغمريني</p>
          </div>
        </div>

        <div className='navbar_section-2'>
          <div className='navbar_section-2_container'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/portfolio' className='link'>Portfolio</Link>
            <Link to='/about' className='link'>About</Link>
            <Link to='/contact' className='link'>Contact</Link>
          </div>
        </div>

        <div className='navbar_section-3'>
          <div className='navbar_section-3_container'>
            <a href='/Resume_Ahmed.pdf' className='link' download>Resume/CV</a>
          </div>
        </div>

        <div className='navbar_section-4'>
          <div className='navbar_section-4_container'> 
            <a href="https://www.linkedin.com/in/ahmedelghamriny" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <a href="https://github.com/AhmedElghamriny" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <a href="https://www.instagram.com/ahmed.elghamriny" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
