var form = document.querySelector("form");
var task = document.querySelector(".task");
var date = document.querySelector(".date");
var entries = document.querySelector(".entries");
var button = document.querySelector("button");



button.addEventListener("click", add);


function add(event) {
	event.preventDefault();

	// Step 1: create new html
	var newTask = task.value;
	var newDate = date.value;
	var newItem = document.createElement("li");
	var checkbox = document.createElement("input");
	var span = document.createElement("span");
	var label = document.createElement("label");

	// Step 2: add attributes, content, event listeners
	span.textContent = " " + newTask + " " + newDate;
	checkbox.setAttribute("type", "checkbox");


	// Step 3: add html to DOM
	entries.appendChild(newItem);
	newItem.appendChild(checkbox);
	newItem.appendChild(span);

}




// Arrays

// var tasks = [];

// var task1 = {
// 		name: "exercise",
// 		date: undefined,
// 		completed: false
// }

// var task3 = {
// 	name: "eat junk food",
// 	date: "3/3/3",
// 	completed: false
// }
