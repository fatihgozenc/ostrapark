import React from 'react';
import IconDownload from '../assets/icons/icon-download.svg'

const LocationFactsheets = ({item}) => {
	return (
		<button className="download-factsheet">
			<a href={item.factsheet} rel="noopener noreferrer" target="_blank">
				<span>DATENBLATT DOWNLOADEN</span>
				<img className="icon" src={IconDownload} alt="Datenblatt Download Icon" />
			</a>
		</button>
	)
}