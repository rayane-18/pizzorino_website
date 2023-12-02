document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("tetrisCanvas");
  const context = canvas.getContext("2d");

  const ROWS = 20;
  const COLUMNS = 10;
  const BLOCK_SIZE = 30;

  const board = Array.from({ length: ROWS }, () => Array(COLUMNS).fill(0));
  let currentPiece;
  let intervalId;

  function drawSquare(x, y, color) {
    context.fillStyle = color;
    context.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    context.strokeStyle = "#4b5320";
    context.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
  }

  function drawBoard() {
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLUMNS; col++) {
        const color = board[row][col] === 0 ? "	#4b5320" : "#7fffd4";
        drawSquare(col, row, color);
      }
    }
  }

  function drawPiece() {
    for (let row = 0; row < currentPiece.length; row++) {
      for (let col = 0; col < currentPiece[row].length; col++) {
        if (currentPiece[row][col]) {
          const color = "#fdee00";
          drawSquare(currentPieceX + col, currentPieceY + row, color);
        }
      }
    }
  }

  function mergePiece() {
    for (let row = 0; row < currentPiece.length; row++) {
      for (let col = 0; col < currentPiece[row].length; col++) {
        if (currentPiece[row][col]) {
          board[currentPieceY + row][currentPieceX + col] = 1;
        }
      }
    }
  }

  function checkCollision() {
    for (let row = 0; row < currentPiece.length; row++) {
      for (let col = 0; col < currentPiece[row].length; col++) {
        if (
          currentPiece[row][col] &&
          (board[currentPieceY + row] &&
            board[currentPieceY + row][currentPieceX + col]) !== 0
        ) {
          return true;
        }
      }
    }
    return false;
  }

  function rotatePiece() {
    const rotatedPiece = currentPiece[0]
      .map((_, i) => currentPiece.map((row) => row[i]))
      .reverse();
    const prevPiece = currentPiece;
    currentPiece = rotatedPiece;

    if (checkCollision()) {
      currentPiece = prevPiece; // Revert rotation if it causes a collision
    }
  }

  function movePiece(dir) {
    currentPieceX += dir;
    if (checkCollision()) {
      currentPieceX -= dir; // Revert move if it causes a collision
    }
  }

  function dropPiece() {
    currentPieceY++;
    if (checkCollision()) {
      currentPieceY--; // Revert drop if it causes a collision
      mergePiece();
      spawnPiece();
    }
  }

  function spawnPiece() {
    const pieces = [
      [[1, 1, 1, 1]], // I
      [
        [1, 1, 1],
        [1, 0, 0],
      ], // L
      [
        [1, 1, 1],
        [0, 0, 1],
      ], // J
      [
        [1, 1, 1],
        [0, 1, 0],
      ], // T
      [
        [1, 1],
        [1, 1],
      ], // O
      [
        [1, 1, 1],
        [0, 1, 1],
      ], // S
      [
        [1, 1, 1],
        [1, 1, 0],
      ], // Z
    ];

    currentPiece = pieces[Math.floor(Math.random() * pieces.length)];
    currentPieceX = Math.floor((COLUMNS - currentPiece[0].length) / 2);
    currentPieceY = 0;

    if (checkCollision()) {
      clearInterval(intervalId);
      alert("Game Over!");
    }
  }

  function clearRows() {
    for (let row = ROWS - 1; row >= 0; row--) {
      if (board[row].every((cell) => cell !== 0)) {
        board.splice(row, 1);
        board.unshift(Array(COLUMNS).fill(0));
      }
    }
  }

  function update() {
    drawBoard();
    drawPiece();
    dropPiece();
    clearRows();
  }

  function startGame() {
    intervalId = setInterval(update, 500);
    spawnPiece();
  }

  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowUp":
        rotatePiece();
        break;
      case "ArrowRight":
        movePiece(1);
        break;
      case "ArrowLeft":
        movePiece(-1);
        break;
      case "ArrowDown":
        dropPiece();
        break;
    }
  });

  startGame();
});
