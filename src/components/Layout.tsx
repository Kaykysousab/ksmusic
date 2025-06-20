import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MusicPlayer from './MusicPlayer'

interface Track {
  id: string
  title: string
  artist: string
  image: string
  audioUrl: string
  duration: number
}

const Layout: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playlist, setPlaylist] = useState<Track[]>([])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleNext = () => {
    if (!currentTrack || playlist.length === 0) return
    
    const currentIndex = playlist.findIndex(track => track.id === currentTrack.id)
    const nextIndex = (currentIndex + 1) % playlist.length
    setCurrentTrack(playlist[nextIndex])
  }

  const handlePrevious = () => {
    if (!currentTrack || playlist.length === 0) return
    
    const currentIndex = playlist.findIndex(track => track.id === currentTrack.id)
    const prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1
    setCurrentTrack(playlist[prevIndex])
  }

  const handleTrackSelect = (track: Track, trackPlaylist: Track[]) => {
    setCurrentTrack(track)
    setPlaylist(trackPlaylist)
    setIsPlaying(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-24">
        <Outlet context={{ 
          currentTrack, 
          isPlaying, 
          onTrackSelect: handleTrackSelect 
        }} />
      </main>
      <MusicPlayer
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrevious={handlePrevious}
        playlist={playlist}
      />
      <Footer />
    </div>
  )
}

export default Layout