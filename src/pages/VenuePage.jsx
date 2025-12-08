import { Music, Car, Wine, Users, Home, TreePine, Snowflake } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function VenuePage() {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const [p1Ref, isP1Visible] = useScrollAnimation({ threshold: 0.1 })
  const [p2Ref, isP2Visible] = useScrollAnimation({ threshold: 0.1 })
  const [card1Ref, isCard1Visible] = useScrollAnimation({ threshold: 0.1 })
  const [card2Ref, isCard2Visible] = useScrollAnimation({ threshold: 0.1 })
  const [card3Ref, isCard3Visible] = useScrollAnimation({ threshold: 0.1 })
  const [card4Ref, isCard4Visible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-rustic-50 to-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 
              ref={sectionRef}
              className={`text-5xl md:text-7xl font-display font-bold mb-8 text-rustic-800 transition-all duration-800 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              About The Venue
            </h1>
            <p 
              ref={p1Ref}
              className={`text-xl md:text-2xl text-rustic-700 font-serif leading-relaxed mb-8 max-w-4xl mx-auto transition-all duration-800 ${isP1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              We love bringing together our community to share special nights of live music that leave you feeling warm and connected. 
              The Yodeling Goat celebrates musicians both local and touring.
            </p>
            <p 
              ref={p2Ref}
              className={`text-lg md:text-xl text-rustic-700 font-serif leading-relaxed max-w-4xl mx-auto transition-all duration-800 ${isP2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.4s' }}
            >
              We curate artists, create gatherings for friends, neighbors, and fellow music lovers, to experience music up close in a cozy, close-knit setting.
            </p>
          </div>
        </section>

        {/* Seasonal Info */}
        <section className="py-20 px-4 bg-rustic-50 relative rustic-overlay">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-rustic-800">
              Seasonal Performances
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Summer */}
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-rustic-200/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-lg p-4 border border-terracotta-300/50">
                    <TreePine className="text-terracotta-700" size={32} />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-rustic-800">Summer Shows</h3>
                </div>
                <p className="text-lg text-rustic-700 font-serif leading-relaxed mb-4">
                  In the summers, we host in our beautiful backyard beneath the poplar trees. 
                  The outdoor setting creates an intimate, relaxed atmosphere where music and nature blend together.
                </p>
                <p className="text-lg text-rustic-700 font-serif leading-relaxed">
                  Bring a blanket, find a spot on the grass, and enjoy live music under the stars. 
                  The natural acoustics and open air create a unique listening experience.
                </p>
              </div>

              {/* Winter */}
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-rustic-200/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-lg p-4 border border-terracotta-300/50">
                    <Snowflake className="text-terracotta-700" size={32} />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-rustic-800">Indoor Concerts</h3>
                </div>
                <p className="text-lg text-rustic-700 font-serif leading-relaxed mb-4">
                  In the cooler months, we move indoors for smaller, more intimate performances. 
                  Our cozy indoor space creates a warm, welcoming environment perfect for acoustic sets.
                </p>
                <p className="text-lg text-rustic-700 font-serif leading-relaxed">
                  The intimate setting allows for a deeper connection between artists and audience, 
                  creating memorable musical moments in a comfortable, home-like atmosphere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Details */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-rustic-800">
              Venue Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Parking */}
              <div 
                ref={card1Ref}
                className={`bg-rustic-50/50 p-8 rounded-2xl border-2 border-rustic-200/50 hover:shadow-xl transition-all duration-800 ${isCard1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.1s' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-lg p-3 border border-terracotta-300/50">
                    <Car className="text-terracotta-700" size={28} />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-rustic-800">Parking</h3>
                </div>
                <p className="text-rustic-700 font-serif text-lg leading-relaxed">
                  Street parking is available in the surrounding neighborhood. Please be respectful of our neighbors 
                  and avoid blocking driveways or fire hydrants. We encourage carpooling when possible to minimize 
                  parking impact. If you're coming from out of town, consider using ride-sharing services.
                </p>
              </div>

              {/* BYOB */}
              <div 
                ref={card2Ref}
                className={`bg-rustic-50/50 p-8 rounded-2xl border-2 border-rustic-200/50 hover:shadow-xl transition-all duration-800 ${isCard2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.2s' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-lg p-3 border border-terracotta-300/50">
                    <Wine className="text-terracotta-700" size={28} />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-rustic-800">BYOB</h3>
                </div>
                <p className="text-rustic-700 font-serif text-lg leading-relaxed">
                  Bring your own beverages! We're a BYOB venue, so feel free to bring your favorite drinks. 
                  Please drink responsibly and clean up after yourself. We provide water and some light snacks, 
                  but you're welcome to bring your own food as well. Glass containers are discouraged for outdoor shows.
                </p>
              </div>

              {/* Etiquette */}
              <div 
                ref={card3Ref}
                className={`bg-rustic-50/50 p-8 rounded-2xl border-2 border-rustic-200/50 hover:shadow-xl transition-all duration-800 ${isCard3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.3s' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-lg p-3 border border-terracotta-300/50">
                    <Users className="text-terracotta-700" size={28} />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-rustic-800">Venue Etiquette</h3>
                </div>
                <p className="text-rustic-700 font-serif text-lg leading-relaxed mb-4">
                  Please respect the performers and other attendees. This is a listening room experience, 
                  so we ask that conversations during performances be kept to a minimum.
                </p>
                <p className="text-rustic-700 font-serif text-lg leading-relaxed">
                  We encourage you to arrive on time, silence your phones, and be present in the moment. 
                  The intimate setting allows for a special connection between artist and audience.
                </p>
              </div>

              {/* Donations */}
              <div 
                ref={card4Ref}
                className={`bg-rustic-50/50 p-8 rounded-2xl border-2 border-rustic-200/50 hover:shadow-xl transition-all duration-800 ${isCard4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.4s' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-lg p-3 border border-terracotta-300/50">
                    <Music className="text-terracotta-700" size={28} />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-rustic-800">Donations</h3>
                </div>
                <p className="text-rustic-700 font-serif text-lg leading-relaxed mb-4">
                  We ask for a $25 suggested donation, but no one is ever turned away for lack of funds. 
                  All money goes directly to the performing artists - we take nothing for ourselves.
                </p>
                <p className="text-rustic-700 font-serif text-lg leading-relaxed">
                  Cash or Venmo accepted at the door. Your support helps us continue bringing great music 
                  to our community and ensures artists are fairly compensated for their work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 px-4 bg-rustic-50 relative rustic-overlay">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-rustic-800">
              What to Expect
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-rustic-200/50">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-terracotta-100 rounded-full p-3 border border-terracotta-300/50">
                      <Home className="text-terracotta-700" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-rustic-800 mb-2">Intimate Setting</h3>
                    <p className="text-rustic-700 font-serif">
                      Our venue is small and personal - typically 30-50 people per show. This creates an 
                      intimate atmosphere where you can truly connect with the music and the artists.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-terracotta-100 rounded-full p-3 border border-terracotta-300/50">
                      <Music className="text-terracotta-700" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-rustic-800 mb-2">Diverse Lineup</h3>
                    <p className="text-rustic-700 font-serif">
                      We feature a wide variety of genres - from folk and acoustic to indie, jazz, and beyond. 
                      Our goal is to showcase talented musicians and introduce our community to new sounds.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-terracotta-100 rounded-full p-3 border border-terracotta-300/50">
                      <Users className="text-terracotta-700" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-rustic-800 mb-2">Community Focus</h3>
                    <p className="text-rustic-700 font-serif">
                      The Yodeling Goat is more than just a venue - it's a gathering place for music lovers. 
                      We foster a welcoming, inclusive environment where everyone feels at home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default VenuePage

