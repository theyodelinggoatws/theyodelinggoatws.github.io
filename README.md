# The Yodeling Goat - Backyard Music Venue Website

A modern, single-page React website for a small backyard music venue. The site displays events from Google Calendar and allows venue owners to manage events without touching code.

## Features

- 🎵 **Event Calendar**: FullCalendar integration with Google Calendar
- 📸 **Photo Gallery**: Lightbox viewer for venue photos
- 📍 **Contact & Directions**: Embedded map and contact information
- 📱 **Responsive Design**: Mobile-friendly TailwindCSS styling
- 🚀 **Auto-Deployment**: GitHub Actions automatically deploys to GitHub Pages

## Tech Stack

- **React** (Vite)
- **TailwindCSS**
- **FullCalendar** with Google Calendar plugin
- **Lucide Icons**
- **GitHub Pages** (hosting)
- **GitHub Actions** (CI/CD)

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- A Google Calendar with public access
- Google Calendar API key

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd yodeling_goat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_GOOGLE_CALENDAR_ID=your-calendar-id@group.calendar.google.com
   VITE_GOOGLE_CALENDAR_API_KEY=your-api-key
   ```

   **Getting your Google Calendar ID:**
   - Go to [Google Calendar](https://calendar.google.com)
   - Find your calendar in the left sidebar
   - Click the three dots next to your calendar → Settings and sharing
   - Scroll down to "Integrate calendar"
   - Copy the "Calendar ID"

   **Getting a Google Calendar API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the "Calendar API"
   - Go to "Credentials" → "Create Credentials" → "API Key"
   - Restrict the API key to "Calendar API" for security

4. **Make your calendar public**
   - In Google Calendar settings, under "Access permissions"
   - Check "Make available to public"
   - Select "See all event details"

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

### Deployment to GitHub Pages

1. **Enable GitHub Pages**
   - Go to your repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created automatically)
   - Folder: `/ (root)`

2. **Set up GitHub Secrets**
   - Go to repository Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `VITE_GOOGLE_CALENDAR_ID`: Your Google Calendar ID
     - `VITE_GOOGLE_CALENDAR_API_KEY`: Your Google Calendar API key

3. **Push to main branch**
   ```bash
   git push origin main
   ```

   The GitHub Action will automatically build and deploy your site to GitHub Pages.

## Customization

### Update Venue Information

Edit the following files to customize venue details:

- **Contact Information**: `src/components/Contact.jsx`
  - Update `venueAddress`, `email`, `instagram`, `instagramUrl`

- **Venue Description**: `src/components/VenueInfo.jsx`
  - Modify the text content to match your venue

- **Hero Background**: `src/components/Hero.jsx`
  - Replace the Unsplash image URL with your venue photo

- **Gallery Images**: `src/components/Gallery.jsx`
  - Replace the placeholder image URLs with your venue photos

- **Footer**: `src/components/Footer.jsx`
  - Update social links and email

### Adding Event Details to Google Calendar

When creating events in Google Calendar, you can add custom details that will appear in the event modal:

1. **Description Field**: Add HTML content including:
   - Band names
   - Event details
   - Links

2. **Custom Properties** (via Google Calendar API or extensions):
   - `flyerImage`: URL to event flyer image
   - `donationLink`: URL to donation page (Venmo, etc.)
   - `mapLink`: Custom map link (optional, defaults to location)

   Note: FullCalendar's Google Calendar plugin has limited support for custom properties. For advanced customization, you may need to use the Google Calendar API directly or add event descriptions in HTML format.

### Styling

The site uses TailwindCSS utility classes. Customize colors, fonts, and spacing in:
- `tailwind.config.js` - Theme configuration
- Component files - Direct Tailwind classes

## Project Structure

```
yodeling_goat/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with background
│   │   ├── Calendar.jsx      # FullCalendar component
│   │   ├── EventModal.jsx    # Event details modal
│   │   ├── VenueInfo.jsx     # Venue information section
│   │   ├── Gallery.jsx       # Photo gallery with lightbox
│   │   ├── Contact.jsx       # Contact and directions
│   │   └── Footer.jsx        # Footer with social links
│   ├── pages/
│   │   └── Home.jsx          # Main page combining all sections
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Maintenance

**For Venue Owners:**

To update events, simply edit your Google Calendar:
- Add new events
- Update existing events
- Delete events

Changes will automatically appear on the website after the next deployment (or immediately if using a calendar refresh).

**For Developers:**

- Update content: Edit component files
- Update styling: Modify Tailwind classes or `tailwind.config.js`
- Add features: Create new components and add to `Home.jsx`

## Optional Enhancements

The following features can be added:

- Weather widget for upcoming shows
- Spotify embed for featured artists
- Email signup form
- Dark mode toggle
- QR code generator for venue posters

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.

