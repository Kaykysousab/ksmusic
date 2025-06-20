import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Music, Download, Smartphone } from 'lucide-react'
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
    { id: 'forro', name: 'FORRÓ & PISEIRO' },
    { id: 'trap', name: 'TRAP & HIP HOP' },
    { id: 'rock', name: 'ROCK & POP' },
    { id: 'gospel', name: 'GOSPEL' },
    { id: 'speedup', name: 'SPEED UP' },
    { id: 'samba', name: 'SAMBA & ACÚSTICAS' },
    { id: 'axe', name: 'AXÉ & BREGUADEIRA' },
    { id: 'sertanejo', name: 'SERTANEJO' },
  ]

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
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold gradient-text">
            <Music className="w-8 h-8" />
            KS Music
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {genres.map((genre) => (
              <Link
                key={genre.id}
                to={`/genre/${genre.id}`}
                className="text-sm font-medium hover:text-primary-400 transition-colors duration-300 relative group"
              >
                {genre.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="btn-secondary">
              <Download className="w-4 h-4" />
              Baixar App
            </button>
            <button className="btn-primary">
              <Smartphone className="w-4 h-4" />
              Android
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
                  <Link
                    key={genre.id}
                    to={`/genre/${genre.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-medium hover:text-primary-400 transition-colors duration-300 py-2"
                  >
                    {genre.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-dark-700">
                  <button className="btn-secondary justify-center">
                    <Download className="w-4 h-4" />
                    Baixar App
                  </button>
                  <button className="btn-primary justify-center">
                    <Smartphone className="w-4 h-4" />
                    Android
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header