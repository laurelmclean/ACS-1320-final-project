import React from 'react'
import { useParams } from 'react-router'
import data from '../../venue-data.js'
import './VenueDetails.css'

function VenueDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, genre, hometown } = data[id]
  
  return (
    <div className="VenueDetails">
      <div className="VenueDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt = {title} />
      </div>
      <div className="VenueDetails-info">
        <h1 className="VenueDetails-title">{ title }</h1>
        <p className="VenueDetails-hours">{ hometown }</p>
        <p className="VenueDetails-hours">{ genre }</p>
        <p className="VenueDetails-desc">{ desc }</p>
      </div>
    </div>
  )
}

export default VenueDetails