import React from 'react';
import PageRouter from './PageRouter';
import { HomeContext } from '../context/HomeContext';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { respImg } from '../helpers/respImg';
import { respFunction } from '../helpers/respFunction';


const StartReferenzen = () => {
	const [data] = React.useContext(HomeContext);

	return (
		<section className="start-referenzen">
			<h2 className="section-title">REFERENZEN<span>REFERENZEN</span></h2>
			<CarouselProvider
				naturalSlideWidth={respFunction(100, 100, 320)}
				naturalSlideHeight={respFunction(150, 100, 100)}
				totalSlides={6}
				isPlaying={true}
				interval={6000}
				touchEnabled={respImg(true, false)}
				dragEnabled={respImg(true, false)}
				infinite={respImg(true, false)}>
				<Slider className="start-referenzen-slider">
					{data.posts['referenzen'].map(item => (
						<Slide key={item.id} index={item.id}>
							<div className="start-referenzen-item">
								<div className="start-referenzen-img" style={{ backgroundImage: `url(${respImg(item.image.medium, item.image.large)})` }} />
								<div className="break" />
								<div className="start-referenzen-text">
									<h2 className="section-subtitle">{item.title}</h2>
									<p>{item.excerpt}</p>
									<PageRouter route={`/referenzen/${item.slug}`} text={`MEHR LESEN `}>&rarr;</PageRouter>
								</div>
							</div>
						</Slide>
					))}
				</Slider>
				<div className="referenzen-nav-group">
					<div className="break" />
					<DotGroup className="start-referenzen-nav" />
				</div>
			</CarouselProvider>
		</section>
	)
};

export default StartReferenzen;
