/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrase();
        this.activePhrase = null;
    }

    createPhrase() { 
        const phrases = [
            {phrase: 'this is so cool'},
            {phrase: 'this is so cool'},
            {phrase: 'this is so cool'},
            {phrase: 'this is so cool'},
            {phrase: 'this is so cool'}];

            return phrases
    }

    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);
        const phrase = this.phrases[index].phrase;
        return phrase
    }

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        const container = document.querySelector('.main-container');
        container.firstElementChild.remove();
        this.activePhrase = this.getRandomPhrase();
        const phrase = new Phrase(this.activePhrase);
        phrase.addPhraseToDisplay();  
    };


    /* 
    ● The clicked/chosen letter must be captured.
    ● The clicked letter must be checked against the phrase for a match.
    ● If there’s a match, the letter must be displayed on screen instead of the placeholder.
    ● If there’s no match, the game must remove a life from the scoreboard.
    ● The game should check if the player has won the game by revealing all of the letters in
    the phrase or if the game is lost because the player is out of lives.
    ● If the game is won or lost, a message should be displayed on screen.
    
    */
    handleInteraction() {
        const keyboard = document.querySelector('#qwerty');

        keyboard.addEventListener('click', e => {
            const ul = document.querySelector('ul');
            console.log(ul)
            const pressedKey = e.target.textContent;
            console.log(e.target.textContent);

            const phrase = [...this.activePhrase];
            const matchedIndexes = [];

            phrase.forEach( (element, index) => {
                if (element === pressedKey) {
                    
                    ul.children[index].classList.add('show');

                }
            });





            
            console.log(matchedIndexes)
            

            





        })
    }
        
    };

