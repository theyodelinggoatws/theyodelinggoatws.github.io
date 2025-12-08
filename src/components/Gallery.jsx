import { useState } from 'react'
import { X } from 'lucide-react'
import img1 from '../assets/images/gallery1.jpg'
import img2 from '../assets/images/gallery2.jpg'
import img3 from '../assets/images/gallery3.jpg'
import img4 from '../assets/images/gallery4.jpg'
import img5 from '../assets/images/gallery5.jpg'
import img6 from '../assets/images/gallery6.jpg'
import img7 from '../assets/images/gallery7.jpg'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Placeholder images - replace with actual venue photos
  const images = [
    img7,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ]

  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <section className="py-20 px-4 bg-rustic-50 relative rustic-overlay">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-rustic-800 animate-fade-in-up">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-lg border-2 border-rustic-200/50 hover:border-terracotta-300/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(image)}
            >
              <img
                src={image}
                alt={`Venue photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rustic-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-white text-sm font-serif">View Full Size</div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Gallery

