import { useNavigate } from 'react-router-dom'
import './Randomize.css';
import data from '../../band-data.json'

function RandomSpace() {
	const navigate = useNavigate()
  return (
		<button 
    className="RandomSpace"
    onClick={(e) => {
			const id = Math.floor(Math.random() * data.length)
			navigate(`/details/${id}`)
		}}>Find a Random Band!</button>
  )
}

export default RandomSpace