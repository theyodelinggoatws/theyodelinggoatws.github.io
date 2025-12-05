import { Calendar, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center text-white px-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          The Yodeling Goat
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in">
          Backyard Music Venue
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToEvents}
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            <Calendar size={20} />
            See Events
          </button>
          <button
            onClick={scrollToContact}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center gap-2"
          >
            <MapPin size={20} />
            Get Directions
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

