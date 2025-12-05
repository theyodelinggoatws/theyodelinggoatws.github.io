import { Instagram, ExternalLink } from 'lucide-react'

function Events() {
  const instagramUrl = 'https://instagram.com/theyodelinggoat'

  return (
    <section id="events" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Upcoming Events
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-indigo-100 rounded-full p-6">
              <Instagram className="text-indigo-600" size={64} />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Check Out Our Events on Instagram
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Follow us on Instagram to see all our upcoming shows, events, and updates!
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
          >
            <Instagram size={24} />
            View Events on Instagram
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Events

