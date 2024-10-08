import React from 'react'

export default function PageHero(props) {
  return (
    <div id="page-hero">
        <img src={props.imgSrc} alt="bequia arial shot" />

        <div className="page-hero-text">
            <h1>{props.pageTitle}</h1>
        </div>
    </div>
  )
}
