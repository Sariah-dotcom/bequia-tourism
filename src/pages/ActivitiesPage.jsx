import React from 'react'
import SectionTitle from '../components/SectionTitle.jsx';
import PageHero from '../components/PageHero.jsx';
import './pages.css';

export default function ActivitiesPage() {
  return (
    <div>
      <PageHero imgSrc="/images/activities/activities-hero.jpg" pageTitle="Activities"/>
      <div className="page-section">
        <p>There is far more to Bequia than just its beaches,
           its quaint waterfront bars and shops, and its sleepy yet bustling little main town and harbour. 
        </p>
        <div className="section-jump">
          <h2>Jump to Section</h2>
          <div className="section-btns">
            <button>Festivals & Events</button>
            <button>Diving & Watersports</button>
            <button>Places of Interest</button>
            <button>Tours and Hiking</button>
            <button>Restaurants & Dining</button>
            <button>Sailing and Charters</button>

          </div>

        </div>

      </div>

      <div className="page-section activities">

        <div id="site-1" className='activity-details'>
          <SectionTitle title="Places of Interest" />
          <img src="/images/activities/hamilton.jpeg" alt="" />
          <h3>Hamilton</h3>
          <p>Along the north shore of Admiralty Bay, just outside of Port Elizabeth and on the way to Hamilton Fort, is the small fishing village of Hamilton. Colourful boats pull up on the sandy shore and small rum shops dot the roadside. </p>
            <img src="/images/activities/fort-hamilton.jpg" alt="" />
            <h3>Hamilton Fort</h3>
            <p>
                On the northern point of Admiralty Bay, beyond Hamilton village. The original structure is long gone,
                 but both French and English cannon retrieved from the waters around Bequia are now placed there; the
                 view alone is worth the visit. The defence of the entrance to Admiralty Bay was a priority for the British.
                 In 1771, the harbour was described as being "very fine, where Ships of Force may safely ride", and ideal for
                 careening (no such harbour existed in St. Vincent). 
            </p>
            <p>Due south of Hamilton Fort, on the small headland above Lower Bay, there was a second fortification, and the approach from St. Vincent was covered by additional emplacements a few hundred feet North of Hamilton Fort. Eleven cannon in all were recommended for these three batteries, at a total estimated cost of 1500 pounds - a huge sum in those days. </p>
        </div>

        <div id="site-2" className='activity-details'>
          <img src="/images/activities/mt-pleasant.jpeg" alt="" />
            <h3>Mount Pleasant</h3>
            <p>The highest accessible point in Bequia, with sweeping views first over Admiralty Bay as the road winds upwards, and then from the summit, down over the southern Grenadines. The inhabitants of Mount Pleasant are a close knit community, many descendants of the English and Scots settlers who first came to Bequia in the 18th century and 19th centuries.</p>

        </div>

        <div id="site-3" className='activity-details'>
          <img src="/images/activities/oldhegg-turtle.gif" alt="" />
            <h3>OldHegg Turtle Sanctuary</h3>
            <p>The next bay on from Industry, over a rocky headland brings you to Park Beach, now home to Bequian Orton (Brother) King's turtle sanctuary. A true labour of love, Brother King has been providing a nursery for young Hawksbill turtles since 1995.</p>
            <p>The turtles are cared for from birth to about 18 months when they are tagged and returned to the ocean. A former skin-diving fisherman, Brother King welcomes visitors enthusiastically and delights in sharing his passion and knowledge with others.</p>
        </div>

        <div id="site-4" className='activity-details'>
          <img src="/images/activities/spring-plantation.gif" alt="" />
            <h3>Spring and Industry</h3>
            <p>Travel east out of Port Elizabeth (along the only road) and you will come to the lush meadow of Spring, with tall waving coconut palms, and quietly grazing cows, horses and sheep. This land was once the Spring Plantation - one of the largest on Bequia, and the ruins of the old sugar mill are still standing.</p>
        </div>

        <div id="site-5" className='activity-details'>
          <img src="/images/activities/museum.jpg" alt="" />
          <h3>Bequia Heritage Museum</h3>
          <p>The Bequia Heritage Museum - opened officially on December 15th 2020 - represents the fulfilment of nearly thirty years of planning, fundraising and aspiration by the Trustees of the Bequia Heritage Foundation, spearheaded by the late Pat Mitchell.</p>
          <p>The spacious, airy Boat Museum (opened in November 2013) explores Bequia’s famed maritime history, including boat-and shipbuilding and whaling. It also includes a traditional Amerindian dug-out canoe, there to represent the mode of transport and migration of indigenous people who settled and lived both in Bequia and, more broadly, in the region as a whole going back thousands of years. </p>
        </div>

      </div>

      <div className="page-section activities" id='tours-and-hiking'>
        <SectionTitle title="Tours & Hiking" />
        <p>Perhaps the best way to really get to know Bequia and its hidden treasures is on foot. </p>

        <div id="tours" className='activity-details'>
          <h3>Firefly Estate Tours & Cross Country Golf</h3>
          <p>Take the Estate Tour, a leisurely guided walk (approx. 45 mins) through the grounds. You will get a brief history of the estate, sample fruits and vegetables in season, crack a coconut, press your own sugar cane juice, and learn about the various plants, herbs and flowers growing there. A wonderful ‘nature immersive experience’ for the whole family.
EC$15 per person. Tours are at 11.00 am and 2pm daily (closed Monday)
Private tours available any time EC$100, maximum 8 person</p>
<p>Enjoy a round of Cross-Country Golf on this eco friendly 9 hole par 3 course with stunning views over the Estate - EC$30 per round/per person including rental of clubs and balls.</p>

          <h3>Fantasea Tours</h3>
          <p>Fun day tours to the Tobago Cays, Mayreau, Union Island, Canouan, Mustique and the spectacular waterfalls of St. Vincent. Go whale & dolphin watching or snorkelling with turtles.</p>
          <p> Call us for private charters, island transfers, sunset cruises, island eco tours, and hotel packages.
          Enjoy our Grenadine islands; we get you there quickly and safely.</p>
          
        </div>


        <div id="hiking">
        <h3>Spring Top Look Out</h3>
        <p>Spring Top is open to all and is available for anyone to sit and enjoy the natural beauty of this special place, and its spectacular views.</p>
      </div>

      </div>

      <div className="page-section" id='restaurants'>
        <SectionTitle title="Restaurants and Bars" />
        <p>Dining out is one of the great pleasures of life, and on Bequia this is no exception. Bequia's wide range of restaurants, offering everything from rotis (a delicious traditional West Indian pasty, filled with curried meat or fish) to live lobster cooked to your preference, guarantees that there is variety enough for every mood and every occasion. </p>

      </div>

      
    </div>
  )
}
