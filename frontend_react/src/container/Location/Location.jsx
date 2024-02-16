import React from 'react'
import './Location.scss'
import { images } from '../../constant'
import { motion } from 'framer-motion'

const Location = () => {
  const address = "9/74 Willandra Dr, Epping VIC 3076"
  const encodedAddress = encodeURIComponent(address)
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`

  return (
    <div
      style={{
        background: `url(${images.shop}) no-repeat center center`,
        backgroundSize: 'cover'
      }}
      className="app__location app__flex"
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__location-info"
      >
        <div className="app__location-content">
          <h1 className="headtext__cormorant">Located in Epping, Victoria</h1>
          <p className="p__opensans">9/74 Willandra Dr, Epping VIC 3076</p>
          <p className="p__opensans">
            You'll find us in the Suburban Business Park just off Crater Lake Highway on the Eastside. Between the Honda dealership and Best Signs.
          </p>
          <div className="app__location-btn">
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <button className="custom__button">GET DIRECTIONS</button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Location