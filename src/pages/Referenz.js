import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import respFunction from '../helpers/respFunction';
import { ReferenzenContext } from '../context/ReferenzenContext';
import Hero from '../components/Hero';
import ReferenzenNav from '../components/ReferenzenNav';
import { Helmet } from "react-helmet";

const Referenz = (props) => {
	const [data] = React.useContext(ReferenzenContext);
	const getSingleData = data.posts.filter(
		item => item.slug.indexOf(props.match.params.slug) !== -1);
	const item = getSingleData[0];

	const idValues = data.posts.map((mapped, key) => {
		return [mapped.id, key, item.id]
	})

	const matchedValue = (arr) => {
		let id;
		arr.map((item, key) => {
			if (item[0] === item[2]) {
				id = key
			}
		})
		return id
	}

	const selectedPostKey = matchedValue(idValues);

	const paragraphs = item.content.split("\n\r");
	const getSentences = /([A-Z][^\.!?]*[\.!?])/g;
	const allSentences = paragraphs[0].match(getSentences);
	console.log(allSentences)
	const sentences = paragraphs[0];
	const getHalf = Math.ceil(allSentences.length / 2)
	const firstHalfOfParagraph = allSentences.slice(0, getHalf);
	const lastHalfOfParagraph = allSentences.slice(getHalf, allSentences.length);

	return (
		<>
			<Helmet>
				<title>{item.title} | Ostra-Areal | Zentrum für Eventkultur in Dresden</title>
				<link rel="canonical" href={`http://ostrapark-location.de/${item.title.toLowerCase()}`} />
				<meta name="description" content={item.content.slice(0, 100)} />
				<meta property="og:title" content={`${item.title} | Ostra-Areal | Zentrum für Eventkultur in Dresden`} />
				<meta property="og:description" content={item.content.slice(0, 100)} />
				<meta name="twitter:title" content={`${item.title} | Ostra-Areal | Zentrum für Eventkultur in Dresden`} />
				<meta name="twitter:description" content={item.content.slice(0, 100)} />
			</Helmet>
			<Hero title={item.title}
				imgSmall={item.image.medium}
				imgMedium={item.image.medium}
				imgFull={item.image.full}
				type="large"
			/>
			<section className="referenz">

				<div className="location-gallery">
					<CarouselProvider
						naturalSlideWidth={respFunction(160, 160, 190)}
						naturalSlideHeight={respFunction(120, 90, 100)}
						totalSlides={item.slider.length}
						isPlaying={true}
						interval={6000}
						touchEnabled={respFunction(true, true, false)}
						dragEnabled={respFunction(true, true, false)}
						infinite={respFunction(true, true, true)}>
						<Slider >
							{item.slider.map((url, index) => (
								<Slide key={index} index={index}>
									<div className="location-gallery-item" style={{ backgroundImage: `url('${url}')` }} />
								</Slide>
							))}
						</Slider>
						<div className="imgslider-nav-group">
							<ButtonBack>&larr;</ButtonBack><ButtonNext>&rarr;</ButtonNext>
						</div>
					</CarouselProvider>
				</div>
				<h3 className="referenz-title">{item.title}</h3>
				<div className="referenz-text">
					{/* {console.log(firstHalfOfParagraph, lastHalfOfParagraph)} */}
					<p className="referenz-content">
						{item.content}
					</p>
					{/* {paragraphs[1] === undefined
						? <><p>{firstHalfOfParagraph}</p><div className="break" /><p>{lastHalfOfParagraph}</p></>
						: <><p>{paragraphs[0]}</p><div className="break" /><p>{paragraphs[1].replace('\n', '&nbsp;')}<br />{paragraphs[2]}</p></>} */}

				</div>
			</section>

			<ReferenzenNav selected={selectedPostKey} />
		</>
	)
};

export default Referenz;
