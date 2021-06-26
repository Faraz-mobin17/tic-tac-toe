import Game from "./Game.js";
import GameView from "./GameView.js";
const restartButton = document.querySelector(".restart");
let game = new Game();
let gameView = new GameView();

let tiles = document.querySelectorAll(".board-tile");

tiles.forEach((tile) => {
  tile.addEventListener("click", () => onTileClick(tile.dataset.index));
});

function onTileClick(index) {
  // do something
  // make a move
  game.makeMove(index);
  // update board
  gameView.updateBoard(game);
}

restartButton.addEventListener("click", () => {
  game = new Game();
  gameView.updateBoard(game);
});

gameView.updateBoard(game);
