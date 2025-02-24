/*CMD
  command: calculator.html
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
    <title>Ultimate Calculator</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

        body {
            font-family: 'Poppins', sans-serif;
            background: radial-gradient(circle, #0c0c0c, #1a1a1a);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            overflow: hidden;
        }

        .calculator {
            background: rgba(34, 34, 34, 0.9);
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 4px 20px rgba(0, 255, 255, 0.3);
            text-align: center;
            width: 340px;
            backdrop-filter: blur(10px);
            position: relative;
        }

        .display {
            width: 100%;
            height: 80px;
            background: rgba(51, 51, 51, 0.8);
            color: #ffdd57;
            font-size: 2em;
            text-align: right;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 15px;
            overflow-x: auto;
            box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.1);
        }

        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        button {
            width: 75px;
            height: 75px;
            font-size: 1.5em;
            font-weight: bold;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            background: #444;
            color: #fff;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.1);
            position: relative;
            overflow: hidden;
            transition: 0.3s;
        }

        button:hover {
            background: #555;
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }

        .operator {
            background: #ff5733;
        }

        .operator:hover {
            background: #ff6b47;
        }

        .equal {
            background: #2ecc71;
            grid-column: span 2;
        }

        .equal:hover {
            background: #27ae60;
        }

        .clear, .delete {
            background: #e74c3c;
        }

        .clear:hover, .delete:hover {
            background: #c0392b;
        }

        .extra {
            background: #8e44ad;
        }

        .extra:hover {
            background: #732d91;
        }

        /* Falling Dust Effect */
        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            pointer-events: none;
            animation: fall 1s linear;
        }

        @keyframes fall {
            0% { transform: translateY(0) scale(1); opacity: 1; }
            100% { transform: translateY(30px) scale(0.5); opacity: 0; }
        }
    </style>
</head>
<body>
    <div class="calculator">
        <div class="display" id="display">0</div>
        <div class="buttons">
            <button class="clear" onclick="clearDisplay()">C</button>
            <button class="delete" onclick="deleteLast()">⌫</button>
            <button onclick="appendToDisplay('%')" class="operator">%</button>
            <button onclick="appendToDisplay('/')" class="operator">÷</button>
            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button onclick="appendToDisplay('*')" class="operator">×</button>
            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button onclick="appendToDisplay('-')" class="operator">−</button>
            <button onclick="appendToDisplay('1')">1</button>
            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>
            <button onclick="appendToDisplay('+')" class="operator">+</button>
            <button onclick="appendToDisplay('0')">0</button>
            <button onclick="appendToDisplay('.')">.</button>
            <button onclick="calculateResult()" class="equal">=</button>
            <button onclick="square()" class="extra">x²</button>
            <button onclick="sqrt()" class="extra">√x</button>
            <button onclick="appendToDisplay('Math.sin(')" class="extra">sin</button>
            <button onclick="appendToDisplay('Math.cos(')" class="extra">cos</button>
            <button onclick="appendToDisplay('Math.tan(')" class="extra">tan</button>
        </div>
    </div>

    <script>
        let display = document.getElementById('display');

        function appendToDisplay(value) {
            if (display.textContent === '0') display.textContent = '';
            display.textContent += value;
            createDustEffect(event);
        }

        function clearDisplay() {
            display.textContent = '0';
        }

        function deleteLast() {
            display.textContent = display.textContent.slice(0, -1);
            if (display.textContent === '') display.textContent = '0';
        }

        function calculateResult() {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = 'Error';
            }
        }

        function square() {
            try {
                display.textContent = Math.pow(eval(display.textContent), 2);
            } catch {
                display.textContent = 'Error';
            }
        }

        function sqrt() {
            try {
                display.textContent = Math.sqrt(eval(display.textContent));
            } catch {
                display.textContent = 'Error';
            }
        }

        function createDustEffect(event) {
            for (let i = 0; i < 10; i++) {
                let particle = document.createElement('div');
                particle.classList.add('particle');
                document.body.appendChild(particle);

                let x = event.clientX + (Math.random() - 0.5) * 40;
                let y = event.clientY + (Math.random() - 0.5) * 40;
                
                particle.style.left = `${x}px`;
                particle.style.top = `${y}px`;

                setTimeout(() => {
                    particle.remove();
                }, 1000);
            }
        }
    </script>
</body>
</html>

