const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    return (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') ? userInput : console.log('invalid parameter!');
    };
    

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return 'invalid parameter'
    };
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return 'Game Tie! No Winner!'
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'computer won!';
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'computer won!';
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'computer won!';
        } else {
            return 'You won!';
        }
    }
}

const randomPlayer = () => {
    let randomPlayerNumber = Math.floor(Math.random() * 3);
    switch (randomPlayerNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return 'invalid parameter'
    };
};

const playGame = () => {
    const userChoice = getUserChoice(randomPlayer());
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
 };
 
 playGame();


