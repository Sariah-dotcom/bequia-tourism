import React, { useState } from "react";
import AccommodationCard from "../components/AccommodationCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import PageHero from "../components/PageHero.jsx";
import SwiperComponent from "../components/SwiperComponent.jsx";
import { SwiperSlide } from "swiper/react";
import AccommodationInfoCard from "../components/AccommodationInfoCard.jsx";
import "../carouselStyles.css";


export default function Accommodation() {
  const [selectedAccommodation, setSelectedAccommodation] = useState(null); // State to track selected accommodation

  const handleLearnMore = (section) => {
    setSelectedAccommodation(section); // Update the state to show the corresponding accommodation info
  };

  return (
    <div>
      <PageHero imgSrc="/images/villa.jpg" pageTitle="Accommodations" />

      <div className="page-section">
        <p className="opening-paragraph">
          Bequia offers a wide variety of accommodation to suit all tastes and
          budgets. Luxury villas, luxury beachside hotels, small family-run inns
          and guest houses, self-catering apartments - the big little island has
          them all and in every location.
        </p>
      </div>

      <div className="page-section">
        <SectionTitle title="Apartments" />
        <SwiperComponent slidesPerView={1}>
          <SwiperSlide>
            <AccommodationCard
              location="Spring"
              section="aqua"
              accommodationImg="/images/accommodations/apartments/aqua-on-bequia.jpg"
              accommodationTitle="AQUA on Bequia"
              accommodationDescription="Beautifully appointed one bedroom apartments in a colorful tropical garden setting, perched on the Belmont hillside overlooking Admiralty Bay."
              onLearnMore={handleLearnMore}
            />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard
              onLearnMore={handleLearnMore}
              location="Spring"
              section="white-cactus"
              accommodationImg="/images/accommodations/apartments/bequia-white-cactus.jpg"
              accommodationTitle="Bequia White Cactus"
              accommodationDescription=" Newly renovated duplex with an ocean view. Walking distance from Adams Bay and The Liming; short drive to Friendship and Lower Bay."
            />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard
              onLearnMore={handleLearnMore}
              location="Lower Bay"
              section="lookout"
              accommodationImg="/images/accommodations/apartments/the-lookout.jpg"
              accommodationTitle="Lookout Apartments"
              accommodationDescription="Two newly refurbished, 2-bedroom, 2 ensuite bath boutique apartments with stunning panoramic views over Lower Bay."
            />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard
              onLearnMore={handleLearnMore}
              location="Belmont"
              section="pinkhouse"
              accommodationImg="/images/accommodations/apartments/pink-house.jpg"
              accommodationTitle="Pink House Apartment"
              accommodationDescription="Charming house, reasonably priced and conveniently situated within walking distance of the harbour and Princess Margaret beach."
            />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard
              onLearnMore={handleLearnMore}
              location="Spring"
              section="seashells"
              accommodationImg="/images/accommodations/apartments/sea-shells.jpg"
              accommodationTitle="Sea Shells Holiday Apartments"
              accommodationDescription="One and two-bedroom self-catering apartments designed for Caribbean outdoor living, offering house keeping, telephone and televisions."
            />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard
              onLearnMore={handleLearnMore}
              location="Friendship Bay"
              section="sugarapple"
              accommodationImg="/images/accommodations/apartments/appleinn.gif"
              accommodationTitle="Sugarapple Inn"
              accommodationDescription="Eight spacious, breezy and stylish studio apartments with full kitchen, and a view which captures the tranquillity of the surroundings with the Atlantic to the east."
            />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard
              onLearnMore={handleLearnMore}
              location="Admiralty Bay"
              section="pool-house"
              accommodationImg="/images/accommodations/apartments/pool-house.jpg"
              accommodationTitle="The Pool House"
              accommodationDescription=" The Pool House is a 2 bedroom unit which is part of Tropical Hideaways eco friendly and luxurious private Villas, Suites and Studios."
            />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard
              onLearnMore={handleLearnMore}
              location="Admiralty Bay"
              section="penthouse-suite"
              accommodationImg="/images/accommodations/apartments/penthouse-suite.jpg"
              accommodationTitle="The Penthouse Suite"
              accommodationDescription=" The Penthouse Suite is the ultimate accommodation & is part of Tropical Hideaways eco friendly & luxurious private Villas, Suites and Studios."
            />
          </SwiperSlide>
        </SwiperComponent>

        <div id="apartments">
          {selectedAccommodation === "aqua" && (
            <AccommodationInfoCard
              infoImg="/images/accommodations/apartments/aqua-on-bequia (1).jpg"
              accInfoTitle="AQUA on Bequia"
              description1="Beautifully appointed one bedroom apartments in a colorful tropical garden setting, perched on the Belmont hillside overlooking Admiralty Bay."
              description2="Complimentary guest access to The GYM at AQUA on Bequia, too!"
              siteLink="http://www.aquaonbequia.com/"
              telNumber="(784) 458-3761 / Cell: (784) 431-6332"
            />
          )}

          {selectedAccommodation === "white-cactus" && (
            <AccommodationInfoCard
              infoImg="/images/accommodations/apartments/bequia-white-cactus.jpg"
              accInfoTitle="Bequia White Cactus"
              description1="Newly renovated duplex with an ocean view. Walking distance from Adams Bay and The Liming; short drive to Friendship and Lower Bay."
              description2="The duplex has two separate-entrance apartments: a three-bedroom upper floor and a two-bedroom ground floor (with a mini-gym). Each bedroom features air-conditioning and king/queen-sized beds."
              description3="Both apartments include free WIFI and off-street parking, equipped kitchens, patios, additional living spaces, and a privacy fence."
              siteLink="https://www.bequiawhitecactus.com"
              telNumber="(784) 492-7377 (Whatsapp)"
            />
          )}

          {selectedAccommodation === "lookout" && (
            <AccommodationInfoCard
              infoImg="/images/accommodations/apartments/the-lookout.jpg"
              accInfoTitle="Lookout Apartments"
              location="Lower Bay"
              description1="Two newly refurbished, 2-bedroom, 2 ensuite bath boutique apartments with stunning panoramic views over Lower Bay. Each with fully equipped kitchen, aircon, Wifi and fabulous sun deck."
              description2="Choice of two four-poster beds (“Ocean Deck”) or four-poster + twin beds/superking (“Hummingbird Deck”). Just 5 mins walk to Princess Margaret & Lower Bay beaches."
              description3=" “Lookout” is also available to rent as a single 4-bedroom Villa – sleeps eight in comfort. Ideal for families or groups.  Check our website for full details and photo gallery."
              siteLink="https://www.thelookoutbequia.com"
              telNumber="07815 627 955 (UK) / (784) 527 2377 (Bequia) "
            />
          )}

          {selectedAccommodation === "pinkhouse" && (
            <AccommodationInfoCard
              infoImg="/images/accommodations/apartments/pink-house.jpg"
              accInfoTitle="Pinkhouse Apartments"
              description1="Charming house, reasonably priced and conveniently situated within walking distance of the harbour and Princess Margaret beach. Consisting of two separate apartments (top and ground) the house can be rented as a single unit or as 2 separate apartments. "
              description2="Each apartment is fully equipped with wifi, cable TV, use of a local cell phone, kitchen, use of washing machine, ceiling fans, mosquito nets over the beds. In addition a weekly maid service is provided."
              siteLink="https://www.thepinkhousebequia.com"
              telNumber="N/A "
            />
          )}

          {selectedAccommodation === "seashells" && (
            <AccommodationInfoCard
              infoImg="/images/accommodations/apartments/sea-shells.jpg"
              accInfoTitle="Sea Shells Holiday Apartments"
              description1="Over looking the picturesque Port Elizabeth with a stroll to beaches and restaurants.One- and two-bedroom self-catering apartments designed for Caribbean outdoor living, offering house keeping, telephone and televisions. "
              description2="You are welcome to make this your holiday home while you enjoy the hidden secrets of St. Vincent and the Grenadines. Enjoy your vacation, Arlene & Michael."
              siteLink="http://www.seashellsbequia.com"
              telNumber="(784) 458-3656"
            />
          )}

          {selectedAccommodation === "sugarapple" && (
            <AccommodationInfoCard
              infoImg="/images/accommodations/apartments/appleinn.gif"
              accInfoTitle="Sugarapple Inn"
              location="Friendship Bay"
              description1="Eight spacious, breezy and stylish studio apartments with full kitchen, and a view which captures the tranquillity of the surroundings with the Atlantic to the east, and rolling hills to the west. Interconnecting apartments are also available for families and groups."
              description2="The Sugarapple Inn is a serene vacation hideaway just steps away from the glorious white sand beach of Friendship Bay."
              siteLink="https://www.sugarappleinn.com"
              telNumber="(784) 457-3148"
            />
          )}

          {selectedAccommodation === "pool-house" && (
            <AccommodationInfoCard
              infoImg="/images/accommodations/apartments/pool-house.jpg"
              accInfoTitle="The Pool House"
              location="Admiralty Bay"
              description1=" The Pool House is a 2 bedroom unit which is part of Tropical Hideaways eco friendly and luxurious private Villas, Suites and Studios. Set in 4 acres of mature tropical gardens our amazing views will literally take your breath away."
              description2="Spacious, luxurious furnished, well equipped kitchens * Dine Alfresco Style on your own private verandas * Screened rooms (no bugs) breeze-fans-air conditioning* High speed internet, 4k large flatscreen TV entertainment * Licensed shop - fine wines, provisions etc at local prices"
              siteLink="https://www.tropicalhideawaybequia.com"
              telNumber="(784) 458-3676 / (784) 532-1690 "
            />
          )}

          {selectedAccommodation === "penthouse-suite" && (
            <AccommodationInfoCard
              infoImg="/images/accommodations/apartments/penthouse-suite.jpg"
              accInfoTitle="The Penthouse Suite"
              location="Admiralty Bay"
              description1=" The Penthouse Suite is the ultimate accommodation & is part of Tropical Hideaways eco friendly & luxurious private Villas, Suites and Studios. Set in 4 acres of mature tropical gardens our amazing views will literally take your breath away."
              description2="Spacious, luxurious furnished, well equipped kitchens * Dine Alfresco Style on your own private verandas * Screened rooms (no bugs) breeze-fans-air conditioning* High speed internet, 4k large flatscreen TV entertainment * Licensed shop - fine wines, provisions etc at local prices
             *   Infinity Pool - Rated in the Caribbeans top 10 pools  * Private nature trail towards beach/bars - 15 min walk*Over 400 5* reviews & TripAdvisor Top 1% Hotels Award"
              siteLink="https://www.tropicalhideawaybequia.com"
              telNumber="(784) 458-3676 / (784) 532-1690 "
            />
          )}
        </div>
      </div>

      <div className="page-section">
        <SectionTitle title="Villas & Guesthouses" />

        <SwiperComponent slidesPerView={1}>
          <SwiperSlide>
            <AccommodationCard
              location="Spring"
              accommodationImg="/images/accommodations/villas/tamarind.jpg"
              accommodationTitle="A Tamarind Villa"
              accommodationDescription="A brand new modern Caribbean villa built and furnished to the highest standards. Completed Feb 2010. Located on picturesque Spring Bay."
            />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard
              location="Spring Bay"
              accommodationImg="/images/accommodations/villas/bay-tree-villa.gif"
              accommodationTitle="Bay Tree Villa"
              accommodationDescription="Fabulous view, cool breezes, large private pool, BBQ patio, gourmet kitchen, Two master suites, one is a super king 4 poster bed the other has the option of either a super king or two twin beds at Bay Tree Villa."
            />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard
              location="Spring"
              accommodationImg="/images/accommodations/villas/bellwood-falls.jpg"
              accommodationTitle="Bellwood Falls Villa"
              accommodationDescription="Quiet and secluded in a West facing elevated position above Admiralty Bay and beaches.
              Good breezes and a stunning panoramic view make this villa a popular and affordable stay."
            />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard
              location="Princess Margaret Beach"
              accommodationImg="/images/accommodations/villas/flamingo.jpg"
              accommodationTitle="Flamingo Villa"
              accommodationDescription="Flamingo Villa offers you complete privacy and breathtaking views of the Caribbean Sea. It is situated on one of the best beaches in Bequia, Princess Margaret Beach."
            />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard
              location="Admiralty Bay"
              accommodationImg="/images/accommodations/villas/hibiscus-palm-cottage.jpg"
              accommodationTitle="Hibiscus and Palm Cottage"
              accommodationDescription=" Hibiscus and Palm Cottage are part of Tropical Hideaway's eco friendly and luxurious private Villas, Suites and Studios. "
            />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard
              location="Lower Bay"
              accommodationImg="/images/accommodations/guesthouses/keegans.gif"
              accommodationTitle="Keegan's Beachside "
              accommodationDescription="Renowned for its idyllic location – just yards from the pristine waters of the Caribbean – and its vibrant yet laid back atmosphere, Keegan’s Beachside is a very special place loved by visitors old and new."
            />
          </SwiperSlide>

        </SwiperComponent>
        
      </div>

      <div className="page-section">
        <SectionTitle title="Hotels" />
        <SwiperComponent slidesPerView={1}>
          <SwiperSlide>
            <AccommodationCard
              location="Friendship"
              accommodationImg="/images/accommodations/hotels/bbh.gif"
              accommodationTitle="Bequia Beach Hotel"
              accommodationDescription='For that little something extra in your holiday - we offer it all! The newly built "contemporary colonial" Bequia Beach Hotel, located on one of the islands best beaches in Friendship Bay.'
            />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard
              location="Belmont Walkway"
              accommodationImg="/images/accommodations/hotels/plantation-hotel.jpg"
              accommodationTitle="Bequia Plantation Hotel"
              accommodationDescription="The wonderful beachfront Bequia Plantation Hotel embodies luxury and quality at its finest in one of the island top premier locations, with beautifully decorated Rooms and Cottages available at competitive rates."
            />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard
              location="Spring Estate"
              accommodationImg="/images/accommodations/hotels/springhouse-bequia.gif"
              accommodationTitle="Bequia Spring Hotel"
              accommodationDescription="Spring House is an exclusive architect-designed luxury villa with 6+ spacious suites in 2 acres of private grounds. Furnished to the highest standards, the fully-staffed villa caters for 12+ guests, with modern technologies discreetly included."
            />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard
              location="Admiralty Bay, Belmont"
              accommodationImg="/images/accommodations/hotels/frangipani-hotel.jpg"
              accommodationTitle="Frangipani Hotel"
              accommodationDescription="Traditional West Indian inn converted from a family home over thirty years ago. Choose from simple, old-style rooms in the original building right on the waterfront, or separate elegant stone-built garden units, with balconies an ensuite bathrooms."
            />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard
              location="Admiralty Bay, Belmont"
              accommodationImg="/images/accommodations/hotels/ginger-hotel.gif"
              accommodationTitle="Gingerbread Hotel"
              accommodationDescription=" Luxurious self-contained suites all with spacious, covered verandah overlooking beautiful Admiralty Bay just 50 ft. (15 metres) in front."
            />
          </SwiperSlide>

          <SwiperSlide>
            <AccommodationCard
              location="overlooking Admiralty Bay"
              accommodationImg="/images/accommodations/hotels/tropical-hideaway.jpg"
              accommodationTitle="Tropical Hideaway Hotel"
              accommodationDescription=" Tropical Hideaway is a small, eco friendly, boutique style hotel, consisting of five luxurious private Villas, Suites and Studios. Set in 4 acres of mature tropical gardens our amazing views will literally take your breath away."
            />
          </SwiperSlide>
        </SwiperComponent>
      </div>

      {/* <EmailContact /> */}
    </div>
  );
}
