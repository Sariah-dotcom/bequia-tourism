import React from 'react'

export default function Hero() {
  return (
    <div id='hero'>

      <video autoPlay muted loop playsInline>
        <source src="/images/drone-footage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h1>The Big <br /> Little <br /> Island.</h1>
      </div>
    </div>
  )
}
