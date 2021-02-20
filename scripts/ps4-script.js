let allCards = document.getElementsByClassName('grid-card');
let cardArr = Array.from(allCards);

//array for storing open cards
let openCards = Array();

//storing moves
let moves = 0;

//storing score
let score = 0;

//storing time
let time = 0;

//storing winning combinations
let counter = 0;

//DOM elements
let movesDisplay = document.getElementById('moves');
let scoreDisplay = document.getElementById('score');

let restartGame = document.getElementById('restart');

let header = document.querySelector('header');

//DOM elements for matched grid
let matchedCards = document.querySelector('.matched-grid');
console.log(matchedCards);

//Getting element from input
let userinput = document.getElementById('playerName');

//Timer Setup
let lastTime;
let countInterval;
let clock = 0;

setup();

//Event Listener 1
function setup() {

    
    for (let i = 0; i < cardArr.length; i++) {
        cardArr[i].addEventListener("click", openCard);
    }

    restartGame.addEventListener("click", reloadPage);

    //setting up the timer
    //starts again when page is reloaded
    lastTime = (new Date()).getTime();
    countInterval = setInterval(updateClock, 100);
}

function updateClock() {
    const currentTime = (new Date()).getTime();
    const delta = currentTime - lastTime;
    clock += delta;
    render();
    lastTime = currentTime;
}

function render() {
    const timeDisplay = document.getElementById("time");
    timeDisplay.textContent = getClockString(clock);
}

function getClockString(ms_time) {
    return (ms_time/1000).toFixed(0);
}

//Event Listener 2
function reloadPage() {
    location.reload();
}

function openCard() {

    if (openCards.length < 1) {
        //for the first opened card
        console.log('first card opened');
        openCards.push(this);
        this.classList.toggle("cover");
    }

    else if (openCards.length < 2) {
        //for the second opened card
        console.log('second card opened');

        moves++;
        console.log('Move #'+ moves);
        movesDisplay.textContent = moves;

        this.classList.toggle("cover");
        openCards.push(this);
        checkMatch();
    }
}

function checkMatch() {
    if (openCards[0].className === openCards[1].className) {
        
        score = score + 10;
        console.log('The score is ' + score);
        scoreDisplay.textContent = score;

        //add new cards to the matched grid
        saveMatched();

        counter++;
        console.log('A Match!' + counter);
        if(counter == 9) {
            setTimeout(declareWin, 1000);
        }
        
    }
    else {
        console.log('Not A Match. Close Cards and Continue.');

        //timer callback function
        setTimeout(closeCards, 300);

        //deduct points for a move if positive
        if(score > 0) {
            score -= 1;
            console.log('The score is ' + score);
            scoreDisplay.textContent = score;
        }
        
    }
}

function closeCards() {
    //changing css display using classes (Requirement #2)

    openCards[0].classList.toggle('cover');
    openCards[1].classList.toggle('cover');
    openCards.pop();
    openCards.pop();
}

function saveMatched() {

    //the list of div elements instead of li tags (extra requirement)
    let matchedCard = document.createElement('DIV');
    matchedCard.className = openCards[0].classList[1];
    matchedCard.classList.add('matched-item');
    console.log('created new card ' + matchedCard.className);
    
    matchedCards.appendChild(matchedCard);
    openCards.pop();
    openCards.pop();
}

//adding a new element (requirement 3)
//Getting name from a text input field (additional requirement)
function declareWin() {
    // alert('You Win! Congratulations!');
    let winDisplay = document.createElement('H1');
    username = userinput.value;
    if(username == "") {
        winDisplay.textContent = "You Win! Congratulations!";
    }
    else {
        winDisplay.textContent = username + ", You Win! Congratulations!";
    }
    
    header.appendChild(winDisplay);
    clearInterval(countInterval);
}

