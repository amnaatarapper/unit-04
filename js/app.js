/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();
const phrase = new Phrase(game.getRandomPhrase());

const startButton = document.querySelector('#overlay button');

const keyboard = document.querySelectorAll('.key');

startButton.addEventListener('click', () => { 
    game.startGame();
})

keyboard.forEach( key => {
    key.addEventListener('click', event => {
        const pressedKey = event.target;
        console.log(pressedKey)
        console.log(phrase.checkLetter(pressedKey.textContent))

        game.handleInteraction(pressedKey);
        
    })
})


















