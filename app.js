const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_PLAYER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;


const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid Choice! we choose ${DEFAULT_PLAYER_CHOICE} for you!`);
        return DEFAULT_PLAYER_CHOICE;
    } else {
        return selection;
    }
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue > 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }

};

const getWinner = (cChoice, pChoice) => cChoice === pChoice ? RESULT_DRAW : (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK) ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS
// if (cChoice === pChoice) {
//     return RESULT_DRAW;
// } else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK) {
//     return RESULT_PLAYER_WINS;
// } else {
//     return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener('click', function () {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    let message = `You picked ${playerChoice} and computer picked ${computerChoice}, therefore you `;
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw';
    }
    else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'win';
    } else {
        message = message + 'lost';
    }
    alert(message);
    gameIsRunning = false;
});