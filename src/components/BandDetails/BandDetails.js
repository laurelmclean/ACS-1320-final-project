import React from 'react'
import { useParams } from 'react-router'
import data from '../../band-data.js'
import './BandDetails.css'
import POPOSFeatureList from '../POPOSFeature/POPOSFeatureList'

function BandDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, genre, hometown, features } = data[id]
  
  return (
    <div className="BandDetails">
      <div className="BandDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt = {title} />
      </div>
      <div className="BandDetails-info">
        <h1 className="BandDetails-title">{ title }</h1>
        <p className="BandDetails-hours">{ hometown }</p>
        <p className="BandDetails-hours">{ genre }</p>
        <p className="BandDetails-desc">{ desc }</p>
        <POPOSFeatureList features={features}/>
      </div>
    </div>
  )
}

export default BandDetails