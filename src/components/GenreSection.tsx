import React from 'react'
import { motion } from 'framer-motion'
import MusicCard from './MusicCard'

interface Track {
  id: string
  title: string
  artist: string
  image: string
  audioUrl: string
  duration: number
}

interface GenreSectionProps {
  title: string
  tracks: Track[]
  id: string
  currentTrack: Track | null
  isPlaying: boolean
  onTrackSelect: (track: Track) => void
}

const GenreSection: React.FC<GenreSectionProps> = ({ 
  title, 
  tracks, 
  id, 
  currentTrack, 
  isPlaying, 
  onTrackSelect 
}) => {
  if (tracks.length === 0) {
    return (
      <section className="py-16" id={id}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold gradient-text mb-8">{title}</h2>
            <div className="bg-dark-800 rounded-xl p-8 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4">Em breve!</h3>
              <p className="text-dark-400">
                Estamos trabalhando para adicionar músicas deste gênero.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16" id={id}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold gradient-text mb-12">{title}</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {tracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <MusicCard
                  {...track}
                  isPlaying={isPlaying}
                  isCurrentTrack={currentTrack?.id === track.id}
                  onPlay={() => onTrackSelect(track)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GenreSection