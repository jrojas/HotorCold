//JavaScript Document
//-complete-On page load, Javascript should pick a number at random that user will have to guess.
		
  ////-complete - The user should be prompted to enter a guess.
		
 //The user should get feedback about their guess -- if it was too high, too low, or just right. Initially, don't worry about telling users           if they're getting "hotter" or "colder", just tell them if //there previous guess was "hot" or "cold".
		
		
        // - complete -For your initial version, feel free to use the built-in "prompt()" function to get user guesses, and the "alert()" function to give         feedback on the user guess.
		
        //complete: For the final version of your project, you'll need to create an HTML-based interface for getting user inputs and giving feedback on        guesses.
		
       //TODO: Your app should ensure that users provide valid inputs. For instance, if a user submits a spaces, a blank guess, or letters, they shoudl    	receive feedback that they need to input a number.
	   
        //TODO: The app should feature a button that allows the user to start a new game, without making additional calls to the server

 
$(document).ready(function() 
{
		var number = Math.floor(Math.random()*100);
		console.log(number);
		validateGuess();
		resetGame();
		
function validateGuess()
{
	
	$("#submit").on("click",function()
	{
        	var guess = $("#guess").val();
			var red = $('body');
			var blue = $('body');
			console.log(guess);  
			
			switch(true){
				
				case guess == "" :
					$(".number").html("Number guess can not be blank")
					break;
				case guess > 100 || guess <= 0  :
					$(".number").html("Enter a number between 0-100")
					break;
				case guess == number:
					$(".number").html(guess + ' ' + "Is the right Number")
					//add jquery code to change backgroung color to reddish
					//add fadeIn effect
						
					
						red.css("background","#c0392b");
								
						
					break;
				case guess != number:
					$(".number").html("Try again! You guessed the wrong number")
					//add jquery code to change backgroung color to blueish
					//add fadeIn effect
						blue.css("background","#5fccff");
					break;	
				
				}
			
		
				
		
	});
	
}

function resetGame()
{
	//Add Click function to reset game
	$("#reset").on("click",function(){
		
		 
		 number = Math.floor(Math.random()*100);
		//reset to original background color
		
		 console.log(number);
		});
};    
  
   
			
});
