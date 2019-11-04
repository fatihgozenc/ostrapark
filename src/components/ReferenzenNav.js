import React from 'react';
import PageRouter from './PageRouter';
import { ReferenzenContext } from '../context/ReferenzenContext';

const navBack = (x, total) => {
	if (x === 0) {
		return x = total - 1
	} else if (x > 0 && x <= total) {
		return x = x - 1
	} else {
		return x
	}
}

const navNext = (x, total) => {
	if (x === total - 1) {
		return x = 0
	} else if (x >= 0 && x <= total) {
		return x = x + 1
	} else {
		return x
	}
}

const ReferenzenNav = (props) => {
	const [data] = React.useContext(ReferenzenContext);
	const dataLength = data.posts.length;
	const nextPostKey = navBack(props.selected, dataLength)
	const prevPostKey = navNext(props.selected, dataLength)

	return (
		<div className="referenzen-nav">
			<PageRouter route={`/referenzen/${data.posts[prevPostKey].slug}`}>&larr; BISHERIGE REFERENZ</PageRouter >
			<PageRouter route={`/referenzen/${data.posts[nextPostKey].slug}`}>NÄCHSTE REFERENZ &rarr;</PageRouter >
		</div>
	)

};

export default ReferenzenNav;