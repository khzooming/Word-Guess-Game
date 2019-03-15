

var oscarsGame = [
    "statue",
    "films",
    "screenplay",
    "award",
    "gowns",
    "stars",
    "acting",
    "awards",
    "tuxedos",
    "sound",
    "editing"
]

// Need to get to the point of splitting out the array into letters.
// Array.split(oscarsGame)
// And maybe it's not necessary to join the letters back, I should be able to display them right next to each other when they are split apart.

var score = 0;

runGame = function() {
    for (var i = 0; i < oscarsGame.length; i++) {

        var guessWord = oscarsGame[i];
        console.log("for" + i + "heres" + guessWord);
    }
}

// Hide each letter from the word and then as they are guessed correctly, run an if else statement to unhide.

// Keyboard letter press logic 
document.onkeydown = function(event) {
    // var key_press = String.fromCharCode(event.keyCode);
    var key = event.key;
    
    
    document.getElementById("letterInputs").innerHTML = key;


    // document.getElementById("kc").innerHTML - key_code;
    
    // I haven't gotten to the point of splitting apart the word into the individual letters, that should be inserted below instead of guessWord.
    letterGuess = function () {
        if (key === guessWord);
        alert("Yeah!  You got a letter right!");    
        score++;
        }
    
    // I would go down all the letters A to Z 
    if (key == "A") {
        console.log("a was pressed");
        letterGuess();

    }  else if (key == "B") {
        console.log("b was pressed");
        letterGuess();
    }   else if (key == "C") {
        console.log("c was pressed");
        letterGuess();
    }   else if (key == "D") {
        console.log("d was pressed");
        letterGuess();
    }
}





// runGame();

// Make button start game - I had a tough time with this, was not able to get it to work.
// document.getElementById("#start").addEventListener("click", function() {
//     document.getElementById("Start").onclick = runGame();
// })