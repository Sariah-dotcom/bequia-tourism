import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from 'react';

export default function Accordian() {
  const [getContent, setContent] = useState(false);

  function showText(){
    setContent(!getContent);
  }

  return (
    <div>
                <div className='accordian-header'>
                    <h3>Location & Size</h3>
                    <MdKeyboardArrowDown style={{ height:'2rem', width:'2rem' }} color='#0B346A' onClick={showText}/>
                </div>

                <p className={`accordian-text ${getContent ? 'visible' : ''}`}>Bequia is situated at latitude 13 N and 60.15' West, in the southern part of the Caribbean chain known as the Windward Islands. <br /> <br />
                    After the capital island of St. Vincent (pop. 110,000) situated nine miles to the north, Bequia is the largest of the thirty-two islands and cays that make up the island state of St. Vincent & the Grenadines. <br /><br /> Bequia measures just 7 square miles, and is home to about 5000 people. 

                </p>
    </div>
  )
}
