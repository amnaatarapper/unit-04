/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();
const phrase = new Phrase(game.getRandomPhrase());
const keyboard = document.querySelectorAll('.key');
const startButton = document.querySelector('#overlay button');
startButton.addEventListener('click', () => {
    game.startGame();
})

keyboard.forEach(key => {
    key.addEventListener('click', event => {
        const pressedKey = event.target;
        game.handleInteraction(pressedKey);

    })
})