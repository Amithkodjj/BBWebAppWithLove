/*CMD
  command: TicTacToe.html
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe - AI Mode</title>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            text-align: center;
            background: #0f0f0f;
            color: white;
            margin: 0;
            padding: 0;
        }
        h1 {
            font-size: 2.5em;
            margin-top: 20px;
            text-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
        }
        .game-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 30px;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(3, 120px);
            gap: 15px;
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
        }
        .cell {
            width: 120px;
            height: 120px;
            font-size: 2.5em;
            background: #1b1b1b;
            border-radius: 15px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease-in-out;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }
        .cell:hover {
            background: #252525;
            transform: scale(1.1);
        }
        .winner {
            background: #ffcc00 !important;
            box-shadow: 0 0 15px #ffcc00 !important;
        }
        .message {
            font-size: 1.5em;
            margin-top: 15px;
            font-weight: bold;
            text-shadow: 0 0 15px rgba(255, 0, 255, 0.7);
        }
        @keyframes glow {
            0% { text-shadow: 0 0 10px #ffcc00; }
            50% { text-shadow: 0 0 20px #ff00ff; }
            100% { text-shadow: 0 0 10px #ffcc00; }
        }
        .win-glow {
            animation: glow 1s infinite alternate;
        }
    </style>
</head>
<body>
    <h1>⭕ Tic Tac Toe ❌</h1>
    <p>Try to beat the AI!</p>
    <div class="game-container">
        <div class="grid" id="grid"></div>
        <p class="message" id="message">Player X's turn</p>
    </div>
    <script>
        let board = Array(9).fill(null);
        let currentPlayer = 'X';
        let gameActive = true;
        const gridElement = document.getElementById('grid');
        const messageElement = document.getElementById('message');

        function initGame() {
            board.fill(null);
            gameActive = true;
            currentPlayer = 'X';
            messageElement.textContent = "Player X's turn";
            messageElement.classList.remove('win-glow');
            gridElement.innerHTML = '';
            for (let i = 0; i < 9; i++) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.index = i;
                cell.onclick = () => makeMove(cell);
                gridElement.appendChild(cell);
            }
        }

        function makeMove(cell) {
            let index = parseInt(cell.dataset.index);
            if (board[index] || !gameActive) return;
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            cell.style.color = currentPlayer === 'X' ? '#ff4d4d' : '#2ecc71';

            if (checkWin()) {
                messageElement.innerHTML = `🎉 Player ${currentPlayer} wins!`;
                messageElement.classList.add('win-glow');
                highlightWinningCells();
                gameActive = false;
                setTimeout(initGame, 2000);
                return;
            }
            if (!board.includes(null)) {
                messageElement.innerHTML = "😲 It's a draw!";
                gameActive = false;
                setTimeout(initGame, 2000);
                return;
            }
            currentPlayer = 'O';
            messageElement.textContent = "AI is thinking...";
            setTimeout(aiMove, 500);
        }

        function aiMove() {
            if (!gameActive) return;
            let bestMove = getBestMove();
            board[bestMove] = 'O';
            let cell = document.querySelector(`[data-index='${bestMove}']`);
            cell.textContent = 'O';
            cell.style.color = '#2ecc71';

            if (checkWin()) {
                messageElement.innerHTML = `🤖 AI wins!`;
                messageElement.classList.add('win-glow');
                highlightWinningCells();
                gameActive = false;
                setTimeout(initGame, 2000);
                return;
            }
            currentPlayer = 'X';
            messageElement.textContent = "Player X's turn";
        }

        function checkWin() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];
            return winPatterns.some(pattern => {
                const [a, b, c] = pattern;
                return board[a] && board[a] === board[b] && board[a] === board[c];
            });
        }

        function highlightWinningCells() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];
            winPatterns.forEach(pattern => {
                const [a, b, c] = pattern;
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    document.querySelector(`[data-index='${a}']`).classList.add('winner');
                    document.querySelector(`[data-index='${b}']`).classList.add('winner');
                    document.querySelector(`[data-index='${c}']`).classList.add('winner');
                }
            });
        }

        function getBestMove() {
            let emptyCells = board.map((v, i) => v === null ? i : null).filter(v => v !== null);
            for (let i of emptyCells) {
                board[i] = 'O';
                if (checkWin()) return i;
                board[i] = null;
            }
            for (let i of emptyCells) {
                board[i] = 'X';
                if (checkWin()) {
                    board[i] = null;
                    return i;
                }
                board[i] = null;
            }
            return emptyCells[Math.floor(Math.random() * emptyCells.length)];
        }

        initGame();
    </script>
</body>
</html>

