// Resets  Game
    function resetGame() 
    {
        body.animate({backgroundColor: "#ecf0f1",color: "#34495E"}, 500);
        number = Math.floor(Math.random() * 100);
        $('#guess').val('');
        $('.number h2').empty();
        $('#submit').attr("disabled", false);
		
        console.log(number)
    };
	
	
var resetGame = {
	
  guessValue : $('#guess').val(''),
  
  emptyValue : $('.number h2').empty(),
  
  disabledSubmit : $('#submit').attr("disabled", false),
  
  number : function() 
		  {
		   Math.floor(Math.random() * 100);
		  },
  
  
  console : function() 
  {
    console.log(number)
  }
  
  
 
};

resetGame.number();
resetGame.emptyValue();
