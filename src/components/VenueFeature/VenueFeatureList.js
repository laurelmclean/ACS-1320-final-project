import React from 'react'
import VenueFeature from './VenueFeature'
import './VenueFeatureList.css'

function VenueFeatureList(props) {
	const icons = props.features.map((feature) => {
    return <VenueFeature key={feature} name={feature} />
  })
	return <div className="VenueFeatureList">{icons}</div>
}

export default VenueFeatureList;