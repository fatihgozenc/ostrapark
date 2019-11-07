import React from 'react';
import useForm from 'react-hook-form';
import axios from 'axios';
const MAIL_PATH = 'api/index.php';

const ContactForm = () => {

	const [dataIsSent, setDataIsSent] = React.useState("");
	const { register, handleSubmit, watch, errors } = useForm();
	console.log(watch());

	const onSubmit = (formData) => {
		console.log(formData)
		// e.preventDefault();
		axios({
			method: 'post',
			url: `${MAIL_PATH}`,
			headers: { 'content-type': 'application/json' },
			data: formData
		})
		.then(result => setDataIsSent(result.data.sent))
		.catch(error => console.log(error.response));
	}
	return (
		<div className="contact-form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-block">
					<select className="floating-label-field" placeholder="Location Auswahlen" name="location" ref={register({ required: true })}>
						<option value="Ostra-Areal Dresden">Ostra-Areal Dresden</option>
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
					<input className="floating-label-field" placeholder="vorname" name="vorname" required ref={register({ required: true })} />
					<label className="floating-label" htmlFor="vorname">Vorname*</label>
				</div>
				<div className="form-block">
					<input className="floating-label-field" placeholder="nachname" name="nachname" required ref={register({ required: true })} />
					<label className="floating-label" htmlFor="nachname">Nachname*</label>
				</div>

				<div className="form-block">
					{errors.useremail && <span className="form-notvalid">Dieses Feld wird benötigt</span>}
					<input className="floating-label-field" placeholder="email" name="useremail" type="email" ref={register({ required: true })} />
					<label className="floating-label" htmlFor="useremail">E-Mail*</label>
					<p>Wir freuen uns, wenn Sie schon Angaben zu folgenden Anhaltspunkten machen können: </p>
					<ul className="list">
						<li>Catering (eigener Caterer oder über die Golden Door)</li>
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
					<input className="floating-label-field" type="submit" className="form-submit" value="Senden &rarr;" />
					<div className="form_send-success">
						<svg style={{width: 160, height: 160}}>
							<defs>
								<linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%"   stop-color="#fff"/>
									<stop offset="100%" stop-color="#666"/>
								</linearGradient>
							</defs>

							<circle cx="80" cy="80" r="70" stroke="url(#linear)" fill="transparent" strokeWidth="5"/>

						</svg>
					</div>
				</div>
			</form>
		</div >
	);
}


export default ContactForm;