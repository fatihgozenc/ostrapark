import React, {useState} from 'react';
import { HomeContext } from '../context/HomeContext';
import { NavLink } from 'react-router-dom';


const Header = () => {
	const [data, setData] = React.useContext(HomeContext);
	const [toggle, setToggle] = useState(false);
	const navbarGroup = React.createRef();
	const header = React.createRef();
	const menuToggler = React.createRef();

	const toggleAnim = (e) => {
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
	
	return (
		<header ref={header}>
			<nav className="navbar">
				<NavLink className="navbar-item" to={'/'} >
					 <img src={data.posts['logo_weiss']} id="logo"/>
				</NavLink>
				<div ref={navbarGroup} className="navbar-item-group moveUpItem" >
					<NavLink className="navbar-item" to={'/'} >
						Locations
					</NavLink>
					<NavLink className="navbar-item" to={'/'} >
						Referenzen
					</NavLink>
					<NavLink className="navbar-item" to={'/'} >
						Kontakt
					</NavLink>
				</div>
				<div className="navbar-item" ref={menuToggler} onClick={toggleAnim}>
					<div className="bar1"></div>
					<div className="bar2"></div>
					<div className="bar3"></div>
				</div>
			</nav>
		</header>
	)
};

export default Header;