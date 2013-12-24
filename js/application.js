<<<<<<< HEAD
//JavaScript Document
//-complete-On page load, Javascript should pick a number at random that user will have to guess.
		
  ////-complete - The user should be prompted to enter a guess.
		
 //The user should get feedback about their guess -- if it was too high, too low, or just right. Initially, don't worry about telling users           if they're getting "hotter" or "colder", just tell them if //there previous guess was "hot" or "cold".
		
		
  // - complete -For your initial version, feel free to use the built-in "prompt()" function to get user guesses, and the "alert()" function to give         feedback on the user guess.
		
        //complete: For the final version of your project, you'll need to create an HTML-based interface for getting user inputs and giving feedback on        guesses.
		
       //TODO: Your app should ensure that users provide valid inputs. For instance, if a user submits a spaces, a blank guess, or letters, they shoudl    	receive feedback that they need to input a number.
	   
        //TODO: The app should feature a button that allows the user to start a new game, without making additional calls to the server

 //Your definitely on the right track! Some comments.

//-Eventually add functionality so user can hit enter button to submit a guess. 
//-More feedback for user required. high/low warm/cold
//-Currently not sure if your game is taking my guess as nothing is changing visually. Perhaps hide the old message slow and show the new one fast?
//-Once a user wins the game keep them from guessing anymore
//complete-Reset doesn't clear the input and message from previous game still shows

//Your doing a superb job, keep up the great work!
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
				
				case guess == '' :
					$('.number').html("Number guess can not be blank")
					break;
					
					// added a Case Statement for non numbers//
					
				case guess > 100 || guess <= 0  :
					$('.number').html("Enter a number between 0-100")
					break;
				case guess == number:
					$('.number').html(guess + ' ' + "Is the right Number")
					//add jquery code to change backgroung color to reddish
					//add fadeIn effect
						red.css("background","#c0392b");
						$('#submit').attr("disabled",true);
					break;
				case guess != number:
					$('.number').html("Try again! You guessed the wrong number")
					//add jquery code to change backgroung color to blueish
					//add fadeIn effect
						blue.css('background','#5fccff');
					break;	
				
				}
			
		
				
		
	});
	
}

function resetGame()
{
	//Add Click function to reset game
	$('#reset').on('click',function()
	{
		
		 number = Math.floor(Math.random()*100);
		//reset to original background color
		$("body").css("background","#ecf0f1");
		$('#guess').val('');
		$('.number').empty();
		$('#submit').attr("disabled",false);
		 console.log(number);
	});
};    
  
   
			
=======
 //JavaScript Document

$(document).ready(function() 
{
	

    var number = Math.floor(Math.random() * 100);
    console.log(number);
    var body = $('body');
    var	enterKey = false;
    var messageTo = $('.number h2');
    var slideFast = $('.number');
    var guessInput = $('#guess');
    var submitClick = $('#submit');
    var reset = $('#reset');
    

   
    //Click Function to Validate user response
    submitClick.on('click', function () {
        
        validateGuess();
        guessInput.focus();
		
    });

    //Click Function to reset game
    reset.on('click', function() {
        // you can use resetGame(this);
       // resetGame();
		resetGame();
        guessInput.focus();
		
    });
	
	
	//Click Function to handle the key press
	guessInput.keypress(function(e)
	{
   		
        if(e.which == 13 && enterKey == false)
		 {  
			submitClick.click();
           
             
			
			
    	 }
	});
   

    
    var previousGuess = 0;
	
    function validateGuess() 
    {


      
        var guess = $("#guess").val();
        var effect = slideFast.effect("slide","fast");
       
		
		
		//varibles for implementing hotter or colder
		if(previousGuess && !isNaN(previousGuess) && previousGuess > 0 && previousGuess < 101 )
		{
			
		console.log("previousGuess = " + previousGuess, "new guess="+guess);
		var previousDistance = Math.abs(previousGuess - number);
        console.log("previousDistance = " + previousDistance);
		console.log("number =" + number);
        var newDistance = Math.abs(guess - number);
        console.log("newDistance = " + newDistance);
		}
	
        console.log(guess);
        
        switch (true) {
            
            case guess == '':
                messageTo.html("* Number guess can not be blank")
					 
				      animateBody("#ffffff","#34495E");
                break;
            
			case  isNaN(guess) :
				 messageTo.html("* Value is not a legal number")
				 	
				      animateBody("#ffffff","#34495E");
                break;
            
            case guess > 100 || guess <= 0:
                messageTo.html("Enter a number between 0-100")
				    
                  animateBody("#ffffff","#34495E");
                break;
				
			case guess == previousGuess :
                messageTo.html("Your entered the same number? Try Again")
				
                animateBody("#ffffff","#34495E");
                break;
				
				
            case guess == number :
                messageTo.html(guess + ' ' + "Is The correct guess. Click Reset to play a new game")
                
               
                animateBody("#c0392b","#fff");
                
                submitClick.attr("disabled", true);
                enterKey = true;
                      

                break;
			
			case guess != number:
			if(previousDistance && newDistance){
				switch(false){
                        
					case previousDistance > newDistance:
						//colder response
						messageTo.html("Try again! You're Getting Colder :(")
					
                         animateBody("#5fccff","#3473db");
						break;
                        
					case newDistance > previousDistance:
					//warmer response
					
						
					messageTo.html("Your Guess is Warmer!:)")
                		
                        animateBody("#d35400","#34495E");
						break;
					
					}
				
				}else{
						messageTo.html(guess + ' ' + "Is incorrect" +' '+ "Try again")
                
                		
                        animateBody("#5fccff","#34495E");
					}
					break;
        
        };
		previousGuess = guess;
        guessInput.val('');
    };
	

    // Resets  Game
    function resetGame() 
    {
      
        animateBody("#ecf0f1","#34495E");
        number = Math.floor(Math.random() * 100);
      
        guessInput.val('');
        messageTo.empty();
        submitClick.attr("disabled", false);
        enterKey = false;
       
     
		
      console.log(number)
   };
    
     // Animates the body background 
    
  function animateBody(bgcolor,color)
    {
      
        body.animate({backgroundColor: bgcolor,color: color}, 500)
            
            
            
    };
	


	
				
			
					
    
				

                                    
         	
		



>>>>>>> origin/gh-pages
});
