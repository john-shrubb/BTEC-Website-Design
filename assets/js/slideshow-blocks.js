'use strict';

let slideshowBlocks = Array.from(document.getElementsByClassName('slideshow-block'));

for (let x in slideshowBlocks) {
	slideshowBlocks[x].currentSlideshowIndex = 0;
}

/**
 * Searches through an array for an element with a matching class name.
 * Avoid passing arrays with more than one classname or it will return the last element it finds with the matching class name.
 * @param {Array} array 
 * @param {String} className 
 * @returns false if no classname is found or element itself if an element with a matching classname is found
 */

function getElementInArrayWtihClass(array, className) {
	// Ensure if a HTMLCollection is passed in it is converted to an array to avoid headache

	array = Array.from(array);

	// Is either set to false if no element is found or the element itself if found.

	let foundElement = false;

	// For each element in the array

	array.forEach(function(value) {
		// Array of each individual class name in element

		const classnames = value.className.split(' ');

		// For each classname in each element

		classnames.forEach(function (classname) {
			// Must be an exact match to return an element

			if (classname === className) {
				foundElement = value;
			}
		});

	});

	return foundElement;
}