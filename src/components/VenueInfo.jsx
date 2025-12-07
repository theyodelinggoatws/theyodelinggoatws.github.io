import { Music, Car, Wine, Users } from 'lucide-react'

function VenueInfo() {
  return (
    <section className="py-20 px-4 bg-white relative rustic-overlay">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-rustic-800 animate-fade-in-up">
          About The Venue
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-rustic-700 text-lg md:text-xl mb-10 font-serif leading-relaxed text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            We love bringing together our community to share special nights of live music that leave you feeling warm and connected. The Yodeling Goat celebrates musicians both local and touring. 
            We curate artists, create gatherings for friends, neighbors, and fellow music lovers, to experience music up close in a cozy, close-knit setting.
          </p>
          <p className="text-rustic-700 text-lg md:text-xl mb-10 font-serif leading-relaxed text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            In the summers, we host in our beautiful backyard beneath the poplar trees, and in the cooler months, we move indoors for smaller, more intimate performances.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Parking */}
            <div className="flex gap-4 bg-rustic-50/50 p-6 rounded-xl border border-rustic-200/50 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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
            <div className="flex gap-4 bg-rustic-50/50 p-6 rounded-xl border border-rustic-200/50 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
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
            <div className="flex gap-4 bg-rustic-50/50 p-6 rounded-xl border border-rustic-200/50 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
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
            <div className="flex gap-4 bg-rustic-50/50 p-6 rounded-xl border border-rustic-200/50 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
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
        </div>
      </div>
    </section>
  )
}

export default VenueInfo

