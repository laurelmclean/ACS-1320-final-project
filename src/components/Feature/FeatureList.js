import React from 'react';
import Feature from './Feature';
import './FeatureList.css';

function FeatureList(props) {
  // displaying a list of the emoji features
  // maps the array of strings named features from band details  
  // into an array of feature components with emojis

  const icons = props.features.map((feature) => {
    return <Feature key={feature} name={feature} />
  });

  return <div className='FeatureList'>{icons}</div>
};

export default FeatureList;
