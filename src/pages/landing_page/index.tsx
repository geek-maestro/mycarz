import React from 'react'
import Hero from '../dashboard/components/hero'
import Promo from './components/Promo'
import Info from './components/Info'
import Feedback from '../dashboard/components/Feedback'

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Promo />
      <Info />
      <Feedback />
    </div>
  )
}

export default LandingPage
