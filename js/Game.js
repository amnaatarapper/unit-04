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
    
        game.activePhrase = game.getRandomPhrase();
        phrase.phrase = game.activePhrase;
        phrase.addPhraseToDisplay();
    
        console.log(`Active Phrase - phrase: ${game.activePhrase}`);
    };

    /* 
    Disables the selected letter's onscreen keyboard button
    If the phrase does not include the guessed letter, 
    the wrong CSS class is added to the selected letter's 
    keyboard button and the removeLife() method is called
    If the phrase includes the guessed letter, 
    the chosen CSS class is added to the selected letter's keyboard button,
    the showMatchedLetter() method is called on the phrase,

    and the checkForWin() method is called. If the player has won the game, 
    the gameOver() method is called
    */
    handleInteraction(key) {

        key.disabled = true;
        
        if(phrase.checkLetter(key.textContent)){
            key.classList += ' chosen'
            phrase.showMatchedLetter(key.textContent);
        } else {
            key.classList += ' wrong';
            this.removeLife();
            this.missed++
            this.check
        }
        
    }

    removeLife() {
        const tries = document.querySelectorAll('img[alt=\'Heart Icon\']');
        tries[tries.length -1].src = 'images/lostHeart.png';
        tries[tries.length -1].alt = 'Heart Lost';
    }

    showMatchedLetter(letter) {
        const list = document.querySelectorAll('li');

        for ( let li of list) {
            if (li.textContent === letter) {
                li.classList.add('show');
            }
        }
        
    }
    
        
    };

