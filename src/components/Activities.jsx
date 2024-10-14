import React from 'react'
import SectionTitle from './SectionTitle'
import CarouselCard from './CarouselCard';
import SwiperComponent from '../components/SwiperComponent.jsx'
import { SwiperSlide } from 'swiper/react';

export default function Activities() {
  return (
    <div className='page-section'>

      <SectionTitle title='What to Do' />
      
      <SwiperComponent slidesPerView={2.5}>
        <SwiperSlide>
          <CarouselCard
            sectionLink="#site-1"
            activitiesImg="/images/activities/bagatelle.jpg"
            activitiesTitle='Places to Visit'
            activitiesDescription="Check out the many sites and sounds Bequia has to offer"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselCard
            activitiesImg="/images/activities/bagatelle.jpg"
            activitiesTitle='Bequia Regatta'
            activitiesDescription="One of the island's premiere events and the southern Caribbean region’s most popular regatta."
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselCard
            activitiesImg="/images/activities/bagatelle.jpg"
            activitiesTitle='Bequia Music Fest'
            activitiesDescription="The love of music is what brings people back year after year."
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselCard
            sectionLink="#tours-and-hiking"
            activitiesImg="/images/activities/bagatelle.jpg"
            activitiesTitle='Tours & Hiking'
            activitiesDescription="There is far more to Bequia than just its beaches and its quaint waterfront bars and shops."
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselCard
            activitiesImg="/images/activities/bagatelle.jpg"
            activitiesTitle='Fishing & Diving'
            activitiesDescription="Description"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselCard
            activitiesImg="/images/activities/bagatelle.jpg"
            activitiesTitle='Eating & Dining'
            activitiesDescription="Description"
          />
        </SwiperSlide>
      </SwiperComponent>
    </div>
  )
}
