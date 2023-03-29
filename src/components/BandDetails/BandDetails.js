import React from 'react';
import { useParams } from 'react-router';
import data from '../../band-data.js';
import './BandDetails.css';
import FeatureList from '../Feature/FeatureList';

function BandDetails() {
  //userParams route from react router to access id as part of details route
  const params = useParams();
  const { id } = params;
  const { images, title, desc, genre, hometown, features, website } = data[id];

  return (
    <div className='BandDetails'>
      <div className='BandDetails-image'>
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} />
      </div>
      <div className='BandDetails-info'>
        <h1 className='BandDetails-title'>{title}</h1>
          <FeatureList features={features} />
          <p className='BandDetails-hours'>{hometown}</p>
          <p className='BandDetails-hours'>{genre}</p>
          <p className='BandDetails-desc'>{desc}</p>
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <p className='BandDetails-hours'>🌐 Visit Website! </p>
          </a>
      </div>
    </div>
  )
};

export default BandDetails;
