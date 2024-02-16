import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../../client'
import './Service.scss'
import { useNavigate } from 'react-router-dom';

const Service = () => {
  const navigate = useNavigate();
    const [services, setServices] = useState([])

    useEffect(() => {
        const query = '*[_type == "services"]';
    
        client.fetch(query)
            .then((data) => {
                console.log('Data received:', data); // This will log the data received from the query
                setServices(data);
            })
    }, []);


    
  return (
    <>
      <h2 className='head-text'><span>Peak Performance,</span> <br />Exceptional Service</h2>
    
      <div  onClick={() => navigate('/Services')} className='app__profiles'>
        {services.map((services, index) => (
          <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: 'tween'}}
          className='app__profile-item'
          key={services.title + index}
          >
            <img src={urlFor(services.imgUrl)} alt={services.title}/>
            <h2 className='bold-text' style={{marginTop: 20}}>{services.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{services.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default Service
