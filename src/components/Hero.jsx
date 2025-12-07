import { Calendar, MapPin } from 'lucide-react'

function Hero() {
  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rustic-900/70 via-rustic-800/60 to-rustic-900/70"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-terracotta-400/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-terracotta-300/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 animate-fade-in-up drop-shadow-lg opacity-0" style={{ animationFillMode: 'forwards' }}>
          The Yodeling Goat
        </h1>
        <p className="text-xl md:text-2xl mb-10 animate-fade-in-up font-serif italic text-terracotta-100 drop-shadow-md opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          An intimate house concert space
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <button
            onClick={scrollToEvents}
            className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-terracotta-500/50"
          >
            <Calendar size={20} />
            See Events
          </button>
          <button
            onClick={scrollToContact}
            className="bg-transparent border-2 border-white/80 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm hover:border-white transform hover:scale-105"
          >
            <MapPin size={20} />
            Get Directions
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

