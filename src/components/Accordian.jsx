import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from 'react';

export default function Accordian(props) {
  const [getContent, setContent] = useState(false);

  function showText(){
    setContent(!getContent);
  }

  return (
    <div>
                <div className='accordian-header'>
                    <h3>{props.accordianTitle}</h3>
                    <MdKeyboardArrowDown style={{ height:'2rem', width:'2rem' }} color='#0B346A' onClick={showText}/>
                </div>

                <p className={`accordian-text ${getContent ? 'visible' : ''}`}> 
                    {props.content}
                </p>
    </div>
  )
}
