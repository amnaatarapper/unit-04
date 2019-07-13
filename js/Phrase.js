

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
    // add phrase letter by letter to the display 
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
               
            }

        }
    }
    
    // returns true or false after comparing shown letters against ones from player's interaction
    checkLetter(letter) {
       if ([...this.phrase].indexOf(letter) !== -1 ) {
           return true
       } else {
           return false
       }
    };

    // show matched player's letters
    showMatchedLetter(letter) {
        
     
            const list = document.querySelectorAll('li');
    
            for ( let li of list) {
                if (li.textContent === letter){  
                    li.classList.add('show');
                }
            }
            

        }

}