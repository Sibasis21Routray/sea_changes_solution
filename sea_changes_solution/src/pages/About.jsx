import React from 'react'
import AboutHero from '../components/Section/About/AboutHero'
import AboutWhyUs from '../components/Section/About/Aboutwhyus'
import ServiceAlt from '../components/Section/About/Servicesalt'
import TestimonialsGrid from '../components/Section/About/Testimonialsgrid'

export default function About() {
  return (
    <div>
      <AboutHero/>
      <AboutWhyUs/>
       <ServiceAlt/>
       <TestimonialsGrid/>
    </div>
  )
}
