import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import respFunction from '../helpers/respFunction';
import { ReferenzenContext } from '../context/ReferenzenContext';
import PageRouter from '../components/PageRouter';
import Hero from '../components/Hero';
import ReferenzenNav from '../components/ReferenzenNav';

const Referenz = (props) => {
	const [data] = React.useContext(ReferenzenContext);
	const getSingleData = data.posts.filter(
		item => item.slug.indexOf(props.match.params.slug) !== -1);
	const item = getSingleData[0];

	const idValues = data.posts.map((mapped, key) => {
		return [mapped.id, key, item.id]
	})

	const matchedValue = (arr) => {
		let id;
		arr.map((item, key) => {
			if (item[0] === item[2]) {
				id = key
			}
		})
		return id
	}

	const selectedPostKey = matchedValue(idValues);

	return (
		<>
			<Hero title={item.title}
				imgSmall={item.image.medium}
				imgMedium={item.image.medium}
				imgFull={item.image.full}
			/>
			<section className="referenz">

				<div className="location-gallery">
					<CarouselProvider
						naturalSlideWidth={respFunction(160, 160, 190)}
						naturalSlideHeight={respFunction(120, 90, 100)}
						totalSlides={item.slider.length}
						isPlaying={true}
						interval={6000}
						touchEnabled={respFunction(true, true, false)}
						dragEnabled={respFunction(true, true, false)}
						infinite={respFunction(true, true, true)}>
						<Slider >
							{item.slider.map((url, index) => (
								<Slide key={index} index={index}>
									<div className="location-gallery-item" style={{ backgroundImage: `url('${url}')` }} />
								</Slide>
							))}
						</Slider>
						<div className="imgslider-nav-group">
							<ButtonBack>&#9668;</ButtonBack><ButtonNext>&#9658;</ButtonNext>
						</div>
					</CarouselProvider>
				</div>
				<div className="referenz-text">
					{item.content}
				</div>
			</section>

			<ReferenzenNav selected={selectedPostKey} />
		</>
	)
};

export default Referenz;