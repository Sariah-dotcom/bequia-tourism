import React from 'react'
import EmailContact from '../components/EmailContact.jsx'
import AccommodationCarousel from '../components/AccommodationCarousel.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import PageHero from '../components/PageHero.jsx'

export default function Accommodation() {
  return (
    <div>

      <PageHero imgSrc="/images/villa.jpg" pageTitle='Accommodation'/>

      <div id="page-section">
        <SectionTitle title='Apartments' />
        <AccommodationCarousel />
      </div>

      <div id="page-section">
        <SectionTitle title='Guesthouses' />
        <AccommodationCarousel />
      </div>

      <div id="page-section">
        <SectionTitle title='Villas' />
        <AccommodationCarousel />
      </div>

      <div id="page-section">
        <SectionTitle title='Hotels' />
        <AccommodationCarousel />
      </div>

      <EmailContact />
    </div>
  )
}
