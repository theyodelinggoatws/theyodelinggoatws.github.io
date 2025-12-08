import { MapPin, Mail, Instagram, ExternalLink, Clock, Phone } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function ContactPage() {
  const venueLocation = 'Seattle, Washington'
  const instagram = '@the_yodeling_goat'
  const instagramUrl = 'https://instagram.com/the_yodeling_goat'
  const email = 'theyodelinggoatws@gmail.com'
  const mapLink = `https://maps.google.com/?q=${encodeURIComponent(venueLocation)}`
  
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.1 })
  const [card1Ref, isCard1Visible] = useScrollAnimation({ threshold: 0.1 })
  const [card2Ref, isCard2Visible] = useScrollAnimation({ threshold: 0.1 })
  const [card3Ref, isCard3Visible] = useScrollAnimation({ threshold: 0.1 })
  const [mapRef, isMapVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-rustic-50 to-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 
              ref={titleRef}
              className={`text-5xl md:text-7xl font-display font-bold mb-8 text-rustic-800 transition-all duration-800 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Contact & Directions
            </h1>
            <p className={`text-xl md:text-2xl text-rustic-700 font-serif leading-relaxed max-w-4xl mx-auto transition-all duration-800 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
              Get in touch, find us, and join our community of music lovers
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 bg-rustic-50 relative rustic-overlay">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Location */}
              <div 
                ref={card1Ref}
                className={`bg-white p-8 rounded-2xl border-2 border-rustic-200/50 hover:shadow-xl transition-all duration-800 ${isCard1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.1s' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-lg p-4 border border-terracotta-300/50">
                    <MapPin className="text-terracotta-700" size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-rustic-800">Location</h3>
                </div>
                <p className="text-rustic-700 mb-6 font-serif text-lg leading-relaxed">
                  {venueLocation}
                </p>
                <p className="text-rustic-600 mb-6 font-serif">
                  We're located in a residential neighborhood. Exact address will be provided when you RSVP for an event.
                </p>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-terracotta-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-terracotta-700 transition-colors"
                >
                  Get Directions
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* Social Media */}
              <div 
                ref={card2Ref}
                className={`bg-white p-8 rounded-2xl border-2 border-rustic-200/50 hover:shadow-xl transition-all duration-800 ${isCard2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.2s' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-lg p-4 border border-terracotta-300/50">
                    <Instagram className="text-terracotta-700" size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-rustic-800">Follow Us</h3>
                </div>
                <p className="text-rustic-700 mb-6 font-serif text-lg leading-relaxed">
                  Follow us on Instagram for event announcements, behind-the-scenes content, and updates about upcoming shows.
                </p>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
                >
                  <Instagram size={20} />
                  {instagram}
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* Email */}
              <div 
                ref={card3Ref}
                className={`bg-white p-8 rounded-2xl border-2 border-rustic-200/50 hover:shadow-xl transition-all duration-800 ${isCard3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.3s' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-lg p-4 border border-terracotta-300/50">
                    <Mail className="text-terracotta-700" size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-rustic-800">Email</h3>
                </div>
                <p className="text-rustic-700 mb-6 font-serif text-lg leading-relaxed">
                  Have questions? Want to perform? Interested in hosting an event? We'd love to hear from you.
                </p>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 bg-terracotta-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-terracotta-700 transition-colors"
                >
                  <Mail size={20} />
                  Send Email
                </a>
              </div>

              {/* Hours/Info */}
              <div className="bg-white p-8 rounded-2xl border-2 border-rustic-200/50 hover:shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-lg p-4 border border-terracotta-300/50">
                    <Clock className="text-terracotta-700" size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-rustic-800">Event Times</h3>
                </div>
                <p className="text-rustic-700 mb-4 font-serif text-lg leading-relaxed">
                  Shows typically start at 7:00 PM, with doors opening around 6:00 PM. 
                  We recommend arriving early to find parking and get settled.
                </p>
                <p className="text-rustic-600 font-serif">
                  Check our Instagram for specific show times and any schedule changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-rustic-800">
              Find Us
            </h2>
            <div 
              ref={mapRef}
              className={`rounded-2xl overflow-hidden shadow-2xl border-4 border-rustic-200/50 transition-all duration-800 ${isMapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.4s' }}
            >
              <iframe
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(venueLocation)}&output=embed`}
                title="Venue Location"
                className="w-full"
              ></iframe>
            </div>
            <div className="mt-8 text-center">
              <p className="text-rustic-700 font-serif text-lg mb-4">
                For privacy and security, we provide the exact address when you RSVP for an event.
              </p>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-terracotta-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-terracotta-700 transition-colors text-lg"
              >
                <MapPin size={24} />
                Open in Google Maps
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ContactPage

