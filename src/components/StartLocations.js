import React from 'react';
import { HomeContext } from '../context/HomeContext';
import { Link } from 'react-router-dom';
import {respImg} from '../helpers/respImg';

const StartLocations = () => {
	const [data] = React.useContext(HomeContext);

	return (
		<section className="start-locations">
			<h2 className="section-title">LOCATIONS</h2>
			<div className="start-locations-wrapper">
				{data.posts['locations'].map( item => ( 
					<Link key={item.id} to={`/locations/${item.slug}`}>
					<div className="start-locations-item" style={{backgroundImage: `url(${respImg(item.image.medium, item.image.large)})`}}>
						<div className="start-slider-text">
							<span> {item.title}</span>
						</div>
					</div>
					</Link>
				))}
			</div>
			
		</section>
	)
};

export default StartLocations;