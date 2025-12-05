# The Yodeling Goat - Backyard Music Venue Website

A modern, single-page React website for a small backyard music venue. The site links to Instagram for event information, making it easy for venue owners to manage events through their social media.

## Features

- 🎵 **Events Section**: Direct link to Instagram for event information
- 📸 **Photo Gallery**: Lightbox viewer for venue photos
- 📍 **Contact & Directions**: Embedded map and contact information
- 📱 **Responsive Design**: Mobile-friendly TailwindCSS styling
- 🚀 **Auto-Deployment**: GitHub Actions automatically deploys to GitHub Pages

## Tech Stack

- **React** (Vite)
- **TailwindCSS**
- **Lucide Icons**
- **GitHub Pages** (hosting)
- **GitHub Actions** (CI/CD)

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd theyodelinggoatws.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

### Deployment to GitHub Pages

1. **Enable GitHub Pages**
   - Go to your repository Settings → Pages
   - **IMPORTANT**: Under "Source", select **"GitHub Actions"** (NOT "Deploy from a branch")
   - This ensures the built files from the workflow are served, not the source files

2. **Push to main branch**
   ```bash
   git push origin main
   ```

   The GitHub Action will automatically build and deploy your site to GitHub Pages.

   **Note**: If you see a blank page or MIME type errors, verify that GitHub Pages is set to use "GitHub Actions" as the source, not "Deploy from a branch".

## Customization

### Update Venue Information

Edit the following files to customize venue details:

- **Events Section**: `src/components/Events.jsx`
  - Update `instagramUrl` with your Instagram profile URL

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

### Styling

The site uses TailwindCSS utility classes. Customize colors, fonts, and spacing in:
- `tailwind.config.js` - Theme configuration
- Component files - Direct Tailwind classes

## Project Structure

```
theyodelinggoatws.github.io/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with background
│   │   ├── Events.jsx        # Events section with Instagram link
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

To update events, simply post on Instagram:
- Add new events as Instagram posts
- Update existing events by editing posts
- Delete events by removing posts

**For Developers:**

- Update content: Edit component files
- Update styling: Modify Tailwind classes or `tailwind.config.js`
- Add features: Create new components and add to `Home.jsx`

## Optional Enhancements

The following features can be added:

- Instagram feed embed
- Weather widget for upcoming shows
- Spotify embed for featured artists
- Email signup form
- Dark mode toggle
- QR code generator for venue posters

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
