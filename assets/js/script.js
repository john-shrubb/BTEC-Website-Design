'use strict';

// Dynamically adjust rest of page for navigation bar's height.

window.addEventListener('load', function() {
	// navHeight is the height of the navigation bar

	const navHeight = document.getElementsByClassName('nav-bar')[0].offsetHeight;

	// Dynamically make sure that rest of content is just below navigation bar

	document.getElementsByClassName('welcome-block')[0].style.paddingTop = navHeight + 'px';
});

window.addEventListener('resize', () => {
	// Get height of navigation bar

	const navHeight = document.getElementsByClassName('nav-bar')[0].offsetHeight;

	// Dynamically make sure that rest of content is just below navigation bar
	
	document.getElementsByClassName('welcome-block')[0].style.paddingTop = navHeight + 'px';
});

window.addEventListener('resize', function() {
	// Width of page

	const width = window.innerWidth;

	// Links shown on a device below 600 pixels in width

	const hamburgerMenuLinks = document.getElementsByClassName('mobile-a-wrapper')[0];

	if (width > 600) {
		// Hide hamburger menu

		hamburgerMenuLinks.style.display = 'none';
	}
});
