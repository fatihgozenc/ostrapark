import React from 'react';
import Hero from '../components/Hero';
import { HomeContext } from '../context/HomeContext';
import useForm from 'react-hook-form'


const Kontakt = (props) => {
	const [data] = React.useContext(HomeContext);
	const getSingleData = data.posts.pages.filter(
		item => item.slug.indexOf((props.match.path).replace("/", "")) !== -1);

	const item = getSingleData[0];

	const { register, handleSubmit, watch, errors } = useForm()
	const onSubmit = formData => { console.log(formData) }

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
						<label htmlFor="location">Location*:</label>
						<select name="location" ref={register({ required: true })}>
							<option value="">- Location auswählen -</option>
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
						<label htmlFor="teilnehmeranzahl">Geplante Teilnehmeranzahl:</label>
						<div className="form-check-group">
							<div className="form-check">
								<input className="form-check-input" type="radio" name="teilnehmeranzahl" id="participants1" value="20-50" />
								<label className="form-check-label" htmlFor="participants1">20-50</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" name="teilnehmeranzahl" id="participants2" value="50-100" />
								<label className="form-check-label" htmlFor="participants2">50-100</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" name="teilnehmeranzahl" id="participants3" value="100-500" />
								<label className="form-check-label" htmlFor="participants3">100-500</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" name="teilnehmeranzahl" id="participants4" value="500+" />
								<label className="form-check-label" htmlFor="participants4">über 500</label>
							</div>
						</div>
					</div>
					<div className="form-block">
						<label htmlFor="vorname">Vorname:*</label>
						<input name="vorname" ref={register({ required: true })} />
					</div>
					<div className="form-block">
						<label htmlFor="nachname">Nachname:*</label>
						<input name="nachname" ref={register({ required: true })} />
					</div>

					<div className="form-block">
						<p>Wir freuen uns, wenn Sie schon Angaben zu folgenden Anhaltspunkten machen können: </p>
						<ul className="list">
							<li>Catering (eigener Caterer oder über die Golden Door)</li>
							<li>Mobiliar / Bestuhlung</li>
							<li>Technik</li>
							<li>Deko</li>
						</ul>
					</div>

					<div className="form-block">
						<textarea className="form-area" name="angaben" rows="10" maxLength="6000" ref={register({ required: true })}></textarea>
					</div>

					{/* errors will return when field validation fails  */}
					{errors.exampleRequired && <span>This field is required</span>}

					<div className="form-block-checkbox">
						<label>
							<input type="checkbox" ref={register({ required: true })} />Ich stimme mit den
                      		<a href="/datenschutz">Datenschutzbedingungen</a> von Golden Door GmbH über ein.</label>
					</div>

					<input type="submit" className="form-submit" value="Senden &rarr;" />
				</form>
				{/* 
				<form className="plvr" role="form" method="post" id="reused_form">

					<div className="row">
						<div className="col-sm-12 selectdiv">
							<label htmlFor="location">Location *</label>
							<select name="location" required="" className="form-control" id="location">
								<option value="">- Location auswählen -</option>
								<option value="Ostra-Areal Dresden">Ostra-Areal Dresden</option>
								<option value="Erlwein Capitol">Erlwein Capitol</option>
								<option value="Erlwein Forum">Erlwein Forum</option>
								<option value="Seehaus">Seehaus</option>

							</select>
						</div>

					</div>


					<div className="row">
						<div className="col-sm-6 form-group">
							<label htmlFor="Datum">Termin:</label>
							<input type="date" className="form-control" id="date" name="Datum" placeholder="TT.MM.JJJJ" />
							<div className="col-sm-6 form-group">
								<label htmlFor="budget">Budget:</label>
								<input className="form-control currency" type="number" id="budget" name="budget" value="" placeholder="€" min="0" step="1" data-number-to-fixed="2" data-number-stepfactor="500" />
							</div>


							<div className="row">
								<div className="col-sm-12" style="margin-bottom: 15px;">
									<label style="margin-bottom: 10px;" htmlFor="teilnehmeranzahl">Geplante Teilnehmeranzahl:</label>
									<br />
									<div className="form-check form-check-inline">
										<input className="form-check-input" type="radio" name="teilnehmeranzahl" id="participants1" value="20-50" />
										<label className="form-check-label" htmlFor="participants1">20-50</label>
									</div>
									<div className="form-check form-check-inline">
										<input className="form-check-input" type="radio" name="teilnehmeranzahl" id="participants2" value="50-100" />
										<label className="form-check-label" htmlFor="participants2">50-100</label>
									</div>
									<div className="form-check form-check-inline">
										<input className="form-check-input" type="radio" name="teilnehmeranzahl" id="participants3" value="100-500" />
										<label className="form-check-label" htmlFor="participants3">100-500</label>
									</div>
									<div className="form-check form-check-inline">
										<input className="form-check-input" type="radio" name="teilnehmeranzahl" id="participants4" value="500+" />
										<label className="form-check-label" htmlFor="participants4">über 500</label>
									</div>
								</div>
							</div>


							<div className="row">
								<div className="col-sm-6 form-group">
									<label htmlFor="Vorname">Vorname: *</label>
									<input type="text" className="form-control" id="vorname" name="vorname" required="" maxlength="50" />
								</div>
								<div className="col-sm-6 form-group">
									<label htmlFor="Nachname">Nachname: *</label>
									<input type="text" className="form-control" id="nachname" name="nachname" required="" maxlength="50" />
								</div>
							</div>


							<div className="row">
								<div className="col-sm-6 form-group">
									<label htmlFor="email"> Email: *</label>
									<input type="email" className="form-control" id="email" name="email" required="" maxlength="50" />
								</div>
								<div className="col-sm-6 form-group">
									<label htmlFor="telefon"> Telefon: *</label>
									<input type="tel" className="form-control" id="telefon" name="telefon" required="" maxlength="50" />
								</div>
							</div>

							<div className="row">
								<div className="col-sm-12">
									<p>Wir freuen uns, wenn Sie schon Angaben zu folgenden Anhaltspunkten machen können: </p>
									<ul className="list">
										<li>Catering (eigener Caterer oder über die Golden Door)</li>
										<li>Mobiliar / Bestuhlung</li>
										<li>Technik</li>
										<li>Deko</li>
									</ul>
									<textarea className="form-control" id="angaben" name="angaben" rows="10" maxlength="6000" required=""></textarea>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12">
									<div className="checkbox">
										<label>
											<input type="checkbox" required="">Ich stimme mit den/></input>
											<a href="datenschutz.html">Datenschutzbedingungen</a> von Golden Door GmbH über ein.</label>
									</div>
									<span className="text-small">* PFLICHTFELDER</span>
								</div>
							</div>

							<div className="row">
								<div className="col">
									<button type="submit" className="btn btn-submit" id="send">Senden</button>
								</div>
							</div>
						</div>
					</div>

				</form>
			 */}
			</section>

		</>
	)
};

export default Kontakt;