var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1s = document.querySelector("#p1Span");
var p2s = document.querySelector("#p2Span");
var playingTo = document.querySelector("input");
var maxScore = document.querySelector("#maxScore");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;



p1Button.addEventListener("click", function() {
	if (!gameOver) {
		p1Score++;
		if(p1Score === winningScore) {
			gameOver = true
			p1s.classList.add("winner");
		}
	}
	p1s.innerHTML = p1Score;
});

p2Button.addEventListener("click", function() {
	if (!gameOver) {
		p2Score++;
		if(p2Score === winningScore) {
			gameOver = true
			p2s.classList.add("winner");
		}
	}
	p2s.innerHTML = p2Score;
});


resetButton.addEventListener("click", function() {
	reset()
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1s.innerHTML = p1Score;
	p2s.innerHTML = p2Score;
	p1s.classList.remove("winner");
	p2s.classList.remove("winner");
	gameOver = false;
}

playingTo.addEventListener("change", function() {
	maxScore.innerHTML = this.value;
	winningScore = Number(this.value);
	reset();
});