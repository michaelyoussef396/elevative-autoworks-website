import React from 'react';
import './ServiceList.scss';
import { images } from '../../constant';
import { useNavigate } from 'react-router-dom';

const ServiceList = () => {
  const navigate = useNavigate();
  return (
    <section className="services-section">
      <h2 className="services-title">Factory Services</h2>
      <p className="services-description">
            Tired of going to the dealership for your car's factory services? We've got you covered!
      </p>
      <div className="services-wrapper">
        <div className="services-image">
            <img src={images.shop} alt="Our Shop" />
        </div>

        <div className="services-content">
          <ul className="services-list">
            <li>- Oil Change Services</li>
            <li>- Transmission Services</li>
            <li>- Brake Services</li>
            <li>- Engine and Transmission Replacement</li>
            <li>- Timing Belt Replacement</li>
            <li>- Vehicle engine Diagnostics</li>
            <li>- Battery</li>
            <li>- Wheels and Tires</li>
            <li>- Air and cabin filter replacement</li>
            <li>- Steering and suspension repair</li>
            <li>- Exhaust</li>
          </ul>
          <button onClick={() => navigate('/contact-us')} className="services-button">GET A QUOTE</button>
        </div>
      </div>
      <p className='bottom-text'>Every car that comes into our shop gets a free courtesy inspection</p>
    </section>
  );
};

export default ServiceList;
