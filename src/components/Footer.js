import React from 'react';
import { HomeContext } from '../context/HomeContext';
import { animated, useSpring } from 'react-spring';
import PageRouter from './PageRouter';
// import Newsletter from './Newsletter'

const Footer = () => {
	const [data] = React.useContext(HomeContext);

	const opening = useSpring({
		opacity: 1, from: { opacity: 0 }, delay: 3000
	})

	console.log(data)
	return (
		<>
		<animated.div style={opening}>
			
			{/* <Newsletter data={data}/> */}
			<footer className="footer">
			<PageRouter 
				route={'/kontakt'} 
				className="contact-router">Haben Sie fragen?<br /> Kontaktieren Sie Uns! &rarr;
			</PageRouter>
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
						<a href={`mailto: ${data.posts['e-mail']}`}>{data.posts['e-mail']}</a>
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
					<div className="gd_address"><b>Golden Door GmbH</b> <br />{data.posts['gd_address']}
						<div><b>Unser Büro in Dresden</b> <br />{data.posts['dresden_address']}</div>
					</div>
					<p>Ostrapark ist eine Untermarke von Golden Door</p>
					<p><a href='http://goldendoor.group'>goldendoor.group</a></p>
				</div>

			</footer>
		</animated.div>
		</>
	)
};

export default Footer;
