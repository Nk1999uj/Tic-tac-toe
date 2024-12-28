let board = ['', '', '', '', '', '', '', '', '']; // Game board state
let currentPlayer = 'X'; // Starting player
let gameActive = true; // Track if the game is still ongoing

// Function to make a move
function makeMove(index) {
  if (board[index] === '' && gameActive) {
    board[index] = currentPlayer; // Mark the move
    document.querySelectorAll('.cell')[index].textContent = currentPlayer; // Update UI

    // Check for a winner
    if (checkWinner()) {
      document.getElementById('message').textContent = `${currentPlayer} Wins!`;
      gameActive = false;
    } else if (board.every(cell => cell !== '')) {
      document.getElementById('message').textContent = "It's a Draw!";
      gameActive = false;
    } else {
      // Change turn
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

// Function to check for a winner
function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
    [0, 4, 8], [2, 4, 6]             // Diagonal
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

// Function to reset the game
function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  document.getElementById('message').textContent = '';
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.textContent = ''); // Clear the cells
}
