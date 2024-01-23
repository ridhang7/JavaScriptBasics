const userSelection = document.querySelector(".js-yourSelection");
const computerSelection = document.querySelector(".js-computerSelection");
const autoPlayButton = document.querySelector(".js-autoPlay");
let interValId;
let computerMove = "";
let userMove = "";
let _autoPlayUserMove = "";
let isAutoPlaying = false;
let resultString;
let resultScore = JSON.parse(localStorage.getItem("resultScore")) || {
  Won: 0,
  Lost: 0,
  Tie: 0,
};

document.body.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    autoPlay();
  } else if (event.key === "Backspace") {
    showConfirmation();
  }
});

document.querySelector(".js-rock-button").addEventListener("click", () => {
  pickComputerMove();
  results("Rock");
});

document.querySelector(".js-paper-button").addEventListener("click", () => {
  pickComputerMove();
  results("Paper");
});

document.querySelector(".js-scissor-button").addEventListener("click", () => {
  pickComputerMove();
  results("Scissors");
});

document.querySelector(".js-resetScore").addEventListener("click", () => {
  showConfirmation();
});

document.querySelector(".js-autoPlay").addEventListener("click", () => {
  autoPlay();
});

function showConfirmation() {
  document.querySelector(
    ".js-reset-confirmation"
  ).innerHTML = `Are you sure you want to reset the score?
  <button class="js-reset-confirm-yes reset-confirm-button">
    Yes
  </button>
  <button class="js-reset-confirm-no reset-confirm-button">
    No
  </button>`;

  document
    .querySelector(".js-reset-confirm-yes")
    .addEventListener("click", () => {
      resetScore();
      hideResetConfirmation();
    });

  document
    .querySelector(".js-reset-confirm-no")
    .addEventListener("click", () => {
      hideResetConfirmation();
    });
}

function hideResetConfirmation() {
  document.querySelector(".js-reset-confirmation").innerHTML = "";
}

function pickComputerMove() {
  const randomNumber = Math.random();
  computerMove = "";
  if (randomNumber > 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
}

function pickUserMove() {
  const randomNumber = Math.random();
  _autoPlayUserMove = "";
  if (randomNumber > 0 && randomNumber < 1 / 3) {
    _autoPlayUserMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    _autoPlayUserMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    _autoPlayUserMove = "Scissors";
  }
}

function results(userMove) {
  if (userMove === computerMove) {
    resultString = "Tie";
    resultScore.Tie += 1;
  } else if (userMove === "Rock") {
    if (computerMove === "Scissors") {
      resultString = "You Won";
      resultScore.Won += 1;
    } else if (computerMove === "Paper") {
      resultString = "You Lost";
      resultScore.Lost += 1;
    }
  } else if (userMove === "Paper") {
    if (computerMove === "Rock") {
      resultString = "You Won";
      resultScore.Won += 1;
    } else if (computerMove === "Scissors") {
      resultString = "You Lost";
      resultScore.Lost += 1;
    }
  } else if (userMove === "Rock") {
    if (computerMove === "Scissors") {
      resultString - "You Won";
      resultScore.Won += 1;
    } else if (computerMove === "Paper") {
      resultString = "You Lost";
      resultScore.Lost += 1;
    }
  }
  localStorage.setItem("resultScore", JSON.stringify(resultScore));

  userSelection.innerHTML = `Your Selection:` + emojiSelector(userMove);
  computerSelection.innerHTML =
    `Computer Selection:` + emojiSelector(computerMove);
  document.querySelector(
    ".js-gameResult"
  ).innerHTML = `Game Result: ${resultString}`;
  document.querySelector(
    ".js-result"
  ).innerHTML = `Result - Lost: ${resultScore.Lost} Won: ${resultScore.Won} Tie: ${resultScore.Tie}`;
  return console.log(`You selected ${userMove}.
            Computer Selected ${computerMove}. ${resultString}.
            Current Score Lost: ${resultScore.Lost} Won: ${resultScore.Won} Tie: ${resultScore.Tie}`);
}

function emojiSelector(move) {
  if (move === "Rock") {
    return "&#9994;";
  } else if (move === "Paper") {
    return "&#9995;";
  } else if (move === "Scissors") {
    return "&#9996;";
  }
}

function resetScore() {
  resultScore.Tie = 0;
  resultScore.Won = 0;
  resultScore.Lost = 0;
  resultString = "";
  localStorage.setItem("score", JSON.stringify(resultScore));
  document.querySelector(".js-yourSelection").innerHTML = `Your Selection: `;
  document.querySelector(
    ".js-computerSelection"
  ).innerHTML = `Computer Selection: `;
  document.querySelector(
    ".js-gameResult"
  ).innerHTML = `Game Result: ${resultString}`;
  document.querySelector(".js-result").innerHTML = `Result - 
          Lost: ${resultScore.Lost} 
          Won: ${resultScore.Won}     
          Tie: ${resultScore.Tie}`;
  if (interValId) {
    autoPlay();
  }
  localStorage.removeItem("resultScore");
  return console.log(
    `Score reset complete Lost: ${resultScore.Lost} Won: ${resultScore.Won} Tie: ${resultScore.Tie}`
  );
}

function autoPlay() {
  if (!isAutoPlaying) {
    interValId = setInterval(function () {
      pickUserMove();
      pickComputerMove();
      results(_autoPlayUserMove);
    }, 1000);
    autoPlayButton.innerHTML = "Stop Auto Play";
    isAutoPlaying = true;
  } else {
    autoPlayButton.innerHTML = "Auto Play";
    isAutoPlaying = false;
    clearInterval(interValId);
  }
}
