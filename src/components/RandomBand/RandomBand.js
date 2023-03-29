import { useNavigate } from 'react-router-dom';
import './RandomBand.css';
import data from '../../band-data.json';

function RandomBand() {
	// shows user random band - random number multiplied by data length rounded down
	// React Router provides useNavigate hook to navigate to another route
	const navigate = useNavigate();
	return (
		<button
			className='RandomBand'
			onClick={(e) => {
				const id = Math.floor(Math.random() * data.length)
				navigate(`/details/${id}`)
			}}>Discover Band</button>
	)
};

export default RandomBand;
