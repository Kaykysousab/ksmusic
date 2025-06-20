import React from 'react'
import Hero from '../components/Hero'
import GenreSection from '../components/GenreSection'
import { forroTracks, trapTracks } from '../data/musicData'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <GenreSection 
        title="FORRÓ & PISEIRO" 
        tracks={forroTracks} 
        id="forro" 
      />
      <GenreSection 
        title="TRAP & HIP HOP" 
        tracks={trapTracks} 
        id="trap" 
      />
    </div>
  )
}

export default Home