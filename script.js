var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector('button')


// Function is sitting there until it gets called
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


// Generating random color
function setRandom() {
  var hexColor = Math.random().toString(16);
  hexColor = "#" + hexColor.slice(2, 8);
  return hexColor;
}


// Setting background with random color after click
function setRandomBackground(){
	color1.value = setRandom();
	color2.value = setRandom();

	setGradient();
}

// Set Initial Background from default values
// Function gets called to retreive default color values 
// which have been set in html input tags
setGradient(); 

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener('click', setRandomBackground);