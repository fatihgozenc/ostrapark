import React from 'react';
import { LocationsContext } from '../context/LocationsContext';
import PageRouter from '../components/PageRouter';
import { respImg } from '../helpers/respImg';
import Hero from '../components/Hero';
import { Helmet } from "react-helmet";

const Locations = (props) => {
	const [data] = React.useContext(LocationsContext);
	const locationsProps = React.createRef();

	const scrollToSpecs = (e) => {
		window.scrollTo(0, (locationsProps.current.offsetTop / 1.6))
	}

	return (
		<>
			<Helmet>
				<title>Locations | Ostra-Areal</title>
				<link rel="canonical" href={`http://ostrapark-location.de/locations`} />
			</Helmet>
			<Hero title={(props.match.path).replace('/', '')}
				imgSmall="http://ostrapark.narciss-taurus.de/wordpress/wp-content/uploads/2019/12/goldendoor_slide_2.jpg"
				imgMedium="http://ostrapark.narciss-taurus.de/wordpress/wp-content/uploads/2019/12/goldendoor_slide_2.jpg"
				imgFull="http://ostrapark.narciss-taurus.de/wordpress/wp-content/uploads/2019/12/goldendoor_slide_2.jpg"
				type="locations"
			/>

			<section className="location-content">
				<section className="start-locations locations-page">
					<div className="start-locations-wrapper ">
						<div className="break">
							<button className="scroll-to-see" onClick={scrollToSpecs} href="#spezifikationen">{
								window.innerWidth > 1024
									? "Spezifikationen"
									: "Specs"
							}<span>&darr;</span></button>
						</div>

						{data.posts.map(item => (
							<PageRouter key={item.id} route={`/locations/${item.slug}`}>
								<div className="start-locations-item" style={{ backgroundImage: `url(${respImg(item.image.medium, item.image.full)})` }}>
									<div className="start-slider-text">
										<span> {(item.title).split(" ").join("\n\n")}</span>
									</div>
								</div>
							</PageRouter>
						))}
					</div>

				</section>

				<section className="locations-props" ref={locationsProps}>
					<div className="locations-props-icons">
						<span><i className="icon-flache" />FLÄCHE</span>
						<span><i className="icon-personen" />PERSONEN</span>
						<span className="icon-group"><div><i className="icon-firmen" /><i className="icon-privat" /></div>FIRMEN&nbsp;&nbsp;&nbsp;PRIVAT</span>
						<span><i className="icon-parkplatze" />PARKPLÄTZE</span>
						<span className="icon-group"><div><i className="icon-outdoor" /><i className="icon-indoor" /></div>OUT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IN</span>
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
