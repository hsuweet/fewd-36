var buttonStop = document.querySelector(".stop");
var buttonSlow = document.querySelector(".slow");
var buttonGo = document.querySelector(".go");
var colorStop = document.querySelector(".red");
var colorSlow = document.querySelector(".yellow");
var colorGo = document.querySelector(".green");

//Events

buttonStop.addEventListener("click", changeColor1);
buttonSlow.addEventListener("click", changeColor2);
buttonGo.addEventListener("click", changeColor3);


//Functions

function changeColor1(event){
	colorStop.classList.add("stop-red");
	colorSlow.classList.add("stop-yellow");
	colorGo.classList.add("stop-green");
}

function changeColor2(event){
	colorStop.classList.add("slow-red");
	colorSlow.classList.add("slow-yellow");
	colorGo.classList.add("slow-green");
}

function changeColor3(event){
	colorStop.classList.add("go-red");
	colorSlow.classList.add("go-yellow");
	colorGo.classList.add("go-green");
}
