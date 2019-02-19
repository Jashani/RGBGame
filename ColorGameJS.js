var colors;
var squares = document.querySelectorAll(".square");
var pickedColor;
var rgbDisplay = document.querySelector("#rgbDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var colorAmount = 6;

easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colorAmount = 3;
	resetGame();
});

hardButton.addEventListener("click", function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	colorAmount = 6;
	resetGame();
});

resetButton.addEventListener("click", resetGame);

for(var i = 0; i < squares.length; i++) {
	// Add click listeners to squares
	squares[i].addEventListener("click", function() {
		// Compare colour of clicked sqsuare to pickedColor
		if (this.style.backgroundColor == pickedColor) {
			// User guessed colour correctly
			messageDisplay.textContent = ":)";
			resetButton.textContent = "PLAY AGAIN?";
			for (var i = 0; i < squares.length; i++) {
				squares[i].style.backgroundColor = pickedColor;
				h1.style.backgroundColor = pickedColor;
			}
		} else {
			// User guessed incorrectly
			this.style.backgroundColor = "#332222";
			messageDisplay.textContent = ":(";		
		}
	});
}

resetGame(); // Initialises game

function pickColor() {
	// Chooses a random colour out of colors
	return colors[Math.floor(Math.random() * colors.length)];
}

function generateColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		// Pushes a generated random colour
		arr.push("rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")");
	}
	return arr;
}

function resetGame() {
	colors = generateColors(colorAmount);
	pickedColor = pickColor();
	rgbDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "palevioletred";
	messageDisplay.textContent = "";
	resetButton.textContent = "NEW COLORS";

	for(var i = 0; i < colors.length; i++) {
		// Set colours of squares and makes sure they're showing
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "initial";
	}
	for(var i = colors.length; i < squares.length; i++) {
		// Hides unecessary squares
		squares[i].style.display = "none";
	}
}