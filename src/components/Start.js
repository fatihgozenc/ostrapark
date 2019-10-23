import React from 'react';
import { HomeContext } from '../context/HomeContext';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import {respImg} from '../helpers/respImg';

const Start = () => {
	const [data] = React.useContext(HomeContext);

	return (
		<section className="start">
				<CarouselProvider
					naturalSlideWidth={100}
					naturalSlideHeight={125}
					totalSlides={4}
					isPlaying={true}
					interval={6000}
					touchEnabled={true}
					infinite={true}>
					<Slider className="start-slider">
					{data.posts['locations'].map( item => ( 
						<Slide key={item.id} index={item.id} style={{height: '100vh'}}>
							<div className="start-slider-item" style={{backgroundImage: `url(${respImg(item.image.large, item.image.full)})`}}>
								<div className="start-slider-text">
									<h2>{item.title}</h2>
									<p>{item.excerpt}</p>
									<Link to={`/locations/${item.slug}`}>MEHR LESEN</Link>
								</div>
							</div>
						</Slide>
					))}
					</Slider>
					<DotGroup className="start-slider-nav"/>
				</CarouselProvider>
		</section>
	)
};

export default Start;
