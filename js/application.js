// JavaScript Document
var number = Math.floor(Math.random()*100);
var guessNumber = (prompt("Pick a number", ""));	

function getRandomNumber()
{
		
	if(guessNumber == number)
	alert ("you guessed the right number") + $(".number").html(guessNumber + ' ' + "Is the right Number");	
	else
	alert ("you guessed the wrong number" ) + $(".number").html(guessNumber + ' ' + "Is the not" + ' ' + number);	
	
}

console.log(guessNumber);	
console.log(number);
