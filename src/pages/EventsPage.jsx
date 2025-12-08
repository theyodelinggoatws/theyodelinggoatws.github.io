import { useState, useRef, useEffect } from 'react'
import { Instagram, ExternalLink, X } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

// Import poster images 
import poster1 from '../assets/images/posters/poster1.png'
import poster2 from '../assets/images/posters/poster2.png'
import poster3 from '../assets/images/posters/poster3.png'
import poster4 from '../assets/images/posters/poster4.png'
import poster5 from '../assets/images/posters/poster5.png'
import poster6 from '../assets/images/posters/poster6.png'
import poster7 from '../assets/images/posters/poster7.png'
import poster8 from '../assets/images/posters/poster8.png'
import poster9 from '../assets/images/posters/poster9.png'
import poster10 from '../assets/images/posters/poster10.png'
import poster11 from '../assets/images/posters/poster11.png'
import poster12 from '../assets/images/posters/poster12.png'

function EventsPage() {
  const instagramUrl = 'https://instagram.com/the_yodeling_goat'
  const [selectedPoster, setSelectedPoster] = useState(null)
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.1 })
  const posterRefs = useRef([])
  const [visiblePosters, setVisiblePosters] = useState(new Set())

  // Poster images
  const posters = [
    { id: 1, image: poster1 },
    { id: 2, image: poster2 },
    { id: 3, image: poster3 },
    { id: 4, image: poster4 },
    { id: 5, image: poster5 },
    { id: 6, image: poster6 },
    { id: 7, image: poster7 },
    { id: 8, image: poster8 },
    { id: 9, image: poster9 },
    { id: 10, image: poster10 },
    { id: 11, image: poster11 },
    { id: 12, image: poster12 },
  ]

  useEffect(() => {
    const observers = posterRefs.current.map((ref, index) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisiblePosters(prev => new Set([...prev, index]))
            observer.disconnect()
          }
        },
        { threshold: 0.1 }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  // Random rotation and position for poster wall effect
  const getPosterStyle = (index) => {
    const rotations = [-3, 2, -2, 3, -1.5, 2.5, -2.5, 1.5]
    const rotation = rotations[index % rotations.length]
    const offsetX = (index % 3) * 20 - 20
    const offsetY = Math.floor(index / 3) * 15 - 15
    
    return {
      transform: `rotate(${rotation}deg) translate(${offsetX}px, ${offsetY}px)`,
      transformOrigin: 'center center',
    }
  }

  return (
    <div className="min-h-screen bg-rustic-50">
      <Navigation />
      
      <main className="pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-rustic-100 to-rustic-50">
          <div className="max-w-6xl mx-auto text-center">
            <h1 
              ref={titleRef}
              className={`text-5xl md:text-7xl font-display font-bold mb-6 text-rustic-800 transition-all duration-800 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Upcoming Events
            </h1>
            <p className={`text-xl md:text-2xl text-rustic-700 font-serif mb-8 transition-all duration-800 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
              Check out our upcoming shows and follow us on Instagram for the latest updates
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-terracotta-600 to-terracotta-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-terracotta-700 hover:to-terracotta-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-terracotta-500/50 transition-all duration-800 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.4s' }}
            >
              <Instagram size={24} />
              Follow on Instagram
              <ExternalLink size={20} />
            </a>
          </div>
        </section>

        {/* Poster Wall Section */}
        <section className="py-20 px-4 bg-rustic-100 relative rustic-overlay">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-rustic-800">
              Concert Posters
            </h2>
            
            {/* Simulated wall background */}
            <div className="relative bg-gradient-to-br from-rustic-200 to-rustic-300 rounded-3xl p-12 md:p-20 shadow-2xl border-4 border-rustic-400/50 min-h-[800px]">
              {/* Wall texture */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,_rgba(0,0,0,0.1)_1px,_transparent_0)] bg-[length:40px_40px] rounded-3xl opacity-30"></div>
              
              {/* Poster grid with wall effect */}
              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {posters.map((poster, index) => (
                  <div
                    key={poster.id}
                    ref={el => posterRefs.current[index] = el}
                    className={`relative cursor-pointer group transition-all duration-800 ${visiblePosters.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ 
                      ...getPosterStyle(index),
                      transitionDelay: `${index * 0.1}s`
                    }}
                    onClick={() => setSelectedPoster(poster)}
                  >
                    {/* Poster shadow/tape effect */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-rustic-400/40 rounded-full blur-sm"></div>
                    <div className="absolute -top-1 left-1/4 w-2 h-2 bg-rustic-500/60 rounded-full"></div>
                    <div className="absolute -top-1 right-1/4 w-2 h-2 bg-rustic-500/60 rounded-full"></div>
                    
                    {/* Poster */}
                    <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl border-4 border-rustic-600/30 transform group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={poster.image}
                        alt={`Concert poster ${poster.id}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-rustic-50/50 rounded-2xl p-8 md:p-12 border-2 border-rustic-200/50">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-rustic-800 text-center">
                Stay Updated
              </h2>
              <p className="text-lg md:text-xl text-rustic-700 font-serif leading-relaxed text-center mb-8">
                For the most up-to-date event information, show times, and special announcements, 
                follow us on Instagram. We post new events regularly and love to share behind-the-scenes 
                moments from our shows.
              </p>
              <div className="text-center">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-terracotta-600 to-terracotta-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-terracotta-700 hover:to-terracotta-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-terracotta-500/50"
                >
                  <Instagram size={24} />
                  @the_yodeling_goat
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Poster Modal */}
      {selectedPoster && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fade-in"
          onClick={() => setSelectedPoster(null)}
        >
          <button
            onClick={() => setSelectedPoster(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedPoster.image}
              alt={`Concert poster ${selectedPoster.id}`}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default EventsPage

