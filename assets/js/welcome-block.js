'use strict';

// This script adds changing background pictures on the div.welcome-block element in ../../index.html
// Should not be imported into pages other than index.html.

const picturesToCyclethrough = ['./assets/images/welcome-block-1.jpg', './assets/images/welcome-block-2.webp'];
let currentPictureIndex = 0;

// Preload all images

function preloadImage(imageURL) {
	const image = new Image();
	image.src = imageURL;
	return true;
}

picturesToCyclethrough.forEach(preloadImage);

// Set welcome block background to index 0 in pictures array.

const welcomeBlock = document.getElementsByClassName('welcome-block')[0];
welcomeBlock.style.backgroundImage = 'url(\'' + picturesToCyclethrough[0] + '\')';

setInterval(() => {
	currentPictureIndex++;

	if (currentPictureIndex === picturesToCyclethrough.length) {
		currentPictureIndex = 0;
	}

	// e.g url('./assets/images/welcome-block-1.jpg')
	welcomeBlock.style.backgroundImage = `url('${picturesToCyclethrough[currentPictureIndex]}')`;
}, 10000);