// Structure
// ------------------------------------------------
var form    = document.querySelector("form");
var input   = document.querySelector("input");
var entries = document.querySelector(".entries");
var total   = document.querySelector(".total");


// Setup
// ------------------------------------------------
var totalValue = 0;


// Events
// ------------------------------------------------

form.addEventListener("submit", enter);

function enter (event){
	event.preventDefault();

	//make sure input is number parseFloat
	var inputValue = parseFloat(input.value);

	//sum
	totalValue = totalValue + inputValue;

	//make list
	var newItem = document.createElement("LI");


	// change text
	newItem.textContent = inputValue;

	entries.appendChild(newItem);

	total.textContent = totalValue;
}

