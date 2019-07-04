/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
    addPhraseToDisplay() {

        const ul = document.querySelector('ul');
    
        const letter = this.phrase.split("");

        for ( let letter of this.phrase) {

            const li = document.createElement('li');
            li.classList.add('hide', 'letter', letter);
            ul.appendChild(li)

        }



        

    }
}