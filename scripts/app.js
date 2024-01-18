let twoPlayerBtn = document.getElementById("twoPlayerBtn");
let vsCpuBtn = document.getElementById("vsCpuBtn");
let firstPageHide = document.getElementById("firstPageHide");
let choicesPageHide = document.getElementById("choicesPageHide");
let rulesBoxHide = document.getElementById("rulesBoxHide");
let rulesBtn = document.getElementById("rulesBtn");
let xBtn = document.getElementById("xBtn");
let backBtn = document.getElementById("backBtn");
let suddenDeathBtn = document.getElementById("suddenDeathBtn");
let bestOf5Btn = document.getElementById("bestOf5Btn");
let bestOf7Btn = document.getElementById("bestOf7Btn");
let gameHide = document.getElementById("gameHide");
let body = document.getElementById("body");
let player1Score = document.getElementById("player1Score");
let player2Score = document.getElementById("player2Score");
let textOnScreen = document.getElementById("textOnScreen");
let endScreen = document.getElementById("endScreen");
let winText = document.getElementById("winText");

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");
let lizardBtn = document.getElementById("lizardBtn");
let spockBtn = document.getElementById("spockBtn");

// -----------------------------------------

let playerIsTrue = true;
let playerOneTurn = true;
let maxScore = 1;
let p1Points = 0;
let p2Points = 0;
let choice1;
let choice2;

twoPlayerBtn.addEventListener('click', function () {
    console.log("2 player playerIsTrue=true");
    playerIsTrue = true;
    firstPageHide.style.display = "none"
    choicesPageHide.style.display = "block"
})
vsCpuBtn.addEventListener('click', function () {
    console.log("2 player playerIsTrue=false");
    playerIsTrue = false;
    firstPageHide.style.display = "none"
    choicesPageHide.style.display = "block"
})

rulesBtn.addEventListener('click', function () {
    rulesBoxHide.style.display = "block"
})

xBtn.addEventListener('click', function () {
    rulesBoxHide.style.display = "none"
})

backBtn.addEventListener('click', function () {
    choicesPageHide.style.display = "none"
    firstPageHide.style.display = "block"
})
suddenDeathBtn.addEventListener('click', function () {
    choicesPageHide.style.display = "none"
    gameHide.style.display = "block"
    body.className = "gameBg"
    maxScore = 1;
    console.log(maxScore);

})
bestOf5Btn.addEventListener('click', function () {
    choicesPageHide.style.display = "none"
    gameHide.style.display = "block"
    body.className = "gameBg"
    maxScore = 3;
    console.log(maxScore);

})
bestOf7Btn.addEventListener('click', function () {
    choicesPageHide.style.display = "none"
    gameHide.style.display = "block"
    body.className = "gameBg"
    maxScore = 5;
})
rockBtn.addEventListener('click', async () => {
    if (playerOneTurn && playerIsTrue) {
        textOnScreen.textContent = "Player 2's Turn"
        choice1 = 'rock';
        playerOneTurn = false;
    } else if (playerOneTurn && playerIsTrue === false) {

        choice1 = 'rock';

        choice2 = await computer();
        compare(choice1, choice2);
        textOnScreen.textContent = `Computer chose ${choice2}`
        textOnScreen.className = "font10";
        updateScore();
    } else if (playerOneTurn === false && playerIsTrue === true) {
        textOnScreen.textContent = "Player 1's Turn"
        choice2 = 'rock';
        playerOneTurn = true;
        compare(choice1, choice2);
        updateScore()
    }
})
paperBtn.addEventListener('click', async () => {
    if (playerOneTurn && playerIsTrue) {
        textOnScreen.textContent = "Player 2's Turn"
        choice1 = 'paper';
        playerOneTurn = false;
    } else if (playerOneTurn && playerIsTrue === false) {

        choice1 = 'paper';

        choice2 = await computer();
        compare(choice1, choice2);
        textOnScreen.textContent = `Computer chose ${choice2}`
        textOnScreen.className = "font10";
        updateScore();
    } else if (playerOneTurn === false && playerIsTrue === true) {
        textOnScreen.textContent = "Player 1's Turn"
        choice2 = 'paper';
        playerOneTurn = true;
        compare(choice1, choice2);
        updateScore()
    }
})
scissorsBtn.addEventListener('click', async () => {
    if (playerOneTurn && playerIsTrue) {
        textOnScreen.textContent = "Player 2's Turn"
        choice1 = 'scissors';
        playerOneTurn = false;
    } else if (playerOneTurn && playerIsTrue === false) {

        choice1 = 'scissors';

        choice2 = await computer();
        compare(choice1, choice2);
        textOnScreen.textContent = `Computer chose ${choice2}`
        textOnScreen.className = "font10";
        updateScore();
    } else if (playerOneTurn === false && playerIsTrue === true) {
        textOnScreen.textContent = "Player 1's Turn"
        choice2 = 'scissors';
        playerOneTurn = true;
        compare(choice1, choice2);
        updateScore()
    }
})
lizardBtn.addEventListener('click', async () => {
    if (playerOneTurn && playerIsTrue) {
        textOnScreen.textContent = "Player 2's Turn"
        choice1 = 'lizard';
        playerOneTurn = false;
    } else if (playerOneTurn && playerIsTrue === false) {

        choice1 = 'lizard';

        choice2 = await computer();
        compare(choice1, choice2);
        textOnScreen.textContent = `Computer chose ${choice2}`
        textOnScreen.className = "font10";
        updateScore();
    } else if (playerOneTurn === false && playerIsTrue === true) {
        textOnScreen.textContent = "Player 1's Turn"
        choice2 = 'lizard';
        playerOneTurn = true;
        compare(choice1, choice2);
        updateScore()
    }
})

