let cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
          cards[i].addEventListener("click", function () {
					console.log(cards);
                    removeActiveClass();
                    cards[i].classList.add("active");
          });
}

function removeActiveClass() {
          for (let i = 0; i < cards.length; i++) {
                    cards[i].classList.remove("active");
          }
}
/*

cards.forEach(function (card) {
	card.addEventListener("click", function () {
		removeActiveClass();
		card.classList.add("active");
	});
});

function removeActiveClass() {
	cards.forEach(function (card) {
		card.classList.remove("active");
	});
}	
*/