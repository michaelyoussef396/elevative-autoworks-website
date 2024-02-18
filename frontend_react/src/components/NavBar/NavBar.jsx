import React, { useState } from 'react'
import './NavBar.scss'
import images from '../../constant/images';
import { HiMenuAlt4, HiX } from 'react-icons/hi'; 
import {motion} from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {

  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const handleLinkClick = (path) => {
    setToggle(false); // Close the mobile menu
    navigate(path); // Navigate to the path
  }

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <Link to='/'>
          <img src={images.logo} alt='michael' />
        </Link>
        <Link to='/'>
            <h1 className='head-text'>Elevative Autoworks</h1>
        </Link>
      </div>

      <ul className='app__navbar-links'>
        {['services', 'about us', 'contact us'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div></div>
            <Link to={`/${item.replace(/\s/g, '-').toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
              <motion.div 
              whileInView={{x: [300, 0]}}
              transition={{duration: 0.85, ease: 'easeOut'}}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul className='app__navbar-links'>
                  {['services', 'about-us', 'contact-us'].map((item) => (
                    
                    <li  key={item}>
                      <a onClick={() => setToggle(false)} href={`${item}`}>{item}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
      </div>
    </nav>
  )
}

export default NavBar;

