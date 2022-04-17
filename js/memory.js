class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairGuessed = 0;
  }

  shuffleCards() {
    if(!this.cards) {
      return undefined;
    }
    let currentIndex = this.cards.length, randomIndex;
    while(currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [this.cards[currentIndex],this.cards[randomIndex] = this.cards[this.cards[randomIndex], this.cards[currentIndex]]]
    }
    return;
  }

  checkIfPair(card1, card2) {
    this.pairGuessed += 1;
    if(card1 == card2 ){
      return true;
    } else {
      return false;
    }
  
  } 

  
  
  checkIfFinished() {
    const totalPairs = this.cards.length / 2;

    if(this.pairGuessed < totalPairs) {
      return false;
    } else {
      return true;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
