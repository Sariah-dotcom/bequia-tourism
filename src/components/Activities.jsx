import React from 'react'
import SectionTitle from './SectionTitle'
import CarouselCard from './CarouselCard';
import SwiperComponent from '../components/SwiperComponent.jsx'
import { SwiperSlide } from 'swiper/react';

export default function Activities() {
  return (
    <div className='page-section'>

      <SectionTitle title='Activities' />
      
      <SwiperComponent slidesPerView={2.5}>
        <SwiperSlide>
          <CarouselCard
            activitiesImg="/images/activities/bagatelle.jpg"
            activitiesTitle='Eating and Dining'
            activitiesDescription="Description"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
      </SwiperComponent>
    </div>
  )
}
