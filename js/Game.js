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
        const startButton = document.querySelector('#overlay button');
        
        startButton.addEventListener('click', () => {
            container.firstChild.remove();
            this.activePhrase = this.getRandomPhrase();
        });

        phrase.addPhraseToDisplay();
    };

}