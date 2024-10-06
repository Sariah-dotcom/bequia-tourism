import React from 'react'
import BentoGrid from './BentoGrid.jsx'
import SectionTitle from './SectionTitle.jsx'

export default function Welcome() {
  return (
    <div id='page-section'>
      <div className="welcome">
        <SectionTitle title="Welcome" />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis
            eleifend lobortis. Nulla augue nisi, gravida et tincidunt a, commodo id metus.
            Vestibulum blandit consequat diam, ac condimentum ipsum varius sed. Class 
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </div>
      <BentoGrid />
    </div>
  )
}
