// Dynamically adjust rest of page for navigation bar's height.

window.onload = () => {
	const navHeight = document.getElementsByClassName('nav-bar')[0].offsetHeight;
	document.getElementsByClassName('welcome-block')[0].style.paddingTop = navHeight + 'px';
}
