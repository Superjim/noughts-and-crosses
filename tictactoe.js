//notes
//https://www.baeldung.com/cs/tic-tac-toe-winning-combinations

var gameBoard = [];

const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const player1 = "X";
const player2 = "O";
const computer = "AI";
var player;
whosTurnIsIt = false;

const squares = document.querySelectorAll(".square");
const restart = document.getElementById("restartButton");

restart.addEventListener("click", () => {
  resetBoard();
});

function setMessage(message) {
  document.getElementById("message").innerText = message;
}

function resetBoard() {
  gameBoard = Array.from(Array(9).keys());
  whosTurnIsIt = false;
  for (x = 0; x < squares.length; x++) {
    document.getElementById(x).innerText = "";
  }
}

function gameStart() {
  document.querySelector(".gameOver").style.display = "none";
  gameBoard = Array.from(Array(9).keys());
  for (x = 0; x < squares.length; x++) {
    squares[x].addEventListener("click", playerTurn, false);
  }
}

function togglePlayer() {
  whosTurnIsIt = !whosTurnIsIt;
}

function playerTurn(square) {
  turn(square.target.id, player1);
}

function turn(squareID, player) {
  if (whosTurnIsIt === false) {
    //make this better
    newPlayer = player2;
    gameBoard[squareID] = player1;
  } else {
    //make this better
    newPlayer = player1;
    player = player2;
  }

  if (document.getElementById(squareID).innerText === "") {
    document.getElementById(squareID).innerText = player;
  }
  //make this better
  setMessage("Player " + newPlayer + "'s turn");
  togglePlayer();
}

function checkWinner(board, player) {}

gameStart();
