import React from 'react';
import IconDownload from '../assets/icons/icon-download.svg'

const LocationSpecs = ({item}) => {

	console.log(item)
	return (
		<div className="location-specs">
			<div className="location-specs-wrapper">
				<div className="location-spec-item">
					<div className="title">FLÄCHE</div>
					<div className="value">{item.flache}</div>
				</div>
				<div className="location-spec-item">
					<div className="title">LÄNGE</div>
					<div className="value">{item.lange}</div>
				</div>
				<div className="location-spec-item">
					<div className="title">BREITE</div>
					<div className="value">{item.breite}</div>
				</div>
				<div className="location-spec-item">
					<div className="title">HÖHE</div>
					<div className="value">{item.hohe}</div>
				</div>
				<div className="location-spec-item">
					<div className="title">EMPFANG</div>
					<div className="value">{item.empfang}</div>
				</div>
				<div className="location-spec-item">
					<div className="title">REIHEN</div>
					<div className="value">{item.reihen}</div>
				</div>
				<div className="location-spec-item">
					<div className="title">PARLAMENT</div>
					<div className="value">{item.parlament}</div>
				</div>
				<div className="location-spec-item">
					<div className="title">BANKETT</div>
					<div className="value">{item.flache}</div>
				</div>
			</div>
			<button className="download-factsheet">
				<a href={item.factsheet} rel="noopener noreferrer" target="_blank">
					<span>DATENBLATT DOWNLOADEN</span>
					<img className="icon" src={IconDownload} alt="Datenblatt Download Icon" />
				</a>
			</button>
		</div>
	)
}

export default LocationSpecs;
