/*CMD
  command: secret.html
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
    <title>Celebration - Bots.Business</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

        body {
            font-family: 'Poppins', sans-serif;
            background: radial-gradient(circle, #0c0c0c, #1a1a1a);
            color: white;
            text-align: center;
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            position: relative;
            flex-direction: column;
        }

        .container {
            background: rgba(34, 34, 34, 0.9);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 4px 20px rgba(0, 255, 255, 0.3);
            backdrop-filter: blur(10px);
            max-width: 700px;
            position: relative;
            z-index: 10;
        }

        .logo {
            width: 150px;
            animation: glow 2s infinite alternate;
        }

        h1 {
            font-size: 2.5em;
            background: linear-gradient(90deg, #ffdd57, #ff5733);
            -webkit-background-clip: text;
            color: transparent;
            animation: glowText 1.5s infinite alternate;
        }

        p {
            font-size: 1.2em;
            color: #ddd;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 1s forwards;
        }

        .presentation {
            margin-top: 20px;
            text-align: center;
            font-size: 1.2em;
            line-height: 1.8;
            color: #f0f0f0;
            max-width: 700px;
        }

        .celebrate {
            background: #ff5733;
            padding: 15px 30px;
            border-radius: 10px;
            color: white;
            font-size: 1.5em;
            cursor: pointer;
            transition: 0.3s;
            border: none;
            box-shadow: 0 0 15px rgba(255, 87, 51, 0.8);
        }

        .celebrate:hover {
            background: #ff6b47;
            box-shadow: 0 0 25px rgba(255, 87, 51, 1);
        }

        /* Fireworks Animation */
        .firework {
            position: absolute;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, #ff0, transparent);
            border-radius: 50%;
            animation: firework 1.5s linear infinite;
        }

        @keyframes glow {
            from { filter: drop-shadow(0 0 5px #ffdd57); }
            to { filter: drop-shadow(0 0 15px #ff5733); }
        }

        @keyframes glowText {
            from { text-shadow: 0 0 10px rgba(255, 255, 255, 0.5); }
            to { text-shadow: 0 0 20px rgba(255, 255, 255, 1); }
        }

        @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes firework {
            0% { transform: scale(0.5) translateY(0); opacity: 1; }
            100% { transform: scale(3) translateY(-100px); opacity: 0; }
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="https://bots.business/images/logo.png" alt="Bots.Business Logo" class="logo">
        <h1>Congratulations, Bots.Business!</h1>
        <p>Your innovation is transforming automation & AI!</p>
        <button class="celebrate" onclick="startCelebration()">Celebrate 🎉</button>
    </div>

    <div class="presentation">
        <p style="animation-delay: 0.5s;">🚀 <b>Bots.Business</b> is The King Of BJS (BOT JAVASCRIPT) tgbot making !</p>
        <p style="animation-delay: 1s;">🤖 anyone for business, entertainment, or personal use, anyone can create smart, efficient bots effortlessly.</p>
        <p style="animation-delay: 1.5s;">🌍 Mking wishes of thousands worldwide bring their dream bots to life with ease & innovation.</p>
        <p style="animation-delay: 2s;">🎉 A big thanks you to Bots.Busines @BotsBusinessAdmin for making automation accessible, fun, and limitless!</p>
        <p style="animation-delay: 2.5s;">Made with Love By @JewSucker ❤️!</p>
    </div>

    <script>
        function startCelebration() {
            for (let i = 0; i < 50; i++) {
                let firework = document.createElement('div');
                firework.classList.add('firework');
                document.body.appendChild(firework);

                let x = Math.random() * window.innerWidth;
                let y = Math.random() * window.innerHeight;
                
                firework.style.left = `${x}px`;
                firework.style.top = `${y}px`;

                setTimeout(() => {
                    firework.remove();
                }, 1500);
            }
        }
    </script>
</body>
</html>

