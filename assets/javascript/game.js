$(document).ready(function(){

var randomGoal = "";
var gemBlueValue = "";
var gemGreenValue = "";
var gemPurpleValue = "";
var gemRedValue = "";
var userScore = 0;
var wins = 0;
var losses = 0;

	var $totalScore = $("#total-score");
	var $randomScore = $("#random-score");
	var $winCount = $("#win-count");
	var $lossCount = $("#loss-count");

//prevents players from clicking the gems until the game is started
document.getElementById("button-1").disabled = true;
document.getElementById("button-2").disabled = true;
document.getElementById("button-3").disabled = true;
document.getElementById("button-4").disabled = true;

//set random goal and gem values

$("#start").on("click", function(){
	randomGoal = Math.floor((Math.random() * 120) + 19);
	console.log(randomGoal);
	$randomScore.text("Goal: " + randomGoal);


	gemBlueValue = Math.floor((Math.random() * 12) + 1);
	gemGreenValue = Math.floor((Math.random() * 12) + 1);
	gemPurpleValue = Math.floor((Math.random() * 12) + 1);
	gemRedValue = Math.floor((Math.random() * 12) + 1);
	console.log(gemBlueValue);

	document.getElementById("button-1").disabled = false;
	document.getElementById("button-2").disabled = false;
	document.getElementById("button-3").disabled = false;
	document.getElementById("button-4").disabled = false;

});

//on click adds gem value to total score
$("#button-1").on("click", function(){
	if (userScore == 0) {
		$totalScore.text(gemBlueValue);
		userScore = gemBlueValue;
	}

	else {
		userScore += gemBlueValue;
		$totalScore.text(userScore);
	}

	//checks to see if the game is won or lost 
	if (userScore === randomGoal) {
			wins++;
			console.log(wins);
			$winCount.text(wins);
			
			userScore = 0;
			$totalScore.text(0);
			
			randomGoal = Math.floor((Math.random() * 120) + 19);
			console.log(randomGoal);
			$randomScore.text("Goal: " + randomGoal);
			
			gemBlueValue = Math.floor((Math.random() * 12) + 1);
			console.log(gemBlueValue);
			gemGreenValue = Math.floor((Math.random() * 12) + 1);
			gemPurpleValue = Math.floor((Math.random() * 12) + 1);
			gemRedValue = Math.floor((Math.random() * 12) + 1);
	}

	else if (userScore > randomGoal) {
			losses++;
			$lossCount.text(losses);
			
			userScore = 0;
			$totalScore.text(0);
			
			randomGoal = Math.floor((Math.random() * 120) + 19);
			console.log(randomGoal);
			$randomScore.text("Goal: " + randomGoal);
			
			gemBlueValue = Math.floor((Math.random() * 12) + 1);
			console.log(gemBlueValue);
			gemGreenValue = Math.floor((Math.random() * 12) + 1);
			gemPurpleValue = Math.floor((Math.random() * 12) + 1);
			gemRedValue = Math.floor((Math.random() * 12) + 1);
	}


});

$("#button-2").on("click", function(){
	if (userScore == 0) {
		$totalScore.text(gemGreenValue);
		userScore = gemGreenValue;
	}
	else {
			userScore += gemGreenValue;
			$totalScore.text(userScore);
		}

	if (userScore === randomGoal) {
			wins++;
			console.log(wins);
			$winCount.text(wins);
			
			userScore = 0;
			$totalScore.text(0);
			
			randomGoal = Math.floor((Math.random() * 120) + 19);
			console.log(randomGoal);
			$randomScore.text("Goal: " + randomGoal);
			
			gemBlueValue = Math.floor((Math.random() * 12) + 1);
			gemGreenValue = Math.floor((Math.random() * 12) + 1);
			gemPurpleValue = Math.floor((Math.random() * 12) + 1);
			gemRedValue = Math.floor((Math.random() * 12) + 1);
	}

	else if (userScore > randomGoal) {
			losses++;
			$lossCount.text(losses);
			
			userScore = 0;
			$totalScore.text(0);
			
			randomGoal = Math.floor((Math.random() * 120) + 19);
			console.log(randomGoal);
			$randomScore.text("Goal: " + randomGoal);
			
			gemBlueValue = Math.floor((Math.random() * 12) + 1);
			gemGreenValue = Math.floor((Math.random() * 12) + 1);
			gemPurpleValue = Math.floor((Math.random() * 12) + 1);
			gemRedValue = Math.floor((Math.random() * 12) + 1);
	}
		
});


$("#button-3").on("click", function(){
	if (userScore == 0) {
		$totalScore.text(gemPurpleValue);
		userScore = gemPurpleValue;
	}

	else {
		userScore += gemPurpleValue;
		$totalScore.text(userScore);
	}

	if (userScore === randomGoal) {
			wins++;
			console.log(wins);
			$winCount.text(wins);
			
			userScore = 0;
			$totalScore.text(0);
			
			randomGoal = Math.floor((Math.random() * 120) + 19);
			console.log(randomGoal);
			$randomScore.text("Goal: " + randomGoal);
			
			gemBlueValue = Math.floor((Math.random() * 12) + 1);
			gemGreenValue = Math.floor((Math.random() * 12) + 1);
			gemPurpleValue = Math.floor((Math.random() * 12) + 1);
			gemRedValue = Math.floor((Math.random() * 12) + 1);
	}

	else if (userScore > randomGoal) {
			losses++;
			$lossCount.text(losses);
			
			userScore = 0;
			$totalScore.text(0);
			
			randomGoal = Math.floor((Math.random() * 120) + 19);
			console.log(randomGoal);
			$randomScore.text("Goal: " + randomGoal);
			
			gemBlueValue = Math.floor((Math.random() * 12) + 1);
			gemGreenValue = Math.floor((Math.random() * 12) + 1);
			gemPurpleValue = Math.floor((Math.random() * 12) + 1);
			gemRedValue = Math.floor((Math.random() * 12) + 1);
	}
});

$("#button-4").on("click", function(){
	if (userScore == 0) {
		$totalScore.text(gemRedValue);
		userScore = gemRedValue;
	}
	else {
			userScore += gemRedValue;
			$totalScore.text(userScore);
		}

	if (userScore === randomGoal) {
			wins++;
			console.log(wins);
			$winCount.text(wins);
			
			userScore = 0;
			$totalScore.text(0);
			
			randomGoal = Math.floor((Math.random() * 120) + 19);
			console.log(randomGoal);
			$randomScore.text("Goal: " + randomGoal);
			
			gemBlueValue = Math.floor((Math.random() * 12) + 1);
			gemGreenValue = Math.floor((Math.random() * 12) + 1);
			gemPurpleValue = Math.floor((Math.random() * 12) + 1);
			gemRedValue = Math.floor((Math.random() * 12) + 1);
	}

	else if (userScore > randomGoal) {
			losses++;
			$lossCount.text(losses);
			
			userScore = 0;
			$totalScore.text(0);
			
			randomGoal = Math.floor((Math.random() * 120) + 19);
			console.log(randomGoal);
			$randomScore.text("Goal: " + randomGoal);
			
			gemBlueValue = Math.floor((Math.random() * 12) + 1);
			gemGreenValue = Math.floor((Math.random() * 12) + 1);
			gemPurpleValue = Math.floor((Math.random() * 12) + 1);
			gemRedValue = Math.floor((Math.random() * 12) + 1);
	}

});

$("#restart").on("click", function(){
	wins = 0;
	$winCount.text(wins);
	losses = 0;
	$lossCount.text(losses);
	
	userScore = 0;
	$totalScore.text(0);
	randomGoal = Math.floor((Math.random() * 120) + 19);
	$randomScore.text("Goal: " + randomGoal);
	
	gemBlueValue = Math.floor((Math.random() * 12) + 1);
	gemGreenValue = Math.floor((Math.random() * 12) + 1);
	gemPurpleValue = Math.floor((Math.random() * 12) + 1);
	gemRedValue = Math.floor((Math.random() * 12) + 1);

});

});

