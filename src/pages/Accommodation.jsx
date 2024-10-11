import React from 'react'
import EmailContact from '../components/EmailContact.jsx'
import AccommodationCard from '../components/AccommodationCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import PageHero from '../components/PageHero.jsx'
import SwiperComponent from '../components/SwiperComponent.jsx'
import { SwiperSlide } from 'swiper/react';
import '../carouselStyles.css';
import { HashLink } from 'react-router-hash-link';



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
            <SwiperComponent slidesPerView={1}>
           
            <SwiperSlide>
                <AccommodationCard 
                    location='Spring'
                    section='aqua'
                    accommodationImg ='/images/accommodations/apartments/aqua-on-bequia.jpg' 
                    accommodationTitle='AQUA on Bequia' 
                    accommodationDescription='Beautifully appointed one bedroom apartments in a colorful tropical garden setting, perched on the Belmont hillside overlooking Admiralty Bay.' />
                    
            </SwiperSlide>

            <SwiperSlide>
                <AccommodationCard 
                    location='Spring'
                    section='white-cactus'
                    accommodationImg ='/images/accommodations/apartments/bequia-white-cactus.jpg' 
                    accommodationTitle='Bequia White Cactus' 
                    accommodationDescription=' Newly renovated duplex with an ocean view. Walking distance from Adams Bay and The Liming; short drive to Friendship and Lower Bay.' />
            </SwiperSlide>

            <SwiperSlide>
                <AccommodationCard 
                    location='Lower Bay'
                    section='lookout'
                    accommodationImg ='/images/accommodations/apartments/the-lookout.jpg' 
                    accommodationTitle='Lookout Apartments' 
                    accommodationDescription='Two newly refurbished, 2-bedroom, 2 ensuite bath boutique apartments with stunning panoramic views over Lower Bay.' />
            </SwiperSlide>

            <SwiperSlide>
                <AccommodationCard 
                    location='Belmont'
                    section='pinkhouse'
                    accommodationImg ='/images/accommodations/apartments/pink-house.jpg' 
                    accommodationTitle='Pink House Apartment' 
                    accommodationDescription='Charming house, reasonably priced and conveniently situated within walking distance of the harbour and Princess Margaret beach.' />
            </SwiperSlide>

            <SwiperSlide>
                <AccommodationCard 
                    location='Spring'
                    section='seashells'
                    accommodationImg ='/images/accommodations/apartments/sea-shells.jpg' 
                    accommodationTitle='Sea Shells Holiday Apartments' 
                    accommodationDescription='One and two-bedroom self-catering apartments designed for Caribbean outdoor living, offering house keeping, telephone and televisions.' />
            </SwiperSlide>

            <SwiperSlide>
                <AccommodationCard 
                    location='Friendship Bay'
                    section='sugarapple'
                    accommodationImg ='/images/accommodations/apartments/appleinn.gif' 
                    accommodationTitle='Sugarapple Inn' 
                    accommodationDescription='Eight spacious, breezy and stylish studio apartments with full kitchen, and a view which captures the tranquillity of the surroundings with the Atlantic to the east.' />
            </SwiperSlide>

            <SwiperSlide>
                <AccommodationCard 
                    location='Admiralty Bay'
                    section='pool-house'
                    accommodationImg ='/images/accommodations/apartments/pool-house.jpg' 
                    accommodationTitle='The Pool House' 
                    accommodationDescription=' The Pool House is a 2 bedroom unit which is part of Tropical Hideaways eco friendly and luxurious private Villas, Suites and Studios.' />
            </SwiperSlide>

            <SwiperSlide>
                <AccommodationCard 
                    location='Admiralty Bay'
                    section='penthouse-suite'
                    accommodationImg ='/images/accommodations/apartments/penthouse-suite.jpg' 
                    accommodationTitle='The Penthouse Suite' 
                    accommodationDescription=' The Penthouse Suite is the ultimate accommodation & is part of Tropical Hideaways eco friendly & luxurious private Villas, Suites and Studios.' />
            </SwiperSlide>
    
            </SwiperComponent>
        </div>

      <div className="page-section">
        <SectionTitle title='Villas' />
        
        <SwiperComponent slidesPerView={1} >
          <SwiperSlide>
            <AccommodationCard 
              location='Spring'
              accommodationImg ='/images/accommodations/villas/tamarind.jpg' 
              accommodationTitle='A Tamarind Villa' 
              accommodationDescription='A brand new modern Caribbean villa built and furnished to the highest standards. Completed Feb 2010. Located on picturesque Spring Bay.Two large en-suite bedrooms, situated either side of a spacious open plan living area and bespoke handmade kitchen.' />
          </SwiperSlide>
        
        <SwiperSlide>
            <AccommodationCard 
              location='Spring Bay'
              accommodationImg ='/images/accommodations/villas/bay-tree-villa.gif' 
              accommodationTitle='Bay Tree Villa' 
              accommodationDescription='Fabulous view, cool breezes, large private pool, BBQ patio, gourmet kitchen, Two master suites, one is a super king 4 poster bed the other has the option of either a super king or two twin beds at Bay Tree Villa.' />
        </SwiperSlide>

        <SwiperSlide>
            <AccommodationCard 
              location='Spring'
              accommodationImg ='/images/accommodations/villas/bellwood-falls.jpg' 
              accommodationTitle='Bellwood Falls Villa' 
              accommodationDescription='Quiet and secluded in a West facing elevated position above Admiralty Bay and beaches.
