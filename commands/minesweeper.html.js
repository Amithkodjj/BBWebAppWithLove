/*CMD
  command: minesweeper.html
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
    <title>Minesweeper</title>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            text-align: center;
            background: linear-gradient(135deg, #1a1a2e, #0f3460);
            color: white;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            overflow: hidden;
        }
        h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.2);
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(5, 70px);
            grid-gap: 10px;
            padding: 20px;
            background: rgba(22, 33, 62, 0.8);
            border-radius: 20px;
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);
        }
        .cell {
            width: 70px;
            height: 70px;
            font-size: 2em;
            background: linear-gradient(145deg, #0f3460, #16213e);
            border-radius: 15px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
        }
        .cell:hover {
            background: #533483;
            transform: scale(1.1);
        }
        .mine {
            background: red !important;
            box-shadow: 0px 0px 15px red;
        }
        .safe {
            background: #22c55e !important;
            box-shadow: 0px 0px 15px #22c55e;
        }
        .reset-button {
            background: linear-gradient(145deg, #f4a261, #e76f51);
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 1.4em;
            font-weight: bold;
            cursor: pointer;
            border-radius: 20px;
            transition: all 0.3s ease;
            margin-top: 20px;
            box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);
        }
        .reset-button:hover {
            background: #e76f51;
            transform: scale(1.1);
        }
        .message {
            font-size: 1.8em;
            font-weight: bold;
            margin-top: 15px;
            text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.3);
        }
        /* Confetti Effect */
        .confetti {
            position: fixed;
            width: 10px;
            height: 10px;
            background-color: gold;
            opacity: 0.7;
            border-radius: 50%;
            animation: confetti-fall linear infinite;
        }
        @keyframes confetti-fall {
            0% { transform: translateY(0px) rotate(0deg); }
            100% { transform: translateY(100vh) rotate(360deg); }
        }
    </style>
</head>
<body>
    <h1>💣 Minesweeper</h1>
    <div class="grid" id="grid"></div>
    <p class="message" id="message"></p>
    <button class="reset-button" onclick="initGame()">🔄 Restart</button>

    <script>
        const gridSize = 5;
        let grid = [];
        let bombIndex = -1;
        let gameOver = false;
        let safeClicks = 0;
        const totalCells = gridSize * gridSize;

        function initGame() {
            gameOver = false;
            safeClicks = 0;
            document.getElementById('message').textContent = "";
            const gridElement = document.getElementById('grid');
            gridElement.innerHTML = '';
            removeConfetti();
            grid = [];
            bombIndex = Math.floor(Math.random() * totalCells);

            for (let i = 0; i < totalCells; i++) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.index = i;
                cell.onclick = () => revealCell(cell);
                gridElement.appendChild(cell);
                grid.push(cell);
            }
        }

        function revealCell(cell) {
            if (gameOver) return;

            let index = parseInt(cell.dataset.index);
            if (index === bombIndex) {
                gameOver = true;
                cell.classList.add('mine');
                cell.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/564/564619.png" width="40">';
                document.getElementById('message').textContent = '💀 Boom! Game Over!';
                setTimeout(initGame, 2000);
            } else {
                if (!cell.classList.contains('safe')) {
                    cell.classList.add('safe');
                    cell.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" width="40">';
                    safeClicks++;

                    if (safeClicks === totalCells - 1) {
                        showWinMessage();
                    }
                }
            }
        }

        function showWinMessage() {
            gameOver = true;
            document.getElementById('message').innerHTML = '🎉 Congratulations! You Win! 🎉';
            document.getElementById('message').style.color = '#FFD700';
            createConfetti();
            setTimeout(initGame, 3000); // Auto-restart after 3 seconds
        }

        function createConfetti() {
            for (let i = 0; i < 50; i++) {
                let confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = `${Math.random() * 100}vw`;
                confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
                confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
                document.body.appendChild(confetti);
            }
            setTimeout(removeConfetti, 3000);
        }

        function removeConfetti() {
            document.querySelectorAll('.confetti').forEach(confetti => confetti.remove());
        }

        initGame();
    </script>
</body>
</html>

