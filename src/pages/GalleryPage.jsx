import { useState, useRef, useEffect } from 'react'
import { X, Grid3x3, Maximize2 } from 'lucide-react'
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
  const [viewMode, setViewMode] = useState('wide') // 'wide' for 1 column, 'grid' for 3 columns
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.1 })
  const imageRefs = useRef([])
  const [visibleImages, setVisibleImages] = useState(new Set())
  const currentImageRef = useRef(0) // Track the currently visible image index

  const images = [
    img7,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ]

  // Track which image is currently in the center of the viewport
  useEffect(() => {
    const updateCurrentImage = () => {
      const viewportCenter = window.innerHeight / 2 + window.scrollY
      let closestIndex = 0
      let closestDistance = Infinity

      imageRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          const imageCenter = rect.top + rect.height / 2 + window.scrollY
          const distance = Math.abs(imageCenter - viewportCenter)
          
          if (distance < closestDistance) {
            closestDistance = distance
            closestIndex = index
          }
        }
      })

      currentImageRef.current = closestIndex
    }

    // Update on scroll
    window.addEventListener('scroll', updateCurrentImage, { passive: true })
    updateCurrentImage() // Initial check

    return () => {
      window.removeEventListener('scroll', updateCurrentImage)
    }
  }, [])

  // Set up intersection observers for animations
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
  }, [viewMode]) // Re-run when view mode changes

  // Scroll to current image when view mode changes
  useEffect(() => {
    const scrollToCurrentImage = () => {
      const currentIndex = currentImageRef.current
      const imageElement = imageRefs.current[currentIndex]
      
      if (imageElement) {
        // Small delay to allow layout to update
        setTimeout(() => {
          imageElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          })
        }, 100)
      }
    }

    // Only scroll if we have a valid current image reference
    if (imageRefs.current.length > 0 && imageRefs.current[currentImageRef.current]) {
      scrollToCurrentImage()
    }
  }, [viewMode])

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
            {/* View Toggle - Mobile Only - Sticky */}
            <div className="sticky top-20 z-40 flex justify-end mb-6 md:hidden">
              <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border-2 border-rustic-200/50">
                <button
                  onClick={() => setViewMode('wide')}
                  className={`p-2 rounded transition-all ${
                    viewMode === 'wide'
                      ? 'bg-terracotta-600 text-white'
                      : 'text-rustic-700 hover:bg-rustic-100'
                  }`}
                  aria-label="Wide view"
                >
                  <Maximize2 size={20} />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-all ${
                    viewMode === 'grid'
                      ? 'bg-terracotta-600 text-white'
                      : 'text-rustic-700 hover:bg-rustic-100'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid3x3 size={20} />
                </button>
              </div>
            </div>
            
            <div className={`grid gap-6 md:gap-8 ${
              viewMode === 'wide'
                ? 'grid-cols-1'
                : 'grid-cols-3'
            } sm:grid-cols-2 lg:grid-cols-3`}>
              {images.map((image, index) => (
                <div
                  key={`${viewMode}-${index}`}
                  ref={el => imageRefs.current[index] = el}
                  className={`relative aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-lg border-2 border-rustic-200/50 hover:border-terracotta-300/50 transition-all duration-800 ${visibleImages.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rustic-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white/80 font-serif text-sm">Click to view full size</p>
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
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default GalleryPage

