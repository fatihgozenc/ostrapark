import React from 'react';
import { LocationsContext } from '../context/LocationsContext';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import respFunction from '../helpers/respFunction';
import Hero from '../components/Hero';
import { Helmet } from "react-helmet";
import LocationSpecs from '../components/LocationSpecs';

const Location = (props) => {
	const [data] = React.useContext(LocationsContext);
	const getSingleData = data.posts.filter(item => item.slug.indexOf(props.match.params.slug) !== -1);
	const item = getSingleData[0];
	const itemDetails = item.excerpt.split('\n');
	const isOpenAir = item.title === 'Open-Air';
	console.log(isOpenAir)

	return (
		<>
			<Helmet>
				<title>{item.title} | Ostra-Areal | Zentrum für Eventkultur in Dresden</title>
				<link rel="canonical" href={`http://ostrapark-location.de/${item.title.toLowerCase()}`} />
				<meta name="description" content={item.content.slice(0, 100)} />
				<meta property="og:title" content={`${item.title} | Ostra-Areal | Zentrum für Eventkultur in Dresden`} />
				<meta property="og:description" content={item.content.slice(0, 100)} />
				<meta name="twitter:title" content={`${item.title} | Ostra-Areal | Zentrum für Eventkultur in Dresden`} />
				<meta name="twitter:description" content={item.content.slice(0, 100)} />
			</Helmet>
			<Hero title={item.title}
				imgSmall={item.image.medium}
				imgMedium={item.image.large}
				imgFull={item.image.full}
				type="large"
			/>

			<section className="location">
				<div className="location-overview">
					<h2 className="location-type">{item.type}</h2>
					{
						!isOpenAir &&
						<img src={item.logo} alt={item.title + ' Logo'} />
					}
					<p>{item.content}</p>
					<div className="social_icongroup">
						<a href={item.facebook}><i className="icon-facebook"></i></a>
						<a href={item.instagram}><i className="icon-instagram"></i></a>
					</div>
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
								<ButtonBack>&larr;</ButtonBack><ButtonNext>&rarr;</ButtonNext>
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
