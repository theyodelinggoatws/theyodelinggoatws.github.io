import { Heart, Music, Sparkles } from 'lucide-react'
import goatImage from '../assets/images/goat-image.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function MemorialPage() {
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.1 })
  const [imageRef, isImageVisible] = useScrollAnimation({ threshold: 0.1 })
  const [textRef, isTextVisible] = useScrollAnimation({ threshold: 0.1 })
  const [quoteRef, isQuoteVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className="min-h-screen bg-rustic-100">
      <Navigation />
      
      <main className="pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-rustic-50 to-rustic-100">
          <div className="max-w-6xl mx-auto text-center">
            <div 
              ref={headerRef}
              className={`transition-all duration-800 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-terracotta-100 rounded-full p-6 border-2 border-terracotta-300/50 animate-gentle-pulse">
                  <Heart className="text-terracotta-700" size={48} />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-rustic-800">
                In Loving Memory
              </h1>
              <p className="text-3xl md:text-4xl font-serif italic text-rustic-700">
                Jane The Goat
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 bg-rustic-100 relative rustic-overlay">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              {/* Image */}
              <div 
                ref={imageRef}
                className={`relative transition-all duration-800 ${isImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.2s' }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-rustic-200/50 relative">
                  <img 
                    src={goatImage} 
                    alt="Jane The Goat" 
                    className="w-full h-full object-cover"
                  />
                  {/* Decorative corner elements */}
                  <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-terracotta-400/40 rounded-tl-2xl"></div>
                  <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-terracotta-400/40 rounded-br-2xl"></div>
                </div>
                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-terracotta-200/50 rounded-full blur-sm animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-terracotta-200/50 rounded-full blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Text Content */}
              <div 
                ref={textRef}
                className={`space-y-6 transition-all duration-800 ${isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.4s' }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border-2 border-rustic-200/50">
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-rustic-800">
                    A Special Friend
                  </h2>
                  <p className="text-lg md:text-xl text-rustic-700 font-serif leading-relaxed mb-4">
                    This venue is named in honor of a special goat whose spirit and character 
                    inspired the creation of this intimate music space. Jane brought 
                    joy and laughter to all who knew her, and her playful nature and 
                    gentle presence touched many hearts.
                  </p>
                  <p className="text-lg md:text-xl text-rustic-700 font-serif leading-relaxed mb-4">
                    Her memory lives on through the music and community that gathers here. 
                    Every note played, every song sung, and every moment of connection 
                    honors the spirit of the goat who inspired it all.
                  </p>
                  <p className="text-lg md:text-xl text-rustic-700 font-serif leading-relaxed">
                    Jane taught us that sometimes the most unexpected friendships bring 
                    the greatest joy, and that music has the power to bring people together 
                    in the most beautiful ways.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div 
              ref={quoteRef}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl p-12 md:p-16 shadow-xl border-2 border-rustic-200/50 text-center relative overflow-hidden transition-all duration-800 ${isQuoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.6s' }}
            >
              {/* Decorative quote marks */}
              <div className="absolute top-8 left-8 text-terracotta-300/30 text-8xl font-serif">"</div>
              <div className="absolute bottom-8 right-8 text-terracotta-300/30 text-8xl font-serif">"</div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <Sparkles className="text-terracotta-600" size={32} />
                </div>
                <p className="text-2xl md:text-3xl font-serif italic text-rustic-800 mb-6 leading-relaxed">
                  Forever in our hearts, forever in our music.
                </p>
                <p className="text-xl font-display font-semibold text-terracotta-700">
                  — The Yodeling Goat Community
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tribute Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-rustic-50/50 rounded-2xl p-8 md:p-12 border-2 border-rustic-200/50">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-rustic-800 text-center">
                A Legacy of Music
              </h2>
              <p className="text-lg md:text-xl text-rustic-700 font-serif leading-relaxed text-center">
                Every show at The Yodeling Goat is a celebration of Jane's spirit. 
                Her memory reminds us to find joy in the simple things, to connect with 
                our community, and to let music bring us together. Through the artists 
                we host and the community we've built, Jane's legacy continues to inspire 
                and bring people together through the power of music.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default MemorialPage

