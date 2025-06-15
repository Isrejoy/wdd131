function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234';
}
function isFutureMonth(month) {
    const now = new Date();
    return Number(month) > (now.getMonth() + 1);
}
function isFutureYear(year) {
    const now = new Date();
    return Number('20' + String(year)) > now.getFullYear();
}
function displayError(msg) {
	// display error message
	document.querySelector('.errorMsg').innerHTML = msg;
}
function submitHandler(event) {
	event.preventDefault();
	let errorMsg = '';
	console.log(this.cardNumber.value);
	// clear any previous errors
	displayError('');
	// check credit card number
	if (isNaN(this.cardNumber.value)) {
		// it is not a valid number
		errorMsg += 'Card number is not a valid number\n';
	} else if (!isCardNumberValid(this.cardNumber.value)) {
		// it is a number, but is it valid?
		errorMsg += 'Card number is not a valid card number\n';
	} else if (isNaN(this.expirationMonth.value) || isNaN(this.expirationYear.value)) {
        errorMsg += 'The expiration date or month is not a valid number\n'
    } else if (!isFutureYear(this.expirationYear.value)) {
        if ('20' + this.expirationYear.value == new Date().getFullYear()) {
            if (!isFutureMonth(this.expirationMonth.value)) {
                errorMsg += 'The expiration date cannot be previous date\n';
            }
        } else {
            errorMsg += 'The expiration date cannot be previous date\n';
        }

    }
	if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg);
		return false
	}
	return true
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler);