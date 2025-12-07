import { Heart } from 'lucide-react'
import goatImage from '../assets/images/goat-image.jpg'

function GoatMemorial() {

  return (
    <section className="py-20 px-4 bg-rustic-100 relative rustic-overlay">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="bg-terracotta-100 rounded-full p-4 border-2 border-terracotta-300/50">
              <Heart className="text-terracotta-700" size={32} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-rustic-800 mb-4">
            In Loving Memory
          </h2>
          <p className="text-xl md:text-2xl font-serif italic text-rustic-700">
            Jane The Goat
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border-2 border-rustic-200/50 relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-terracotta-400/30 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-terracotta-400/30 rounded-br-2xl"></div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg border-2 border-rustic-200/50">
                {/* TODO: Replace this div with your image */}
                <img 
                  src={goatImage} 
                  alt="The Yodeling Goat" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-4">
              <p className="text-rustic-700 text-lg md:text-xl font-serif leading-relaxed">
                This venue is named in honor of a special goat whose spirit and character 
                inspired the creation of this intimate music space. Jane brought 
                joy and laughter to all who knew her, and she lives on through the 
                music and community that gathers here.
              </p>
              <p className="text-rustic-600 text-base md:text-lg font-serif italic">
                Forever in our hearts, forever in our music.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoatMemorial

