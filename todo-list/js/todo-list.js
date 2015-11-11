// Structure
var task = document.querySelector(".task");
var date = document.querySelector(".date");
var entries = document.querySelector(".entries");

// Setup

// Events
button.addEventListener("click", add);

function add (event) {
	event.preventDefault();

	var newItem = document.createElement ("li");
	newItem.textContent = input;
	entries.appendChild(newItem);
}

