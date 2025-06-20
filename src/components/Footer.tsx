import React from 'react'
import { Music, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Music className="w-6 h-6 text-primary-400" />
            <span className="text-xl font-bold gradient-text">KS Music</span>
          </div>
          <p className="text-dark-400 flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 text-red-500" /> por KS ONLINE © 2024
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer