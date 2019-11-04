import React from 'react';
import { LocationsContext } from '../context/LocationsContext';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import respFunction from '../helpers/respFunction';
import Hero from '../components/Hero';

import LocationSpecs from '../components/LocationSpecs';

const Location = (props) => {
	const [data] = React.useContext(LocationsContext);
	const getSingleData = data.posts.filter(item => item.slug.indexOf(props.match.params.slug) !== -1);
	const item = getSingleData[0];
	const itemDetails = item.excerpt.split('\n');

	return (
		<>
			<Hero title={item.title}
				imgSmall={item.image.medium}
				imgMedium={item.image.large}
				imgFull={item.image.full}
			/>

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
				<div className="location-detail">
					<div className="location-gallery">
						<CarouselProvider
							naturalSlideWidth={respFunction(160, 160, 190)}
							naturalSlideHeight={respFunction(120, 90, 100)}
							totalSlides={item.slider.length}
							isPlaying={true}
							interval={6000}
							touchEnabled={respFunction(true, true, false)}
							dragEnabled={respFunction(true, true, false)}
							infinite={true}>
							<Slider >
								{item.slider.map((url, index) => {
									return (
										<Slide key={index} index={index}>
											<div className="location-gallery-item" style={{ backgroundImage: `url('${url}')` }} />
										</Slide>
									)
								})}
							</Slider>
							<div className="imgslider-nav-group">
								<ButtonBack>&#9668;</ButtonBack><ButtonNext>&#9658;</ButtonNext>
							</div>
						</CarouselProvider>
					</div>
					<LocationSpecs item={item} />
				</div>
			</section>
		</>
	)
};

export default Location;
