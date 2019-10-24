import React from 'react';
import { LocationsContext } from '../context/LocationsContext';
import {respImg} from '../helpers/respImg';

const Location = (props) => {
	const [data] = React.useContext(LocationsContext);
	let getSingleData = data.posts.filter(item => item.slug.indexOf(props.match.params.slug) !== -1);
	let item = getSingleData[0];
	let itemDetails = item.excerpt.split('\n');

	return (
		<>
			<section className="hero" 
				style={{backgroundImage: `url(${respImg(item.image.medium, item.image.full)})`}}>
				<h1>{item.title}</h1>
			</section>
			
			<section className="location">
				<img src={item.logo} alt={item.title + ' Logo'} />
				<p>{item.content}</p>
				<a href={item.facebook}><i className="icon-facebook"></i></a> 
				<a href={item.instagram}><i className="icon-instagram"></i></a>
				<ul>{itemDetails.map( detail => (
					<li key={Math.random()}>{detail}</li>
				))}</ul>
			</section>
		</>
	)
};

export default Location;