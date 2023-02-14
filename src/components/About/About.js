import React from 'react'
import './About.css'

function About() {
  return (
    <div className='About'>
      <div className="About-image">
        <img src={`${process.env.PUBLIC_URL}/images/iatm.jpg`}     
       
        height="auto"
        alt="I Am The Mountain"
      />
      </div>
      <div className="About-info">
      <h1 className='About-title'>About Canadian Music</h1>
      <p className='About-desc'>Add Description.</p>
        </div>
    </div>
  )
}

export default About;
