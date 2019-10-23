import React from 'react';
import Start from '../components/Start';
import Preface from '../components/Preface';
import StartLocations from '../components/StartLocations';
import StartReferenzen from '../components/StartReferenzen';

const Home = () => {
	return (
		<>
			<Start/>
			<Preface/>
			<StartLocations/>
			<StartReferenzen/>
		</>
	)
};

export default Home;