import React from 'react';
import respFunction from '../helpers/respFunction';

const Hero = ({ title, imgSmall, imgMedium, imgFull }) => {
	return (
		<section className="hero"
			style={{ backgroundImage: `url(${respFunction(imgSmall, imgMedium, imgFull)})` }}>
			<h1>{title}</h1>
		</section>
	)
}

export default Hero;