const cardsWrp = document.querySelector('.card-wrp');
const cards = document.querySelectorAll('.card');
const startBtn = document.querySelector('.start-btn');
const ratingBtn = document.querySelector('.rating-btn');
const time = document.querySelector('.timer-time');
const gameContainer = document.querySelector('.game-container');
const rating = document.querySelector('.rating');
const ratingTable = document.querySelector('.rating__table');
const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

let results = JSON.parse(localStorage.getItem("results")) || [];
let isGameStart = false;
let turnedCards = [];
let foundPairs = 0;
let timer;
let seconds = 0;
let minutes = 0;

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
        startTimer();
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

            if (cardValues.length / 2 === foundPairs) {
                stopTimer();
                setTimeout(() => {
                    alert(`You win! Your time is ${time.textContent}`);
                    saveResult();
                    isGameStart = false;
                }, 260);
            }
        
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

function startTimer() {
    stopTimer();
    seconds = 0;
    minutes = 0;
    
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    seconds++;
  
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  
    time.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
  
function stopTimer() {
    clearInterval(timer);
}

function saveResult() {
    results.unshift(time.textContent);
    results = results.slice(0, 10);
    localStorage.setItem('results', JSON.stringify(results));
}

function toggleRating() {
    rating.classList.toggle('rating_show');
    gameContainer.classList.toggle('game-container_hidden');
}

ratingBtn.addEventListener('click', () => {
    toggleRating();
    ratingTable.innerHTML = '';
    results.forEach((result, index) => {
        const resultElement = document.createElement("p");

        resultElement.classList.add('rating__table-item');
        resultElement.innerHTML = `Game ${index + 1}: ${result}`;
        ratingTable.appendChild(resultElement);
    });

});

function game() {
    if (document.querySelector('.rating_show')) {
        toggleRating()
    }
    cards.forEach((item) => {
        item.classList.remove('card_turned');
        item.textContent = '';
    });
    isGameStart = true;
    shuffleCardsValue(cardValues);
    startTimer();
    cards.forEach((card) => {
        card.addEventListener('click', clickedCard);
    });
}


shuffleCardsValue(cardValues);
cards.forEach((card) => {
    card.addEventListener('click', clickedCard);
});
startBtn.addEventListener('click', game);
