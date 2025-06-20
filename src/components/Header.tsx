import React, { useState, useEffect } from 'react'
import { Menu, X, Music, Search, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const genres = [
    { id: 'forro', name: 'Forró & Piseiro', anchor: '#forro' },
    { id: 'trap', name: 'Trap & Hip Hop', anchor: '#trap' },
    { id: 'rock', name: 'Rock & Pop', anchor: '#rock' },
    { id: 'gospel', name: 'Gospel', anchor: '#gospel' },
    { id: 'speedup', name: 'Speed Up', anchor: '#speedup' },
    { id: 'samba', name: 'Samba & Acústicas', anchor: '#samba' },
    { id: 'axe', name: 'Axé & Breguadeira', anchor: '#axe' },
    { id: 'sertanejo', name: 'Sertanejo', anchor: '#sertanejo' },
  ]

  const scrollToSection = (anchor: string) => {
    const element = document.querySelector(anchor)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold gradient-text">
            <Music className="w-8 h-8" />
            KS Music
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {genres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => scrollToSection(genre.anchor)}
                className="text-sm font-medium hover:text-primary-400 transition-colors duration-300 relative group"
              >
                {genre.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-dark-800 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-dark-800 transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-dark-800 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-dark-800 rounded-lg p-4"
            >
              <nav className="flex flex-col gap-4">
                {genres.map((genre) => (
                  <button
                    key={genre.id}
                    onClick={() => scrollToSection(genre.anchor)}
                    className="text-sm font-medium hover:text-primary-400 transition-colors duration-300 py-2 text-left"
                  >
                    {genre.name}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header