import React from 'react'
import SectionTitle from '../components/SectionTitle.jsx';
import PageHero from '../components/PageHero.jsx';

import ActivityDetails from '../components/ActivityDetails.jsx';
import { HashLink } from 'react-router-hash-link';

export default function ActivitiesPage() {
  return (
    <div>
      <PageHero imgSrc="/images/activities/activities-hero.jpg" pageTitle="Activities"/>
      <div className="page-section">

        <p>There is far more to Bequia than just its beaches,
           its quaint waterfront bars and shops, and its sleepy yet bustling little main town and harbour. 
        </p>

        <div className="section-jump">
          <h2 style={{ color:'#0B346A' }}>Jump to Section</h2>
          <div className="section-btns">
            <HashLink to='#restaurants'>
              <button>Restaurants & Dining</button>
            </HashLink>           
            <button>Festivals & Events</button>
            <button>Diving & Watersports</button>
            <button>Places of Interest</button>
            <button>Tours and Hiking</button>
            <button>Sailing and Charters</button>
          </div>

        </div>

      </div>

      <div className="page-section activities">
        <SectionTitle title="Places of Interest" />

        <div id="sites" className='activity-section'>

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

      

      
    </div>
  )
}
