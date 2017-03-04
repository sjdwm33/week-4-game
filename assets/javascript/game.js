$(document).ready(function(){

var randomGoal = "";
var gemBlueValue = "";
var gemGreenValue = "";
var gemPurpleValue = "";
var gemRedValue = "";
var userScore = 0;
var wins = 0;
var losses = 0;

//prevents players from clicking the gems until the game is started
document.getElementById("button-1").disabled = true;
document.getElementById("button-2").disabled = true;
document.getElementById("button-3").disabled = true;
document.getElementById("button-4").disabled = true;

//set random goal and gem values

$("#start").on("click", function(){
	randomGoal = Math.floor((Math.random() * 100) + 15);
	console.log(randomGoal);
	$("#random-score").text("Goal: " + randomGoal);


	gemBlueValue = Math.floor((Math.random() * 15) + 1);
	gemGreenValue = Math.floor((Math.random() * 15) + 1);
	gemPurpleValue = Math.floor((Math.random() * 15) + 1);
	gemRedValue = Math.floor((Math.random() * 15) + 1);
	console.log(gemBlueValue);

	document.getElementById("button-1").disabled = false;
	document.getElementById("button-2").disabled = false;
	document.getElementById("button-3").disabled = false;
	document.getElementById("button-4").disabled = false;

});

//on click adds gem value to total score
$("#button-1").on("click", function(){
	if (userScore == 0) {
		$("#total-score").text(gemBlueValue);
		userScore = gemBlueValue;
	}

	else {
		userScore += gemBlueValue;
		$("#total-score").text(userScore);
	}

	//checks to see if the game is won or lost 
	if (userScore === randomGoal) {
			wins++;
			console.log(wins);
			$("#win-count").text(wins);
			userScore = 0;
			$("#total-score").text(0);
			randomGoal = Math.floor((Math.random() * 100) + 15);
			console.log(randomGoal);
			$("#random-score").text("Goal: " + randomGoal);
	}

	else if (userScore > randomGoal) {
			losses++;
			$("#loss-count").text(losses);
			userScore = 0;
			$("#total-score").text(0);
			randomGoal = Math.floor((Math.random() * 100) + 15);
			console.log(randomGoal);
			$("#random-score").text("Goal: " + randomGoal);
	}


});

$("#button-2").on("click", function(){
	if (userScore == 0) {
		$("#total-score").text(gemGreenValue);
		userScore = gemGreenValue;
	}
	else {
			userScore += gemGreenValue;
			$("#total-score").text(userScore);
		}

	if (userScore === randomGoal) {
			wins++;
			console.log(wins);
			$("#win-count").text(wins);
			userScore = 0;
			$("#total-score").text(0);
			randomGoal = Math.floor((Math.random() * 100) + 15);
			console.log(randomGoal);
			$("#random-score").text("Goal: " + randomGoal);
	}

	else if (userScore > randomGoal) {
			losses++;
			$("#loss-count").text(losses);
			userScore = 0;
			$("#total-score").text(0);
			randomGoal = Math.floor((Math.random() * 100) + 15);
			console.log(randomGoal);
			$("#random-score").text("Goal: " + randomGoal);
	}
		
});


$("#button-3").on("click", function(){
	if (userScore == 0) {
		$("#total-score").text(gemPurpleValue);
		userScore = gemPurpleValue;
	}

	else {
		userScore += gemPurpleValue;
		$("#total-score").text(userScore);
	}

	if (userScore === randomGoal) {
			wins++;
			console.log(wins);
			$("#win-count").text(wins);
			userScore = 0;
			$("#total-score").text(0);
			randomGoal = Math.floor((Math.random() * 100) + 15);
			console.log(randomGoal);
			$("#random-score").text("Goal: " + randomGoal);
	}

	else if (userScore > randomGoal) {
			losses++;
			$("#loss-count").text(losses);
			userScore = 0;
			$("#total-score").text(0);
			randomGoal = Math.floor((Math.random() * 100) + 15);
			console.log(randomGoal);
			$("#random-score").text("Goal: " + randomGoal);
	}
});

$("#button-4").on("click", function(){
	if (userScore == 0) {
		$("#total-score").text(gemRedValue);
		userScore = gemRedValue;
	}
	else {
			userScore += gemRedValue;
			$("#total-score").text(userScore);
		}

	if (userScore === randomGoal) {
			wins++;
			console.log(wins);
			$("#win-count").text(wins);
			userScore = 0;
			$("#total-score").text(0);
			randomGoal = Math.floor((Math.random() * 100) + 15);
			console.log(randomGoal);
			$("#random-score").text("Goal: " + randomGoal);
	}

	else if (userScore > randomGoal) {
			losses++;
			$("#loss-count").text(losses);
			userScore = 0;
			$("#total-score").text(0);
			randomGoal = Math.floor((Math.random() * 100) + 15);
			console.log(randomGoal);
			$("#random-score").text("Goal: " + randomGoal);
	}

});

$("#restart").on("click", function(){
	wins = 0;
	$("#win-count").text(wins);
	losses = 0;
	$("#loss-count").text(losses);
	userScore = 0;
	$("#total-score").text(0);
	randomGoal = Math.floor((Math.random() * 100) + 15);
	$("#random-score").text("Goal: " + randomGoal);

});

});

