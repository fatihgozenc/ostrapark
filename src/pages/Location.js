import React from 'react';
import { LocationsContext } from '../context/LocationsContext';
import { respFunction } from '../helpers/respFunction';
import { respImg } from '../helpers/respImg';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Location = (props) => {
	const [data] = React.useContext(LocationsContext);
	let getSingleData = data.posts.filter(item => item.slug.indexOf(props.match.params.slug) !== -1);
	let item = getSingleData[0];
	let itemDetails = item.excerpt.split('\n');

	return (
		<>
			<section className="hero"
				style={{ backgroundImage: `url(${respImg(item.image.medium, item.image.full)})` }}>
				<h1>{item.title}</h1>
			</section>

			<section className="location">
				<div className="location-overview">
					<img src={item.logo} alt={item.title + ' Logo'} />
					<p>{item.content}</p>
					<a href={item.facebook}><i className="icon-facebook"></i></a>
					<a href={item.instagram}><i className="icon-instagram"></i></a>
					<ul>{itemDetails.map(detail => (
						<li key={Math.random()}>{detail}</li>
					))}</ul>
				</div>
				<div className="location-gallery">
					<CarouselProvider
						naturalSlideWidth={respFunction(100, 100, 320)}
						naturalSlideHeight={respFunction(150, 100, 100)}
						totalSlides={6}
						isPlaying={true}
						interval={6000}
						touchEnabled={respImg(true, false)}
						dragEnabled={respImg(true, false)}
						infinite={respImg(true, false)}>
						<Slider >
							{item.slider.map((url, index) => {
								return (
									<Slide key={index} index={index}>
										{console.log(url, index)}
										<div className="start-referenzen-item">
											<div className="start-referenzen-img" style={{ backgroundImage: `url('${url}')` }} />
										</div>
									</Slide>
								)
							})}
						</Slider>
						<div className="referenzen-nav-group">
							<div className="break" />
							<DotGroup className="start-referenzen-nav" />
						</div>
					</CarouselProvider>
				</div>
			</section>
		</>
	)
};

export default Location;