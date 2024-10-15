import React, { useState, useEffect } from 'react'
import SectionTitle from '../components/SectionTitle.jsx';
import PageHero from '../components/PageHero.jsx';
import ActivityDetails from '../components/ActivityDetails.jsx';
import { HashLink } from 'react-router-hash-link';
import { FaChevronCircleUp } from "react-icons/fa";

export default function ActivitiesPage() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionJump = document.getElementById('section-jump');
      const sectionJumpPosition = sectionJump?.getBoundingClientRect().top;

      if (sectionJumpPosition && sectionJumpPosition < window.innerHeight) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <HashLink to='#section-jump'>
        <FaChevronCircleUp id='top-btn' 
          className={showTopBtn ? 'visible' : ''}
        
        />
      </HashLink>
      
      <PageHero imgSrc="/images/activities/activities-hero.jpg" pageTitle="Activities"/>
      
      <div className="page-section">
        <p className='opening-paragraph'>There is far more to Bequia than just its beaches,
          its quaint waterfront bars and shops, and its sleepy yet bustling little main town and harbour. 
        </p>

        <div className="section-jump" id='section-jump'>
          <h2 style={{ color:'#0B346A' }}>Jump to Section</h2>
          <div className="section-btns">
            <HashLink to='#sites'>
              <button>Places of Interest</button>
            </HashLink>

            <HashLink to='#restaurants'>
              <button>Restaurants & Dining</button>
            </HashLink> 

            <HashLink to='#events'>
              <button>Festivals & Events</button>
            </HashLink>

            <button>Tours & Hiking</button>


            <HashLink to='#diving'>
              <button>Diving & Watersports</button>
            </HashLink>  

                       
            <button>Sailing and Charters</button>
          </div>

        </div>
      </div>

      <div className="page-section activities">

        <div id="sites" className='activity-section'>
          <SectionTitle title="Places of Interest" />


          <ActivityDetails 
            activityImg='/images/activities/sites/museum.jpg'
            activityName="Bequia Heritage Museum"
            activityLocation="Spring"
            activityDescription="The Bequia Heritage Museum - opened officially on December 15th 2020 - represents the fulfilment of nearly thirty years of planning, fundraising and aspiration by the Trustees of the Bequia Heritage Foundation, spearheaded by the late Pat Mitchell."
          />

          <ActivityDetails 
            activityImg='/images/activities/sites/fort-hamilton.jpg'
            activityName="Fort Hamilton"
            activityLocation="Spring"
            activityDescription="The Bequia Heritage Museum - opened officially on December 15th 2020 - represents the fulfilment of nearly thirty years of planning, fundraising and aspiration by the Trustees of the Bequia Heritage Foundation, spearheaded by the late Pat Mitchell."
          />

          <ActivityDetails 
            activityImg='/images/activities/sites/old-hegg.jpg'
            activityName="Old Hegg Turtle Sanctuary"
            activityLocation="Spring"
            activityDescription="The Bequia Heritage Museum - opened officially on December 15th 2020 - represents the fulfilment of nearly thirty years of planning, fundraising and aspiration by the Trustees of the Bequia Heritage Foundation, spearheaded by the late Pat Mitchell."
          />

        </div>
      </div>

      <div className="page-section activities">

        <div id="events" className='activity-section'>
        <SectionTitle title="Festivals & Events" />

          <ActivityDetails
            activityImg='/images/activities/events/bequia-musicfest.jpg'
            activityName="Bequia Mount Gay Music Fest"
            activityDescription="The Bequia Tourism Association, in conjunction with the SVG Tourism Authority, is the organising body responsible for putting on what has become one of the hottest and coolest festivals in the region, drawing rave reviews."
          />

          <ActivityDetails
            activityImg='/images/activities/events/regatta.jpg'
            activityName="Bequia Easter Regatta"
            activityDescription="For as long as any one can remember, boats have always raced in Bequia. Formerly at Whitsun, 
            now for the last 35-plus years held at Easter, Bequia's Regatta is rightly famous for its unique blend of local double-ender
            racing, yacht racing, shoreside activities and Bequia hospitality.A fleet of twenty or more traditional local boats from   Bequia and her neighbouring islands, some no more than 12 feet long, others a majestic (by comparison)
            28 feet in length and capable of extraordinary speed
            and agility, compete out on the sparkling waters
            around Bequia."
          />

          <ActivityDetails
            activityImg='/images/activities/events/carnival.gif'
            activityName="Bequia Carnival"
            activityDescription="Bequia Carnival takes places at the end of June, and is a delightfully informal and spontaneous affair.
            With St. Vincent's 'Vincy Mas' now the nation's premier tourism event, Bequia's own Carnival looks set to move forward as well and become a true small island carnival and a permanent fixture in the island's cultural calendar."
          />

          <ActivityDetails
            activityImg='/images/activities/events/bequia-lightingup.jpg'
            activityName="Christmas and New Years"
            activityDescription="The only thing that is missing from Christmas on Bequia is snow! The Christmas spirit is the same on the island as anywhere in the world - good will and season's greetings abound, families and friends get together, and shops are full of unusual gifts and delicious treats. Midnight services on Christmas Eve at both the Anglican church in Port Elizabeth and the tiny Catholic Church in Hamilton welcome all worshippers.
            The centre of Port Elizabeth and often whole villages take pride in their annual 'lighting up' at this time of year, all adding to the festive spirit."
          />
        </div>

      </div>

      <div className="page-section activities">

        <div id="tours-hiking" className='activity-section'>
          <SectionTitle title="Tours & Hiking" />
          
          <ActivityDetails 
            activityImg='/images/activities/firefly.jpeg'
            activityName="Firefly Estate Tours"
            activityLocation="Spring"
            activityDescription="The Bequia Heritage Museum - opened officially on December 15th 2020 - represents the fulfilment of nearly thirty years of planning, fundraising and aspiration by the Trustees of the Bequia Heritage Foundation, spearheaded by the late Pat Mitchell."
          />

          <ActivityDetails 
            activityImg='/images/activities/firefly.jpeg'
            activityName="Firefly Estate Tours"
            activityLocation="Spring"
            activityDescription="The Bequia Heritage Museum - opened officially on December 15th 2020 - represents the fulfilment of nearly thirty years of planning, fundraising and aspiration by the Trustees of the Bequia Heritage Foundation, spearheaded by the late Pat Mitchell."
          />

        </div>
      </div>

      <div className="page-section activities">

        <div id="restaurants" className='activity-section'>
          <SectionTitle title="Restaurants" />
          
          <ActivityDetails 
            activityImg='/images/activities/restaurants/bagatelle.jpeg'
            activityName="Bagatelle Restaurant & Beach Bar"
            activityLocation="Friendship"
            activityDescription="Right on the beach in Friendship Bay, Bagatelle at Bequia Beach Hotel offers an international menu with classic Caribbean influences and dishes, using locally sourced produce wherever possible. An excellent selection of wines is also available."
          />

          <ActivityDetails 
            activityImg='/images/activities/restaurants/frangipani-restaurant.jpg'
            activityName="Frangipani"
            activityLocation="Admiralty Bay"
            activityDescription="The Bequia Heritage Museum - opened officially on December 15th 2020 - represents the fulfilment of nearly thirty years of planning, fundraising and aspiration by the Trustees of the Bequia Heritage Foundation, spearheaded by the late Pat Mitchell."
          />

          <ActivityDetails 
            activityImg='/images/activities/restaurants/jacksbar.gif'
            activityName="Jack's Beach Bar"
            activityLocation="Princess Margaret Beach"
            activityDescription=" Enviably located on what many call one of the best beaches in the Caribbean, Jack’s Beach Bar has recently been completely refurbished and given a fresh lick of paint, but still retains the iconic bohemian beach-chic charm that has sailors, beachgoers and Bequians spellbound."
          />

          <ActivityDetails 
            activityImg='/images/activities/restaurants/macs.gif'
            activityName="Mac's Pizza & Kitchen"
            activityLocation="Belmont"
            activityDescription="The Bequia Heritage Museum - opened officially on December 15th 2020 - represents the fulfilment of nearly thirty years of planning, fundraising and aspiration by the Trustees of the Bequia Heritage Foundation, spearheaded by the late Pat Mitchell."
          />

        </div>
      </div>

      <div className="page-section activities">

        <div id="diving" className='activity-section'>
          <SectionTitle title="Diving & Watersports" />
          <p>St. Vincent & the Grenadines is a true diver's paradise, and diving in Bequia is rated by many as amongst the very best in the Caribbean.</p>
          
          <ActivityDetails 
            activityImg='/images/activities/watersports/bequia-dive.jpeg'
            activityName="Bequia Dive Adventures"
            activityLocation="Belmont"
            activityDescription="Full service PADI facility, with 11 PADI specialities, offering small group dives with the emphasis on personal service. Free PADI Discover Scuba introductory course, and free pick-ups from yachts. Located on the Belmont Walkway, close to guest houses, bars and cafes."
          />

          <ActivityDetails 
            activityImg='/images/activities/watersports/diving.jpeg'
            activityName="Snorkelling"
            activityLocation="Spring"
            activityDescription="Snorkelling trips are offered by all Bequia's Dive Shops, with equipment available for hire or purchase. There is a glorious underwater world just waiting to be discovered."
          />

        </div>
      </div>

    </div>
  )
}
