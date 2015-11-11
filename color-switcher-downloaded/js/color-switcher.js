// Structure
// ------------------------- in window scope
var color1 = document.querySelector(".olive");
var color2 = document.querySelector(".skyblue");
var color3 = document.querySelector(".salmon");
var color4 = document.querySelector(".burlywood");
var color5 = document.querySelector(".thistle");


// Events
// -------------------------------------

// color1.addEventListener("click", test);
color1.addEventListener("click", changeColor);
color2.addEventListener("click", changeColor);
color3.addEventListener("click", changeColor);
color4.addEventListener("click", changeColor);
color5.addEventListener("click", changeColor);


// Event handler functions
// ----------------------- in Local scope

// function changeColor(color) {
// 	var body = document.querySelector("body");
// 	body.setAttribute("class", color);
// }

// function test (event) {
// 	var swatch = event.target;
// 	console.log(event);
// }
//combine the two functions to produce below:

function changeColor(event) {
	var swatch = event.target;
	var color = swatch.className;

	var body = document.querySelector("body");
	body.className = color;
	// OR body.setAttribute("class", color);

	var name = document.querySelector("span");
	name.textContent = color;
}






