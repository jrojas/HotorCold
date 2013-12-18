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
					 body.animate({backgroundColor: "#ffffff",color: "#34495E"}, 500);
				
                break;
            
			case  isNaN(guess) :
				 $('.number h2').html("* Value is not a legal number!")
				 	body.animate({backgroundColor: "#ffffff",color: "#34495E"}, 500);
				 
                break;
            
            case guess > 100 || guess <= 0:
                $('.number h2').html("Enter a number between 0-100")
				body.animate({backgroundColor: "#ffffff",color: "#34495E"}, 500);
                break;
				
			case guess == previousGuess :
                $('.number h2').html("Your entered the same number? Try Again!")
				body.animate({backgroundColor: "#ffffff",color: "#34495E"}, 500);
                break;
				
				
            case guess == number :
                $('.number h2').html(guess + ' ' + "Is The Right Number")
                
                body.animate({backgroundColor: "#c0392b",color: "#fff"}, 500);
                $('#submit').attr("disabled", true);
                enterKey = true;
                      

                break;
			
			case guess != number:
			if(previousDistance && newDistance){
				switch(false){
                        
					case previousDistance > newDistance:
						//colder response
						$('.number h2').html("Try again! You're Getting Colder :(")
						body.animate({backgroundColor: "#5fccff",color: "#3473db"}, 500);
						break;
                        
					case newDistance > previousDistance:
					//warmer response
					
						
					$('.number h2').html("Your Guess is Warmer!:)")
                		body.animate({backgroundColor: "#d35400",color: "#34495E"}, 500);
						break;
					
					}
				
				}else{
						$('.number h2').html(guess + ' ' + "Is The Wrong Number")
                
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
      $('.number h2').empty();
      $('#submit').attr("disabled", false);
        //added
        enterKey = false;
       
     
		
      console.log(number)
   };
	


	
			
				
			
					
    
				

                                    
         	
		



});
