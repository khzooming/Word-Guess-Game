

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

console.log(oscarsGame)

var testZero = oscarsGame[0].split;
console.log(testZero);

// Need to get to the point of splitting out the array into letters.
// Array.split(oscarsGame)
// And maybe it's not necessary to join the letters back, I should be able to display them right next to each other when they are split apart.

// convert the challenge word into an array `'foo'.split('')`
// once you have everything in arrays it will be easier, when a letter is matched in the array you can change that element to '_' or '.' or some other not-a-letter, then using indexOf you will easily be able to find a second occurrence of the letter if it existsw
// so, in summary `array.join('')` and `array.split('')` are your friends


var score = 0;
console.log(score)

document.getElementById("test2").textContent = 'yo this is outside';


// getWord function pulls a word from the array, splits the word into separate displays it on the page, and displays the number of characters.

// NEED TO ADD RANDOM CHOICE INTO THIS FUNCTION TO CHOOSE WORD
getWord = function() {
    for (var i = 0; i < oscarsGame.length; i++) {
        debugger; 
        
        var word = oscarsGame[i];
        var wordLength = oscarsGame[i].length;
        var splitWord = oscarsGame[i].split;
        console.log(word);
        console.log(wordLength);

        document.getElementById("wordPlace").innerHTML = 'yo this is in getWord function';

        function insertWord () { 
            document.getElementById("wordPlace").textContent = 'foo';
            document.getElementById("test2").textCreate = word;
            // document.getElementById("wordPlace").innerHTML = word;
        }

        insertWord();
       
        // document.getElementById("test2").innerHTML = wordLength;
        
        console.log("inside getWord function" + oscarsGame[i] + " and " + word + " should be the same");
        console.log("for var testZero at [0] here's wordLength " + testZero);
        console.log("for " + i + " here's wordLength " + wordLength);
        console.log("for " + i + " here's splitword " + splitWord);
        console.log(oscarsGame[i].length);
        
        
        
        // for (var l = 0; l = oscarsGame[i].length; l++) {
            
            // document.getElementById("test2").textCreate = (oscarsGame[i].length);
            // document.getElementById("word").innerHTML = (oscarsGame[i].length);
            
            //  document.getElementById("word").textCreate = (" _ " * oscarsGame[i].length);
            //  document.getElementById("word").textCreate = (" _ " * 2);
            //  document.getElementById("word").textCreate = (" yo ");
            
            debugger;
            var dash = "";
            for (var i = 0; i <= oscarsGame[i].length; i++) {
                var moreDash = (" _ " * oscarsGame[i]);
                console.log(moreDash);
            }
            
            return(word, wordLength);
            
    // $btn.click(function () {
    //     var str = "";
    //     for (var i = 0; i < 9; i++) {
    //       var random = Math.floor(Math.random() * 9);
    //       str += random;
    //       console.log(str);
    //     }


    }
}
debugger;

getWord();
console.log(word);
console.log(wordLength);

document.getElementById("wordPlace").innerHTML = word;


// Hide each letter from the word and then as they are guessed correctly, run an if else statement to unhide.

// Keyboard letter press logic 
    document.onkeydown = function(event) {
    // var key_press = String.fromCharCode(event.keyCode);
    var key = event.key;
    
    debugger;
    document.getElementById("letterInputs").innerHTML = key;
    }


    
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






// runGame();

// Make button start game - I had a tough time with this, was not able to get it to work.
// document.getElementById("#start").addEventListener("click", function() {
//     document.getElementById("Start").onclick = runGame();
// })