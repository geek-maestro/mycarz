import Hero from '../dashboard/components/hero'
import Promo from './components/Promo'
import Info from './components/Info'
import Feedback from '../dashboard/components/Feedback'
import Footer from '../dashboard/components/Footer'
import About from './components/about'

const LandingPage = () => {
  return (
    <>
    <div>
      <Hero />
      <About />
      <Promo />
      <Info />
      <Feedback />
    </div>
    <Footer />
    </>
  )
}

export default LandingPage
