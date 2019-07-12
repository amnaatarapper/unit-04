/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrase();
        this.activePhrase = null;
    }

    createPhrase() {
        const phrases = [{
                phrase: 'this is cookies'
            },
            {
                phrase: 'this is cookies'
            },
            {
                phrase: 'this is cookies'
            },
            {
                phrase: 'this is cookies'
            },
            {
                phrase: 'this is cookies'
            }
        ];

        return phrases
    }

    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);
        const phrase = this.phrases[index].phrase;
        return phrase
    }

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

        if (phrase.checkLetter(key.textContent)) {
            key.classList += ' chosen'
            const isMatch = phrase.showMatchedLetter(key.textContent);
            this.gameOver();
        } else {
            key.classList += ' wrong';
            this.removeLife();
            this.missed++
            this.gameOver();
        }

    }

    removeLife() {
        const tries = document.querySelectorAll('img[alt=\'Heart Icon\']');
        tries[tries.length - 1].src = 'images/lostHeart.png';
        tries[tries.length - 1].alt = 'Heart Lost';

        if (!tries.length) {
            this.gameOver();
        }
    }

    checkForWin() {
        const letters = [...this.activePhrase];
        const letterCount = letters.filter(element => element !== ' ').length;
        const shownLettersCount = document.querySelectorAll('.show').length;

        if (shownLettersCount === letterCount) {
            return true
        } else {
            return false
        }
    }

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



        if (this.checkForWin() === true) {
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