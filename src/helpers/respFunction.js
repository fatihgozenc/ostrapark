const respFunction = (mobileValue, tabletValue, desktopValue) => {
	if (window.innerWidth < 768) {
		return mobileValue
	} else if (window.innerWidth > 767 && window.innerWidth < 1025) {
		return tabletValue;
	} else {
		return desktopValue;
	}
}

export default respFunction;