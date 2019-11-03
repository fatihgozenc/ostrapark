import React, { useState } from 'react';
import { HomeContext } from '../context/HomeContext';
import { NavLink } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';

const Header = () => {
	const [data] = React.useContext(HomeContext);
	const [toggle, setToggle] = useState(false);
	const navbarGroup = React.createRef();
	const header = React.createRef();
	const menuToggler = React.createRef();

	const toggleAnim = (e) => {
		if (window.innerWidth < 600) {
			setToggle(!toggle)
			menuToggler.current.classList.toggle('change');
			header.current.classList.toggle('navopen');
			let group = navbarGroup.current;
			if (group.classList.contains('d-block')) {
				group.classList.remove('d-show');
				group.classList.remove('moveUp');
				setTimeout(() => {
					group.classList.remove('d-block')
				}, 500);
			} else {
				group.classList.add('d-block');
				setTimeout(() => {
					group.classList.add('moveUp');
					group.classList.add('d-show')
				}, 1);
			}
		}
	}

	const toggleAnimScroll = (e) => {
		window.scrollTo(0, 0);
		if (window.innerWidth < 600) {
			setToggle(!toggle)
			menuToggler.current.classList.toggle('change');
			header.current.classList.toggle('navopen');
			let group = navbarGroup.current;
			if (group.classList.contains('d-block')) {
				group.classList.remove('d-show');
				group.classList.remove('moveUp');
				setTimeout(() => {
					group.classList.remove('d-block')
				}, 500);
			} else {
				group.classList.add('d-block');

				setTimeout(() => {
					group.classList.add('moveUp');
					group.classList.add('d-show')
				}, 1);
			}
		}
	}

	const opening = useSpring({
		from: {opacity: 0}, to: {opacity: 1}
	});
	
	return (
		<animated.div style={opening}>

			<header ref={header}>
				<nav className="navbar">
					<NavLink className="navbar-item" to={'/'} onClick={toggle ? toggleAnimScroll : window.scrollTo(0, 0)} >
						<img src={data.posts['logo_weiss']} alt={data.posts['address_title'] + ' Logo'} id="logo" />
					</NavLink>
					<div ref={navbarGroup} className="navbar-item-group moveUpItem" >
						<NavLink className="navbar-item" to={'/locations'} onClick={toggleAnimScroll}>
							Locations
					</NavLink>
						<NavLink className="navbar-item" to={'/referenzen'} onClick={toggleAnimScroll}>
							Referenzen
					</NavLink>
						<NavLink className="navbar-item" to={'/kontakt'} onClick={toggleAnimScroll}>
							Kontakt
					</NavLink>
					</div>
					<div className="navbar-item navbar-toggler" ref={menuToggler} onClick={toggleAnim}>
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</div>
				</nav>
			</header>
		</animated.div>

	)
};

export default Header;