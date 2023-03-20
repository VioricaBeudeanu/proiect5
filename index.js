let currentPlayer = "X";
const playerX = "X";
const playerO = "O";
let moves = 0;
let winnerText = "";

function handleClickReset() {
	currentPlayer = "X";
	let spancp = document.getElementById("current-player");
	spancp.innerHTML = currentPlayer;
	let boxes = document.getElementsByClassName("box");
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].innerHTML = "";
	}
	moves = 0;
	winnerText = "";
	let winner = document.getElementById("winner");
	winner.innerHTML = winnerText;
}
function handleBoxClick(event) {
	if (event.innerHTML === "" && winnerText === "") {
		moves++; //counts the number of moves from the game
		event.innerHTML = currentPlayer; //adds tht X or O in each box
		findWinner();
		if (currentPlayer === playerX) {
			currentPlayer = playerO;
		} else currentPlayer = playerX;

		let spancp = document.getElementById("current-player");
		spancp.innerHTML = currentPlayer;
		if (moves === 9) {
			let winner = document.getElementById("winner");

			winner.innerHTML = "GAME IS DRAWN";
			return;
		}
	}
}

function findWinner() {
	let winOptions = ["012", "345", "678", "036", "147", "258", "048", "246"];
	let boxes = document.getElementsByClassName("box");

	for (let i = 0; i < winOptions.length; i++) {
		let first = parseInt(winOptions[i][0]);
		let second = parseInt(winOptions[i][1]);
		let third = parseInt(winOptions[i][2]);

		if (
			boxes[first].innerHTML === playerX &&
			boxes[second].innerHTML === playerX &&
			boxes[third].innerHTML === playerX
		) {
			winnerText = "WINNER IS X";
		}

		if (
			boxes[first].innerHTML === playerO &&
			boxes[second].innerHTML === playerO &&
			boxes[third].innerHTML === playerO
		) {
			winnerText = "WINNER IS O";
		}
	}
	let winner = document.getElementById("winner");

	winner.innerHTML = winnerText;
}
