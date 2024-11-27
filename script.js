// script.js
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let gameState = Array(9).fill('');
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

function handleCellClick(e) {
    const index = e.target.getAttribute('data-index');
    if (gameState[index] === '' && !checkWin()) {
        gameState[index] = currentPlayer;
        e.target.textContent = currentPlayer;
        if (checkWin()) {
            setTimeout(() => alert(`${currentPlayer} Wins!`), 10);
        } else if (!gameState.includes('')) {
            setTimeout(() => alert('It\'s a Draw!'), 10);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => gameState[index] === currentPlayer);
    });
}

function resetGame() {
    gameState.fill('');
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}
