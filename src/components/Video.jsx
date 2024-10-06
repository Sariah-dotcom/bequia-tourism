import React from 'react'

export default function Video() {
  return (
    <div id='video'>
       <video autoPlay muted loop playsInline>
        <source src="/images/drone-footage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h1>Bequia <br /> Awaits You.</h1>
      </div>

    </div>
  )
}
