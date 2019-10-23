import React from 'react';
import { HomeContext } from '../context/HomeContext';
import { Link } from 'react-router-dom';
import {respImg} from '../helpers/respImg';

const StartLocations = () => {
	const [data] = React.useContext(HomeContext);

	return (
		<section className="start-locations">
			<h2 className="section-title">LOCATIONS</h2>
			{data.posts['locations'].map( item => ( 
				<div key={item.id} className="start-locations-item" style={{backgroundImage: `url(${respImg(item.image.medium, item.image.large)})`}}>
					<div className="start-slider-text">
						<Link to={`/locations/${item.slug}`}>{item.title}</Link>
					</div>
				</div>
			))}
		</section>
	)
};

export default StartLocations;