spockBtn.addEventListener('click', async () => {
    if (playerOneTurn && playerIsTrue) {
        textOnScreen.textContent = "Player 2's Turn"
        choice1 = 'spock';
        playerOneTurn = false;
    } else if (playerOneTurn && playerIsTrue === false) {

        choice1 = 'spock';

        choice2 = await computer();
        compare(choice1, choice2);
        textOnScreen.textContent = `Computer chose ${choice2}`
        textOnScreen.className = "font10";
        updateScore();
    } else if (playerOneTurn === false && playerIsTrue === true) {
        textOnScreen.textContent = "Player 1's Turn"
        choice2 = 'spock';
        playerOneTurn = true;
        compare(choice1, choice2);
        updateScore()
    }
})

function compare(p1, p2) {
    if (p1 === p2) {
        //tie nothing
    } else if (p1 === 'rock' && p2 === 'scissors' || p1 === 'rock' && p2 === 'lizard') {
        // p1 wins
        p1Points++;
    } else if (p1 === 'paper' && p2 === 'rock' || p1 === 'paper' && p2 === 'spock') {
        //p1 wins
        p1Points++;
    } else if (p1 === 'scissors' && p2 === 'paper' || p1 === 'scissors' && p2 === 'lizard') {
        //p1 wins
        p1Points++;
    } else if (p1 === 'lizard' && p2 === 'paper' || p1 === 'lizard' && p2 === 'spock') {
        //p1 wins
        p1Points++;
    } else if (p1 === 'spock' && p2 === 'scissors' || p1 === 'spock' && p2 === 'rock') {
        //p1 wins
        p1Points++;
    } else if (p1 === 'rock' && p2 === 'paper' || p1 === 'rock' && p2 === 'spock') {
        //p2 wins
        p2Points++;

    } else if (p1 === 'paper' && p2 === 'scissors' || p1 === 'paper' && p2 === 'lizard') {
        //p2 wins
        p2Points++;
    } else if (p1 === 'scissors' && p2 === 'spock' || p1 === 'scissors' && p2 === 'rock') {
        //p2 wins
        p2Points++;
    } else if (p1 === 'lizard' && p2 === 'scissors' || p1 === 'lizard' && p2 === 'rock') {
        //p2 wins
        p2Points++;
    } else if (p1 === 'spock' && p2 === 'paper' || p1 === 'spock' && p2 === 'lizard') {
        //p2 wins
        p2Points++;
    }
}

function updateScore() {
    player1Score.textContent = `Player 1's Score: ${p1Points}`;
    player2Score.textContent = `Player 2's Score: ${p2Points}`;

    if (p2Points === maxScore && playerIsTrue === false) {
        body.className = "endBg"
        gameHide.style.display = "none";
        endScreen.style.display = "block";
        winText.textContent = "Computer Wins!"
    } else if (p1Points === maxScore) {
        body.className = "endBg"
        gameHide.style.display = "none";
        endScreen.style.display = "block";
        winText.textContent = "Player 1 Wins!"
    } else if (p2Points === maxScore) {
        body.className = "endBg"
        gameHide.style.display = "none";
        endScreen.style.display = "block";
        winText.textContent = "Player 2 Wins!"
    }
}



async function computer() {
    const promise = await fetch('https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption');

    const data = await promise.text();

    return data.toLowerCase();
}

