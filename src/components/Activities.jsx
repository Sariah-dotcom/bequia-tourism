import React from 'react'
import SectionTitle from './SectionTitle'
import CarouselCard from './CarouselCard'

export default function Activities() {
  return (
    <div id='page-section'>
        <SectionTitle title='Activities' />

        <div className="carousel">
            <CarouselCard />

            <CarouselCard />
            <CarouselCard />
            <CarouselCard />

        </div>
      
    </div>
  )
}
