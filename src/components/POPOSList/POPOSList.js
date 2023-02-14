import React from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../band-data.js'
import { useState } from 'react'

function POPOSList() {
  const [ query, setQuery ] = useState('')
  const spaces = data.filter((obj) => {
	// true if query is in title
	const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
	// true if query is in address
	const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
	// return true if either is true
    return inTitle || inAddress
  }).map(({ title, address, images, hours, id }) => {
  return (
    <POPOSSpace
      id={id}
      key={`${title}-${id}`} 
      name={title}
      address={address}
      image={images[0]}
      hours={hours}
    />
  )
})

  return (
    <div className="POPOSSearch">
      <form>
        <input
          value={query}
          placeholder="search"
          onChange={(evt) => setQuery(evt.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="POPOSList">
        { spaces.length > 0 ? spaces : "No results match your search" } 
      </div>
    </div>
  )
}

export default POPOSList