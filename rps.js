//score counter
playerScore = 0;
computerScore = 0;
//player and computer valuesvar computerValue;
var playerValue;
var computerValue;
//calculates whether the player or computer wins
function rps() {
	player();
	computer();
	if (playerValue == computerValue) {
		document.getElementById("changeText").innerHTML = "Tie!";
	}
	else {
		if (playerValue > computerValue || (playerValue == 0 && computerValue == 2)) {
			document.getElementById("changeText").innerHTML = "Player wins!";
			playerScore ++;
		}
		else if (computerValue > playerValue || (computerValue == 0 && playerValue == 2)) {
			document.getElementById("changeText").innerHTML = "Computer wins!";
			computerScore ++;
		}
	}
}

//randomly assigns the computer rock, paper, or scissors as comparable numbers
function computer() {
	var num = Math.floor((Math.random() * (3-1))) + 1;
	if (num == 0) 	{
		//rock
		computerValue = 0;
		document.getElementById("computerChoice").innerHTML = "Rock";
	}
	else if (num == 1) 	{
		//paper
		computerValue = 1;
		document.getElementById("computerChoice").innerHTML = "Paper";
	}
	else if (num == 2) 	{
		//scissors
		computerValue = 2;
		document.getElementById("computerChoice").innerHTML = "Scissors";
	}	
	imageSelect(computerValue, "computerImage")
	return computerValue;
}

//converts the player's selection into comparable numbers
function player() {
	var playerInput = document.getElementById("playerSelect").value;
	if (playerValue == "r") 	{
		//rock
		playerValue = 0;
	}
	else if (playerInput == "p") 	{
		//paper
		playerValue = 1;
	}
	else if (playerInput == "s") 	{
		//scissors
		playerValue = 2;
	}	
	imageSelect(playerValue, "playerImage")
	return playerValue;
}

function imageSelect(value, image) {
	trueValue = parseInt(value);
	finalImage = String(image);
	if (trueValue == 0) {
		//rock
		document.getElementById(finalImage).src='rock.png';
	}
	else if (trueValue == 1) {
		//paper
		document.getElementById(finalImage).src='paper.png';
	}
	else if (trueValue == 2) {
		//scissors
		document.getElementById(finalImage).src='scissors.png';
	}
}