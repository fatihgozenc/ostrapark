import React from 'react';
import { HomeContext } from '../context/HomeContext';
import { Link } from 'react-router-dom';
import {animated, useSpring } from 'react-spring';


const Footer = () => {
	const [data] = React.useContext(HomeContext);

	const opening = useSpring({
		opacity: 1, from: {opacity: 0}, delay: 2000
	})

	return (
		<>
			<animated.div style={opening}>
			<div className="newsletter">
				<h2 className="section-title">NEWSLETTER</h2>
				{/* <span>Newsletter</span> */}
				<div className="newsletter-wrapper">
					<div className="newsletter-img" style={{backgroundImage: `url(${data.posts.newsletter_bild})`}}/>
					<div className="newsletter-text">{data.posts.newsletter_text}
						<a href="#">NEWSLETTER ABONNIEREN &rarr;</a>
					</div>
					
				</div>
			</div>
			<footer className="footer">
				<div className="footer-top">
					<img src={data.posts['logo']} alt="ostrapark-logo"/>
					<hr/>
					<div className="address">
						<p className="address-title">{data.posts['address_title']}</p>
						<p>{data.posts['address_subtitle']}</p>
						<p className="address-text">{data.posts['address']}</p>
					</div>
					<div className="numbers">
						<p>T: {data.posts['telefon']}</p>
						<p>F: {data.posts['fax']}</p>
						<p>{data.posts['e-mail']}</p>
					</div>
					<div className="router">
						<p><Link to={'/locations'}>Locations</Link></p>
						<p><Link to={'/referenzen'}>Referenzen</Link></p>
						<p><Link to={'/kontakt'}>Kontakt</Link></p>
					</div>
					<div className="router">
						<p><Link to={'/impressum'}>Impressum</Link></p>
						<p><Link to={'/datenschutz'}>Datenschutz</Link></p>
						<p><a href='http://goldendoor.group'>&copy; GOLDEN DOOR 2019</a></p>
					</div>
					<hr/>
				</div>
				<div className="footer-bottom">
					<img src={data.posts['gd_logo']} alt="goldendoor-logo"/>
					<div className="address">
						<p>Golden Door GmbH</p>
						<p>{data.posts['gd_address']}</p>
						<p>Ostrapark ist eine Untermarke von Golden Door</p>
						<p><a href='http://goldendoor.group'>goldendoor.group</a></p>
					</div>
				</div>
				
			</footer>
			</animated.div>

		</>
	)
};

export default Footer;
