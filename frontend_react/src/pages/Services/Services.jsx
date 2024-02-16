import React from 'react'
import ServiceHero from '../../container/ServiceHero/ServiceHero'
import ServiceList from '../../container/ServiceList/ServiceList'
import ServiceAbout from '../../container/ServiceAbout/ServiceAbout'

const Services = () => {
  return (
    <div>
      <ServiceHero />
      <ServiceAbout />
      <ServiceList />
    </div>
  )
}

export default Services
