import React from 'react'
import Feature from './Feature'
import './FeatureList.css'

function FeatureList(props) {
	const icons = props.features.map((feature) => {
    return <Feature key={feature} name={feature} />
  })
	return <div className="FeatureList">{icons}</div>
}

export default FeatureList;