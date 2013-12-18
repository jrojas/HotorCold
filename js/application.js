 //JavaScript Document

$(document).ready(function() 
{
	

    var number = Math.floor(Math.random() * 100);
    console.log(number);
    var body = $('body');
    var	enterKey = false;
   
   
 
    

   
    //Click Function to Validate user response
    $('#submit').on('click', function () {
        
        validateGuess();
		
    });

    //Click Function to reset game
    $('#reset').on('click', function() {
        // you can use resetGame(this);
       // resetGame();
		resetGame();
		
    });
	
	
	//Click Function to handle the key press
	$('#guess').keypress(function(e)
	{
   		
        if(e.which == 13 && enterKey == false)
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
                $('.number h2').html("* Number guess can not be blank")
					 
				      animateBody("#ffffff","#34495E");
                break;
            
			case  isNaN(guess) :
				 $('.number h2').html("* Value is not a legal number")
				 	
				      animateBody("#ffffff","#34495E");
                break;
            
            case guess > 100 || guess <= 0:
                $('.number h2').html("Enter a number between 0-100")
				    
                  animateBody("#ffffff","#34495E");
                break;
				
			case guess == previousGuess :
                $('.number h2').html("Your entered the same number? Try Again")
				
                animateBody("#ffffff","#34495E");
                break;
				
				
            case guess == number :
                $('.number h2').html(guess + ' ' + "Is The correcr guess. Click Reset to play a new game")
                
               
                animateBody("#c0392b","#fff");
                
                $('#submit').attr("disabled", true);
                enterKey = true;
                      

                break;
			
			case guess != number:
			if(previousDistance && newDistance){
				switch(false){
                        
					case previousDistance > newDistance:
						//colder response
						$('.number h2').html("Try again! You're Getting Colder :(")
					
                         animateBody("#5fccff","#3473db");
						break;
                        
					case newDistance > previousDistance:
					//warmer response
					
						
					$('.number h2').html("Your Guess is Warmer!:)")
                		
                        animateBody("#d35400","#34495E");
						break;
					
					}
				
				}else{
						$('.number h2').html(guess + ' ' + "Is incorrect" +' '+ "Try again")
                
                		
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
      $('#guess').val('');
      $('.number h2').empty();
      $('#submit').attr("disabled", false);
        enterKey = false;
       
     
		
      console.log(number)
   };
    
     // Animates the body background 
    
  function animateBody(bgcolor,color)
    {
      
        body.animate({backgroundColor: bgcolor,color: color}, 500)
            
            
            
    };
	


	
			
				
			
					
    
				

                                    
         	
		



});
