import React from 'react';
import Hero from '../components/Hero';
import { HomeContext } from '../context/HomeContext';
import { Helmet } from "react-helmet";

import ContactForm from '../components/ContactForm';

const Kontakt = (props) => {
	const [data] = React.useContext(HomeContext);
	const getSingleData = data.posts.pages.filter(
		item => item.slug.indexOf((props.match.path).replace("/", "")) !== -1);

	const item = getSingleData[0];

	return (
		<>
			<Helmet>
				<title>{item.title} | Ostra-Areal</title>
				<link rel="canonical" href={`http://ostrapark-location.de/${item.title.toLowerCase()}`} />
			</Helmet>
			<Hero title={item.title}
				imgSmall={item.image.large}
				imgMedium={item.image.large}
				imgFull={item.image.full}
				type="large"
			/>
			<section className="layout page-kontakt">
				<ContactForm data={data} />
			</section>
		</>
	)
};

export default Kontakt;