import React, { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

interface Track {
  id: string
  title: string
  artist: string
  image: string
  audioUrl: string
  duration: number
}

interface MusicPlayerProps {
  currentTrack: Track | null
  isPlaying: boolean
  onPlayPause: () => void
  onNext: () => void
  onPrevious: () => void
  playlist: Track[]
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  currentTrack,
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
}) => {
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isLiked, setIsLiked] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !currentTrack) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    audio.addEventListener('timeupdate', updateTime)
    
    return () => audio.removeEventListener('timeupdate', updateTime)
  }, [currentTrack])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [isPlaying])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio || !currentTrack) return

    const newTime = (parseFloat(e.target.value) / 100) * currentTrack.duration
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value) / 100
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  if (!currentTrack) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-dark-900 border-t border-dark-800 p-4">
        <div className="container mx-auto">
          <div className="text-center text-dark-400">
            Selecione uma música para começar a ouvir
          </div>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-dark-900 border-t border-dark-800 p-4 z-40"
    >
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onEnded={onNext}
      />
      
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Track Info */}
          <div className="flex items-center gap-4 min-w-0 flex-1">
            <img
              src={currentTrack.image}
              alt={currentTrack.title}
              className="w-14 h-14 rounded-lg object-cover"
            />
            <div className="min-w-0">
              <h4 className="text-white font-medium truncate">{currentTrack.title}</h4>
              <p className="text-dark-400 text-sm truncate">{currentTrack.artist}</p>
            </div>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full transition-colors ${
                isLiked ? 'text-primary-400' : 'text-dark-400 hover:text-white'
              }`}
            >
              <Heart className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} />
            </button>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center gap-2 flex-1 max-w-md">
            <div className="flex items-center gap-4">
              <button className="text-dark-400 hover:text-white transition-colors">
                <Shuffle className="w-5 h-5" />
              </button>
              <button
                onClick={onPrevious}
                className="text-white hover:text-primary-400 transition-colors"
              >
                <SkipBack className="w-6 h-6" />
              </button>
              <button
                onClick={onPlayPause}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-black" />
                ) : (
                  <Play className="w-5 h-5 text-black ml-0.5" />
                )}
              </button>
              <button
                onClick={onNext}
                className="text-white hover:text-primary-400 transition-colors"
              >
                <SkipForward className="w-6 h-6" />
              </button>
              <button className="text-dark-400 hover:text-white transition-colors">
                <Repeat className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-2 w-full">
              <span className="text-xs text-dark-400 min-w-[40px]">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max="100"
                value={(currentTime / currentTrack.duration) * 100 || 0}
                onChange={handleSeek}
                className="flex-1 h-1 bg-dark-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <span className="text-xs text-dark-400 min-w-[40px]">
                {formatTime(currentTrack.duration)}
              </span>
            </div>
          </div>

          {/* Volume Control */}
          <div className="hidden md:flex items-center gap-2 flex-1 justify-end">
            <Volume2 className="w-5 h-5 text-dark-400" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume * 100}
              onChange={handleVolumeChange}
              className="w-24 h-1 bg-dark-700 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default MusicPlayer