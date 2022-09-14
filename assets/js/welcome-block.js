// This script adds changing background pictures on the div.welcome-block element in ../../index.html
// Should not be imported into other pages otherwise it may cause errors.

const picturesToCyclethrough = ['welcome-block-1.jpg', 'welcome-block-2.webp'];
let currentPictureIndex = 0;

const welcomeBlock = document.getElementsByClassName('welcome-block')[0];
welcomeBlock.style.backgroundImage = 'url(\'./assets/images/' + picturesToCyclethrough[0] + '\')';

setInterval(() => {
	currentPictureIndex++;

	if (currentPictureIndex === picturesToCyclethrough.length) {
		currentPictureIndex = 0;
	}


	welcomeBlock.style.backgroundImage = 'url(\'./assets/images/' + picturesToCyclethrough[currentPictureIndex] + '\')';
}, 10000);