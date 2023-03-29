import React from 'react';
import { Link } from 'react-router-dom';
import './AllBands.css';

function AllBands(props) {

  const { name, image, genre, id } = props;

  return (
    <div className='AllBands'>
      <Link className='AllBands-title' to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`} width='300' height='300' alt='Hello' />
      </Link>
      <h1>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <div className='AllBands-info'>
        <div>{genre}</div>
      </div>
    </div>
  )
};

export default AllBands;
