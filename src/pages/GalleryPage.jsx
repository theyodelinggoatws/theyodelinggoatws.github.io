import { useState, useRef, useEffect } from 'react'
import { X } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import img1 from '../assets/images/gallery1.jpg'
import img2 from '../assets/images/gallery2.jpg'
import img3 from '../assets/images/gallery3.jpg'
import img4 from '../assets/images/gallery4.jpg'
import img5 from '../assets/images/gallery5.jpg'
import img6 from '../assets/images/gallery6.jpg'
import img7 from '../assets/images/gallery7.jpg'

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.1 })
  const imageRefs = useRef([])
  const [visibleImages, setVisibleImages] = useState(new Set())

  const images = [
    { src: img7, caption: 'Summer evening performance' },
    { src: img1, caption: 'Intimate indoor setting' },
    { src: img2, caption: 'Outdoor concert under the trees' },
    { src: img3, caption: 'Acoustic performance' },
    { src: img4, caption: 'Community gathering' },
    { src: img5, caption: 'Evening show' },
    { src: img6, caption: 'Live music experience' },
  ]

  useEffect(() => {
    const observers = imageRefs.current.map((ref, index) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleImages(prev => new Set([...prev, index]))
            observer.disconnect()
          }
        },
        { threshold: 0.1 }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-rustic-50">
      <Navigation />
      
      <main className="pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-rustic-100 to-rustic-50">
          <div className="max-w-6xl mx-auto text-center">
            <h1 
              ref={titleRef}
              className={`text-5xl md:text-7xl font-display font-bold mb-8 text-rustic-800 transition-all duration-800 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Gallery
            </h1>
            <p className={`text-xl md:text-2xl text-rustic-700 font-serif leading-relaxed max-w-4xl mx-auto transition-all duration-800 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
              A glimpse into the magic of our shows - the music, the community, and the moments that make The Yodeling Goat special.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 px-4 bg-rustic-50 relative rustic-overlay">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {images.map((image, index) => (
                <div
                  key={index}
                  ref={el => imageRefs.current[index] = el}
                  className={`relative aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-lg border-2 border-rustic-200/50 hover:border-terracotta-300/50 transition-all duration-800 ${visibleImages.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rustic-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-serif text-lg">{image.caption}</p>
                    <p className="text-white/80 font-serif text-sm mt-1">Click to view full size</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Content */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-rustic-50/50 rounded-2xl p-8 md:p-12 border-2 border-rustic-200/50">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-rustic-800 text-center">
                Share Your Moments
              </h2>
              <p className="text-lg md:text-xl text-rustic-700 font-serif leading-relaxed text-center">
                Have photos from a show? Tag us on Instagram <span className="font-semibold text-terracotta-700">@the_yodeling_goat</span> 
                and we might feature them here! We love seeing how our community experiences the music.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={32} />
          </button>
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            {selectedImage.caption && (
              <p className="text-white text-center mt-4 font-serif text-lg">{selectedImage.caption}</p>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default GalleryPage

