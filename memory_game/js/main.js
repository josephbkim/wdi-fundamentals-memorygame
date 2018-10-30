console.log("Up and running!");

var cards = ['queen', 'king', 'queen', 'king'];
var cardsInPlay = [];


//function that checks if both cards in play match
var checkForMatch = function () {
			if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
}



//flipcard function
var flipCard = function (cardId) {

	cardsInPlay.push(cards[cardId])

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

	console.log("User flipped " + cards[cardId]);

}


//calls the function
flipCard(0);
flipCard(2);