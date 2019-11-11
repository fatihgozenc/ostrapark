import React from 'react';
import { HomeContext } from '../context/HomeContext';

const Preface = () => {
	const [data] = React.useContext(HomeContext);

	const prefaceContent = (data.posts.pages[3].content).toString();
	const paragraphPattern = /[^\r\n]+((\r|\n|\r\n)[^\r\n]+)*/g;
	const paragraphs = prefaceContent.match(paragraphPattern)
	console.log(paragraphs)

	return (
		<section className="preface">
			<h3 className="preface-title">Das Areal mitten in Dresden lag Jahrzehnte im Dornröschenschlaf und ist heute ein innovatives Zentrum für Eventkultur</h3>
			<span className="preface-subtitle">Firmenevents | Konzerte | Festivals | Open Air | Messen | Tagungen | Produktpräsentationen</span>
			<div className="preface-texts">
				<p>{paragraphs[0]}</p>
				<p>{paragraphs[1]}</p>
			</div>
		</section>
	)
};

export default Preface;
