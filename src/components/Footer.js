import React from 'react';
import { HomeContext } from '../context/HomeContext';
import { animated, useSpring } from 'react-spring';
import PageRouter from './PageRouter';


const Footer = () => {
	const [data] = React.useContext(HomeContext);

	const opening = useSpring({
		opacity: 1, from: { opacity: 0 }, delay: 2000
	})

	return (
		<>
			<animated.div style={opening}>
				<PageRouter route={'/kontakt'} className="contact-router">Haben Sie fragen?<br /> Kontaktieren Sie Uns! &rarr;</PageRouter>
				<div className="newsletter">
					<h2 className="section-title">NEWSLETTER<span>NEWSLETTER</span></h2>
					<div className="newsletter-wrapper">
						<div className="newsletter-img" style={{ backgroundImage: `url(${data.posts.newsletter_bild})` }} />
						<div className="newsletter-text">{data.posts.newsletter_text}
							<a href="/newsletter">NEWSLETTER ABONNIEREN &rarr;</a>
						</div>
					</div>
				</div>
				<footer className="footer">
					<div className="footer-top">
						<img src={data.posts['logo']} alt="ostrapark-logo" />
						<hr />
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
							<p><PageRouter route={'/locations'}>Locations</PageRouter></p>
							<p><PageRouter route={'/referenzen'}>Referenzen</PageRouter></p>
							<p><PageRouter route={'/kontakt'}>Kontakt</PageRouter></p>
						</div>
						<div className="router">
							<p><PageRouter route={'/impressum'}>Impressum</PageRouter></p>
							<p><PageRouter route={'/datenschutz'}>Datenschutz</PageRouter></p>
							<p><a href='http://goldendoor.group'>&copy; GOLDEN DOOR 2019</a></p>
						</div>
						<hr />
					</div>
					<div className="footer-bottom">
						<img src={data.posts['gd_logo']} alt="goldendoor-logo" />
						<p><b>Golden Door GmbH</b> <br />{data.posts['gd_address']}</p>
						<p>Ostrapark ist eine Untermarke von Golden Door</p>
						<p><a href='http://goldendoor.group'>goldendoor.group</a></p>
					</div>

				</footer>
			</animated.div>

		</>
	)
};

export default Footer;
