const randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;


if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter valid number");
    }else if(guess < 1){
        alert("please enter valid number more than 1")
    }else if(guess > 100){
        alert("please enter a number less than 100")
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over, Random number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
        if(guess === randomNumber){
            displayMessage("Congo! You guessed it right");
            endGame();
        }else if(guess < randomNumber){
            displayMessage(`Number is too low...`);
        }else if(guess > randomNumber){
            displayMessage(`Number is too high`);
        }
}

function displayMessage(message){
    

}

function displayGuess(guess){
    userInput.value = ''; //cleanup method
    guessSlot.innerHTML += "${guess}"
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`
}

function newGame(){

}

function endGame(){

}