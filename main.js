var cards = [
    {
    rank:"Queen",
    suit: "Hearts",
    cardImage: "images/queen-of-hearts.png"
    },
    {
    rank: "Queen",
    suit: "Dimonds",
    cardImage: "images/queen-of-diamonds.png"
    },
    {rank: "King",
    suit: "Hearts",
    cardImage: "images/king-of-hearts.png"
    },
    {
    rank: "King",
    suit: "Diamonds",
    cardImage: "images/king-of-diamonds.png"
    }
];
var cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    }
    else {
        alert("Sorry, try again.");
    }
    
}


var flipCard = function () {
    var cardId = this.getAttribute("data-id"); //double check this
    console.log("User flipped over " + cards[cardId].rank);
    console.log(cards[cardId].suit);
    console.log(cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src',cards[cardId].cardImage);// double check
    if (cardsInPlay.length === 2) {
        checkForMatch();
        reset();      
    }
  
}

var createBoard = function () {
    for (var i=0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src','images/back.png');
        cardElement.setAttribute('data-id',i);
        cardElement.addEventListener('click',flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
    
}
createBoard();


var reset = function () {
    var card = document.getElementsByTagName('img');
    cardsInPlay = [];
    for (i = 0; cards.length; i++) {
        if (card[i].getAttribute('src') != 'images/back.png') {
            card[i].setAttribute('src', 'images/back.png');
        }
    }
}