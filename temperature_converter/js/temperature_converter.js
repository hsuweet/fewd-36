//Structure
var tempF = document.querySelector('.fahrenheit');
var tempC = document.querySelector('.celcius');


//Events
tempF.addEventListener('keyup', calcF);
tempC.addEventListener('keyup', calcC);


//Event handler functions
function calcF(event) {
	if (tempF.value.length > 0) {
	   tempC.value = calcFahrenToCelc(tempF.value)
	} else {
	    tempC.value = '';
	}
}

function calcFahrenToCelc(tempF){
	var tempC=(tempF-32) * (5/9);
	return Math.round(tempC);
}

function calcC(event){
	if (tempC.value.length > 0) {
		tempF.value = calcCelcToFahren(tempF.value)
	} else {
		tempF.value = '';
	}
}

function calcCelcToFahren(tempC) {
 	var tempF=tempC * (9/5) + 32;
 	return Math.round(tempF);
}

