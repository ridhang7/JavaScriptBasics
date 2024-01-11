function nameSubmit() {
    let name = document.getElementById("js-nameHolder").value;
    document.querySelector('.js-nameResult')
.innerHTML = `Your name is: ${name}`;
}

const ytSubBtn = document.querySelector(".js-yt-subscribe-btn"); 
const amznCartValue = document.querySelector(".js-cartvalue");
const userSelection = document.querySelector('.js-yourSelection');
const computerSelection = document.querySelector('.js-computerSelection');
let computerMove = '';
let userMove = '';
let resultString
let resultScore = JSON.parse(localStorage.getItem('resultScore')) || {        
    Won: 0,
    Lost: 0,
    Tie: 0
    };

function handleCostKeyDown(event) { 
    if (event.key === 'Enter') {
        amazonCartCalculator();
    }
}

function Subscribed() {
    if (ytSubBtn.innerText === "Subscribe") { 
        ytSubBtn.innerHTML = "Subscribed";
        ytSubBtn.classList.add('js-yt-subscribed-btn');
    }
    else if (ytSubBtn.innerText === "Subscribed") { 
        ytSubBtn.innerHTML = "Subscribe";
        ytSubBtn.classList.remove('js-yt-subscribed-btn');
    }
}

function amazonCartCalculator() {
    let cartValue = document.getElementById("js-cartValueInput").value;
    cartValue = parseInt(cartValue);
    if (cartValue < 0){
        amznCartValue.innerHTML = "Error: Cost cannot be less than $0"
        amznCartValue.classList.add('js-error');

    }
    else if (cartValue>0 && cartValue < 40) {
        cartValue = cartValue+ 10;
        amznCartValue.innerHTML = "$" + cartValue;
        amznCartValue.classList.remove('js-error');
    }
    else { 
        amznCartValue.innerHTML = "$" + cartValue;
        amznCartValue.classList.remove('js-error');
    }
}

console.log(localStorage.getItem('resultScore'));

function pickComputerMove() {
    const randomNumber = Math.random(); 
    computerMove = '';
    if (randomNumber > 0 && randomNumber < 1/3) { computerMove = 'Rock';} 
    else if (randomNumber>= 1/3 && randomNumber < 2/3) { computerMove = 'Paper';}
    else if (randomNumber >= 2 / 3 && randomNumber < 1) { computerMove = 'Scissors';}
}

function results (userMove) {
    if (userMove === computerMove ) { 
        resultString = 'Tie'; 
        resultScore.Tie += 1; 
    } else if (userMove === 'Rock') { 
        if (computerMove === 'Scissors') { 
            resultString = 'You Won'; 
            resultScore.Won += 1; 
        } else if (computerMove === 'Paper') { 
            resultString = 'You Lost';
            resultScore.Lost += 1; 
        }
    } else if (userMove === 'Paper') { 
        if (computerMove === 'Rock') { 
            resultString = 'You Won'; 
            resultScore.Won += 1;
        } else if (computerMove === 'Scissors') { 
            resultString = 'You Lost';
            resultScore.Lost += 1;
        }
    } else if (userMove === 'Rock') { 
        if (computerMove === 'Scissors'){ 
            resultString - 'You Won';
            resultScore.Won += 1;
        } else if (computerMove === 'Paper') { 
            resultString ='You Lost'; 
            resultScore.Lost += 1;
        }
    }
    localStorage.setItem('resultScore', JSON.stringify(resultScore));
    
    userSelection 
        .innerHTML = `Your Selection:` + emojiSelector(userMove);
    computerSelection
        .innerHTML = `Computer Selection:` + emojiSelector(computerMove);
    document.querySelector('.js-gameResult')
        .innerHTML = `Game Result: ${resultString}`;
    document.querySelector('.js-result')
        .innerHTML = `Result - Lost: ${resultScore.Lost} Won: ${resultScore.Won} Tie: ${resultScore. Tie}`; 
return console.log(`You selected ${userMove}.
    Computer Selected ${computerMove}. ${resultString}.
    Current Score Lost: ${resultScore.Lost} Won: ${resultScore.Won} Tie: ${resultScore.Tie}`);

}

function emojiSelector(move){
    if (move === 'Rock'){
        return '&#9994;';
    } else if (move === 'Paper'){
        return '&#9995;';
    } else if (move === 'Scissors'){
        return '&#9996;';
    }
}

function resetScore() {
    resultScore.Tie = 0;
    resultScore.Won = 0;
    resultScore.Lost = 0;
    resultString = "";
    localStorage.setItem('score', JSON.stringify(resultScore));
    document.querySelector('.js-yourSelection') 
        .innerHTML = `Your Selection: `;
    document.querySelector('.js-computerSelection')
        .innerHTML = `Computer Selection: `;
        document.querySelector('.js-gameResult')
        .innerHTML = `Game Result: ${resultString}`;
    document.querySelector('.js-result')
        .innerHTML = `Result - Lost: ${resultScore.Lost} Won: ${resultScore.Won} Tie: ${resultScore. Tie}`; 
return console.log(`Score reset complete Lost: ${resultScore.Lost} Won: ${resultScore.Won} Tie: ${resultScore.Tie}`);   
}

function coinGame (result) {
    if (result === 'Heads') {
        document.querySelector('.js-HT-result') 
            .innerHTML = "You selected: Heads";
    } else if (result === 'Tails') {
        document.querySelector('.js-HT-result') 
            .innerHTML = "You selected: Tails";
    }
    console.log(document.querySelector('.js-HT-result').innerHTML);
}