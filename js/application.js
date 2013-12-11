 //JavaScript Document

//TODO: The user should get feedback about their guess -- if it was too high, too low, or just right. Initially, don't worry about telling users if they're getting "hotter" or "colder", just tell them if //there previous guess was "hot" or "cold".
//TODO: Your app should ensure that users provide valid inputs. For instance, if a user submits a spaces, a blank guess, or letters, they shoudl receive feedback         that they need to input a number.
//TODO: The app should feature a button that allows the user to start a new game, without making additional calls to the server
//TODO: Eventually add functionality so user can hit enter button to submit a guess. 
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
    
    
    
    function validateGuess() 
    {


        //where do i add a key press funtion?
        var guess = $("#guess").val();
        
        console.log(guess);
        
        switch (true) {
            
            case guess == '':
                $('.number').html("Number guess can not be blank")
                break;

            // added a Case Statement for non numbers//
            
            case guess > 100 || guess <= 0:
                $('.number').html("Enter a number between 0-100")
                break;
            case guess == number:
                $('.number').html(guess + ' ' + "Is The Right Number")
                
                body.animate({backgroundColor: "#c0392b",color: "#fff"}, 500);
                $('#submit').attr("disabled", true);
                break;
            case guess != number:
                $('.number').html("Try again! You guessed the wrong number")
                
                body.animate({backgroundColor: "#5fccff",color: "#34495E"}, 500);
                
                break;
        
        
        }
        ;
    }
    ;


    // Resets  Game
    function resetGame() 
    {
        body.animate({backgroundColor: "#ecf0f1",color: "#34495E"}, 500);
        number = Math.floor(Math.random() * 100);
        $('#guess').val('');
        $('.number').empty();
        $('#submit').attr("disabled", false);
        console.log(number)
    }
    ;



});
