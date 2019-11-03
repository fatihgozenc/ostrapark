import React from 'react';
import { LocationsContext } from '../context/LocationsContext';
import PageRouter from '../components/PageRouter';
import { respImg } from '../helpers/respImg';

const Locations = (props) => {
	const [data] = React.useContext(LocationsContext);
	const locationsProps = React.createRef();

	const scrollToSpecs = (e) => {
		window.scrollTo(0, (locationsProps.current.offsetTop / 1.6))
	}

	return (
		<>
			<section className="hero" style={{ backgroundImage: `url(${respImg(data.posts[0].image.medium, data.posts[0].image.full)})` }}>
				<h1>{(props.match.path).replace('/', '')}</h1>
			</section>

			<section className="content">
				<section className="start-locations">
					<div className="start-locations-wrapper">
						{data.posts.map(item => (
							<PageRouter key={item.id} route={`/locations/${item.slug}`}>
								<div className="start-locations-item" style={{ backgroundImage: `url(${respImg(item.image.medium, item.image.full)})` }}>
									<div className="start-slider-text">
										<span> {item.title}</span>
									</div>
								</div>
							</PageRouter>
						))}
					</div>
					<a className="scroll-to-see" onClick={scrollToSpecs}
					>&darr; Bitte Clicken oder Scrollen Sie für Spezifikationen &darr;</a>
				</section>

				<section className="locations-props" ref={locationsProps}>
					<div className="locations-props-icons">
						<span><i className="icon-flache"></i></span>
						<span><i className="icon-personen"></i></span>
						<span><i className="icon-firmen"></i><i className="icon-privat"></i></span>
						<span><i className="icon-parkplatze"></i></span>
						<span><i className="icon-outdoor"></i><i className="icon-indoor"></i></span>
					</div>
					{data.posts.map(item => (
						<div key={item.id} className="locations-props-item">
							<span>{item.flache}</span>
							<span>{item.reihen}</span>
							<span>{item.firmen_or_privat}</span>
							<span>{item.parkplatz}</span>
							<span>{item.inorout}</span>
						</div>
					))}
				</section>

			</section>
		</>
	)
};

export default Locations;
