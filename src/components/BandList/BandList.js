import React from 'react';
import AllBands from '../AllBands/AllBands';
import './BandList.css';
import data from '../../band-data.js';
import { useState } from 'react';
import RandomBand from '../RandomBand/RandomBand';

function BandList() {
  // created a variable called query using state to hold value entered
  // into search field
  const [query, setQuery] = useState('');
  const bands = data.filter((obj) => {
    // filter recieves the value in query and returns true if its in title or genre
    const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
    const inGenre = obj.genre.toLowerCase().includes(query.toLowerCase())
    return inTitle || inGenre
    // map the array of objects into an array of components
  }).map(({ title, images, genre, id }) => {
    return (
      <AllBands
        id={id}
        key={`${title}-${id}`}
        name={title}
        image={images[0]}
        genre={genre}
      />
    )
  });

  return (
    <div className='BandSearch'>
      <div className='BandButtons'>
        <form>
          <input
            value={query}
            placeholder='search bands'
            onChange={(evt) => setQuery(evt.target.value)}
          />
          <button type='submit'>Submit</button>
        </form>
        <RandomBand />
      </div>
      <div className='BandList'>
        {bands.length > 0 ? bands : 'No results match your search'}
      </div>
    </div>
  )
};

export default BandList;
