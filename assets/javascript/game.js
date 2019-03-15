

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

// Array.split(oscarsGame)

var score = 0;

runGame = function() {
    for (var i = 0; i < oscarsGame.length; i++) {

        var guessWord = oscarsGame[i];
        console.log("for" + i + "heres" + guessWord);
    }
}


// Keyboard letter press logic 
document.onkeydown = function(event) {
    var key_press = String.fromCharCode(event.keyCode);
    var key_code = event.keyCode;
    
    
    document.getElementById("kp").innerHTML("#letterInputs") - key_press;
    document.getElementById("kc").innerHTML - key_code;
    
    // I haven't gotten to the point of splitting apart the word into the individual letters, that should be inserted below instead of guessWord.
    letterGuess = function () {
        if (key_press === guessWord);
        alert("Yeah!  You got a letter right!");    
        score++;
        }
    
    // I would go down all the letters A to Z 
    if (key_press == "A") {
        console.log("a was pressed");
        letterGuess();

    }  else if (key_press == "B") {
        console.log("b was pressed");
        letterGuess();
    }   else if (key_press == "C") {
        console.log("c was pressed");
        letterGuess();
    }   else if (key_press == "D") {
        console.log("d was pressed");
        letterGuess();
    }
}


// runGame();

// Make button start game - I had a tough time with this, was not able to get it to work.
// document.getElementById("#start").addEventListener("click", function() {
//     document.getElementById("Start").onclick = runGame();
// })