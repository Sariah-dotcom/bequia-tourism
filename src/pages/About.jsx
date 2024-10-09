import React from 'react'
import SectionTitle from '../components/SectionTitle';
import Accordian from '../components/Accordian.jsx';
import EmailContact from '../components/EmailContact.jsx';
import PageHero from '../components/PageHero.jsx';

export default function About() {
  return (
    <div>
      <PageHero imgSrc="/images/bay.jpg" pageTitle='About Bequia'/>

      <div className="page-section">
        <SectionTitle title='An Island Story'/>
        
        <p>
            The tiny island of Bequia has a unique, magical charm which is hard to find
            anywhere else in the Caribbean. With fewer than six thousand inhabitants, it 
            feels like home from the moment you arrive; friendliness is the watchword, 
            and the pace is relaxed and easy-going. 
            <br /><br />
            Choose a holiday of total beach relaxation or exhilarating sailing and diving in some of the most beautiful waters in the world. Get to know the island on foot, or hire a car and discover so much more than just the golden beaches; take day or overnight trips to neighbouring isles or simply fill up another perfect day doing what is increasingly necessary to unwind - nothing! 

            <br /><br />Your choice of holiday home could be a luxury hilltop villa, air-conditioned self-catering apartment or first class small hotel, a friendly beachfront guesthouse or a privately chartered yacht swaying quietly at anchor off a deserted beach. 
        </p>
      </div>

      <div className='page-section'>
        <SectionTitle title='Facts' />
        <div className="accordian-container">

            <Accordian 
                accordianTitle='Location & Size'  
                content='Bequia is situated at latitude 13 N and 60.15 West, in the southern part of the Caribbean 
                    chain known as the Windward Islands. After the capital island of St. Vincent (pop. 110,000) 
                    situated nine miles to the north, Bequia is the largest of the thirty-two islands and cays 
                    that make up the island state of St. Vincent & the Grenadines. '
            />

            <Accordian 
                accordianTitle='Population'
                content='An intriguing mix of native Bequians of African, Scottish, Irish, French, Indian and 
                Carib descent - many of whom can trace their ancestry directly back the islands earliest inhabitants
                 of the 18th century - and more recent settlers from Europe, America and Canada who have chosen to make Bequia their home. '
            />

            <Accordian 
                accordianTitle='Currency'
                content='Local currency is the EC ("EE SEE") dollar which is tied to the US dollar at approximately 
                    US$1 to EC$2.67. Most businesses and taxis will accept US$ (normally at EC$2.60), and you may find
                    small denomination US$ notes useful. US$ rather than sterling travellers cheques are recommended. 
                    Credit cards are widely accepted at hotels, restaurants and boutiques, but smaller businesses may 
                    ask for EC$ or US$ cash. ATM machines are available at both banks on the island.'
           />

           <Accordian 
                accordianTitle='Visas/Passports'
                content='Entry Visas are not required for American or Commonwealth citizens, or for those nationals of 
                a country which has a visa exemption agreement with St. Vincent & the Grenadines.'
            />

            <Accordian 
                accordianTitle='Weather'
                content='Daytime temperatures consistently average between 26C (79F) and 30C (86F) throughout the year. 
                A "chilly" evening in the winter months (January to March) might see a low of around 21C (70F) and in the summer months the temperature will occasionally reach 32C (90F). '
            />
        </div>
      </div>
      <EmailContact />


     
    </div>
  )
}
