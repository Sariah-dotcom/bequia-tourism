import React from 'react'
import AccommodationInfoCard from '../components/AccommodationInfoCard'
import PageHero from '../components/PageHero'
import EmailContact from '../components/EmailContact'

export default function AccommodationsInfo() {
  return (
    <div>
      <div className="page-section">
        
        <div id="apartments">
           
            <div id="aqua">
                <AccommodationInfoCard
                    infoImg='/images/accommodations/apartments/aqua-on-bequia (1).jpg'
                    accInfoTitle='AQUA on Bequia'
                    description1='Beautifully appointed one bedroom apartments in a colorful tropical garden setting, perched on the Belmont hillside overlooking Admiralty Bay. Walk to the harbor, Princess Margaret Beach and Lower Bay.'
                    description2='Complimentary guest access to The GYM at AQUA on Bequia, too!'
                    siteLink='http://www.aquaonbequia.com/'
                    telNumber='(784) 458-3761 / Cell: (784) 431-6332'
                />
            </div>

            <div id="white-cactus">
                <AccommodationInfoCard
                    infoImg='/images/accommodations/apartments/bequia-white-cactus.jpg'
                    accInfoTitle='Bequia White Cactus'
                    description1='Newly renovated duplex with an ocean view. Walking distance from Adams Bay and The Liming; short drive to Friendship and Lower Bay.'
                    description2='The duplex has two separate-entrance apartments: a three-bedroom upper floor and a two-bedroom ground floor (with a mini-gym). Each bedroom features air-conditioning and king/queen-sized beds.'
                    description3='Both apartments include free WIFI and off-street parking, equipped kitchens, patios, additional living spaces, and a privacy fence.'
                    siteLink='https://www.bequiawhitecactus.com'
                    telNumber='(784) 492-7377 (Whatsapp)'
                />
            </div>

            <div id="lookout">
                <AccommodationInfoCard
                    infoImg='/images/accommodations/apartments/the-lookout.jpg'
                    accInfoTitle='Lookout Apartments'
                    location='Lower Bay'
                    description1='Two newly refurbished, 2-bedroom, 2 ensuite bath boutique apartments with stunning panoramic views over Lower Bay. Each with fully equipped kitchen, aircon, Wifi and fabulous sun deck.'
                    description2='Choice of two four-poster beds (“Ocean Deck”) or four-poster + twin beds/superking (“Hummingbird Deck”). Just 5 mins walk to Princess Margaret & Lower Bay beaches.'
                    description3=' “Lookout” is also available to rent as a single 4-bedroom Villa – sleeps eight in comfort. Ideal for families or groups.  Check our website for full details and photo gallery.'
                    siteLink='https://www.thelookoutbequia.com'
                    telNumber='07815 627 955 (UK) / (784) 527 2377 (Bequia) '

                />
            </div>

            <div id="pinkhouse">
                <AccommodationInfoCard
                    infoImg='/images/accommodations/apartments/pink-house.jpg'
                    accInfoTitle='Pinkhouse Apartments'
                    description1='Charming house, reasonably priced and conveniently situated within walking distance of the harbour and Princess Margaret beach. Consisting of two separate apartments (top and ground) the house can be rented as a single unit or as 2 separate apartments. '
                    description2='Each apartment is fully equipped with wifi, cable TV, use of a local cell phone, kitchen, use of washing machine, ceiling fans, mosquito nets over the beds. In addition a weekly maid service is provided.'
                    siteLink='https://www.thepinkhousebequia.com'
                    telNumber='N/A '
                />
                
            </div>

            <div id="seashells">
                <AccommodationInfoCard
                    infoImg='/images/accommodations/apartments/sea-shells.jpg'
                    accInfoTitle='Sea Shells Holiday Apartments'
                    description1='Over looking the picturesque Port Elizabeth with a stroll to beaches and restaurants.One- and two-bedroom self-catering apartments designed for Caribbean outdoor living, offering house keeping, telephone and televisions. '
                    description2='You are welcome to make this your holiday home while you enjoy the hidden secrets of St. Vincent and the Grenadines. Enjoy your vacation, Arlene & Michael.'
                    siteLink='http://www.seashellsbequia.com'
                    telNumber='(784) 458-3656'
                />
            </div>

            <div id="sugarapple">
                <AccommodationInfoCard
                    infoImg='/images/accommodations/apartments/appleinn.gif'
                    accInfoTitle='Sugarapple Inn'
                    location='Friendship Bay'
                    description1='Eight spacious, breezy and stylish studio apartments with full kitchen, and a view which captures the tranquillity of the surroundings with the Atlantic to the east, and rolling hills to the west. Interconnecting apartments are also available for families and groups.'
                    description2='The Sugarapple Inn is a serene vacation hideaway just steps away from the glorious white sand beach of Friendship Bay.'
                    siteLink='https://www.sugarappleinn.com'
                    telNumber='(784) 457-3148'
                />
            </div>

            <div id="pool-house">
                <AccommodationInfoCard
                    infoImg='/images/accommodations/apartments/pool-house.jpg'
                    accInfoTitle='The Pool House'
                    location='Admiralty Bay'
                    description1=' The Pool House is a 2 bedroom unit which is part of Tropical Hideaways eco friendly and luxurious private Villas, Suites and Studios. Set in 4 acres of mature tropical gardens our amazing views will literally take your breath away.'
                    description2='Spacious, luxurious furnished, well equipped kitchens * Dine Alfresco Style on your own private verandas * Screened rooms (no bugs) breeze-fans-air conditioning* High speed internet, 4k large flatscreen TV entertainment * Licensed shop - fine wines, provisions etc at local prices'
                    siteLink='https://www.tropicalhideawaybequia.com'
                    telNumber='(784) 458-3676 / (784) 532-1690 '
                />
            </div>

            <div id="penthouse-suite">
                <AccommodationInfoCard
                    infoImg='/images/accommodations/apartments/penthouse-suite.jpg'
                    accInfoTitle='The Penthouse Suite'
                    location='Admiralty Bay'
                    description1=' The Penthouse Suite is the ultimate accommodation & is part of Tropical Hideaways eco friendly & luxurious private Villas, Suites and Studios. Set in 4 acres of mature tropical gardens our amazing views will literally take your breath away.'
                    description2='Spacious, luxurious furnished, well equipped kitchens * Dine Alfresco Style on your own private verandas * Screened rooms (no bugs) breeze-fans-air conditioning* High speed internet, 4k large flatscreen TV entertainment * Licensed shop - fine wines, provisions etc at local prices
                    *   Infinity Pool - Rated in the Caribbeans top 10 pools  * Private nature trail towards beach/bars - 15 min walk*Over 400 5* reviews & TripAdvisor Top 1% Hotels Award'
                    siteLink='https://www.tropicalhideawaybequia.com'
                    telNumber='(784) 458-3676 / (784) 532-1690 '
                />
            </div>
        </div>
      </div>

      <div className="page-section">
        <h2>Guesthouses</h2>
      </div>

      <div className="page-section">
        <h2>Hotels</h2>

        <div id="bequia-beach">
            <AccommodationInfoCard
                accInfoTitle='Bequia Beach Hotel'
                location='Friendship'
                description1='For that little something extra in your holiday - we offer it all! The newly built "contemporary colonial" Bequia Beach Hotel, located on one of the islands best beaches in Friendship Bay. '
                description2=' Surrounded by tropical gardens the hotel offers a relaxed, luxurious, warm and friendly atmosphere. All rooms are tastefully furnished in bespoke colonial style and are air-conditioned with balcony. Facilities include non-motorised watersports, two pools, gym/spa and yoga'
                description3='Located right on the beach, our Bagatelle Restaurant & Beach Bar offers high quality food inspired by European and Caribbean flavours.'
                siteLink='http://www.bequiabeachhotel.com/'
                telNumber='(784) 458-1600 '
            />
        </div>

        <div id="bequia-plantation">
            <AccommodationInfoCard
                accInfoTitle='Bequia Plantation Hotel'
                location='Belmont Walkway'
                description1=' The wonderful beachfront Bequia Plantation Hotel embodies luxury and quality at its finest in one of the island top premier locations, with beautifully decorated Rooms and Cottages available at competitive rates. '
                description2='The relaxing beachside restaurant offers a delectable and diverse menu featuring distinct Caribbean flavors including signature dishes and cocktails.'
                description3='One minute’s walk from the nearest restaurants and the glittering Admiralty Bay and quaint harbor of Port Elizabeth.'
                siteLink='http://www.bequiabeachhotel.com/'
                telNumber=' (784) 534-9444 /  (784) 534-9333 '
            />
        </div>

        <div id="spring-hotel">
            <AccommodationInfoCard
                accInfoTitle='Bequia Spring Hotel'
                location='Spring Estate'
                description1='Spring House is an exclusive architect-designed luxury villa with 6+ spacious suites in 2 acres of private grounds. Furnished to the highest standards, the fully-staffed villa caters for 12+ guests, with modern technologies discreetly included.'
                description2='Tariff includes onward flights and meal plan. Disabled access, stunning views, 40 ft. private pool, tennis courts, open bar.'
                siteLink='http://www.springhousebequia.com/'
                telNumber=' (784) 483-0381 /  (617) 275-4820 (USA)'
            />
        </div>

        <div id="frangipani">
            <AccommodationInfoCard
                accInfoTitle='Frangipani Hotel'
                location='Admiralty Bay, Belmont'
                description1='Traditional West Indian inn converted from a family home over thirty years ago. Choose from simple, old-style rooms in the original building right on the waterfront, or separate elegant stone-built garden units, with balconies an ensuite bathrooms.'
                description2='Our waterfront restaurant is open daily to residents and non-residents for delicious breakfasts, light or full lunches, and candlelit dinners, all home cooked from local ingredients.'
                siteLink='http://www.frangipanibequia.com/'
                telNumber=' (784) 458-3255'
            />
        </div>

        <div id="gingerbread">
            <AccommodationInfoCard
                accInfoTitle='Gingerbread Hotel'
                location='Admiralty Bay, Belmont'
                description1='Luxurious self-contained suites all with spacious, covered verandah overlooking beautiful Admiralty Bay just 50 ft. (15 metres) in front.'
                description2='Each has large bathroom, complete kitchen, fans, wall safe, and ironing facility. Right next door is the bayside cafe and elegant upstairs dining at Gingerbread Restaurant, as well as an internet office and scuba- dive shop.'
                siteLink='http://www.gingerbreadhotel.com/'
                telNumber=' (784) 458-3800'
            />
        </div>

        <div id="penthouse-suite">
            <AccommodationInfoCard
            accInfoTitle='Tropical Hideaway Hotel'
            location='overlooking Admiralty Bay, Bequia'
            description1='Tropical Hideaway is a small, eco friendly, boutique style hotel, consisting of five luxurious private Villas, Suites and Studios. Set in 4 acres of mature tropical gardens our amazing views will literally take your breath away.'
            description2='Spacious, luxurious furnished, well equipped kitchens * Dine Alfresco Style on your own private verandas * Screened rooms (no bugs) breeze-fans-air conditioning* High speed internet, 4k large flatscreen TV entertainment * Licensed shop - fine wines, provisions etc at local prices
            *   Infinity Pool - Rated in the Caribbeans top 10 pools  * Private nature trail towards beach/bars - 15 min walk*Over 400 5* reviews & TripAdvisor Top 1% Hotels Award'
            siteLink='https://www.tropicalhideawaybequia.com'
            telNumber='(784) 458-3676 / (784) 532-1690 '
            />
        </div>

      </div>
      {/* <EmailContact /> */}
    </div>
  )
}