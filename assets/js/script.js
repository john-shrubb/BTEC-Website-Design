'use strict';

// Dynamically adjust rest of page for navigation bar's height.

window.onload = function() {
	window.onresize();
	// navHeight is the height of the navigation bar

	const navHeight = document.getElementsByClassName('nav-bar')[0].offsetHeight;

	// Dynamically make sure that rest of content is just below navigation bar

	document.getElementsByClassName('welcome-block')[0].style.paddingTop = navHeight + 'px';

	// Dynamically make hamburger menu icon the height of the navigation bar

	const navHamMenuIcon = document.getElementById('nav-ham-menu').children[0];

	navHamMenuIcon.style.height = navHeight + 'px';
	document.getElementById('nav-ham-menu').style.height = navHeight + 'px';
};

window.onresize = function() {
	const height = window.innerHeight;
	const width = window.innerWidth;

	// Links shown on a device below 600 pixels in width

	const hamburgerMenuButton = document.getElementById('nav-ham-menu');
	const hamburgerMenuLinks = document.getElementsByClassName('mobile-a-wrapper')[0];

	// Links shown on a device above 600 pixels in width

	const desktopLinks = document.getElementsByClassName('a-wrapper')[0];

	if (width <= 600) {
		// Show hamburger menu

		hamburgerMenuButton.style.display = "inline-block";

		// Hide desktop links

		desktopLinks.style.display = 'none';
	} else {
		// Hide hamburger menu

		hamburgerMenuButton.style.display = 'none';
		hamburgerMenuLinks.style.display = 'none';

		// Show desktop links

		desktopLinks.style.display = 'flex';
	}
};
