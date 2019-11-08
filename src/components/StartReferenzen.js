import React from 'react';
import PageRouter from './PageRouter';
import { HomeContext } from '../context/HomeContext';
import MehrLesen from '../components/MehrLesen';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { respImg } from '../helpers/respImg';
import respFunction from '../helpers/respFunction';

const StartReferenzen = () => {
	const [data] = React.useContext(HomeContext);

	return (
		<section className="start-referenzen">
			<PageRouter route={`/referenzen`} >
			<h2 className="section-title">REFERENZEN</h2></PageRouter>
			<CarouselProvider
				naturalSlideWidth={respFunction(100, 300, 320)}
				naturalSlideHeight={respFunction(140, 200, 100)}
				totalSlides={6}
				isPlaying={true}
				interval={6000}
				touchEnabled={respFunction(true, true, false)}
				dragEnabled={respFunction(true, true, false)}
				infinite={respFunction(true, true, false)}>
				<Slider className="start-referenzen-slider">
					{data.posts['referenzen'].map(item => (
						<Slide key={item.id} index={item.id}>
							<PageRouter route={`/referenzen/${item.slug}`}>
								<div className="start-referenzen-item">
									<div className="start-referenzen-img" 
									style={{ backgroundImage: `url(${respImg(item.image.medium, item.image.large)})` }} />
									<div className="break" />
									<div className="start-referenzen-text">
										<h2 className="section-subtitle">{item.title}</h2>
										<p>{item.excerpt}</p>
										<MehrLesen/>
									</div>
								</div>
							</PageRouter>
						</Slide>
					))}
				</Slider>
				<div className="referenzen-nav-group">
					<div className="break" />
					<DotGroup className="start-referenzen-nav" />
				</div>
				<span className="section-title-bg">REFERENZEN</span>
			</CarouselProvider>
		</section>
	)
};

export default StartReferenzen;
