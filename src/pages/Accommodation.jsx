import React from 'react'
import EmailContact from '../components/EmailContact.jsx'
import AccommodationCard from '../components/AccommodationCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import PageHero from '../components/PageHero.jsx'
import SwiperComponent from '../components/SwiperComponent.jsx'
import { Swiper, SwiperSlide } from 'swiper/react';
export default function Accommodation() {
  return (
    <div>

      <PageHero imgSrc="/images/villa.jpg" pageTitle='Accommodation'/>
    <div className="page-section">
        <p>
            Bequia offers a wide variety of accommodation to suit all tastes and budgets. 
            Luxury villas, luxury beachside hotels, small family-run inns and guest houses, 
            self-catering apartments - the big little island has them all and in every location.
        </p>
    </div>
     

      <div className="page-section">
        <SectionTitle title='Apartments' />
        <SwiperComponent>
           
            <SwiperSlide>
                <AccommodationCard 
                    location='Spring'
                    accommodationImg ='/images/accommodations/apartments/aqua-on-bequia.jpg' 
                    accommodationTitle='AQUA on Bequia' 
                    accommodationDescription='Beautifully appointed one bedroom apartments in a colorful tropical garden setting, perched on the Belmont hillside overlooking Admiralty Bay.' />
            </SwiperSlide>

            <SwiperSlide>
                <AccommodationCard 
                    location='Spring'
                    accommodationImg ='/images/accommodations/apartments/bequia-white-cactus.jpg' 
                    accommodationTitle='Bequia White Cactus' 
                    accommodationDescription=' Newly renovated duplex with an ocean view. Walking distance from Adams Bay and The Liming; short drive to Friendship and Lower Bay.' />
            </SwiperSlide>

            <SwiperSlide>
                <AccommodationCard 
                    location='Lower Bay'
                    accommodationImg ='/images/accommodations/apartments/the-lookout.jpg' 
                    accommodationTitle='Lookout Apartments' 
                    accommodationDescription='Two newly refurbished, 2-bedroom, 2 ensuite bath boutique apartments with stunning panoramic views over Lower Bay.' />
            </SwiperSlide>

            <SwiperSlide>
                <AccommodationCard 
                    location='Belmont'
                    accommodationImg ='/images/accommodations/apartments/pink-house.jpg' 
                    accommodationTitle='Pink House Apartment' 
                    accommodationDescription='Charming house, reasonably priced and conveniently situated within walking distance of the harbour and Princess Margaret beach.' />
            </SwiperSlide>

            <SwiperSlide>
                <AccommodationCard 
                    location='Spring'
                    accommodationImg ='/images/accommodations/apartments/sea-shells.jpg' 
                    accommodationTitle='Sea Shells Holiday Apartments' 
                    accommodationDescription='One and two-bedroom self-catering apartments designed for Caribbean outdoor living, offering house keeping, telephone and televisions.' />
            </SwiperSlide>

            <SwiperSlide>
                <AccommodationCard 
                    location='Friendship Bay'
                    accommodationImg ='/images/accommodations/apartments/appleinn.gif' 
                    accommodationTitle='Sugarapple Inn' 
                    accommodationDescription='Eight spacious, breezy and stylish studio apartments with full kitchen, and a view which captures the tranquillity of the surroundings with the Atlantic to the east.' />
            </SwiperSlide>

            <SwiperSlide>
                <AccommodationCard 
                    location='Admiralty Bay'
                    accommodationImg ='/images/accommodations/apartments/pool-house.jpg' 
                    accommodationTitle='The Pool House' 
                    accommodationDescription=' The Pool House is a 2 bedroom unit which is part of Tropical Hideaways eco friendly and luxurious private Villas, Suites and Studios.' />
            </SwiperSlide>

            <SwiperSlide>
                <AccommodationCard 
                    location='Admiralty Bay'
                    accommodationImg ='/images/accommodations/apartments/penthouse-suite.jpg' 
                    accommodationTitle='The Penthouse Suite' 
                    accommodationDescription=' The Penthouse Suite is the ultimate accommodation & is part of Tropical Hideaways eco friendly & luxurious private Villas, Suites and Studios.' />
            </SwiperSlide>
            
      </SwiperComponent>
      </div>

      <div className="page-section">
        <SectionTitle title='Guesthouses' />
        {/* <AccommodationCarousel /> */}
      </div>

      <div className="page-section">
        <SectionTitle title='Villas' />
        {/* <AccommodationCarousel /> */}
      </div>

      <div className="page-section">
        <SectionTitle title='Hotels' />
        {/* <AccommodationCarousel /> */}
      </div>

      <EmailContact />
    </div>
  )
}
