document.onreadystatechange = function (){
    if (document.readyState === "interactive") {
    
            var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
            

            
            var wins = 0;
            var losses = 0;
            var guessrem = 9;      
            var userguesses = [""];

            

            var directionsText = document.getElementById("directions-text");
            var userChoiceText = document.getElementById("userchoice-text");
            var computerChoiceText = document.getElementById("computerchoice-text");
            var winsText = document.getElementById("wins-text");
            var lossesText = document.getElementById("losses-text");
            var userguessesText = document.getElementById("userguesses-text")
            var guessremText = document.getElementById("guessrem-text");
           
                   
            document.onkeyup = function(event) {

                var userGuess = event.key;

                var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

                    if( guessrem > 0 ) {

                        guessrem --

                    } else {

                        guessrem = 9


                    }
                    
                    if( userGuess === computerGuess ) {

                        wins ++
                        guessrem = 9 

                    }

                    if(guessrem === 0 ) {

                        losses ++

                    }

                    if (losses === 10 || wins === 10 ) { 

                        losses = 0 
                        wins = 0 
                        remguess = 9


                    }


                    directionsText.textContent = "";
                    userChoiceText.textContent = "You chose: " + userGuess;
                    computerChoiceText.textContent = "The computer chose: " + computerGuess;
                    winsText.textContent = "wins: " + wins;
                    lossesText.textContent = "losses: " + losses;   
                    guessremText.textContent = "Guesses remaining: " + guessrem; 
                    userguessesText.textContent = "Your guesses: " + userGuess;   
                                  
                }
            };
        }

