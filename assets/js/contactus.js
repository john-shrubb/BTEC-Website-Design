const contactSubmitButton = document.querySelector('button#contactSubmitButton');

const clearForm = () => {
	const inputs = document.querySelector('form>div.inputs').children;

	for (let x = 0; x < inputs.length; x++) {
		inputs[x].value = '';
	}
};