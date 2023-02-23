import React from 'react'
import './Feature.css'

function getFeature(str) {
	switch(str) {
		case 'drink':
			return '🥃 '
		case 'food':
			return '🍔'
		case 'wheelchair':
			return '♿'
		case 'guitar':
			return '🎸'
		case 'harp':
			return '𓏢'
		case 'trumpet':
			return '🎺'
		case 'keyboard':
			return '🎹'
		case 'violin':
			return '🎻'
		case 'micorphone':
			return '🎤 '
		case 'drums':
			return '🥁 '
		default:
			return '？'
	}
}

function Feature(props) {
	const emoji = getFeature(props.name)
	return <div className="Feature">{emoji}</div>
}

export default Feature;