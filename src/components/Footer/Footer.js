import React from 'react'
import './Footer.css'

function Footer() {
    let dateObj = new Date();
  return (
    <div className="Footer">
        {/* stretch challenge - JS object for date */}
        <p>Laurel McLean - Copyright {dateObj.getFullYear()}</p>
    </div>
  )
}

export default Footer