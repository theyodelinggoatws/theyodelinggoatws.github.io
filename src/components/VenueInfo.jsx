import { Music, Car, Wine, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function VenueInfo() {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const [p1Ref, isP1Visible] = useScrollAnimation({ threshold: 0.1 })
  const [p2Ref, isP2Visible] = useScrollAnimation({ threshold: 0.1 })
  const [card1Ref, isCard1Visible] = useScrollAnimation({ threshold: 0.1 })
  const [card2Ref, isCard2Visible] = useScrollAnimation({ threshold: 0.1 })
  const [card3Ref, isCard3Visible] = useScrollAnimation({ threshold: 0.1 })
  const [card4Ref, isCard4Visible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="py-20 px-4 bg-white relative rustic-overlay">
      <div className="max-w-4xl mx-auto">
        <h2 
          ref={sectionRef}
          className={`text-4xl md:text-5xl font-display font-bold text-center mb-12 text-rustic-800 transition-all duration-800 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          About The Venue
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p 
            ref={p1Ref}
            className={`text-rustic-700 text-lg md:text-xl mb-10 font-serif leading-relaxed text-center transition-all duration-800 ${isP1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            We love bringing together our community to share special nights of live music that leave you feeling warm and connected. The Yodeling Goat celebrates musicians both local and touring. 
            We curate artists, create gatherings for friends, neighbors, and fellow music lovers, to experience music up close in a cozy, close-knit setting.
          </p>
          <p 
            ref={p2Ref}
            className={`text-rustic-700 text-lg md:text-xl mb-10 font-serif leading-relaxed text-center transition-all duration-800 ${isP2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            In the summers, we host in our beautiful backyard beneath the poplar trees, and in the cooler months, we move indoors for smaller, more intimate performances.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Parking */}
            <div 
              ref={card1Ref}
              className={`flex gap-4 bg-rustic-50/50 p-6 rounded-xl border border-rustic-200/50 hover:shadow-lg transition-all duration-800 ${isCard1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-lg p-3 border border-terracotta-300/50">
                  <Car className="text-terracotta-700" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-rustic-800 mb-2">Parking</h3>
                <p className="text-rustic-700 font-serif">
                  Street parking is available. Please be respectful of our neighbors and 
                  avoid blocking driveways. Carpooling is encouraged!
                </p>
              </div>
            </div>

            {/* BYOB */}
            <div 
              ref={card2Ref}
              className={`flex gap-4 bg-rustic-50/50 p-6 rounded-xl border border-rustic-200/50 hover:shadow-lg transition-all duration-800 ${isCard2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-lg p-3 border border-terracotta-300/50">
                  <Wine className="text-terracotta-700" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-rustic-800 mb-2">BYOB</h3>
                <p className="text-rustic-700 font-serif">
                  Bring your own beverages! Please drink responsibly and clean up after yourself. 
                  We provide water and some snacks.
                </p>
              </div>
            </div>

            {/* Etiquette */}
            <div 
              ref={card3Ref}
              className={`flex gap-4 bg-rustic-50/50 p-6 rounded-xl border border-rustic-200/50 hover:shadow-lg transition-all duration-800 ${isCard3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.5s' }}
            >
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-lg p-3 border border-terracotta-300/50">
                  <Users className="text-terracotta-700" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-rustic-800 mb-2">Venue Etiquette</h3>
                <p className="text-rustic-700 font-serif">
                  Please respect the performers and other attendees. Keep conversations 
                  during performances to a minimum. This is a listening room experience.
                </p>
              </div>
            </div>

            {/* Donations */}
            <div 
              ref={card4Ref}
              className={`flex gap-4 bg-rustic-50/50 p-6 rounded-xl border border-rustic-200/50 hover:shadow-lg transition-all duration-800 ${isCard4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.6s' }}
            >
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-lg p-3 border border-terracotta-300/50">
                  <Music className="text-terracotta-700" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-rustic-800 mb-2">Donations</h3>
                <p className="text-rustic-700 font-serif">
                  We ask for a $25 suggested donation, but no one is ever turned away for lack of funds. All money goes to musicians and musicians only, Cash or Venmo accepted at the door.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/venue"
              className="inline-flex items-center gap-2 bg-terracotta-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-terracotta-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-terracotta-500/50"
            >
              Learn More About The Venue
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VenueInfo

