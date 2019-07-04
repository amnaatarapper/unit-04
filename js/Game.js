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
        console.log(index)
        console.log(this.phrases[index])

        
    }
}