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
    gameBoard[squareID] = player1;
  } else {
    player = player2;
  }
  document.getElementById(squareID).innerText = player;
  togglePlayer();
}

gameStart();
