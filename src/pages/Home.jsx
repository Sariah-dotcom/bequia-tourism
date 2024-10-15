import React from 'react'
import Hero from '../components/Hero.jsx'
import Welcome from '../components/Welcome.jsx'
import Travel from '../components/Travel.jsx'
import Activities from '../components/Activities.jsx'
import Video from '../components/Video.jsx'
import '../components/pages.css'

export default function Home() {
  return (
    <div>
      <Hero />
      <Welcome />
      <Travel />
      <Activities />
      <Video />
    </div>
  )
}
