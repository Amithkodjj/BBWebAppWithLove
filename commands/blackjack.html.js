/*CMD
  command: blackjack.html
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
    <title>Blackjack</title>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            text-align: center;
            background: linear-gradient(to right, #141e30, #243b55);
            color: white;
            margin: 0;
            padding: 0;
        }
        .game-container {
            max-width: 500px;
            margin: auto;
            padding: 20px;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 15px;
            box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.3);
        }
        .cards {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin: 15px 0;
        }
        .card {
            font-size: 50px;
            margin: 5px;
            transition: transform 0.3s ease-in-out;
        }
        .buttons {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
        }
        button {
            padding: 12px 20px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            border: none;
            border-radius: 8px;
            transition: 0.3s ease-in-out;
        }
        .hit { background: #f39c12; color: white; }
        .stand { background: #2ecc71; color: white; }
        button:hover { transform: scale(1.1); }
        #result {
            font-size: 22px;
            font-weight: bold;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <h1>🃏 Blackjack</h1>
    <p>Try to beat the dealer! Get as close to 21 as possible.</p>
    <div class="game-container">
        <h2>🎩 Dealer</h2>
        <div class="cards" id="dealerCards">❓</div>
        <h3>Dealer Score: <span id="dealerScore">0</span></h3>
        <h2>👤 Your Cards</h2>
        <div class="cards" id="playerCards"></div>
        <h3>Your Score: <span id="playerScore">0</span></h3>
        <div class="buttons">
            <button class="hit" onclick="hit()">Hit 🃏</button>
            <button class="stand" onclick="stand()">Stand ✋</button>
        </div>
        <h2 id="result"></h2>
    </div>
    <script>
        const cardEmojis = ["🂡", "🂢", "🂣", "🂤", "🂥", "🂦", "🂧", "🂨", "🂩", "🂪", "🂫", "🂭", "🂮"];
        let playerCards = [], dealerCards = [], playerScore = 0, dealerScore = 0, gameOver = false;

        function getRandomCard() {
            let value = Math.floor(Math.random() * 13) + 1;
            return { emoji: cardEmojis[value - 1], points: value > 10 ? 10 : value };
        }

        function updateGame() {
            document.getElementById("playerCards").innerHTML = playerCards.map(card => `<span class='card'>${card.emoji}</span>`).join("");
            document.getElementById("dealerCards").innerHTML = dealerCards.map(card => `<span class='card'>${card.emoji}</span>`).join("");
            document.getElementById("playerScore").textContent = playerScore;
            document.getElementById("dealerScore").textContent = gameOver ? dealerScore : "❓";
        }

        function hit() {
            if (gameOver) return;
            let card = getRandomCard();
            playerCards.push(card);
            playerScore += card.points;
            if (playerScore > 21) {
                document.getElementById("result").textContent = "💥 You busted! Dealer wins!";
                endGame();
            }
            updateGame();
        }

        function stand() {
            if (gameOver) return;
            while (dealerScore < 17) {
                let card = getRandomCard();
                dealerCards.push(card);
                dealerScore += card.points;
            }
            if (dealerScore > 21) {
                document.getElementById("result").textContent = "🎉 Dealer busted! You win!";
            } else if (playerScore > dealerScore) {
                document.getElementById("result").textContent = "🎉 You win!";
            } else if (playerScore === dealerScore) {
                document.getElementById("result").textContent = "🤝 It's a tie!";
            } else {
                document.getElementById("result").textContent = "😞 Dealer wins!";
            }
            endGame();
        }

        function endGame() {
            gameOver = true;
            updateGame();
            setTimeout(restartGame, 3000);
        }

        function restartGame() {
            playerCards = [getRandomCard(), getRandomCard()];
            dealerCards = [getRandomCard()];
            playerScore = playerCards.reduce((a, b) => a + b.points, 0);
            dealerScore = dealerCards.reduce((a, b) => a + b.points, 0);
            gameOver = false;
            document.getElementById("result").textContent = "";
            updateGame();
        }

        restartGame();
    </script>
</body>
</html>

