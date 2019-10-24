import React from 'react';
import { LocationsContext } from '../context/LocationsContext';
import { Link } from 'react-router-dom';
import {respImg} from '../helpers/respImg';

const Locations = (props) => {
	const [data] = React.useContext(LocationsContext);
	console.log(props)
	return (
		<>
			<section className="hero" style={{backgroundImage: `url(${respImg(data.posts[3].image.medium, data.posts[3].image.full)})`}}>
				<h1>Locations</h1>
			</section>
			<section className="content">
				<section className="start-locations">
					{data.posts.map( item => ( 
						<Link key={item.id} to={`/locations/${item.slug}`}>
						<div className="start-locations-item" style={{backgroundImage: `url(${respImg(item.image.medium, item.image.full)})`}}>
							<div className="start-slider-text">
								<span> {item.title}</span>
							</div>
						</div>
						</Link>
					))}
				</section>
				<section className="locations-props">
		
				</section>
			</section>
		</>
	)
};

export default Locations;
