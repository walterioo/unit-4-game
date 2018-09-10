/* General ideas
 1. Have a target random number between 19-120
 2. Give each crystal a random numer from 1-12 
 3. Add the score when a crystal is pressed
 4. Compare the score, equials wins if its goes over it player loses
 5. Restart the game when the player wins or loses and add it to the scre


 */


//Global Variables



// Player stats
let wins = 0;
let loses = 0;
let userScore = 0;

// Function to clear screen of number when a game restarts and randomizes again



$(document).ready(function(){
    let randomNumber = Math.floor(Math.random() * 100 + 20);
    let crystalNumber1 = Math.floor(Math.random() * 12 + 1);
    let crystalNumber2 = Math.floor(Math.random() * 12 + 1);
    let crystalNumber3 = Math.floor(Math.random() * 12 + 1);
    let crystalNumber4 = Math.floor(Math.random() * 12 + 1);

    $("#wins").text(wins);
    $("#loses").text(loses);
    $("#current-score").text(userScore);
    $("#random-number").text(randomNumber);

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100 + 20);
    console.log(randomNumber);
    
    crystalNumber1 = Math.floor(Math.random() * 12 + 1);
    crystalNumber2 = Math.floor(Math.random() * 12 + 1);
    crystalNumber3 = Math.floor(Math.random() * 12 + 1);
    crystalNumber4 = Math.floor(Math.random() * 12 + 1);
    userScore = 0;
    $(".total-score").text("0");
    $("#random-number").text(randomNumber);
    $(".crystal-value").empty();  
    
}

 $(".crystals").on("click", function(){
        
        
        switch ($(this).attr("id")) {
            case "red":
                userScore += crystalNumber1;
                $(".total-score").text(userScore);
                $(".crystal-value").text(crystalNumber1);
                break;
            case "blue":
                userScore += crystalNumber2;
                $(".total-score").text(userScore);
                $(".crystal-value").text(crystalNumber2);
                break;  
            case "yellow":
                userScore += crystalNumber3;
                $(".total-score").text(userScore);
                $(".crystal-value").text(crystalNumber3);
                break;
            case "green":
                userScore += crystalNumber4;
                $(".total-score").text(userScore);
                $(".crystal-value").text(crystalNumber4);
                break;                
        }
    
    $(".total-score").text(userScore);

    if(userScore === randomNumber){
        console.log(("You win"));
        wins++;
        $("#wins").text(wins);
        resetGame();
    }
    else if (userScore > randomNumber){
        loses++
        $("#loses").text(loses);
        console.log(("You lose"));
        resetGame();
    }
    
    })

    


    

})