import React from 'react'
import { Play, Shuffle } from 'lucide-react'
import { motion } from 'framer-motion'

interface HeroProps {
  onPlayAll: () => void
}

const Hero: React.FC<HeroProps> = ({ onPlayAll }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">KS Music</span>
              <br />
              <span className="text-white">Sua Plataforma Musical</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-2xl mx-auto">
              Ouça os melhores hits do forró, trap, rock e muito mais. 
              Sua música favorita está aqui!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button 
              onClick={onPlayAll}
              className="btn-primary text-lg px-8 py-4"
            >
              <Play className="w-5 h-5" />
              Tocar Todas
            </button>
            
            <button className="btn-secondary text-lg px-8 py-4">
              <Shuffle className="w-5 h-5" />
              Modo Aleatório
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-dark-400 text-sm"
          >
            <p>Mais de 1000 músicas • Todos os gêneros • Qualidade HD</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero