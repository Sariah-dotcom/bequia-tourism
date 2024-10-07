import React from 'react'
import SectionTitle from '../components/SectionTitle';
import Accordian from '../components/Accordian.jsx';

export default function About() {
  return (
    <div>
      <div id="page-hero">
        <img src="/images/bay.jpg" alt="bequia arial shot" />

        <div className="page-hero-text">
            <h1>About <br /> Bequia</h1>
        </div>
      </div>

      <div id="page-section">
        <SectionTitle title='An Island Story'/>
        
        <p>
            The tiny island of Bequia has a unique, magical charm which is hard to find
            anywhere else in the Caribbean. With fewer than six thousand inhabitants, it 
            feels like home from the moment you arrive; friendliness is the watchword, 
            and the pace is relaxed and easy-going. Don't be surprised if you are greeted
            with a warm hello as you walk along the street - a centuries-old dependence on  
            inter-island shipping and trading has meant that Bequians have been eagerly welcoming
            visitors to their shores for generations. 

            <br /><br />
            Choose a holiday of total beach relaxation or exhilarating sailing and diving in some of the most beautiful waters in the world. Get to know the island on foot, or hire a car and discover so much more than just the golden beaches; take day or overnight trips to neighbouring isles or simply fill up another perfect day doing what is increasingly necessary to unwind - nothing! 

Your choice of holiday home could be a luxury hilltop villa, air-conditioned self-catering apartment or first class small hotel, a friendly beachfront guesthouse or a privately chartered yacht swaying quietly at anchor off a deserted beach. 
        </p>
      </div>

      <div id='page-section'>
        <SectionTitle title='Facts' />
        <div className="accordian-container">
            <Accordian />
            <Accordian />
            <Accordian />
            <Accordian />
        </div>
      </div>


     
    </div>
  )
}
