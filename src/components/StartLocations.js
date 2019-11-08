import React from 'react';
import { HomeContext } from '../context/HomeContext';
import { respImg } from '../helpers/respImg';
import PageRouter from './PageRouter';

const StartLocations = () => {
	const [data] = React.useContext(HomeContext);

	return (
		<section className="start-locations">
			<PageRouter route={`/locations`} >
			<h2 className="section-title">LOCATIONS<span className="section-title-bg">LOCATIONS</span></h2></PageRouter>
			<div className="start-locations-wrapper">
				{data.posts['locations'].map(item => (
					<PageRouter key={item.id} route={`/locations/${item.slug}`} >
						<div className="start-locations-item" style={{ backgroundImage: `url(${respImg(item.image.medium, item.image.large)})` }}>
							<div className="start-slider-text">
								<span> {item.title}</span>
							</div>
						</div>
					</PageRouter>
				))}
			</div>
		</section>
	)
};

export default StartLocations;