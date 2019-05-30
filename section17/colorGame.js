var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
	//setup mode buttons event listeners
	setupModeButtons();
	setupSquares();
	reset();
}


function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.innerHTML = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.innerHTML = "Play Again!";
			} else {
				this.style.backgroundColor = "#232323";
				message.innerHTML = "Try Again!";
			}
		});
	}
}


function setupModeButtons() {
	//mode button event listeners
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//figure out how many squares to show
			this.innerHTML === "EASY" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function reset() {
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.innerHTML = pickedColor;
	//change color of h1 background back to black
	h1.style.backgroundColor = "steelblue";
	//change resetButton back to "New Colors"
	resetButton.innerHTML = "New Colors";
	//change messageDisplay back to blank
	messageDisplay.innerHTML = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

colorDisplay.innerHTML = pickedColor;

// easyButton.addEventListener("click", function() {
// 	easyButton.classList.toggle("selected");
// 	hardButton.classList.toggle("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.innerHTML = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]) {
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i]. style.display = "none"
// 		}
// 	}
// });

// hardButton.addEventListener("click", function() {
// 	hardButton.classList.toggle("selected");
// 	easyButton.classList.toggle("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.innerHTML = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 			squares[i].style.background = colors[i];
// 			squares[i]. style.display = "block"
// 	}
// });

resetButton.addEventListener("click", function() {
	reset();

});



function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}


function pickColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num) {
	//make an array
	var colorsArray = [];
	//add num random colors to arry
	for (var i = 0; i < num; i++) {
		colorsArray.push(generateColor());
	}
	//return the array
	return colorsArray;
}

function generateColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return `rgb(${red}, ${green}, ${blue})`
	
}



