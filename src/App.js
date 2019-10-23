import React from 'react';
import { Switch, Route, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

// import Search from './pages/Search';
// import NotFound from './pages/NotFound';
import { HomeProvider } from './context/HomeContext';
import { LocationProvider } from './context/LocationsContext';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';

import './App.scss';

const App = () => {
	const { location } = React.useContext(__RouterContext);
	const transitions = useTransition(location, location => location.pathname, {
		from:   { opacity: 0},
		enter:  { opacity: 1},
		leave:  { opacity: 0}
	});

	return (
		<HomeProvider>
			<Header />
			<main className="app" >
				<LocationProvider>
					{transitions.map(({ item, props, key }) => (
						<animated.div key={key} style={props}>
							<Switch location={item}>
								<Route exact path="/" component={ Home } />
							</Switch>
						</animated.div>
					))}
					</LocationProvider>
				</main>
			
			<Footer />
		</HomeProvider>
	);
}

export default App;