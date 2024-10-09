import React from 'react'
import PageHero from '../components/PageHero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import EmailContact from '../components/EmailContact.jsx';

export default function TravelPage() {
  return (
    <div>
      <PageHero imgSrc='/images/ferry.jpg' pageTitle='Travel' />
      
      <div className="page-section">
        <SectionTitle title='Getting to Bequia' />
        <h3>Direct Flights to Argyle International</h3>
        <p>
            The following international airlines now fly direct into Argyle International Airport (AIA) in St. Vincent: <br /> <br />
        </p>

        <ul>
            <li><a href="#">Air Canada (Rouge)</a></li>
            <li><a href="#">American Airlines</a></li>
            <li><a href="#">Virgin Atlantic</a></li>
            <li><a href="#">Caribbean Airlines</a></li>
            <li><a href="#">Inter Caribbean</a></li>
        </ul>

        <p>
            Onward connection to Bequia is then completed by ferry from the Grenadines Wharf in 
            Kingstown, approx 40 minutes and US$ 30 by taxi from AIA. (Check ferry departure times, 
            as these may not provide a same-day connection for late afternoons arrivals)
        </p>
      </div>

      <div className="page-section" id='ferry-info'>
        <h3>Ferry</h3>
        <p>
            After arriving at the airport in St. Vincent, visitors should take a taxi (approx US$30) to the "Ferry Dock" 
            (officially known as the Grenadines Wharf) in Kingstown to catch the ferry to Bequia - either the <b>Admiral (orange and white)</b>
            or the <b>Bequia Express I, II, III, IV or V(red and white)</b> . <br /><br />
            Once at the ferry dock, you must pass through the Grenadines Wharf terminal. Pay for your 
            ferry ticket on board. Fares are EC$25 each way.
            US dollars will be accepted by both taxis and ferries at about 2.60 to the EC$. <br /><br />
            The ferries - all of which offer snack and drinks bar and a choice of interior air-conditioned seating,
             or outside benches for the best view - are frequent on weekdays but less frequent at the weekends. <br /><br /> Cancellations may occasionally occur at short notice.
            Schedules can also be subject to seasonal change, so it's sensible to check with the ferry companies or the Bequia Tourism Association before planning your journey. 
        </p>
      </div>

      <div className="page-section">
        <h3>Flying to Bequia</h3>
        <p>
            Visitors from outside the Caribbean region, including from the USA and Canada, may still also approach 
            Bequia via direct international flights into Barbados or St. Lucia. <br /><br /> International arrivals into Barbados and St. Lucia are in the early afternoon, which (assuming no outbound delays) allows convenient onward connections to Bequia.
            Barbados' Grantley Adams International Airport is served by the following major airlines:
        </p>
      </div>

      <div className="page-section">
        <SectionTitle title='Getting around Bequia' />
        <h3>Taxi</h3>
        <h3>Minibuses</h3>
        <h3>On Foot</h3>
      </div>
      <EmailContact />
    
    
    </div>
    
  )
}
