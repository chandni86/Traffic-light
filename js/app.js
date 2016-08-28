
var _id = function _id(x){

	return document.getElementById(x);
}

var stopButton = _id("stopButton");

var slowButton = _id("slowButton");

var goButton = _id("goButton");

var redLight = _id("stopLight");

var yellowLight = _id("slowLight");

var greenLight = _id("goLight");


var stopLight = function stopLight(){

     redLight.style.backgroundColor = "red";

     yellowLight.style.backgroundColor = "";

     greenLight.style.backgroundColor = ""
}

stopButton.addEventListener("click", stopLight);

var pauseLight = function pauseLight(){

     yellowLight.style.backgroundColor = "yellow";

     redLight.style.backgroundColor ="";

     greenLight.style.backgroundColor = "";

}

slowButton.addEventListener("click", pauseLight)

var goLight = function goLight(){

     greenLight.style.backgroundColor = "green";

     redLight.style.backgroundColor = "";

     yellowLight.style.backgroundColor = "";

}
goButton.addEventListener("click", goLight)