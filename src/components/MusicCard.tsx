import React from 'react'
import { Play, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

interface MusicCardProps {
  id: string
  title: string
  artist: string
  image: string
  date: string
  trackNumber: number
  link: string
}

const MusicCard: React.FC<MusicCardProps> = ({
  title,
  artist,
  image,
  date,
  trackNumber,
  link,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-dark-800 rounded-xl overflow-hidden card-hover"
      >
        <div className="relative">
          <img
            src={image}
            alt={`${artist} - ${title}`}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between text-sm text-dark-400 mb-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <span>Música: {trackNumber.toString().padStart(2, '0')}</span>
          </div>
          
          <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
            {artist}
          </h3>
          
          {title !== artist && (
            <p className="text-dark-300 text-sm mt-1">{title}</p>
          )}
        </div>
      </a>
    </motion.div>
  )
}

export default MusicCard