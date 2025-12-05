import { Instagram, Mail, Calendar, Music } from 'lucide-react'

function Footer() {
  // Replace with actual links
  const instagramUrl = 'https://instagram.com/theyodelinggoat'
  const email = 'info@theyodelinggoat.com'
  const googleCalendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID || ''
  const calendarWebcalUrl = googleCalendarId 
    ? `https://calendar.google.com/calendar/ical/${googleCalendarId}/public/basic.ics`
    : '#'

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Music size={24} />
              <h3 className="text-2xl font-bold">The Yodeling Goat</h3>
            </div>
            <p className="text-gray-400">
              A backyard music venue bringing live music to the community.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Calendar Subscription */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <a
              href={calendarWebcalUrl}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Calendar size={18} />
              Subscribe to Calendar
            </a>
            <p className="text-sm text-gray-500 mt-2">
              Add our events to your calendar
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} The Yodeling Goat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

