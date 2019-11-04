import React from 'react';
import { ReferenzenContext } from '../context/ReferenzenContext';
import PageRouter from '../components/PageRouter';
import respFunction from '../helpers/respFunction';
import Hero from '../components/Hero'


const Referenzen = (props) => {
	const [data] = React.useContext(ReferenzenContext);

	return (
		<>
			<Hero title={(props.match.path).replace('/', '')}
				imgSmall={data.posts[3].image.large}
				imgMedium={data.posts[3].image.large}
				imgFull={data.posts[3].image.full}
				type="large"
			/>

			<section className="referenzen-list">
				{data.posts.map((item, key) => (
					key % 2 > 0 && window.innerWidth > 767
						? <div key={item.id} className="referenzen_list_item">
							<div className="referenzen_list_item-text">
								<h2 className="section-subtitle">{item.title}</h2>
								<p>{item.excerpt}</p>
								<PageRouter route={`/referenzen/${item.slug}`} text={`MEHR LESEN `}>&rarr;</PageRouter>
							</div>
							<div className="break" />
							<div className="referenzen_list_item-img" style={{
								backgroundImage: `url(${respFunction(
									item.image.thumbnail,
									item.image.medium,
									item.image.full)})`
							}} />
						</div>

						: <div key={item.id} className="referenzen_list_item">
							<div className="referenzen_list_item-img" style={{
								backgroundImage: `url(${respFunction(
									item.image.thumbnail,
									item.image.medium,
									item.image.full)})`
							}} />
							<div className="break" />
							<div className="referenzen_list_item-text">
								<h2 className="section-subtitle">{item.title}</h2>
								<p>{item.excerpt}</p>
								<PageRouter route={`/referenzen/${item.slug}`} text={`MEHR LESEN `}>&rarr;</PageRouter>
							</div>
						</div>
				))}
			</section>
		</>
	)
};

export default Referenzen;