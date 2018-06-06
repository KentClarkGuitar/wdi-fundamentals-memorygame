console.log("Up and running!");

var cardOne;
var cardTwo;

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

checkForMatch = function () {
if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
}
}

flipCard = function (cardId) {
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);



if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You've found a match");
	} else {
		alert("Sorry, try again.")
	}
}
checkForMatch();
}
flipCard(0);
flipCard(2)


