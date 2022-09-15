'use strict';

const contactSubmitButton = document.querySelector('button#contactSubmitButton');

const clearForm = () => {
	const inputs = document.querySelector('form>div.inputs').children;
	const inputsMobile = document.querySelector('.mobile-form').children;

	for (let x = 0; x < inputs.length; x++) {
		inputs[x].value = '';
	}

	for (let x = 0; x < inputsMobile.length; x++) {
		inputsMobile[x].value = '';
	}
};

// Mirror mobile form and desktop form

window.addEventListener('keypress', () => {
	if (window.innerWidth > 800) {
		document.querySelector('#yournamem').value = document.querySelector('#yourname').value;
		document.querySelector('#youremailm').value = document.querySelector('#youremail').value;
		document.querySelector('#yourmessagem').value = document.querySelector('#yourmessage').value;
	} else {
		document.querySelector('#yourname').value = document.querySelector('#yournamem').value;
		document.querySelector('#youremail').value = document.querySelector('#youremailm').value;
		document.querySelector('#yourmessage').value = document.querySelector('#yourmessagem').value;

	}
});