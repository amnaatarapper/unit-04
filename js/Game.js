class Game{
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrase();
        this.activePhrase = null;
    }

    // returns an array of objects holding phrases values
    createPhrase() { 
        const phrases = [
            {phrase: 'microsoft vscode'},
            {phrase: 'apple macbook pro'},
            {phrase: 'adobe photoshop'},
            {phrase: 'microsoft office'},
            {phrase: 'adobe brackets'}
        ];

            return phrases
    }

    // returns a string out of a random calculated index from an array of objects
    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);
        const phrase = this.phrases[index].phrase;
        return phrase
    }

    // set and display(addPhraseToDisplay) a string value from getRandomPhrase method
    startGame() {

        const container = document.querySelector('.main-container');
        container.firstElementChild.style.display = 'none';
    
        this.activePhrase = this.getRandomPhrase();
        phrase.phrase = this.activePhrase;
        phrase.addPhraseToDisplay();
        
        console.log(`Active Phrase - phrase: ${this.activePhrase}`);
    };

    // disable the pressed key on player interaction
    // call checkLetter(returns true or false) method on pressed keys 
    // add appropriate classnames on matching or wrong keys
  
    handleInteraction(key) {

        key.disabled = true;
        
        if(phrase.checkLetter(key.textContent)){
            key.classList += ' chosen'
            phrase.showMatchedLetter(key.textContent);
            this.gameOver();
        } else {
            key.classList += ' wrong';
            this.removeLife();
            this.missed++
            this.gameOver();
        }
        
    }

    
    // takes off a life in case the user presses the wrong key

    removeLife() {
        const tries = document.querySelectorAll('img[alt=\'Heart Icon\']');
        tries[tries.length -1].src = 'images/lostHeart.png';
        tries[tries.length -1].alt = 'Heart Lost';

        if (!tries.length){
            this.gameOver();
        }
    }

    // returns true or false after comparing shown phrase letters against remaining letters
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
    
    // handles win or lose messages and resets the game
    
    gameOver() {

        const resetGame = () => {
            this.missed = 0;
            const ul = document.querySelector('ul');
            ul.innerHTML = '';

            console.log('ul clear')
            
            const keyboard = document.querySelectorAll('button.key');
            for (let i = 0; i < keyboard.length; i++) {
                keyboard[i].className = 'key';
                keyboard[i].disabled = '';
                console.log('keyboard clear')
            }

            const hearts = document.querySelectorAll('li > img');
            for (let i = 0; i < hearts.length; i++) {
                hearts[i].src = 'images/liveHeart.png';
                hearts[i].alt = 'Heart Icon';
                console.log('Hearts clear')
            }

            console.log('Reset Success')

        };

        if(this.checkForWin() === true)  {
            const overlay = document.querySelector('#overlay');
            overlay.style.display = '';
            overlay.className = 'win';
            document.querySelector('#game-over-message').textContent = 'GG! You won :D';
            console.log('Yay!!!')
            resetGame();

        } else {
            if (this.missed === 5) {
                overlay.style.display = '';
                overlay.className = 'lose';
                document.querySelector('#game-over-message').textContent = 'You lost, wish you luck for next one :D';
                console.log('Nay!!!')
                resetGame();
            }
        }
    }

        
    };

