import React from 'react';
import Hero from '../components/Hero';
import { HomeContext } from '../context/HomeContext';
// import useForm from 'react-hook-form';
// import axios from 'axios';

import ContactForm from '../components/ContactForm';

const Kontakt = (props) => {
	const [data] = React.useContext(HomeContext);
	const getSingleData = data.posts.pages.filter(
		item => item.slug.indexOf((props.match.path).replace("/", "")) !== -1);

	const item = getSingleData[0];

	return (
		<>
			<Hero title={item.title}
				imgSmall={item.image.large}
				imgMedium={item.image.large}
				imgFull={item.image.full}
				type="locations"
			/>
			<section className="layout page-kontakt">
				<ContactForm />
			</section>
		</>
	)
};

export default Kontakt;