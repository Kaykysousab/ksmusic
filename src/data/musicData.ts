export interface Track {
  id: string
  title: string
  artist: string
  image: string
  date: string
  trackNumber: number
  link: string
}

export const forroTracks: Track[] = [
  {
    id: 'junior-vianna',
    title: 'Junior Vianna',
    artist: 'Junior Vianna',
    image: './app/assets/images/forro/junio viana.png',
    date: 'ago, 2023',
    trackNumber: 1,
    link: 'https://juniovianna.netlify.app/'
  },
  {
    id: 'felipe-amorim',
    title: 'Felipe Amorim',
    artist: 'Felipe Amorim',
    image: './app/assets/images/forro/cd_cover.png',
    date: 'ago 15, 2023',
    trackNumber: 2,
    link: 'https://64ed40605a304716afb02cc0--clinquant-kelpie-557bd1.netlify.app/'
  },
  {
    id: 'joao-gomes',
    title: 'João Gomes',
    artist: 'João Gomes',
    image: './app/assets/images/forro/cd_cover.jpeg',
    date: 'ago 15, 2023',
    trackNumber: 3,
    link: 'https://64ed4139866e6011a510eb76--lucky-treacle-ff9e46.netlify.app/'
  },
  {
    id: 'natanzinho',
    title: 'Natanzinho',
    artist: 'Natanzinho',
    image: './app/assets/images/forro/natanzinho (1).png',
    date: 'ago 15, 2023',
    trackNumber: 4,
    link: 'https://64ed40dbcbcbd815e068812c--wonderful-vacherin-53b154.netlify.app/'
  },
  {
    id: 'xand-aviao',
    title: 'Xand Avião',
    artist: 'Xand Avião',
    image: './app/assets/images/forro/xandaviao.png',
    date: 'ago 15, 2023',
    trackNumber: 5,
    link: 'https://64ed41dc9589ea173c3292ba--elegant-pixie-a4f318.netlify.app/'
  },
  {
    id: 'henry-freitas',
    title: 'Henry Freitas',
    artist: 'Henry Freitas',
    image: './app/assets/images/forro/henry freitas.jpg',
    date: 'ago 15, 2023',
    trackNumber: 6,
    link: 'https://64ed436f45704218cb870457--beautiful-dusk-55bd5e.netlify.app/'
  },
  {
    id: 'wesley-safadao',
    title: 'Wesley Safadão',
    artist: 'Wesley Safadão',
    image: './app/assets/images/forro/wesley safadao.jpg',
    date: 'ago 15, 2023',
    trackNumber: 7,
    link: '#'
  },
  {
    id: 'ze-vaqueiro',
    title: 'Zé Vaqueiro',
    artist: 'Zé Vaqueiro',
    image: './app/assets/images/forro/ze vaqueiro.jpeg',
    date: 'ago 15, 2023',
    trackNumber: 8,
    link: 'https://64ed4617030b171907288002--marvelous-unicorn-59ad93.netlify.app/'
  }
]

export const trapTracks: Track[] = [
  {
    id: 'brocasito',
    title: 'Brocasito',
    artist: 'Brocasito',
    image: './app/assets/images/TRAP E HIP HOP/bocasito capa.jpg',
    date: 'ago, 2023',
    trackNumber: 1,
    link: 'https://brocasito.netlify.app/'
  },
  {
    id: 'gapes',
    title: 'Gapes',
    artist: 'Gapes',
    image: './app/assets/images/TRAP E HIP HOP/gapes.jpg',
    date: 'ago 15, 2023',
    trackNumber: 2,
    link: 'https://gapes.netlify.app/'
  },
  {
    id: 'kaverinha',
    title: 'Kaverinha',
    artist: 'Kaverinha',
    image: './app/assets/images/TRAP E HIP HOP/kaverinha.jpg',
    date: 'ago 15, 2023',
    trackNumber: 3,
    link: 'https://kaverinha.netlify.app/'
  },
  {
    id: 'kayblack',
    title: 'KayBlack',
    artist: 'KayBlack',
    image: './app/assets/images/TRAP E HIP HOP/kayblack.jpg',
    date: 'ago 15, 2023',
    trackNumber: 4,
    link: 'https://64f0d7bd8edc100a15bf3a35--dainty-biscotti-55c1c1.netlify.app/'
  },
  {
    id: 'matue',
    title: 'Matuê',
    artist: 'Matuê',
    image: './app/assets/images/TRAP E HIP HOP/matue2.jpg',
    date: 'ago 15, 2023',
    trackNumber: 5,
    link: 'https://64f0d4d385605e0b4cecb9cb--profound-beignet-a2b300.netlify.app/'
  },
  {
    id: 'sidoka',
    title: 'Sidoka',
    artist: 'Sidoka',
    image: './app/assets/images/TRAP E HIP HOP/sidoka.jpg',
    date: 'ago 15, 2023',
    trackNumber: 6,
    link: 'https://64f0d74738f84e17b492c886--wonderful-taffy-91e64b.netlify.app/'
  },
  {
    id: 'teto',
    title: 'TETO',
    artist: 'TETO',
    image: './app/assets/images/TRAP E HIP HOP/teto.jpg',
    date: 'ago 15, 2023',
    trackNumber: 7,
    link: 'https://64f0d7cf5a99561b0d854745--classy-daifuku-a98b6f.netlify.app/'
  },
  {
    id: 'wiu',
    title: 'WIU',
    artist: 'WIU',
    image: './app/assets/images/TRAP E HIP HOP/wiu.jpg',
    date: 'ago 15, 2023',
    trackNumber: 8,
    link: 'https://golden-nasturtium-9e6126.netlify.app/'
  }
]

export const genres = [
  { id: 'forro', name: 'FORRÓ & PISEIRO', tracks: forroTracks },
  { id: 'trap', name: 'TRAP & HIP HOP', tracks: trapTracks },
  { id: 'rock', name: 'ROCK & POP', tracks: [] },
  { id: 'gospel', name: 'GOSPEL', tracks: [] },
  { id: 'speedup', name: 'SPEED UP', tracks: [] },
  { id: 'samba', name: 'SAMBA & ACÚSTICAS', tracks: [] },
  { id: 'axe', name: 'AXÉ & BREGUADEIRA', tracks: [] },
  { id: 'sertanejo', name: 'SERTANEJO', tracks: [] },
]