$(document).ready(function(){

var randomGoal = ""
var gemBlueValue = ""
var gemGreenValue = ""
var gemPurpleValue = ""
var gemRedValue = ""
var userScore = 0

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

});




//on click adds gem value to total score
$("#button-1").on("click", function(){
	if (userScore == 0) {
		$("#total-score").append(gemBlueValue);
		userScore = gemBlueValue;
	}
	else {
		userScore += gemBlueValue;
		$("#total-score").text("Your total score is: " + userScore);
	}
});
//****Repeat for all gems**********




//if score equals goal, win +1, resets

//if scores exceeds goal, losses +1, resets

});

