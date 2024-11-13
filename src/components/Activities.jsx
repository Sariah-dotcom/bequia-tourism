import React from 'react'
import SectionTitle from './SectionTitle'
import CarouselCard from './CarouselCard';
import SwiperComponent from '../components/SwiperComponent.jsx'
import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';



export default function Activities() {
  return (
    <div className='page-section' id='activities-sec'>

      <SectionTitle title='Activities' />
      
      <SwiperComponent slidesPerView={2.1}>

        <SwiperSlide>
          <Link to='/activities' className='activity-link'>
            <CarouselCard
              activityCardImg="/images/island.jpg"
              activityCardTitle='Places of Interest' 
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/activities' className='activity-link'>
            <CarouselCard
              activityCardImg="/images/activities/events/bequia-musicfest.jpg"
              activityCardTitle='Bequia Music Fest' 
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/activities' className='activity-link'>
            <CarouselCard
              activityCardImg="/images/activities/bagatelle.jpg"
              activityCardTitle='Dining' 
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/activities' className='activity-link'>
            <CarouselCard
              activityCardImg="/images/diving-bequia.jpg"
              activityCardTitle='Diving & Water
              sports' 
            />
          </Link>
        </SwiperSlide>

        
      </SwiperComponent>
    </div>
  )
}
