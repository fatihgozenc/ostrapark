import React from 'react';
import Hero from '../components/Hero';
import { HomeContext } from '../context/HomeContext';
import useForm from 'react-hook-form';
import axios from 'axios';



const Kontakt = (props) => {
	const [data] = React.useContext(HomeContext);
	const getSingleData = data.posts.pages.filter(
		item => item.slug.indexOf((props.match.path).replace("/", "")) !== -1);

	const item = getSingleData[0];

	const { register, handleSubmit, watch, errors } = useForm();
	console.log(watch('span.wpcf7-form-control-wrap.teilnehmerzahl'));

	const onSubmit = formData => { axios({
		method: 'post',
		url: 'http://ostrapark.narciss-taurus.de/wordpress/wp-json/contact-form-7/v1/contact-forms/139/feedback',
		data: formData
	})};

	return (
		<>
			<Hero title={item.title}
				imgSmall={item.image.large}
				imgMedium={item.image.large}
				imgFull={item.image.full}
				type="locations"
			/>
			<section className="layout page-kontakt">
				{/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-block">
						<label htmlFor="location">Location auswählen*:</label>
						<select name="span.wpcf7-form-control-wrap.location" ref={register({ required: true })}>
							<option value=""></option>
							<option value="Ostra-Areal Dresden">Ostra-Areal Dresden</option>
							<option value="Erlwein Capitol">Erlwein Capitol</option>
							<option value="Erlwein Forum">Erlwein Forum</option>
							<option value="Seehaus">Seehaus</option>
						</select>
					</div>
					<div className="form-block">
						<label htmlFor="termin">Termin:</label>
						<input name="termin" type="date" ref={register} />
					</div>
					<div className="form-block">
						<label htmlFor="budget">Budget:</label>
						<input name="budget" placeholder="€" type="number" ref={register} />
					</div>
					<div className="form-block">
						<label htmlFor="span.wpcf7-form-control-wrap.teilnehmerzahl">Geplante Teilnehmeranzahl:</label>
						<div className="form-check-group">
							<div className="form-check">
								<input className="form-check-input" type="radio" name="span.wpcf7-form-control-wrap.teilnehmerzahl" ref={register} value="20-50" />
								<label className="form-check-label" htmlFor="span.wpcf7-form-control-wrap.teilnehmerzahl">20-50</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" name="span.wpcf7-form-control-wrap.teilnehmerzahl" ref={register} value="50-100" />
								<label className="form-check-label" htmlFor="span.wpcf7-form-control-wrap.teilnehmerzahl">50-100</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" name="span.wpcf7-form-control-wrap.teilnehmerzahl" ref={register} value="100-500" />
								<label className="form-check-label" htmlFor="span.wpcf7-form-control-wrap.teilnehmerzahl">100-500</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" name="span.wpcf7-form-control-wrap.teilnehmerzahl" ref={register} value="500+" />
								<label className="form-check-label" htmlFor="span.wpcf7-form-control-wrap.teilnehmerzahl">über 500</label>
							</div>
						</div>
					</div>
					<div className="form-block">
						<label htmlFor="vorname">Vorname*</label>
						<input name="vorname" ref={register({ required: true })} />
					</div>
					<div className="form-block">
						<label htmlFor="nachname">Nachname*</label>
						<input name="nachname" ref={register({ required: true })} />
					</div>

					<div className="form-block">
						<label htmlFor="useremail">E-Mail*</label>
						<input name="useremail" type="email" ref={register({ required: true })} />
						<p>Wir freuen uns, wenn Sie schon Angaben zu folgenden Anhaltspunkten machen können: </p>
						<ul className="list">
							<li>Catering (eigener Caterer oder über die Golden Door)</li>
							<li>Mobiliar / Bestuhlung</li>
							<li>Technik</li>
							<li>Deko</li>
						</ul>
					</div>

					<div className="form-block">
						<label htmlFor="nachricht">Nachricht*</label>
						<textarea className="form-area" name="nachricht" rows="10" maxLength="6000" ref={register({ required: true })}></textarea>
					</div>

					{/* errors will return when field validation fails  */}
					{errors.exampleRequired && <span>This field is required</span>}

					<div className="form-block-checkbox">
						<label>
							<input name="acceptance" type="checkbox" ref={register({ required: true })} />Ich stimme mit den
                      		<a href="/datenschutz">Datenschutzbedingungen</a> von Golden Door GmbH überein.</label>
					</div>

					<input type="submit" className="form-submit" value="Senden &rarr;" />
				</form>
			</section>
		</>
	)
};

export default Kontakt;