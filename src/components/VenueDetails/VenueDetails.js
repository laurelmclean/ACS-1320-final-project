import React from 'react';
import { useParams } from 'react-router';
import data from '../../venue-data.js';
import './VenueDetails.css';
import FeatureList from '../Feature/FeatureList';

function VenueDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, city, features, website } = data[id]
  
  return (
    <div className="VenueDetails">
      <div className="VenueDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt = {title} />
      </div>
      <div className="VenueDetails-info">
        <h1 className="VenueDetails-title">{ title }</h1>
        <FeatureList features={features}/>
        <p className="VenueDetails-hours">{ city }</p>
        <p className="VenueDetails-desc">{ desc }</p>
        <a href={ website } target="_blank" rel="noopener noreferrer">
          <p className="VenueDetails-hours">🌐 Visit Website! </p>
        </a>
      </div>
    </div>
  )
}

export default VenueDetails