import { Instagram, ExternalLink, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/venue-logo.png';
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Events() {
  const instagramUrl = 'https://instagram.com/the_yodeling_goat'
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.1 })
  const [cardRef, isCardVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="events" className="py-20 px-4 bg-rustic-50 relative rustic-overlay">
      <div className="max-w-4xl mx-auto">

        <h2 
          ref={titleRef}
          className={`text-4xl md:text-5xl font-display font-bold text-center mb-12 text-rustic-800 transition-all duration-800 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Upcoming Events
        </h2>
        <div 
          ref={cardRef}
          className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-12 text-center border-2 border-rustic-200/50 relative overflow-hidden transition-all duration-800 ${isCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.2s' }}
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-terracotta-400/30 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-terracotta-400/30 rounded-br-2xl"></div>
          
          <div className="flex justify-center mb-6 animate-float">
            <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-full p-6 shadow-lg border-2 border-terracotta-300/50">
              <img src={logo} alt="The Yodeling Goat Venue Logo" className="mx-auto w-32 h-32 object-contain animate-fade-in-up" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-rustic-800 mb-4">
            Check Out Our Events on Instagram
          </h3>
          <p className="text-rustic-700 mb-8 text-lg md:text-xl font-serif">
            Follow us on Instagram to see all our upcoming shows, events, and updates!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-terracotta-600 to-terracotta-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-terracotta-700 hover:to-terracotta-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-terracotta-500/50"
            >
              <Instagram size={24} />
              View Events on Instagram
              <ExternalLink size={20} />
            </a>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-terracotta-600 text-terracotta-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-terracotta-50 transition-all transform hover:scale-105"
            >
              View All Events
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events

