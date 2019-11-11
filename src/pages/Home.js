import React from 'react';
import Start from '../components/Start';
import Preface from '../components/Preface';
import StartLocations from '../components/StartLocations';
import StartReferenzen from '../components/StartReferenzen';
import { Helmet } from "react-helmet";

const Home = (props) => {
	return (
		<>
			<Helmet>
				<title>Zentrum für Eventkultur in Dresden | Ostra-Areal</title>
				<meta name="description" content="Als Manufaktur für Erlebnismarketing Dresden ✓Firmenevents ✓Konzerte ✓Festivals ✓Open Air ✓Messen ✓Tagungen ➤ Jetzt Location mieten!" />
				<meta name="keywords" content="Event, Events, Location, Veranstaltungen, Veranstaltung, Konzerte, Hallen, Konzert, Messen, Halle, Messehalle, Ausstellungen, Ausstellungsfläche, Party, Feier, Parties, feiern, Parties feieren, Präsentationen, Praesentation, Großveranstaltung, Groß Event, Club's, Club, Künstler, Musik, Meinel, Kulturmanagement, Dresden, Kultur" />
				<meta property="og:site_name" content="Ostra-Areal" />
				<meta property="og:title" content="Zentrum für Eventkultur in Dresden | Ostra-Areal" />
				<meta property="og:description"
					content="Als Manufaktur für Erlebnismarketing Dresden ✓Firmenevents ✓Konzerte ✓Festivals ✓Open Air ✓Messen ✓Tagungen ➤ Jetzt Location mieten!" />
				<meta name="twitter:title" content="Zentrum für Eventkultur in Dresden | Ostra-Areal" />
				<meta name="twitter:description"
					content="Als Manufaktur für Erlebnismarketing Dresden ✓Firmenevents ✓Konzerte ✓Festivals ✓Open Air ✓Messen ✓Tagungen ➤ Jetzt Location mieten!" />
				<meta name="twitter:card" content="summary_large_image" />
			</Helmet>
			<Start />
			<Preface />
			<StartLocations />
			<StartReferenzen />
		</>
	)
};

export default Home;