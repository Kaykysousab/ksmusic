import React from 'react'
import { Play, Pause, MoreHorizontal } from 'lucide-react'
import { motion } from 'framer-motion'

interface Track {
  id: string
  title: string
  artist: string
  image: string
  audioUrl: string
  duration: number
}

interface MusicCardProps extends Track {
  isPlaying: boolean
  isCurrentTrack: boolean
  onPlay: () => void
}

const MusicCard: React.FC<MusicCardProps> = ({
  title,
  artist,
  image,
  isPlaying,
  isCurrentTrack,
  onPlay,
}) => {
  const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60)
    const seconds = Math.floor(duration % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`group bg-dark-800 rounded-xl p-4 hover:bg-dark-700 transition-all duration-300 cursor-pointer ${
        isCurrentTrack ? 'ring-2 ring-primary-400' : ''
      }`}
      onClick={onPlay}
    >
      <div className="relative mb-4">
        <img
          src={image}
          alt={`${artist} - ${title}`}
          className="w-full aspect-square object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
          <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
            {isPlaying && isCurrentTrack ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-0.5" />
            )}
          </div>
        </div>
        {isCurrentTrack && (
          <div className="absolute top-2 right-2">
            <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <h3 className={`font-semibold truncate ${
          isCurrentTrack ? 'text-primary-400' : 'text-white group-hover:text-primary-400'
        } transition-colors duration-300`}>
          {title}
        </h3>
        <p className="text-dark-300 text-sm truncate">{artist}</p>
      </div>

      <div className="flex items-center justify-between mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs text-dark-400">3:24</span>
        <button className="p-1 rounded-full hover:bg-dark-600 transition-colors">
          <MoreHorizontal className="w-4 h-4 text-dark-400" />
        </button>
      </div>
    </motion.div>
  )
}

export default MusicCard