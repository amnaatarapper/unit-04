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
            {phrase: 'this is cookies'},
            {phrase: 'this is cookies'},
            {phrase: 'this is cookies'},
            {phrase: 'this is cookies'},
            {phrase: 'this is cookies'}];

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
        container.firstElementChild.style.display = 'none';
    
        game.activePhrase = game.getRandomPhrase();
        phrase.phrase = game.activePhrase;
        phrase.addPhraseToDisplay();
    
        console.log(`Active Phrase - phrase: ${game.activePhrase}`);
    };

    
    handleInteraction(key) {

        key.disabled = true;
        
        if(phrase.checkLetter(key.textContent)){
            key.classList += ' chosen'
            const isMatch = phrase.showMatchedLetter(key.textContent);
            this.checkForWin();
        } else {
            key.classList += ' wrong';
            this.removeLife();
            this.missed++
            this.gameOver();
        }
        
    }

    removeLife() {
        const tries = document.querySelectorAll('img[alt=\'Heart Icon\']');
        tries[tries.length -1].src = 'images/lostHeart.png';
        tries[tries.length -1].alt = 'Heart Lost';

        if (!tries.length){
            this.gameOver();
        }
    }

    checkForWin() {
        const letters = [...this.activePhrase];
        const letterCount = letters.filter( element => element !== ' ').length;
        const shownLettersCount = document.querySelectorAll('.show').length;

        if (shownLettersCount === letterCount) {
            return true
        } else {
            return false
        }
        




    }
    
    gameOver() {

    }

        
    };

