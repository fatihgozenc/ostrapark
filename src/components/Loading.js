import React from 'react';
import { useSpring, animated } from 'react-spring';

export const Loading = () => {  
	const props = useSpring({
		opacity: 1, from: {opacity: 0}
		
	})
	
	return (
		<animated.div style={props}>
			<div className="loading">
				<div/>
				<span>
					Wird geladen...
				</span>
				<div/>
			</div>
		</animated.div>
	)
	
}