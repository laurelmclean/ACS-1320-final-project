import React from 'react'
import './About.css'

function About() {
  return (
    <div className='About'>
      <div className="About-image">
        <img src={`${process.env.PUBLIC_URL}/images/50-california-st.jpg`}     
       
        height="auto"
        alt="50 Califonia St."
      />
      </div>
      <div className="About-info">
      <h1 className='About-title'>About SFPOPOS</h1>
      <p className='About-desc'>POPOS are publicly accessible spaces in
        forms of plazas, terraces, atriums, small
        parks, and even snippets which are provided
        and maintained by private developers. In San
        Francisco, POPOS mostly appear in the Downtown
        office district area.</p>
        </div>
    </div>
  )
}

export default About;
