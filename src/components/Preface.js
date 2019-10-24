import React from 'react';
import { HomeContext } from '../context/HomeContext';

const Preface = () => {
	const [data, setData] = React.useContext(HomeContext);

	return (
		<section className="preface">
			<h3 className="preface-title">Das Areal mitten in Dresden lag Jahrzehnte im Dornröschenschlaf und ist heute ein innovatives Zentrum für Eventkultur</h3>
			<span className="preface-subtitle">Firmenevents | Konzerte | Festivals | Open Air | Messen | Tagungen | Produktpräsentationen</span>
			<div className="preface-texts">
			<p>Frauenkirche, Zwinger und Semperoper - was Dresden an Highlights zu bieten hat, liegt keinen Steinwurf auseinander. Doch was für Veranstalter besonders zählt: Hotels und Tagungsstätten sind gleich nebenan, verbunden durch eine klug ausgebaute Infrastruktur. Auch deshalb spricht man von Dresden als Stadt der kurzen Wege. Diesem Ruf setzt das neue Zentrum für Eventkultur nun den sprichwörtlichen Punkt auf das i: Das Ostra-Areal mit seinen verschiedenen, flexibel nutzbaren Eventlocations auf der ehemaligen Schlachthofinsel.</p>
			<p>Rund 40.000 m² umfasst die Gesamtfläche von Indoor- und Outdoorbereichen und ermöglicht durch deren Verschmelzung eine vielfältige Nutzung und vollkommen neue Veranstaltungskonzepte. Wie Module kann man die einzelnen Eventhallen und Außenbereiche wählen oder das Areal in seiner Gesamtheit bespielen. Dann können bis zu 6.000 Gäste hier tagen und feiern, verbunden mit ausgezeichneter Logistik, moderner Technik und einer grandiosen Seebühne, die diesen Ort unverwechselbar macht.</p>
			</div>
		</section>
	)
};

export default Preface;
