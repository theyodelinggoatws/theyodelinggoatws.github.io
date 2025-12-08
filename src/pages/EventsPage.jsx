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
    { id: 12, image: poster12 },
    { id: 11, image: poster11 },
    { id: 10, image: poster10 },
    { id: 9, image: poster9 },
    { id: 8, image: poster8 },
    { id: 7, image: poster7 },
    { id: 6, image: poster6 },
    { id: 5, image: poster5 },
    { id: 4, image: poster4 },
    { id: 3, image: poster3 },
    { id: 2, image: poster2 },
    { id: 1, image: poster1 },
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

  // Randomly determine if poster uses tape or thumbtack
  const getAttachmentType = (index) => {
    return index % 2 === 0 ? 'tape' : 'thumbtack'
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
            
            {/* Simulated cork wall background */}
            <div className="relative rounded-3xl p-12 md:p-20 shadow-2xl border-4 border-amber-800/30 min-h-[800px] overflow-hidden">
              {/* Base cork color - warm brown/beige */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4a574] via-[#c99a6a] to-[#b88a5a]"></div>
              
              {/* Cork texture - multiple layers for depth */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Cork cell pattern - honeycomb-like structure */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      radial-gradient(ellipse at 15% 25%, rgba(139, 90, 43, 0.4) 3px, transparent 3px),
                      radial-gradient(ellipse at 55% 45%, rgba(139, 90, 43, 0.35) 2.5px, transparent 2.5px),
                      radial-gradient(ellipse at 85% 15%, rgba(139, 90, 43, 0.3) 2px, transparent 2px),
                      radial-gradient(ellipse at 35% 75%, rgba(139, 90, 43, 0.4) 3.5px, transparent 3.5px),
                      radial-gradient(ellipse at 75% 65%, rgba(139, 90, 43, 0.35) 2.8px, transparent 2.8px),
                      radial-gradient(ellipse at 25% 55%, rgba(139, 90, 43, 0.3) 2.2px, transparent 2.2px),
                      radial-gradient(ellipse at 65% 85%, rgba(139, 90, 43, 0.4) 3px, transparent 3px),
                      radial-gradient(ellipse at 45% 35%, rgba(139, 90, 43, 0.35) 2.5px, transparent 2.5px)
                    `,
                    backgroundSize: '80px 80px, 70px 70px, 60px 60px, 85px 85px, 75px 75px, 65px 65px, 80px 80px, 70px 70px',
                    backgroundPosition: '0 0, 25px 25px, 15px 15px, 40px 40px, 30px 30px, 20px 20px, 50px 50px, 35px 35px'
                  }}
                ></div>
                
                {/* Cork grain texture - vertical and horizontal lines */}
                <div 
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(139, 90, 43, 0.15) 8px, rgba(139, 90, 43, 0.15) 9px),
                      repeating-linear-gradient(0deg, transparent, transparent 12px, rgba(139, 90, 43, 0.12) 12px, rgba(139, 90, 43, 0.12) 13px),
                      repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(139, 90, 43, 0.1) 15px, rgba(139, 90, 43, 0.1) 16px)
                    `,
                    backgroundSize: '100% 100%'
                  }}
                ></div>
                
                {/* Darker cork spots for variation */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 20% 30%, rgba(101, 67, 33, 0.3) 4px, transparent 4px),
                      radial-gradient(circle at 60% 70%, rgba(101, 67, 33, 0.25) 3px, transparent 3px),
                      radial-gradient(circle at 80% 20%, rgba(101, 67, 33, 0.3) 5px, transparent 5px),
                      radial-gradient(circle at 40% 80%, rgba(101, 67, 33, 0.25) 3.5px, transparent 3.5px),
                      radial-gradient(circle at 70% 50%, rgba(101, 67, 33, 0.3) 4px, transparent 4px)
                    `,
                    backgroundSize: '120px 120px, 100px 100px, 130px 130px, 110px 110px, 125px 125px',
                    backgroundPosition: '0 0, 40px 40px, 20px 20px, 60px 60px, 30px 30px'
                  }}
                ></div>
                
                {/* Subtle noise/texture overlay */}
                <div 
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
                    backgroundSize: '150px 150px'
                  }}
                ></div>
              </div>
              
              {/* Poster grid with wall effect */}
              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {posters.map((poster, index) => {
                  const attachmentType = getAttachmentType(index)
                  return (
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
                      {/* Attachment effect - Painter's tape (thumbtacks are inside poster container) */}
                      {attachmentType === 'tape' && (
                        <>
                          {/* Painter's tape effect - light blue */}
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-3.5 bg-blue-200/70 rounded-sm blur-[1px] shadow-sm border border-blue-300/40"></div>
                          <div className="absolute -top-1.5 left-1/4 w-2.5 h-2.5 bg-blue-300/75 rounded-sm shadow-sm border border-blue-400/50"></div>
                          <div className="absolute -top-1.5 right-1/4 w-2.5 h-2.5 bg-blue-300/75 rounded-sm shadow-sm border border-blue-400/50"></div>
                        </>
                      )}
                      
                      {/* Poster */}
                      <div className="relative bg-white rounded-lg overflow-visible shadow-2xl border-4 border-amber-600/30 transform group-hover:scale-105 transition-transform duration-300">
                        {/* Thumbtacks positioned relative to poster container */}
                        {attachmentType === 'thumbtack' && (
                          <>
                            {/* Top-left corner */}
                            <div className="absolute top-2 left-2 z-10">
                              <div className="w-2.5 h-2.5 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full shadow-md border border-gray-600/30"></div>
                              <div 
                                className="absolute top-2.5 left-1/2"
                                style={{
                                  transform: 'translateX(-50%) rotate(45deg)',
                                  transformOrigin: 'top center',
                                  width: '0.5px',
                                  height: '2px',
                                  background: 'linear-gradient(to bottom, #9ca3af, #6b7280)'
                                }}
                              ></div>
                            </div>
                            {/* Top-right corner */}
                            <div className="absolute top-2 right-2 z-10">
                              <div className="w-2.5 h-2.5 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full shadow-md border border-gray-600/30"></div>
                              <div 
                                className="absolute top-2.5 left-1/2"
                                style={{
                                  transform: 'translateX(-50%) rotate(-45deg)',
                                  transformOrigin: 'top center',
                                  width: '0.5px',
                                  height: '2px',
                                  background: 'linear-gradient(to bottom, #9ca3af, #6b7280)'
                                }}
                              ></div>
                            </div>
                            {/* Bottom-left corner */}
                            <div className="absolute bottom-2 left-2 z-10">
                              <div className="w-2.5 h-2.5 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full shadow-md border border-gray-600/30"></div>
                              <div 
                                className="absolute bottom-2.5 left-1/2"
                                style={{
                                  transform: 'translateX(-50%) rotate(-45deg)',
                                  transformOrigin: 'bottom center',
                                  width: '0.5px',
                                  height: '2px',
                                  background: 'linear-gradient(to top, #9ca3af, #6b7280)'
                                }}
                              ></div>
                            </div>
                            {/* Bottom-right corner */}
                            <div className="absolute bottom-2 right-2 z-10">
                              <div className="w-2.5 h-2.5 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full shadow-md border border-gray-600/30"></div>
                              <div 
                                className="absolute bottom-2.5 left-1/2"
                                style={{
                                  transform: 'translateX(-50%) rotate(45deg)',
                                  transformOrigin: 'bottom center',
                                  width: '0.5px',
                                  height: '2px',
                                  background: 'linear-gradient(to top, #9ca3af, #6b7280)'
                                }}
                              ></div>
                            </div>
                          </>
                        )}
                        <img
                          src={poster.image}
                          alt={`Concert poster ${poster.id}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  )
                })}
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

