import Hero from '../components/Hero'
import Calendar from '../components/Calendar'
import VenueInfo from '../components/VenueInfo'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Calendar />
      <VenueInfo />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home

