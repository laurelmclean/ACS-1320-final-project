import React from 'react'
import { Link } from 'react-router-dom'
import './AllVenues.css';

function AllVenues(props) {
  const { name, image, hometown, id } = props
  return (
    <div className="AllVenues">
      <Link className="AllVenues-title" to={`/venue-details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="Hello" />
      </Link>
      <h1>
        <Link to={`/venue-details/${id}`}>
            {name}
        </Link>
      </h1>
     <div className="AllVenues-info">
				<div >{hometown}</div>
			</div>
     </div>
  )
}

export default AllVenues;
