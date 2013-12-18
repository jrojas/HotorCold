 //JavaScript Document

$(document).ready(function() 
{
	

    var number = Math.floor(Math.random() * 100);
    console.log(number);
    var body = $('body');
    var	enterKey = false;
    var messageTo = $('.number h2');
    var slideFast = $('.number');
    var guessClick = $('#guess');
    var submitClick = $('#submit');
 
    

   
    //Click Function to Validate user response
    submitClick.on('click', function () {
        
        validateGuess();
		
    });

    //Click Function to reset game
    $('#reset').on('click', function() {
        // you can use resetGame(this);
       // resetGame();
		resetGame();
		
    });
	
	
	//Click Function to handle the key press
	guessClick.keypress(function(e)
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
    };
	

    // Resets  Game
    function resetGame() 
    {
      
        animateBody("#ecf0f1","#34495E");
		number = Math.floor(Math.random() * 100);
      guessClick.val('');
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
	


	
			
				
			
					
    
				

                                    
         	
		



});
