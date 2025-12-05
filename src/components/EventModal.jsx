import { X, MapPin, ExternalLink, Heart } from 'lucide-react'

function EventModal({ event, isOpen, onClose }) {
  if (!isOpen) return null

  const formatDate = (date) => {
    if (!date) return ''
    return new Date(date).toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    })
  }

  const formatTime = (date) => {
    if (!date) return ''
    return new Date(date).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    })
  }

  // Extract event details from extendedProps or description
  const description = event.extendedProps?.description || ''
  const location = event.extendedProps?.location || ''
  const flyerImage = event.extendedProps?.flyerImage || ''
  const donationLink = event.extendedProps?.donationLink || ''
  const mapLink = event.extendedProps?.mapLink || location

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 animate-fade-in">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Flyer Image */}
          {flyerImage && (
            <div className="mb-6">
              <img
                src={flyerImage}
                alt={event.title}
                className="w-full rounded-lg shadow-md"
              />
            </div>
          )}

          {/* Date/Time */}
          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-900 mb-1">Date & Time</p>
            <p className="text-gray-700">
              {formatDate(event.start)}
              {event.end && ` - ${formatTime(event.end)}`}
            </p>
          </div>

          {/* Location */}
          {location && (
            <div className="mb-4">
              <p className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
                <MapPin size={20} />
                Location
              </p>
              <p className="text-gray-700">{location}</p>
            </div>
          )}

          {/* Description */}
          {description && (
            <div className="mb-4">
              <p className="text-lg font-semibold text-gray-900 mb-1">Details</p>
              <div
                className="text-gray-700 prose max-w-none"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            {mapLink && (
              <a
                href={mapLink.startsWith('http') ? mapLink : `https://maps.google.com/?q=${encodeURIComponent(mapLink)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <MapPin size={18} />
                Get Directions
                <ExternalLink size={16} />
              </a>
            )}
            {donationLink && (
              <a
                href={donationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Heart size={18} />
                Donate
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventModal

