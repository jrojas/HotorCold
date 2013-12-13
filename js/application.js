 //JavaScript Document

//TODO: The user should get feedback about their guess -- if it was too high, too low, or just right. Initially, don't worry about telling users if they're getting "hotter" or "colder", just tell them if //there previous guess was "hot" or "cold".
//TODO: Your app should ensure that users provide valid inputs. For instance, if a user submits a spaces, a blank guess, or letters, they shoudl receive feedback         that they need to input a number.
//complete: The app should feature a button that allows the user to start a new game, without making additional calls to the server
//complete: Eventually add functionality so user can hit enter button to submit a guess. 
//TODO: More feedback for user required. high/low warm/cold

$(document).ready(function() 
{
	

    var number = Math.floor(Math.random() * 100);
    console.log(number);
    var body = $('body');
	
	
	
	

    //Click Function to Validate user response
    $('#submit').on('click', function() {
        
        validateGuess();
		
    });

    //Click Function to reset game
    $('#reset').on('click', function() {
        // you can use resetGame(this);
        resetGame();
		
    });
	
	
	//Click Function to handle the key press
	$('#guess').keypress(function(e)
	{
   		 if(e.which == 13)
		 {  
			$('#submit').click();
			
			
    	 }
	});
    
    
    var previousGuess = 0;
    function validateGuess() 
    {


      
        var guess = $("#guess").val();
        var effect = $('.number').effect("slide","fast");
		
		
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
                $('.number').html("* Number guess can not be blank")
					 body.animate({backgroundColor: "#ffffff",color: "#34495E"}, 500);
				
                break;
            
			case  isNaN(guess) :
				 $('.number').html("* Value is not a legal number!")
				 	body.animate({backgroundColor: "#ffffff",color: "#34495E"}, 500);
				 
                break;
            
            case guess > 100 || guess <= 0:
                $('.number').html("Enter a number between 0-100")
                break;
            case guess == number:
                $('.number').html(guess + ' ' + "Is The Right Number")
                
                body.animate({backgroundColor: "#c0392b",color: "#fff"}, 500);
                $('#submit').attr("disabled", true);
                break;
			
			case guess != number:
			if(previousDistance && newDistance){
				switch(false){
					case previousDistance > newDistance:
						//colder response
						$('.number').html("Try again! You're Getting Colder :( ")
						body.animate({backgroundColor: "#5fccff",color: "#3473db"}, 500);
						break;
					case newDistance > previousDistance:
					//warmer response
					
						
					$('.number').html("<h2>Your Guess is Warmer!:) </h2>")
                		body.animate({backgroundColor: "#d35400",color: "#34495E"}, 500);
						break;
					
					}
				
				}else{
						$('.number').html(guess + ' ' + "Is The Wrong Number")
                
                		body.animate({backgroundColor: "#5fccff",color: "#34495E"}, 500);
					}
					break;
        
        };
		previousGuess = guess;
    };
	

    // Resets  Game
    function resetGame() 
    {
        body.animate({backgroundColor: "#ecf0f1",color: "#34495E"}, 500);
        number = Math.floor(Math.random() * 100);
        $('#guess').val('');
        $('.number').empty();
        $('#submit').attr("disabled", false);
		
        console.log(number)
    };
	
	
			
			
				
			
					
    
				
				//colder response 
				//$('.number').html("Try again! You're Getting Colder :( ")
				//body.animate({backgroundColor: "#5fccff",color: "#3473db"}, 500);
				
				//warmer response
				//$('.number').html("Try again! You're Getting Warmer :( ")
                //body.animate({backgroundColor: "#d35400",color: "#34495E"}, 500);
						
				  			
                                    
         	
		



});
