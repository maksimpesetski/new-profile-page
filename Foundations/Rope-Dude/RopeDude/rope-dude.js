// What is ASCIIART? Check the README.md or Workshop to see why ASCIIART is defined in your file.
const ASCIIART = [
  `
  +---+
  |   |
  O   |
 /|\\\  |
 / \\\  |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\\  |
 /    |
      |
      
=========`,
  `
  +---+
  |   |
  O   |
 /|\\\  |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
  `
  +---+
  |   |
      |
      |
      |
      |
=========`,
];


class RopeDude {
	constructor (secretWord) {
		this.secretWord = secretWord.toLowerCase().split('');
    this.remainingGuesses = 6;
    this.lettersGuessed = [];
    this.gameState = 'playing'; 
	}

	submitGuess(letter) {

    if (this.gameState !== 'playing') return;

    letter = letter.toLowerCase();

    if (!this.lettersGuessed.includes(letter)) {
      this.lettersGuessed.push(letter);
    
      if (!(this.secretWord.includes(letter))) this.remainingGuesses--;
    };
  };

  computeGameState() {
    if (!this.remainingGuesses) this.gameState = 'lost';
    
    let letterCheck = true;

    for (let char of this.secretWord) {
    
      if (this.lettersGuessed.includes(char)) continue;
      else letterCheck = false;
    }

    if (letterCheck) this.gameState = 'won';
  };

  getSecretWordPuzzle() {
    let str = '';

    for (let char of this.secretWord) {
      if (char === ' ') str += char;
      else if (this.lettersGuessed.includes(char)) str += char;
      else str += '#';
    }

    return str
  }

  getGameStateMessage() {
    if (this.gameState === 'playing') return `There is a total of ${this.remainingGuesses} guesses remaining:\n${ASCIIART[this.remainingGuesses]}`;

    if (this.gameState === 'lost') return `Game Over, the word was "${this.secretWord.join('')}":\n${ASCIIART[this.remainingGuesses]}`;

    if (this.gameState === 'won') return 'Winner Winner Chicken Dinner, you won!';
  }
	
} 

function simulateRopeDude (secretWord) {

  const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const newGame = new RopeDude(secretWord);

  function playRopeDude() {
    if (newGame.gameState !== 'playing') return newGame.getGameStateMessage();

    else {
      const randomIdx = Math.floor(Math.random() * 26);
      const guess = characters[randomIdx];

      newGame.submitGuess(guess);
      newGame.computeGameState();
      return playRopeDude();
    }

  }
  return playRopeDude();
}