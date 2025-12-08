import { MapPin, Mail, Instagram, ExternalLink, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Contact() {
  // Replace with actual venue details
  const venueLocation = 'Seattle, Washington'
  const instagram = '@the_yodeling_goat'
  const instagramUrl = 'https://instagram.com/the_yodeling_goat'
  const mapLink = `https://maps.google.com/?q=${encodeURIComponent(venueLocation)}`
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.1 })
  const [card1Ref, isCard1Visible] = useScrollAnimation({ threshold: 0.1 })
  const [card2Ref, isCard2Visible] = useScrollAnimation({ threshold: 0.1 })
  const [mapRef, isMapVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="contact" className="py-20 px-4 bg-white relative rustic-overlay">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className={`text-4xl md:text-5xl font-display font-bold text-center mb-12 text-rustic-800 transition-all duration-800 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Contact & Directions
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div 
              ref={card1Ref}
              className={`flex gap-4 bg-rustic-50/50 p-6 rounded-xl border border-rustic-200/50 hover:shadow-lg transition-all duration-800 ${isCard1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-lg p-3 border border-terracotta-300/50">
                  <MapPin className="text-terracotta-700" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-rustic-800 mb-2">Location</h3>
                <p className="text-rustic-700 mb-3 font-serif">{venueLocation}</p>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta-700 hover:text-terracotta-800 flex items-center gap-2 font-semibold transition-colors"
                >
                  Get Directions
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div 
              ref={card2Ref}
              className={`flex gap-4 bg-rustic-50/50 p-6 rounded-xl border border-rustic-200/50 hover:shadow-lg transition-all duration-800 ${isCard2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-lg p-3 border border-terracotta-300/50">
                  <Instagram className="text-terracotta-700" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-rustic-800 mb-2">Instagram</h3>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta-700 hover:text-terracotta-800 flex items-center gap-2 font-semibold transition-colors"
                >
                  {instagram}
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div 
            ref={mapRef}
            className={`rounded-xl overflow-hidden shadow-xl border-2 border-rustic-200/50 transition-all duration-800 ${isMapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <iframe
              width="100%"
              height="100%"
              style={{ minHeight: '400px' }}
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(venueLocation)}&output=embed`}
              title="Venue Location"
            ></iframe>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-terracotta-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-terracotta-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-terracotta-500/50"
          >
            Get Full Contact Information
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Contact

