// Structure
// ------------------------------------------------
var form    = document.querySelector("form");
var input   = document.querySelector("input");
var entries = document.querySelector(".entries");
var total   = document.querySelector(".total");

// Setup
// ------------------------------------------------
var totalValue = 0;
var receipt = {
	"items": []
}


// Events
// ------------------------------------------------

form.addEventListener("submit", enter);

function enter(event){
	event.preventDefault();

	//get data out of page
	var entry = parseFloat(input.value);
	var items = receipt.items.push(entry)

	createItem(entry);
	localStorage.setItem('receipt', JSON.stringify(receipt));

}

function createItem(item) {
	//make list
	var newItem = document.createElement("LI");

	newItem.textContent = '$' + item;
	
	totalValue = totalValue + parseFloat(item);

	entries.appendChild(newItem);

	total.textContent = '$' + totalValue;

	// resets field when user presses enter
	form.reset();

}

// NOT DONE
function pageLoad(event) {
	// Get theme object out of localStorage
	if (localStorage.getItem('receipt') == null) {
		createItem(entry);
	} else {
		receipt = JSON.parse(localStorage.getItem('receipt'));
		
	}

}