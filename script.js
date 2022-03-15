/* == LETTERS == */
const letters = 'abcdefghijklmnopqrstuvwxyz';
/* == GET ARRAY FROM LETTERS == */
let lettersArr = Array.from(letters);
/* == SELECT THE CONTAINER == */
let lettersContaienr = document.querySelector('.letters');
/* == GENERATE LETTERS == */
lettersArr.forEach(letter => {
    // CREATE SPAN
    let spanEle = document.createElement('span');
    // create letter text node
    let theLetter = document.createTextNode(letter);
    // append letter to span
    spanEle.appendChild(theLetter);
    // add class on span
    spanEle.classList = 'letter-box';
    // append span to the letters container to 
    lettersContaienr.appendChild(spanEle)
});
// object of words + categories
const words = {
    programming: ["JavaScript", "go", "Python", "Php", "Css", "Html", "Java", "Ruby"],
    animals: ["cat", "dog", "lione", "horse", "bear", "tigger"],
    job: ["doctor", "engener", "teacher", "front-end developer", "back-end developer", "software engener"],
    vegtabels: ["orange", "banana", "apple", "melon", "watermelon", "barryes"],
}
// Get random property
let allKeys = Object.keys(words);
// Random Number Depend On Keys Length
let randomPropertyNum = Math.floor(Math.random() * allKeys.length)
// Category
let randomProrpertyName = allKeys[randomPropertyNum];
// category Words
let randomPropertyValue = words[randomProrpertyName];
// Random Number Depend On Word
let randomValueNum = Math.floor(Math.random() * randomPropertyValue.length);
// The Chosen Word
let randomValuevalue = randomPropertyValue[randomValueNum];
// set Category Info
document.querySelector(".game-info .category span").innerHTML = randomProrpertyName;
// Select letters guess element
let lettersGuss = document.querySelector(".letters-guess");
// Convert chosen word to Array:
let lettersSpace = Array.from(randomValuevalue);
// Create Spans Depened On Word
lettersSpace.forEach(letter => {
    let emptySpan = document.createElement('span');
    if (letter === ' ') {
        emptySpan.className = "with-space";
    }
    lettersGuss.appendChild(emptySpan)
    
});
// Select guss spans
let guessSpan = document.querySelectorAll('.letters-guess span')
// set Wrong Attempts
let wrongAttempts = 0;
let theDraw = document.querySelector('.hangman-draw')
// Handle cliccking on letters
document.addEventListener('click', (e) => {
    // Set The chose status
    let theStaus = false;
    if (e.target.className === "letter-box") {
        e.target.classList.add('clicked');
        // get clicked letter
        let theLetter = e.target.innerHTML.toLowerCase();
        let thechosenWord = Array.from(randomValuevalue.toLowerCase());
        // lettersSpace
        thechosenWord.forEach((wordLetter, wordIndex) => {
            if (theLetter == wordLetter) {
                theStaus = true;
                guessSpan.forEach((span, spanIndex) => {
                    if (wordIndex === spanIndex) {
                        span.innerHTML = wordLetter;
                    }
                })
            }
        })
        // out side the loop
        // if the Letter is wrong
        if (theStaus !== true) {
            wrongAttempts++;
            theDraw.classList.add(`worng-${wrongAttempts}`);
            if (wrongAttempts === 8) {
                endGame();
                lettersContaienr.classList.add('finished')
            }
        }
    }
});

// End Game Func
function endGame() {
    // create pop-up
    let div = document.createElement('div');
    let divText = document.createTextNode(`Game Over, the word is ${randomValuevalue}`);
    // Append Text To Div
    div.appendChild(divText);
    // Add class
    div.className = "pop-up";
    // append to the body
    document.body.appendChild(div);
}
