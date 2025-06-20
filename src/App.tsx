import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Genre from './pages/Genre'
import Artist from './pages/Artist'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/genre/:genreId" element={<Genre />} />
          <Route path="/artist/:artistId" element={<Artist />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App