import React from 'react';
import { Switch, Route, __RouterContext } from 'react-router-dom';
import { useTransition, animated, useSpring } from 'react-spring';
import { Helmet } from "react-helmet";

import { HomeProvider } from './context/HomeContext';
import { LocationsProvider } from './context/LocationsContext';
import { ReferenzenProvider } from './context/ReferenzenContext';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Home from './pages/Home.js';
import Locations from './pages/Locations.js';
import Location from './pages/Location.js';
import Referenzen from './pages/Referenzen.js';
import Referenz from './pages/Referenz.js';
import Kontakt from './pages/Kontakt.js';
import Impressum from './pages/Impressum.js';
import Datenschutz from './pages/Datenschutz.js';

import './App.scss';

const App = () => {
	const { location } = React.useContext(__RouterContext);
	const transitions = useTransition(location, location => location.pathname, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { position: 'absolute', opacity: 0 }
		// config: { delay: 1000, duration: 1000}
	});

	const opening = useSpring({
		from: { opacity: 0 }, to: { opacity: 1 }, config: { delay: 1000, duration: 1000 }

	})

	return (
		<HomeProvider>
			<Helmet>
				<title>Zentrum für Eventkultur in Dresden | Ostra-Areal</title>
				<meta name="description" content="Als Manufaktur für Erlebnismarketing Dresden ✓Firmenevents ✓Konzerte ✓Festivals ✓Open Air ✓Messen ✓Tagungen ➤ Jetzt Location mieten!" />
				<meta name="keywords" content="Event, Events, Location, Veranstaltungen, Veranstaltung, Konzerte, Hallen, Konzert, Messen, Halle, Messehalle, Ausstellungen, Ausstellungsfläche, Party, Feier, Parties, feiern, Parties feieren, Präsentationen, Praesentation, Großveranstaltung, Groß Event, Club's, Club, Künstler, Musik, Meinel, Kulturmanagement, Dresden, Kultur" />
			</Helmet>
			<Header />
			<animated.div style={opening}>
				<main className="app" >
					<LocationsProvider><ReferenzenProvider>
						{transitions.map(({ item, props, key }) => (
							<animated.div key={key} style={props}>
								<Switch location={item}>
									<Route exact path="/" component={Home} />
									<Route exact path="/locations" component={Locations} />
									<Route path="/locations/:slug" component={Location} />
									<Route exact path="/referenzen" component={Referenzen} />
									<Route path="/referenzen/:slug" component={Referenz} />
									<Route exact path="/kontakt" component={Kontakt} />
									<Route exact path="/impressum" component={Impressum} />
									<Route exact path="/datenschutz" component={Datenschutz} />
									<Route path="/" component={Home} />
								</Switch>
							</animated.div>
						))}
					</ReferenzenProvider></LocationsProvider>
				</main>
			</animated.div>
			<Footer />
		</HomeProvider>
	);
}

export default App;