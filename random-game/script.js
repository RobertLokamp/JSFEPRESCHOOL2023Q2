const cardsWrp = document.querySelector('.card-wrp');
const cards = document.querySelectorAll('.card');
const startBtn = document.querySelector('.start-btn');
const ratingBtn = document.querySelector('.rating-btn');
const gameContainer = document.querySelector('.game-container');
const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

let isGameStart = false;
let turnedCards = [];


function shuffleCardsValue(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    cards.forEach((card, index) => {
        card.dataset.value = arr[index];
    });
}

function clickedCard(e) {
    if (!isGameStart) {
        isGameStart = true;
    }
    const card = e.target;

    if (card.classList.contains('card_turned') || turnedCards.length >= 2) {
        return
    }

    card.classList.add('card_turned');
    card.textContent = card.dataset.value;
    turnedCards.push(card);

    if (turnedCards.length === 2) {
        if (turnedCards[0].dataset.value === turnedCards[1].dataset.value) {
            foundPairs++;
            turnedCards = [];
        
        } else {
            setTimeout(() => {
                turnedCards[0].classList.remove('card_turned');
                turnedCards[0].textContent = '';
                turnedCards[1].classList.remove('card_turned');
                turnedCards[1].textContent = '';
                turnedCards = [];
            }, 700)
        }
    }
}

function game() {
    isGameStart = true;
    shuffleCardsValue(cardValues);
    cards.forEach((card) => {
        card.addEventListener('click', clickedCard);
    });
}

shuffleCardsValue(cardValues);
cards.forEach((card) => {
    card.addEventListener('click', clickedCard);
});
startBtn.addEventListener('click', game);
