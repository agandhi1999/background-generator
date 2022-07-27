var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".colorbutton");

// color1.value = body.style.backgroundColor.value
// color2.value = body.style.background.color2.value

color1.value = "#FF0000"
color2.value = "#FFFF00"

body.style.background = 
"linear-gradient(to right, " 
+ color1.value 
+ ", " 
+ color2.value 
+ ")";

css.textContent = body.style.background + ";";


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}


function setColorValues(){
	color1.value = generateRandomColor();
	color2.value = generateRandomColor()

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setColorValues);