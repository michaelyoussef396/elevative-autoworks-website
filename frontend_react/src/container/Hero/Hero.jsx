import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constant';
import './Hero.scss';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div style={{background: `url(${images.hero})`}} className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
      >
      <div className="app__header-badge">
        <h1 className="head-text">Elevate your driving experience with Elavative Autoworks, where unparalleled expertise meets unrivaled care for your vehicle.</h1>
        <div className="badge-cmp app__flex">
          <div className="button-container">
            <button  onClick={() => navigate('/Services')}>See Our Services</button>
          </div>
        </div>
      </div>
    </motion.div>

  </div>
)
};

export default Hero;