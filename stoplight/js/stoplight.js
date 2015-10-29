var stop = document.querySelector(".stop");
var slow = document.querySelector(".slow");
var go = document.querySelector(".go");
var red = document.querySelector(".red");
var yellow = document.querySelector(".yellow");
var green = document.querySelector(".green");
var hide = document.querySelector(".hidden");

//Events

stop.addEventListener("click", changeColor);
slow.addEventListener("click", changeColor);
go.addEventListener("click", changeColor);

//Functions

function changeColor(event){
	var swatch = event.target;
	console.log(event);
}