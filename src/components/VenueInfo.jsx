import { Music, Car, Wine, Users } from 'lucide-react'

function VenueInfo() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          About The Venue
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-lg mb-8">
            The Yodeling Goat is a small, intimate backyard music venue dedicated to bringing 
            live music to our community. We host local and touring artists in a relaxed, 
            outdoor setting where music lovers can gather and enjoy great performances.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Parking */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-indigo-100 rounded-lg p-3">
                  <Car className="text-indigo-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Parking</h3>
                <p className="text-gray-700">
                  Street parking is available. Please be respectful of our neighbors and 
                  avoid blocking driveways. Carpooling is encouraged!
                </p>
              </div>
            </div>

            {/* BYOB */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-indigo-100 rounded-lg p-3">
                  <Wine className="text-indigo-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">BYOB</h3>
                <p className="text-gray-700">
                  Bring your own beverages! Please drink responsibly and clean up after yourself. 
                  We provide water and some snacks.
                </p>
              </div>
            </div>

            {/* Etiquette */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-indigo-100 rounded-lg p-3">
                  <Users className="text-indigo-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Venue Etiquette</h3>
                <p className="text-gray-700">
                  Please respect the performers and other attendees. Keep conversations 
                  during performances to a minimum. This is a listening room experience.
                </p>
              </div>
            </div>

            {/* Donations */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-indigo-100 rounded-lg p-3">
                  <Music className="text-indigo-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Donations</h3>
                <p className="text-gray-700">
                  Suggested donation: $10-20 per person. All donations go directly to the 
                  performing artists. Cash or Venmo accepted at the door.
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

