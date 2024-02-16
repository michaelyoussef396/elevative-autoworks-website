import React from 'react'
import './ServiceHero.scss'
import { motion } from 'framer-motion'
import { images } from '../../constant'

const ServiceHero = () => {
  return (
    <div style={{background: `url(${images.service})`}} className="app__service-hero app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__service-hero-info"
      >
      <div className="app__service-hero-badge">
        <h1 className="head-text">Expert care for your vehcile</h1>
        <h1 className="head-text">Unmatched service for you</h1>
      </div>
    </motion.div>

  </div>
  )
}

export default ServiceHero

