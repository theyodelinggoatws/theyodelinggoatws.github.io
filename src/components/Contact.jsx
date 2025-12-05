import { MapPin, Mail, Instagram, ExternalLink } from 'lucide-react'

function Contact() {
  // Replace with actual venue details
  const venueAddress = '123 Music Street, Your City, ST 12345'
  const email = 'info@theyodelinggoat.com'
  const instagram = '@theyodelinggoat'
  const instagramUrl = 'https://instagram.com/theyodelinggoat'
  const mapLink = `https://maps.google.com/?q=${encodeURIComponent(venueAddress)}`

  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Contact & Directions
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-indigo-100 rounded-lg p-3">
                  <MapPin className="text-indigo-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-700 mb-3">{venueAddress}</p>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2"
                >
                  Get Directions
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-indigo-100 rounded-lg p-3">
                  <Mail className="text-indigo-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <a
                  href={`mailto:${email}`}
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-indigo-100 rounded-lg p-3">
                  <Instagram className="text-indigo-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instagram</h3>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2"
                >
                  {instagram}
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              style={{ minHeight: '400px' }}
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(venueAddress)}&output=embed`}
              title="Venue Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

