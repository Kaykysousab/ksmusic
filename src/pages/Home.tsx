import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Hero from '../components/Hero'
import GenreSection from '../components/GenreSection'
import { genres, allTracks } from '../data/musicData'

interface Track {
  id: string
  title: string
  artist: string
  image: string
  audioUrl: string
  duration: number
}

interface ContextType {
  currentTrack: Track | null
  isPlaying: boolean
  onTrackSelect: (track: Track, playlist: Track[]) => void
}

const Home: React.FC = () => {
  const { currentTrack, isPlaying, onTrackSelect } = useOutletContext<ContextType>()

  const handlePlayAll = () => {
    if (allTracks.length > 0) {
      onTrackSelect(allTracks[0], allTracks)
    }
  }

  return (
    <div>
      <Hero onPlayAll={handlePlayAll} />
      
      {genres.map((genre) => (
        <GenreSection
          key={genre.id}
          id={genre.id}
          title={genre.name}
          tracks={genre.tracks}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onTrackSelect={(track) => onTrackSelect(track, genre.tracks)}
        />
      ))}
    </div>
  )
}

export default Home