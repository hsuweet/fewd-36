// Structure
var form = document.querySelector("form");
var input = document.querySelector("input");
var entries = document.querySelector(".entries");

// Setup

// Events
form.addEventListener("click", add);

function add (event) {
	event.preventDefault();

	var newItem = document.createElement ("li");
	newItem.textContent = input;
	entries.appendChild(newItem);
}

