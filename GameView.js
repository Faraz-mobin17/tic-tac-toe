export default class GameView {
  constructor() {
    console.log("init game view");
  }

  updateBoard(game) {
    console.log("this is a board within GameView");
    this.updateTurn(game);
    const winningCombination = game.findWinningCombinations();
    for (let i = 0; i < game.board.length; i += 1) {
      const tile = document.querySelector(`.board-tile[data-index='${i}']`);
      tile.classList.remove("tile-winner");
      let tileType = game.board[i] == "X" ? "tile-x" : "tile-y";
      tile.innerHTML = `<span class='${tileType}'>${
        game.board[i] ? game.board[i] : ""
      }</span>`;
      if (winningCombination && winningCombination.includes(i)) {
        tile.classList.add("tile-winner");
      }
    }
  }

  updateTurn(game) {
    let playerX = document.querySelector(".player-x");
    let playerY = document.querySelector(".player-y");
    playerX.classList.remove("active");
    playerY.classList.remove("active");
    if (game.turn == "X") {
      playerX.classList.add("active");
    } else {
      playerY.classList.add("active");
    }
  }
}
