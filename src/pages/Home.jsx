import Hero from '../components/Hero'
import Events from '../components/Events'
import VenueInfo from '../components/VenueInfo'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import GoatMemorial from '../components/GoatMemorial'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen">
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

