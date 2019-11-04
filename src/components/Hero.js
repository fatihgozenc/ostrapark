import React from 'react';
import respFunction from '../helpers/respFunction';



const Hero = ({ type, title, imgSmall, imgMedium, imgFull }) => {

	const goToNextSection = (e) =>{
		window.scrollTo(0, e.target.nextElementSibling.offsetTop)
	}
	return (
		<>
		<section className={`hero hero-${type}`}
			style={{ backgroundImage: `url(${respFunction(imgSmall, imgMedium, imgFull)})` }}>
			<h1>{title}</h1>
		</section>
		{ type === 'large' ? <button onClick={goToNextSection} className="hero-button">↓ BITTE CLICKEN ODER SCROLLEN ↓</button> : null}
		
		</>
	)
}

export default Hero;