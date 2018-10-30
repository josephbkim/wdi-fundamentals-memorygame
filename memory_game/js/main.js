console.log("Up and running!");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"	
}
];

var cardsInPlay = [];


//function that checks if both cards in play match
var checkForMatch = function () {
			if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
};



//flipcard function
var flipCard = function (cardId) {

	cardsInPlay.push(cards[cardId].rank)

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
};


//calls the function
flipCard(0);
flipCard(2);