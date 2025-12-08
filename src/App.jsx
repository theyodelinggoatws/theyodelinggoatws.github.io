import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EventsPage from './pages/EventsPage'
import VenuePage from './pages/VenuePage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import MemorialPage from './pages/MemorialPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/venue" element={<VenuePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/memorial" element={<MemorialPage />} />
      </Routes>
    </Router>
  )
}

export default App

