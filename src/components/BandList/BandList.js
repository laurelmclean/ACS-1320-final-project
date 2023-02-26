import React from 'react';
import AllBands from '../AllBands/AllBands';
import './BandList.css';
import data from '../../band-data.js';
import { useState } from 'react';
import RandomBand from '../RandomBand/RandomBand';

function BandList() {
  const [ query, setQuery ] = useState('')
  const bands = data.filter((obj) => {
	// true if query is in title
	const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
	// return true if either is true
    return inTitle
  }).map(({ title, hometown, images, genre, id }) => {
  return (
    <AllBands
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
    <div className="BandSearch">
      <div className='BandButtons'>
        <form>
          <input
            value={query}
            placeholder="search bands"
            onChange={(evt) => setQuery(evt.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
          <RandomBand />
      </div>
      <div className="BandList">
        { bands.length > 0 ? bands : "No results match your search" } 
      </div>
    </div>
  )
}

export default BandList