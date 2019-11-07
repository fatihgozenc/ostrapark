import React from 'react';
import { HomeContext } from '../context/HomeContext';
import PageRouter from './PageRouter'
import MehrLesen from '../components/MehrLesen';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { animated, useSpring } from 'react-spring';

import { respImg } from '../helpers/respImg';

const Start = () => {
	const [data] = React.useContext(HomeContext);
	// let locData = data.posts['locations'].reverse();
	const opening = useSpring({
		opacity: 1, from: { opacity: 0 }, delay: 400
	})

	return (
		<section className="start">
			<animated.div style={opening}>
				<CarouselProvider
					naturalSlideWidth={respImg(100, 200)}
					naturalSlideHeight={respImg(125, 100)}
					totalSlides={4}
					isPlaying={true}
					interval={6000}
					touchEnabled={respImg(true, false)}
					dragEnabled={respImg(true, false)}
					infinite={respImg(true, false)}>
					<Slider className="start-slider">
						{data.posts['locations'].map(item => (
							<Slide key={item.id} index={item.id} style={{ height: '100vh' }}>
								<PageRouter route={`/locations/${item.slug}`}>
								<div className="start-slider-item" 
									style={{ backgroundImage: `url(${respImg(item.image.large, item.image.full)})` }}>
									<div className="start-slider-text">
										<h2>{item.title}</h2>
										<p>{item.excerpt}</p>
										<MehrLesen/>
									</div>
								</div>
								</PageRouter>
							</Slide>
						))}
					</Slider>
					<DotGroup disableActiveDots={false} className="start-slider-nav" />
				</CarouselProvider>
			</animated.div>

		</section>
	)
};

export default Start;
