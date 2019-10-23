import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContext } from '../context/HomeContext';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {respImg} from '../helpers/respImg';

const StartReferenzen = () => {
	const [data] = React.useContext(HomeContext);

	return (
		<section className="start-referenzen">
			<h2 className="section-title">REFERENZEN</h2>
			<CarouselProvider
					naturalSlideWidth={100}
					naturalSlideHeight={140}
					totalSlides={6}
					isPlaying={true}
					interval={6000}
					touchEnabled={true}
					infinite={true}>
					<Slider className="start-referenzen-slider">
						{data.posts['referenzen'].map( item => ( 
						<Slide key={item.id} index={item.id}>
							<div className="start-referenzen-img" style={{backgroundImage: `url(${respImg(item.image.medium, item.image.large)})`}}/>
							<div className="start-referenzen-text">
								<h2 className="section-subtitle">{item.title}</h2>
								<p>{item.excerpt}</p>
								<Link to={`/referenzen/${item.slug}`}>MEHR LESEN &rarr;</Link>
							</div>
						</Slide>
						))}
					</Slider>
					<DotGroup className="start-referenzen-nav"/>
				</CarouselProvider>
		</section>
	)
};

export default StartReferenzen;
