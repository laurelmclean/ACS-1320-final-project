import { useNavigate } from 'react-router-dom'
import './RandomVenue.css';
import data from '../../venue-data.json'

function RandomVenue () {
	const navigate = useNavigate()
  return (
		<button 
    className="RandomVenue"
    onClick={(e) => {
			const id = Math.floor(Math.random() * data.length)
			navigate(`/venue-details/${id}`)
		}}>Find a Random Venue!</button>
  )
}

export default RandomVenue;
