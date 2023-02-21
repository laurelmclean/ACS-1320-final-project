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
      <h1 className='About-title'>About</h1>
      <p className='About-desc'>Welcome to Discover Music, a website promoting Canadian musicians and music venues!

      Our mission is to showcase the talented musicians and vibrant music scene that Canada has to offer. We are passionate about promoting local artists and music venues across the country, and we believe that by doing so, we can help create a stronger music community in Canada.

      Our team is made up of music enthusiasts and industry professionals who are dedicated to promoting Canadian music. We strive to provide a platform for emerging artists and music venues, as well as established musicians, to connect with audiences and gain exposure.

      Our website features a comprehensive directory of Canadian musicians and music venues, making it easy for music lovers to discover new talent and exciting live music events. We also provide up-to-date news and information about the Canadian music industry, including interviews with musicians and behind-the-scenes features on music venues.

      At our core, we believe that music has the power to bring people together and create a sense of community. By promoting Canadian musicians and music venues, we hope to inspire and celebrate the diversity and creativity of the Canadian music scene.
          </p>
        </div>
    </div>
  )
}

export default About;
