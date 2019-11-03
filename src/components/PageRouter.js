import React from 'react';
import { Link } from 'react-router-dom';


const PageRouter = ({ route, text, children, className }) => {

	const toggleAnimScroll = (e) => {
		window.scrollTo(0, 0);
	}

	return (
		<Link to={route} className={`link-router ${className}`} onClick={toggleAnimScroll}>
			{text}{children}
		</Link>
	)
}

export default PageRouter;