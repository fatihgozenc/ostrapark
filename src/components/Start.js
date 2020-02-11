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

	const unlogicalRevisions = [
		{
			"id": 1235,
			"title": "Willkommen im Ostra-Areal",
			"slug": "",
			"excerpt": "Mit seinen verschiedenen, flexibel nutzbaren Eventlocations auf der ehemaligen Schlachthofinsel, ermöglichen wir eine vielfältige Nutzung und vollkommen neue Veranstaltungskonzepte.",
			"image": {
				"medium": "https://ostrapark-location.de/wordpress/wp-content/uploads/2019/12/goldendoor_slide_2.jpg",
				"large": "https://ostrapark-location.de/wordpress/wp-content/uploads/2019/12/goldendoor_slide_2.jpg",
				"full": "https://ostrapark-location.de/wordpress/wp-content/uploads/2019/12/goldendoor_slide_2.jpg"
			},
			"slider": [
				"https://ostrapark-location.de/wordpress/wp-content/uploads/2019/10/golden_door_galerie_location_erlwein_capitol_2.jpg",
				"https://ostrapark-location.de/wordpress/wp-content/uploads/2019/10/golden_door_galerie_location_erlwein_capitol_3.jpg",
				"https://ostrapark-location.de/wordpress/wp-content/uploads/2019/10/golden_door_galerie_location_erlwein_capitol_1.jpg"
			]
		},
		{
			"id": 2365,
			"title": "Unvergessliche Momente",
			"slug": "",
			"excerpt": "Eine faszinierende, perfekte innerstädtische Lage, die Ihrem Event auf jeden Fall einen passenden Rahmen verleiht.",
			"image": {
				"medium": "https://ostrapark-location.de/wordpress/wp-content/uploads/2019/10/highcompress-golden_door_header_referenz_jazztage-500x281.jpg",
				"large": "https://ostrapark-location.de/wordpress/wp-content/uploads/2019/10/highcompress-golden_door_header_referenz_jazztage-1024x576.jpg",
				"full": "https://ostrapark-location.de/wordpress/wp-content/uploads/2019/10/highcompress-golden_door_header_referenz_jazztage.jpg"
			},
			"slider": [
				"https://ostrapark-location.de/wordpress/wp-content/uploads/2019/10/golden_door_galerie_location_erlwein_capitol_2.jpg",
				"https://ostrapark-location.de/wordpress/wp-content/uploads/2019/10/golden_door_galerie_location_erlwein_capitol_3.jpg",
				"https://ostrapark-location.de/wordpress/wp-content/uploads/2019/10/golden_door_galerie_location_erlwein_capitol_1.jpg"
			]
		}
	]
	// NORMAL DATA IS data.posts['locations'] AND IM MODIFYING IT NOW,


	let unlogicalData = unlogicalRevisions.concat(data.posts['locations']);

	return (
		<section className="start">
			<animated.div style={opening}>
				<CarouselProvider
					naturalSlideWidth={respImg(100, 200)}
					naturalSlideHeight={respImg(125, 100)}
					totalSlides={unlogicalData.length}
					isPlaying={true}
					interval={9000}
					lockOnWindowScroll={true}
					touchEnabled={respImg(true, false)}
					dragEnabled={respImg(true, false)}
					infinite={respImg(true, false)}>
					<Slider className="start-slider">

						{unlogicalData.map(item => (
							<Slide key={item.id} index={item.id} style={{ height: '100vh' }}>
								<div className="start-slider-item"
									style={{ backgroundImage: `url(${respImg(item.image.medium, item.image.large)})` }}>
									<PageRouter route={`/locations/${item.slug}`}>
										<div className="start-slider-text">
											<h2>{item.title}</h2>
											<p>{item.excerpt}</p>
											<MehrLesen color="#fff" />
										</div>
									</PageRouter>
								</div>
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
