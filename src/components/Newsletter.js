import React from 'react';

const Newsletter = ({data}) => {
	return (
		<div className="newsletter">
			<h2 className="section-title">NEWSLETTER<span>NEWSLETTER</span></h2>
			<div className="newsletter-wrapper">
				<div className="newsletter-img" style={{ backgroundImage: `url(${data.posts.newsletter_bild})` }} />
				<div className="newsletter-text">{data.posts.newsletter_text}
					<a href="/newsletter">NEWSLETTER ABONNIEREN &rarr;</a>
				</div>
			</div>
		</div>
	)
}

export default Newsletter;