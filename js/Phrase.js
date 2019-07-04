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
            
            if (letter === " "){
                const li = document.createElement('li');
                li.classList.add('space');
                ul.appendChild(li)

            } else {
                const li = document.createElement('li');
                li.textContent= letter;
                li.classList.add('hide', 'letter', letter);
                ul.appendChild(li)
                console.log(letter);
            }

        }
    }
}