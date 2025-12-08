import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Events from '../components/Events'
import VenueInfo from '../components/VenueInfo'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import GoatMemorial from '../components/GoatMemorial'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { ArrowRight } from 'lucide-react'

function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <VenueInfo />
      <Events />
      <Gallery />
      <Contact />
      <GoatMemorial />
      <Footer />
    </div>
  )
}

export default Home

