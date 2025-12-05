import { Instagram, ExternalLink } from 'lucide-react'

function Events() {
  const instagramUrl = 'https://instagram.com/the_yodeling_goat'

  return (
    <section id="events" className="py-20 px-4 bg-rustic-50 relative rustic-overlay">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-rustic-800 animate-fade-in-up">
          Upcoming Events
        </h2>
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-12 text-center border-2 border-rustic-200/50 relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-terracotta-400/30 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-terracotta-400/30 rounded-br-2xl"></div>
          
          <div className="flex justify-center mb-6 animate-float">
            <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-full p-6 shadow-lg border-2 border-terracotta-300/50">
              <Instagram className="text-terracotta-700" size={64} />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-rustic-800 mb-4">
            Check Out Our Events on Instagram
          </h3>
          <p className="text-rustic-700 mb-8 text-lg md:text-xl font-serif">
            Follow us on Instagram to see all our upcoming shows, events, and updates!
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-terracotta-600 to-terracotta-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-terracotta-700 hover:to-terracotta-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-terracotta-500/50"
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

