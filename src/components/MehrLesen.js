import React from 'react';

const MehrLesen = (props) => {

	return (
		<div className="mehrlesen">
			<span className="mehrlesen_text">MEHR LESEN&nbsp;&nbsp;</span>
		<div className="mehrlesen_graph">
			<svg x="0px" y="0px" width="160px" height="6px" viewBox="0 0 160 6">
				<rect x="-0.032" y="2.5" fill={props.color ? props.color : `#666`} width="159" height="1"/>
				<polygon fill={props.color ? props.color : `#666`} points="154.979,6 158.682,3 154.979,0 156.392,0 160,3 156.633,6 "/>
			</svg>
		</div>
		
			{/* <div className="mehrlesen_arrow"/> */}
		</div>
	)
};

export default MehrLesen;