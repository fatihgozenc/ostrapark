import React from 'react';
import Hero from '../components/Hero';
import { HomeContext } from '../context/HomeContext';

const Datenschutz = (props) => {
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
			/>
			<section className="layout">
				<p>{(item.content)}</p>
			</section>
		</>
	)
};

export default Datenschutz;