export interface Track {
  id: string
  title: string
  artist: string
  image: string
  audioUrl: string
  duration: number
}

// URLs de exemplo para áudio (você deve substituir por suas URLs reais)
export const forroTracks: Track[] = [
  {
    id: 'junior-vianna',
    title: 'Melhores Hits',
    artist: 'Junior Vianna',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav', // Exemplo
    duration: 180
  },
  {
    id: 'felipe-amorim',
    title: 'Felipe Amorim',
    artist: 'Felipe Amorim',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    duration: 195
  },
  {
    id: 'joao-gomes',
    title: 'João Gomes',
    artist: 'João Gomes',
    image: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=400',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    duration: 210
  },
  {
    id: 'natanzinho',
    title: 'Natanzinho',
    artist: 'Natanzinho',
    image: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=400',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    duration: 175
  },
  {
    id: 'xand-aviao',
    title: 'Xand Avião',
    artist: 'Xand Avião',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    duration: 200
  },
  {
    id: 'henry-freitas',
    title: 'Henry Freitas',
    artist: 'Henry Freitas',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    duration: 185
  }
]

export const trapTracks: Track[] = [
  {
    id: 'brocasito',
    title: 'Brocasito',
    artist: 'Brocasito',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    duration: 165
  },
  {
    id: 'gapes',
    title: 'Gapes',
    artist: 'Gapes',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    duration: 190
  },
  {
    id: 'kaverinha',
    title: 'Kaverinha',
    artist: 'Kaverinha',
    image: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=400',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    duration: 175
  },
  {
    id: 'kayblack',
    title: 'KayBlack',
    artist: 'KayBlack',
    image: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=400',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    duration: 200
  },
  {
    id: 'matue',
    title: 'Matuê',
    artist: 'Matuê',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    duration: 220
  },
  {
    id: 'sidoka',
    title: 'Sidoka',
    artist: 'Sidoka',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    duration: 195
  }
]

export const rockTracks: Track[] = []
export const gospelTracks: Track[] = []
export const speedupTracks: Track[] = []
export const sambaTracks: Track[] = []
export const axeTracks: Track[] = []
export const sertanejoTracks: Track[] = []

export const genres = [
  { id: 'forro', name: 'FORRÓ & PISEIRO', tracks: forroTracks },
  { id: 'trap', name: 'TRAP & HIP HOP', tracks: trapTracks },
  { id: 'rock', name: 'ROCK & POP', tracks: rockTracks },
  { id: 'gospel', name: 'GOSPEL', tracks: gospelTracks },
  { id: 'speedup', name: 'SPEED UP', tracks: speedupTracks },
  { id: 'samba', name: 'SAMBA & ACÚSTICAS', tracks: sambaTracks },
  { id: 'axe', name: 'AXÉ & BREGUADEIRA', tracks: axeTracks },
  { id: 'sertanejo', name: 'SERTANEJO', tracks: sertanejoTracks },
]

export const allTracks = [...forroTracks, ...trapTracks]