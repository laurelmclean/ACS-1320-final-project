import React from 'react'
import './VenueFeature.css'

function getFeature(str) {
	switch(str) {
		case 'drink':
			return '🥃 '
		case 'food':
			return '🍔'
		case 'wheelchair':
			return '♿'
		default:
			return '？'
	}
}

function VenueFeature(props) {
	const emoji = getFeature(props.name)
	return <div className="VenueFeature">{emoji}</div>
}

export default VenueFeature;