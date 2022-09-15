'use strict';

const hamMenuButton = document.getElementById('nav-ham-menu');
const hamMenu = document.getElementsByClassName('mobile-a-wrapper')[0];

function openHamMenu() {
	hamMenu.style.display = 'block';
}

function closeHamMenu() {
	hamMenu.style.display = 'none';
}

function hamMenuOpen() {
	if (hamMenu.style.display === 'block') {
		return true;
	} else if (hamMenu.style.display === 'none') {
		return false;
	} else {
		return true;
	}
}

hamMenuButton.addEventListener('click', () => {
	if (hamMenuOpen()) {
		closeHamMenu();
	} else {
		openHamMenu();
	}
});

window.addEventListener('resize', () => {
	if (window.innerWidth >= 600 && hamMenuOpen()) {
		closeHamMenu();
	}
});
