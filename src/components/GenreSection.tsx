import React from 'react'
import { motion } from 'framer-motion'
import MusicCard from './MusicCard'

interface Track {
  id: string
  title: string
  artist: string
  image: string
  date: string
  trackNumber: number
  link: string
}

interface GenreSectionProps {
  title: string
  tracks: Track[]
  id?: string
}

const GenreSection: React.FC<GenreSectionProps> = ({ title, tracks, id }) => {
  return (
    <section className="py-16" id={id}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold gradient-text mb-12 text-center">
            {title}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MusicCard {...track} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GenreSection