Good breezes and a stunning panoramic view make this villa a popular and affordable stay.' />
        </SwiperSlide>

        <SwiperSlide>
            <AccommodationCard 
              location='Princess Margaret Beach'
              accommodationImg ='/images/accommodations/villas/flamingo.jpg' 
              accommodationTitle='Flamingo Villa' 
              accommodationDescription='Flamingo Villa offers you complete privacy and breathtaking views of the Caribbean Sea. It is situated on one of the best beaches in Bequia, Princess Margaret Beach.' />
        </SwiperSlide>
        </SwiperComponent>
      </div>

      <div className="page-section">
        <SectionTitle title='Hotels' />
        <SwiperComponent slidesPerView={1}>
          <SwiperSlide>
            <AccommodationCard 
              location='Friendship'
              accommodationImg ='/images/accommodations/hotels/bbh.gif' 
              accommodationTitle='Bequia Beach Hotel' 
              accommodationDescription='For that little something extra in your holiday - we offer it all! The newly built "contemporary colonial" Bequia Beach Hotel, located on one of the islands best beaches in Friendship Bay.' />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard 
              location='Belmont Walkway'
              accommodationImg ='/images/accommodations/hotels/plantation-hotel.jpg' 
              accommodationTitle='Bequia Plantation Hotel' 
              accommodationDescription='The wonderful beachfront Bequia Plantation Hotel embodies luxury and quality at its finest in one of the island top premier locations, with beautifully decorated Rooms and Cottages available at competitive rates.' />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard 
              location='Spring Estate'
              accommodationImg ='/images/accommodations/hotels/springhouse-bequia.gif' 
              accommodationTitle='Bequia Spring Hotel' 
              accommodationDescription='Spring House is an exclusive architect-designed luxury villa with 6+ spacious suites in 2 acres of private grounds. Furnished to the highest standards, the fully-staffed villa caters for 12+ guests, with modern technologies discreetly included.' />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard 
              location='Admiralty Bay, Belmont'
              accommodationImg ='/images/accommodations/hotels/frangipani-hotel.jpg' 
              accommodationTitle='Frangipani Hotel' 
              accommodationDescription='Traditional West Indian inn converted from a family home over thirty years ago. Choose from simple, old-style rooms in the original building right on the waterfront, or separate elegant stone-built garden units, with balconies an ensuite bathrooms.' />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard 
              location='Admiralty Bay, Belmont'
              accommodationImg ='/images/accommodations/hotels/ginger-hotel.gif' 
              accommodationTitle='Gingerbread Hotel' 
              accommodationDescription=' Luxurious self-contained suites all with spacious, covered verandah overlooking beautiful Admiralty Bay just 50 ft. (15 metres) in front.' />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard 
              location='overlooking Admiralty Bay'
              accommodationImg ='/images/accommodations/hotels/tropical-hideaway.jpg' 
              accommodationTitle='Tropical Hideaway Hotel' 
              accommodationDescription=' Tropical Hideaway is a small, eco friendly, boutique style hotel, consisting of five luxurious private Villas, Suites and Studios. Set in 4 acres of mature tropical gardens our amazing views will literally take your breath away.' />
          </SwiperSlide>

        </SwiperComponent>
        
      </div>

      <EmailContact />
    </div>
  )
}
