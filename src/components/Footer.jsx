import { Instagram, Mail, Music } from 'lucide-react'

function Footer() {
  // Replace with actual links
  const instagramUrl = 'https://instagram.com/the_yodeling_goat'

  return (
    <footer className="bg-gradient-to-b from-rustic-800 to-rustic-900 text-white py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-terracotta-500/30 p-2 rounded-lg border border-terracotta-400/40">
                <Music className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">The Yodeling Goat</h3>
            </div>
            <p className="text-white/90 font-serif">
              A backyard music venue bringing live music to the community.
            </p>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-display font-semibold mb-4 text-white">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-serif group"
                >
                  <div className="bg-terracotta-500/30 p-1.5 rounded group-hover:bg-terracotta-500/40 transition-colors border border-terracotta-400/40">
                    <Instagram size={18} className="text-white" />
                  </div>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-white/80 text-sm font-serif">
          <p>&copy; {new Date().getFullYear()} The Yodeling Goat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

