import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const Artist: React.FC = () => {
  const { artistId } = useParams<{ artistId: string }>()

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold gradient-text mb-8">
            {artistId?.replace('-', ' ').toUpperCase()}
          </h1>
          <p className="text-xl text-dark-400 mb-12">
            Página do artista em desenvolvimento
          </p>
          <div className="bg-dark-800 rounded-xl p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Em breve!
            </h2>
            <p className="text-dark-400">
              Estamos preparando uma experiência incrível para você conhecer mais sobre seus artistas favoritos.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Artist