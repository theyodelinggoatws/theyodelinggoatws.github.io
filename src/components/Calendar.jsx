import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import EventModal from './EventModal'

function Calendar() {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Get these from environment variables
  const googleCalendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID || ''
  const googleCalendarApiKey = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY || ''

  const handleEventClick = (info) => {
    // Extract event data from FullCalendar event object
    const eventData = {
      title: info.event.title,
      start: info.event.start,
      end: info.event.end,
      extendedProps: info.event.extendedProps,
      url: info.event.url,
    }
    setSelectedEvent(eventData)
    setIsModalOpen(true)
  }

  return (
    <section id="events" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Upcoming Events
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
          {googleCalendarId && googleCalendarApiKey ? (
            <FullCalendar
              plugins={[dayGridPlugin, googleCalendarPlugin]}
              initialView="dayGridMonth"
              googleCalendarApiKey={googleCalendarApiKey}
              events={{
                googleCalendarId: googleCalendarId,
              }}
              eventClick={handleEventClick}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth',
              }}
              height="auto"
              eventColor="#4F46E5"
              eventTextColor="#ffffff"
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">
                Calendar configuration needed. Please set VITE_GOOGLE_CALENDAR_ID and VITE_GOOGLE_CALENDAR_API_KEY environment variables.
              </p>
              <p className="text-sm text-gray-500">
                See README.md for setup instructions.
              </p>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && selectedEvent && (
        <EventModal
          event={selectedEvent}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  )
}

export default Calendar

