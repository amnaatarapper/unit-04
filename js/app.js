let game;
let phrase;

const startButton = document.querySelector('#overlay button');
const keyboard = document.querySelectorAll('.key');

// start game by :
// Game and Phrase objects instantiation 
startButton.addEventListener('click', () => { 
    game = new Game();
    phrase = new Phrase(game.getRandomPhrase());
    game.startGame();
})

// adds event listeners on each visual keyboard key
// call handleInteraction method on the pressed key
keyboard.forEach( key => {
    key.addEventListener('click', event => {
        const pressedKey = event.target;
        game.handleInteraction(pressedKey);
        
    })
})


















