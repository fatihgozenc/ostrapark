import React from 'react';
import useForm from 'react-hook-form';
import axios from 'axios';
const MAIL_PATH = 'http://ostrapark.narciss-taurus.de/api/index.php';

const ContactForm = (props) => {

	const [dataIsSent, setDataIsSent] = React.useState("");
	const { register, handleSubmit, watch, errors } = useForm();

	const kontaktForm = React.useRef();
	const sending = React.useRef();
	const successMessage = React.useRef();
	const emailparent = React.useRef();

	const onSubmit = (formData) => {
		axios({
			method: 'post',
			url: `${MAIL_PATH}`,
			headers: { 'content-type': 'application/json' },
			data: formData
		})
			.then(result => setDataIsSent(result.data.sent))
			.catch(error => console.log(error.response));
	}

	const isMailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const sendPostAnim = (e) => {
		if (
			watch('nachname').length > 2 &&
			watch('vorname').length > 2 &&
			isMailValid.test(watch('useremail')) &&
			watch('nachricht').length > 2
		) {
			e.target.classList.add('goAway')
			sending.current.classList.add('d-show');
			setTimeout(() => {
				sending.current.classList.add('goAway');
				sending.current.classList.remove('d-show');
				setTimeout(() => {
					successMessage.current.classList.add('d-show')
				}, 150);
			}, 1500);
		} else if (isMailValid.test(watch('useremail')) === false) {
			emailparent.current.firstElementChild.style.border = '1px solid red';
		} else return null
	}

	return (
		<div className="contact-form">
			<form ref={kontaktForm} onSubmit={handleSubmit(onSubmit)}>
				<div className="form-block">
					{errors.location && <span className="form-notvalid">Dieses Feld wird benötigt</span>}
					<select className="floating-label-field" placeholder="Location Auswahlen" name="location" ref={register({ required: true })}>
						<option value="Ostra-Areal Dresden">Open-Air</option>
						<option value="Erlwein Capitol">Erlwein Capitol</option>
						<option value="Erlwein Forum">Erlwein Forum</option>
						<option value="Seehaus">Seehaus</option>
					</select>
					<label className="floating-label notinput" htmlFor="location">Location auswählen*:</label>
				</div>
				<div className="form-block">
					<input className="floating-label-field" placeholder="dd/mm/yy" name="termin" type="date" ref={register} />
					<label className="floating-label notinput" htmlFor="termin">Termin:</label>
				</div>
				<div className="form-block">
					<input className="floating-label-field" name="budget" placeholder="€" type="number" ref={register} />
					<label className="floating-label" htmlFor="budget">Budget(€):</label>
				</div>
				<div className="form-block">
					<div className="form-check-group">
						<div className="form-check">
							<input className="form-check-input" type="radio" name={`teilnehmerzahl`} ref={register} value="20-50" />
							<label className="form-check-label floating-label" htmlFor={`teilnehmerzahl`}>20-50</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio" name={`teilnehmerzahl`} ref={register} value="50-100" />
							<label className="form-check-label floating-label" htmlFor={`teilnehmerzahl`}>50-100</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio" name={`teilnehmerzahl`} ref={register} value="100-500" />
							<label className="form-check-label floating-label" htmlFor={`teilnehmerzahl`}>100-500</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio" name={`teilnehmerzahl`} ref={register} value="500+" />
							<label className="form-check-label" htmlFor={`teilnehmerzahl`}>über 500</label>
						</div>
					</div>
					<label className="floating-label floated" htmlFor={`teilnehmerzahl`}>Geplante Teilnehmeranzahl:</label>
				</div>
				<div className="form-block">
					{errors.vorname && <span className="form-notvalid">Dieses Feld wird benötigt</span>}
					<input className="floating-label-field" placeholder="vorname" name="vorname" ref={register({ required: true })} />
					<label className="floating-label" htmlFor="vorname">Vorname*</label>
				</div>
				<div className="form-block">
					{errors.nachname && <span className="form-notvalid">Dieses Feld wird benötigt</span>}
					<input className="floating-label-field" placeholder="nachname" name="nachname" ref={register({ required: true })} />
					<label className="floating-label" htmlFor="nachname">Nachname*</label>
				</div>

				<div className="form-block" ref={emailparent}>
					{errors.useremail && <span className="form-notvalid">Dieses Feld wird benötigt</span>}
					<input className="floating-label-field" placeholder="email" name="useremail" type="email" ref={register({ required: true })} />
					<label className="floating-label" htmlFor="useremail">E-Mail*</label>
					<p>Wir freuen uns, wenn Sie schon Angaben zu folgenden Anhaltspunkten machen können: </p>
					<ul className="list">
						<li>Catering (eigener Caterer oder über Golden Door)</li>
						<li>Mobiliar / Bestuhlung</li>
						<li>Technik</li>
						<li>Deko</li>
					</ul>
				</div>

				<div className="form-block">
					{errors.nachricht && <span className="form-notvalid">Dieses Feld wird benötigt</span>}
					<textarea className="form-area floating-label-field" placeholder="nachricht" name="nachricht" rows="10" maxLength="6000" ref={register({ required: true })}></textarea>
					<label className="floating-label" htmlFor="nachricht">Nachricht*</label>
				</div>

				<div className="form-block-checkbox">
					<label>
						{errors.acceptance && <span className="form-notvalid">Dieses Feld wird benötigt</span>}
						<input className="floating-label-field" name="acceptance" type="checkbox" ref={register({ required: true })} />Ich stimme mit den
						<a href="/datenschutz"> <b>Datenschutzbedingungen</b></a> von Golden Door GmbH überein.</label>
				</div>
				<div className="form_send">
					<div className="form_send-success">
						<svg ref={sending}>
							<defs>
								<linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" stopColor="#fff" />
									<stop offset="100%" stopColor="#666" />
								</linearGradient>
							</defs>
							<circle cx="80" cy="80" r="70" stroke="url(#linear)" fill="transparent" strokeWidth="5" />
						</svg>
						<p ref={successMessage} className="form_send-success-msg">Vielen Dank für Ihre Anfrage.<br />Wir melden uns umgehend bei Ihnen.</p>
					</div>
					<input onClick={sendPostAnim} className="floating-label-field" type="submit" className="form-submit" value="Senden &rarr;" />
				</div>
			</form>
		</div >
	);
}

export default ContactForm;