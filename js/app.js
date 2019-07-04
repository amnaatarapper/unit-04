/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();


const startButton = document.querySelector('#overlay button');

startButton.addEventListener('click', () => { 
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase}`);
})

game.handleInteraction();













