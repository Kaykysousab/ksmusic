import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import MusicCard from '../components/MusicCard'
import { genres } from '../data/musicData'

const Genre: React.FC = () => {
  const { genreId } = useParams<{ genreId: string }>()
  const genre = genres.find(g => g.id === genreId)

  if (!genre) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Gênero não encontrado</h1>
          <p className="text-dark-400">O gênero que você procura não existe.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold gradient-text mb-12 text-center">
            {genre.name}
          </h1>
          
          {genre.tracks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {genre.tracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <MusicCard {...track} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Em breve!
              </h2>
              <p className="text-dark-400">
                Estamos trabalhando para adicionar músicas deste gênero.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Genre