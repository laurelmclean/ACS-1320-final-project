import React from 'react';
import AllVenues from '../AllVenues/AllVenues';
import './VenueList.css';
import data from '../../venue-data.js'
import { useState } from 'react'
import RandomVenue from '../RandomVenue/RandomVenue';

function VenueList() {
  const [ query, setQuery ] = useState('')
  const spaces = data.filter((obj) => {
	// true if query is in title
	const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
	// return true if either is true
    return inTitle
  }).map(({ title, hometown, images, genre, id }) => {
  return (
    <AllVenues
      id={id}
      key={`${title}-${id}`} 
      name={title}
      hometown={hometown}
      image={images[0]}
      genre={genre}
    />
  )
})

  return (
    <div className="VenueSearch">
      <form>
        <input
          value={query}
          placeholder="search venues"
          onChange={(evt) => setQuery(evt.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <RandomVenue />
      </div>
      <div className="VenueList">
        { spaces.length > 0 ? spaces : "No results match your search" } 
      </div>
    </div>
  )
}

export default VenueList